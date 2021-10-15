pipeline{
        agent any
        stages{
            stage('Ensure permissions'){
                steps{
                    sh "chmod +x -R ${env.WORKSPACE}"
                }
            }
            stage('run dockerBuild'){
                steps{
                    sh "./buildScripts/dockerBuild.sh"
                }
            }
            stage('run dockerRun'){
                steps{
                    sh "./buildScripts/dockerBuild.sh"
                }
            }
            
        }
}