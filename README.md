# Mariner Web Deploy

This repository powers automated deployment of the `browser/` folder to an Apache server using Jenkins.

## Jenkins Setup

- GitHub repo: `https://github.com/Athul-mj/mariner-web-deploy`
- Jenkins job: `mariner-web`
- Deployment path: `C:\Apache24\htdocs\`

## Webhook Trigger

Jenkins listens at: `http://<jenkins-host>/github-webhook/`

## Manual Deployment (Windows)

Use `scripts/deploy.bat` to deploy manually from the command line.

## Pipeline Script

See `Jenkinsfile` for automated deployment steps.
