pipeline {
    agent any

    // environment {
    //     DEV_SERVER = 'dev-ec2-ip'
    //     UAT_SERVER = 'uat-ec2-ip'
    //     PROD_SERVER = 'prod-ec2-ip'
    //     DEV_SSH_KEY = credentials('dev-ssh-key') 
    //     UAT_SSH_KEY = credentials('uat-ssh-key')    
    //     PROD_SSH_KEY = credentials('prod-ssh-key') 
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies and Build react app') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Dev') {
            when {
                branch 'dev'
            }
            steps {
                echo "Deploying to DEV server"
                // script {
                //     sh '''
                //     ssh -i ${DEV_SSH_KEY} ec2-user@${DEV_SERVER} << EOF
                //     cd /path/to/your/app && git pull origin dev && ./deploy.sh
                //     EOF
                //     '''
                // }
            }
        }

        stage('Deploy to UAT') {
            when {
                branch 'uat'
            }
            steps {
                echo "Deploying to UAT server"
                // script {
                //     sh '''
                //     ssh -i ${UAT_SSH_KEY} ec2-user@${UAT_SERVER} << EOF
                //     cd /path/to/your/app && git pull origin uat && ./deploy.sh
                //     EOF
                //     '''
                // }
            }
        }

        stage('Deploy to Prod') {
            when {
                branch 'prod'
            }
            steps {
                echo "Deploying to PROD server"
                // script {
                //     sh '''
                //     ssh -i ${PROD_SSH_KEY} ec2-user@${PROD_SERVER} << EOF
                //     cd /path/to/your/app && git pull origin prod && ./deploy.sh
                //     EOF
                //     '''
                // }
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
