/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS'" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 */

'use strict'

const http = require('http');
const AWS = require('aws-sdk');
const fetch = require ("node-fetch");

// config
const create_cfg = require('./config');
const cfg = create_cfg.create_config('./config.yaml');

// tracer
const api = require('@opentelemetry/api'); 
const tracer = api.trace.getTracer('js-sample-app-tracer'); 
const common_span_attributes = { signal: 'trace', language: 'javascript' };

// request metrics 
const { updateTotalBytesSent, updateLatencyTime, updateApiRequestsMetric } = require('./request-metrics');

// start server for request metrics and traces
function startServer() {
    const server = http.createServer(handleRequest);
    server.listen(cfg.Port, cfg.Host, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Node HTTP listening on ${cfg.Host}:${cfg.Port}`);
    });
}

async function handleRequest(req, res) {
    const requestStartTime = new Date().getMilliseconds();
    const routeMapper = {
        '/user': (req, res) => {
            res.end('OK.');
        },        
        '/user/users': getUsers        
    }
    try {
        const handler = routeMapper[req.url]
        if (handler) {
            await handler (req, res);
            updateMetrics(res, req.url, requestStartTime);
        };
    } 
    catch (err) {
        console.log(err);
    }   
}

async function getUsers (req, res) {
    await sleep(2000)

    const traceid = await instrumentRequest('getUsers', () => { 
        httpCall('http://bighead-alb-88731588.ap-northeast-2.elb.amazonaws.com/course/courses')        
        // httpCall('http://localhost:8081/course/courses')
    });
    res.end(traceid);
}

function updateMetrics (res, apiName, requestStartTime) {
    updateTotalBytesSent(res._contentLength + mimicPayLoadSize(), apiName, res.statusCode);
    updateLatencyTime(new Date().getMilliseconds() - requestStartTime, apiName, res.statusCode);
    updateApiRequestsMetric();
}

function getTraceIdJson() {
    const otelTraceId = api.trace.getSpan(api.context.active()).spanContext().traceId;
    const timestamp = otelTraceId.substring(0, 8);
    const randomNumber = otelTraceId.substring(8);
    const xrayTraceId = "1-" + timestamp + "-" + randomNumber;
    return JSON.stringify({ "traceId": xrayTraceId });
  }

function mimicPayLoadSize() {
    return Math.random() * 1000;
}

async function httpCall(url) {
    try {
        const response = await fetch(url); 
        console.log(`made a request to ${url}`);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
    } catch (err) {
        throw new Error(`Error while fetching the ${url}`, err);
    }
}

async function instrumentRequest(spanName, _callback) {
    const span = tracer.startSpan(spanName, {
        attributes: common_span_attributes
    });
    const ctx = api.trace.setSpan(api.context.active(), span);
    let traceid;
    await api.context.with(ctx, async () => {
        console.log(`Responding to ${spanName}`);
        await _callback(); 
        traceid = getTraceIdJson();
        span.end();
    });
    return traceid;
}

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

module.exports = {startServer};