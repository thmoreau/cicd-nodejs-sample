pipeline {
  agent {
    docker {
      image 'node'
      label 'NodeJS'
      args ''
    }
  }

  stages {
    stage('Install') {
      steps {
        sh '''cd src
node -v
npm -v
npm install
'''
      }
    }
    stage('Check source code') {
      steps {
        sh '''cd src
npm run eslint:ci
'''
        checkstyle(pattern: 'src/reports/eslint/**/*.xml')
      }
    }
    stage('Test') {
      steps {
        sh '''cd src
npm run test:ci
'''
        junit 'src/reports/test/unit/*.xml'
      }
    }
    stage('Cleanup'){
      steps {
        echo 'prune and cleanup'
        sh '''cd src
npm prune
rm node_modules -rf
'''
        // sh 'git clean -fdx'
        // send a mail for success
      }
    }
  }
}