pipeline {
    agent any

    environment {
        
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install node, git, npm in EC2
                }
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/PritamChaudhari23/jenkins-react.git'
            }
        }

        stage('Build react app') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {

                }
            }
        }

    }

    post {
        success {
            echo 'Deployment successful!'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}
