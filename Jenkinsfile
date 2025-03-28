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
                git branch: 'main', url: 'https://github.com/PritamChaudhari23/jenkins-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Assuming it's a Node.js app, install dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the app (for a React app, for example)
                    bat 'npm run build'
                }
            }
        }

     stage('Deploy to Netlify') {
        steps {
            script {
                // Set the environment variable for the Netlify access token
                bat 'set NETLIFY_AUTH_TOKEN=%NETLIFY_ACCESS_TOKEN%'


                  // Debugging step to check the token (only for testing, do not log this in production)
            bat 'echo %NETLIFY_AUTH_TOKEN%'
            
            // Verify authentication by checking the currently logged-in user
            bat 'netlify status'

                // Deploy to Netlify (using the site ID)
                bat 'netlify deploy --prod --dir=./build --site %NETLIFY_SITE_ID%'
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
