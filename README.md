# 자산 관리 시스템 
## Architecture
![Final_project drawio](https://github.com/cs-devops-bootcamp/devops-04-Final-Team9/assets/86557754/00afe77e-d1a1-4542-9b5b-8b5840b82786)

## Observability, Monitoring
![image](https://github.com/cs-devops-bootcamp/devops-04-Final-Team9/assets/126463472/7498e4ee-ef46-4c3c-8321-5a044d3caaea)

## Environment
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/><img src="https://img.shields.io/badge/GithubActions-2088FF?style=for-the-badge&logo=GithubActions&logoColor=white"/><img src="https://img.shields.io/badge/AmazonAWS-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white"/><img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"/><img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white"/><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=Gmail&logoColor=white"/><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=Terraform&logoColor=white"/><img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=Windows&logoColor=white"/><img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white"/>



[![Amazon S3](https://img.shields.io/badge/Amazon%20S3-Cloud%20Storage-orange?style=flat-square&logo=amazon-s3)](https://aws.amazon.com/s3/)
[![Amazon RDS](https://img.shields.io/badge/Amazon%20RDS-Managed%20Database-orange?style=flat-square&logo=amazon-rds)](https://aws.amazon.com/rds/)
[![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-Serverless-orange?style=flat-square&logo=amazon-lambda)](https://aws.amazon.com/lambda/)
[![AWS Fargate](https://img.shields.io/badge/AWS%20Fargate-Serverless%20Containers-orange?style=flat-square&logo=aws-fargate)](https://aws.amazon.com/fargate/)
[![Amazon ECS](https://img.shields.io/badge/Amazon%20ECS-Container%20Service-orange?style=flat-square&logo=amazon-ecs)](https://aws.amazon.com/ecs/)
[![AWS CloudWatch](https://img.shields.io/badge/AWS%20CloudWatch-Monitoring%20and%20Observability-orange?style=flat-square&logo=amazon-cloudwatch)](https://aws.amazon.com/cloudwatch/)
[![AWS WAF](https://img.shields.io/badge/AWS%20WAF-Web%20Application%20Firewall-orange?style=flat-square&logo=amazon-waf)](https://aws.amazon.com/waf/)
[![AWS Security Hub](https://img.shields.io/badge/AWS%20Security%20Hub-Security%20Monitoring-orange?style=flat-square&logo=amazon-security-hub)](https://aws.amazon.com/security-hub/)
[![AWS Inspector](https://img.shields.io/badge/AWS%20Inspector-Vulnerability%20Assessment-orange?style=flat-square&logo=amazon-inspector)](https://aws.amazon.com/inspector/)
[![AWS X-Ray](https://img.shields.io/badge/AWS%20X--Ray-Tracing%20%26%20Analytics-orange?style=flat-square&logo=amazon-xray)](https://aws.amazon.com/xray/)
[![AWS Config](https://img.shields.io/badge/AWS%20Config-Resource%20Compliance%20%26%20Audit-orange?style=flat-square&logo=amazon-config)](https://aws.amazon.com/config/)
[![AWS Systems Manager](https://img.shields.io/badge/AWS%20Systems%20Manager-Operational%20Data%20Collection-orange?style=flat-square&logo=amazon-systems-manager)](https://aws.amazon.com/systems-manager/)
[![AWS CloudTrail](https://img.shields.io/badge/AWS%20CloudTrail-Audit%20%26%20Compliance-orange?style=flat-square&logo=amazon-cloudtrail)](https://aws.amazon.com/cloudtrail/)
[![Amazon Route 53](https://img.shields.io/badge/Amazon%20Route%2053-DNS%20Management-orange?style=flat-square&logo=amazon-route53)](https://aws.amazon.com/route53/)
[![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-Observability-yellow?style=flat-square&logo=open-telemetry)](https://opentelemetry.io)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-yellow?style=flat-square&logo=prometheus)](https://prometheus.io)
[![AWS Resource Groups](https://img.shields.io/badge/AWS%20Resource%20Groups-Resource%20Organization-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/resource-groups/)



## Project Description
### User Story
✅ 자산 관리 시스템을 도입하게 된다면 이 시스템을 어떻게 운영 및 보안 계획을 수립할것인가
많은 기업들이 각종 시스템과 IT 자산을 효율적으로 관리할 필요성이 커지고 있으며 이를 효율적으로 관리하기 위한 최적의 관리방법으로 EAM(Enterprise Asset Management), ITAM(IT Asset Management) 등 여러가지 관리 시스템을 운용을 하고 있습니다.

하지만 미흡한 보안 정책 및 절차로 인한 피해사례가 있었으며 그에 따른 해결방안으로 아래의 기사를 참고하여 중요성을 알게 되었습니다.

> **“자산관리 플랫폼으로 공격자 침투 가능성 낮춰야”**
> 
> 국내 주요 기업과 기관을 공격했던 매스스캔 랜섬웨어는 취약점이 있는 노출된 DB 서버를 파괴하면서 피해조직의 서비스를 중단시켰다.
> ……
> 포괄적인 IT 자산 인벤토리는 만들고 유지 관리하기 어렵다. 인벤토리 구축을 위한 기존의 많은 방법은 시간이 많이 걸리고 단편적이며 최신 상태를 유지하기 어렵다.
> 따라서 공격 표면 영역을 정의할 때 데이터 수집 및 상관 관계를 자동화하고, 부담스러운 인력 리소스 투입을 최소화하며, 실시간 결과를 위해 지속적으로 실행할 수 있는 사이버 보안 자산 관리 플랫폼을 사용하고 있는지 확인할 수 있는 방안을 강구해야 한다.
> 출처 : 데이터넷 – 2023.02.03

따라서 프로젝트의 목표는 이렇게 됩니다.

1. 자산 분류 기준에 따라 수립된 정의 및 리소스에 적절한 Tag 설정
   - 자산이 많아질수록 관리의 복잡도를 완화하기 위해 각 리소스를 식별할 수 있어야 하며 그룹화 할 수 있어야 합니다.
2. 정보 자산 점검
   - MITRE 에서 제공하는 보안 기준인 CCE 및 CVE 취약점을 점검하고 위협을 제거 할 수 있어야 합니다.
3. 모니터링 및 알람
   - 리소스에서 Metric과 Log를 수집하고 시각화 할 수 있어야 합니다.
   - 수집한 데이터로 예기치 못한 상황의 알람과 매일 점검한후의 보고서를 확인 할 수 있어야 합니다.
4. 자동화
   - 단순 반복적인 작업은 자동화 할 수 있어야 하며 인프라 전반의 CI/CD 파이프라인이 구성되어야 합니다.

## How-To 가이드
### 📍 CI/CD 파이프라인
ECS에 배포되어 있는 WEB/WAS 컨테이너 소스를 깃허브를 통해 관리 및 CI/CD를 수행하기 위해 Github Actions를 사용합니다.
정보 자산 시스템 데모 시연을 위해 ALB, ECR, ECS fargate, RDS, S3를 사용합니다.

### 📍 자산 구분 시스템 프로세스
#### 자동 태깅
유저가 인스턴스를 생성하면 Cloud Tail 은 리소스 생성 API 이벤트를 로깅하고, CloudWatch 이벤트 규칙은 이벤트 생성 시 모니터링되고 트리거하기 위해 사용합니다. CloudWatch 이벤트 규칙은 적용 가능한 이벤트를 감지한 다음 Lambda 함수를 호출하여 리소스에 태그를 지정하고, Lambda는 Parameter Store에서 필요한 태그를 검색하고 새 리소스에 태그를 지정하기 위해 사용합니다.
#### 수동 태깅
유저가 생성한 인스턴스를 resource group으로 묶은 뒤 tag editor로 태그를 수정하기 위해 사용합니다.

### 📍 자산 점검 프로세스
#### CVE 및 CCE 점검
CVE 취약점은 AWS Inspector로, CCE 취약점은 AWS Config로 점검하며, 추가적으로 Guard Duty로 확인된 취약점은 Security hub로 전달됩니다. 
#### 보안 강화 프로세스
WAF, Guard Duty로 추가적인 보안을 강화합니다.

### 📍 알림
#### 실시간 취약성 점검 결과 알림 (실시간 발생 시) 
Security Hub에서 Event Bridge Rule을 통해 CloudWatch와 Lambda로 전달합니다. CloudWatch에서는 발견된 취약성에 대한 정보를, Lambda는 실시간으로 발견된 취약성에 대한 알람을 보내기 위해 사용합니다. Lambda는 SNS로 취약점에 대한 정보를 전달하며, SNS는 보안팀에게 e-mail로 취약점을 보고하고, slack 보고를 위한 lambda가 동작합니다. 추가적으로 System Manager의 자동화 기능으로 수정이 가능한 취약점은 자동으로 수정합니다.
#### 일별 점검 결과 리포트
일일 점검 결과는 AMP의 alerting rules로 정기적으로 실행되며 SNS로 전달된 후 lambda를 통해 가공합니다.  lambda에서는 전달된 성능 정보와 grafana enterprise의 리포트 API 기능을 통해  보안팀 및 DevOps 팀에 메일과 slack으로  전송합니다.

### 📍 시각화된 모니터링
#### Metrics & Traces 시각화
ADOT를 사용해 AMP, X-Ray에 수집된 Metrics&Traces를 Amazon Managed Grafana에서 쿼리하여 시각화합니다.
#### 취약점 로그 시각화
Security Hub에 통합된 취약점 로그를 CloudWatch로 전송하고, Amazon Managed Grafana에서 쿼리하여 시각화합니다.

### 📍 비용 관리 프로세스
예상 비용 초과시 Budget 서비스를 이용해 SNS로 전달하고 이메일 알림을 통해 Devops 및 구매팀으로 알림을 전달합니다.
