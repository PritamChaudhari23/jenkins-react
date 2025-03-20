pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '1e6dc70a-c410-4284-adb3-7fe467f20c75' // Add your Netlify Site ID
        NETLIFY_ACCESS_TOKEN = credentials('NETLIFY_ACCESS_TOKEN') // Reference the credential you created
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub (or any source you are using)
                git 'https://github.com/PritamChaudhari23/jenkins-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Assuming it's a Node.js app, install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the app (for a React app, for example)
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Authenticate with Netlify using the access token
                    sh 'netlify login --token $NETLIFY_ACCESS_TOKEN'
                    
                    // Deploy to Netlify (using the site ID)
                    sh 'netlify deploy --prod --dir=./build --site $NETLIFY_SITE_ID'
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
