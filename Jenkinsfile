pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Athul-mj/mariner-web-deploy.git', branch: 'main'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          def image = "mariner-web:${env.BUILD_NUMBER}"
          bat "docker build -t ${image} ."
        }
      }
    }

    stage('Remove Old Container') {
      steps {
        bat "docker rm -f mariner-web || exit 0"
      }
    }

    stage('Run New Container') {
      steps {
        script {
          def image = "mariner-web:${env.BUILD_NUMBER}"
          bat "docker run -d --name mariner-web -p 9090:80 ${image}"
        }
      }
    }
  }
}