pipeline {
  // Docker agent seems to be broken on windows because of absolute paths and Windows/MinGW32 path conversion
  agent any

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