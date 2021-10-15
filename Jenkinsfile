pipeline{
        agent any
        stages{
            stage('install node modules'){
                steps{
                    sh "npm install"
                    sh "npm install jest"
                }
            }
            stage('run tests'){
                steps{
                    sh "npm test"
                }
            }
            stage('build node app'){
                steps{
                    sh "npm build ."
                }
            } 
        }
}