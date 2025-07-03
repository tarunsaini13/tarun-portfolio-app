pipeline {
    agent any

    environment {
        IMAGE_LABEL = "khatabook-f"
        IMAGE_NAME = "ghcr.io/binarywar/tarun-portfolio"
        IMAGE_TAG = "latest"
        CREDENTIAL_ID = "tarun-github-cred"
    }

    stages {
        stage('Code Checkout') {
            steps {
                git credentialsId: env.CREDENTIAL_ID,
                    url: 'https://github.com/tarunsaini13/tarun-portfolio-app',
                    branch: 'main'
            }
        }

        stage('Docker Image Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Registry Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: env.CREDENTIAL_ID, usernameVariable: 'USERNAME', passwordVariable: 'TOKEN')]) {
                    sh "echo $TOKEN | docker login ghcr.io -u $USERNAME --password-stdin"
                }
            }
        }

        stage('Push to Registry') {
            steps {
                sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        stage('Registry Logout') {
            steps {
                sh 'docker logout'
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Please check the logs."
        }
        always {
            echo "📦 Pipeline run has finished (success or fail)."
        }
    }
}