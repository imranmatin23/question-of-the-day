# CI/CD Pipeline

The CI/CD pipeline was created using `GitHub Actions`.

## Frontend

The frontend CI/CD is defined in `.github/workflows/deploy_frontend.yml`. Using the latest commit, 1/ GitHub Actions will kick off an Amplify Job and 2/ Amplify will then execute the build, test, and deploy phases according to the `build_spec` defined in `infra/frontend/amplify.ts`.

A deployment to `prod` can also be started using the `make deploy-frontend` command (although this will use the latest commit in `origin/main` by default).

## Backend

TODO

## References

[1] TODO
