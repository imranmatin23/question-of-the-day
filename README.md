# Question of the Day

[![Deploy Frontend Infrastructure](https://github.com/imranmatin23/question-of-the-day/actions/workflows/deploy_frontend_infra.yml/badge.svg)](https://github.com/imranmatin23/question-of-the-day/actions/workflows/deploy_frontend_infra.yml) [![Deploy Frontend](https://github.com/imranmatin23/question-of-the-day/actions/workflows/deploy_frontend.yml/badge.svg)](https://github.com/imranmatin23/question-of-the-day/actions/workflows/deploy_frontend.yml)

Question of the Day is a way for you and your friends to answer a unique question a day! You can access the frontend at https://qotd.imranmatin.com and the backend at https://api.qotd.imranmatin.com. For a demo of `Question of the Day` and a guide for how to use it, please see [PRODUCT_DEMO.md](PRODUCT_DEMO.md).

## High Level Architecture

This template was created with React (Frontend), Flask (Backend), DynamoDB (NoSQL Database), Docker (Containers), Terraform (IaC), AWS (3PC), and Github Actions (CI/CD).

![High Level Architecture](images/high-level-architecture.png)

<div style="text-align:center">
  <a href="https://lucid.app/lucidchart/5a757463-c7b5-4d6b-b4eb-70c748055654/edit?viewport_loc=-333%2C-111%2C1906%2C1021%2C0_0&invitationId=inv_39771eda-0235-4904-9bfd-5d9309e4dc12">High Level Architecture Diagram</a>
</div>

## Environments

The following environments are available for this app.

- `local`
- ~~`dev`~~
- ~~`alpha`~~
- ~~`beta`~~
- `prod`

## Frontend

The frontend was created using the `create-react-app` CLI. See [frontend/README.md](frontend/README.md) for further details about the fronted.

## Backend

TODO

## Infrastructure

The infrastructure was created using `docker`, `terraform` and `AWS`. See [infra/README.md](infra/README.md) for further details about the infrastructure.

## CI (Build/Test) / CD (Deploy) Pipeline

The CI/CD pipeline was created using `GitHub Actions`. See [.github/workflows/README.md](.github/workflows/README.md) for further details about the CI/CD pipeline.

## TODOs

### Next Steps

1. Implement Backend Infrastructure.
2. Implement Admin Page Authentication.
3. Implement Admin APIs to CRUDL QOTDs.
4. Implement Admin Page on Frontend.

### Frontend

1. Forge Blog App React Code --> Example of Question Page.

### Backend

1. https://github.com/serverless/examples/tree/v3/aws-python-http-api-with-pynamodb
2. https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/
