pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'cd src'
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }
    stage('Check source code') {
      steps {
        sh 'cd src'
        sh 'npm run eslint'
        checkstyle(pattern: 'src/reports/eslint/**/*.xml')
      }
    }
    stage('Test') {
      steps {
        sh 'cd src'
        sh 'npm test'
        junit 'src/reports/test/unit/*.xml'
      }
    }
    stage('Cleanup'){
      steps {
        echo 'prune and cleanup'
        sh 'npm prune'
        // sh 'git clean -fdx'
        sh 'rm node_modules -rf'
        // send a mail for success
      }
    }
  }
}