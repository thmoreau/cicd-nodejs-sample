pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'git clean -fdx'
        sh 'cd src'
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
    stage('Build') {
      steps {
        // TODO
      }
    }
    stage('Test') {
      steps {
        sh 'cd src'
        sh 'npm test'
        junit 'src/reports/test/unit/*.xml'
      }
    }
    stage('Deploy') {
      steps {
        // TODO
      }
    }
  }
}