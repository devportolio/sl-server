pipeline {
  agent {
    node {
      label 'mynode'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
  }
}