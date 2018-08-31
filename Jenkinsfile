pipeline {
  agent any

  currentBuild.result = "SUCCESS"

  try {
    stages {
      state('Checkout') {
        checkout scm
      }
      stage('Install') {
        steps {
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
      // stage('Build') {
      //   steps {
      //     // TODO
      //   }
      // }
      stage('Test') {
        steps {
          sh 'cd src'
          sh 'npm test'
          junit 'src/reports/test/unit/*.xml'
        }
      }
      // stage('Deploy') {
      //   steps {
      //     // TODO
      //   }
      // }
      stage('Cleanup'){
        echo 'prune and cleanup'
        sh 'npm prune'
        // sh 'git clean -fdx'
        sh 'rm node_modules -rf'
        // send a mail for success
      }
    }
  } catch (err) {
    currentBuild.result = "FAILURE"
    // send a mail for failure
    throw err
  }
}