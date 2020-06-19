require("code-forensics").configure({
    repository: {
        rootPath: "../simple-android"
    },
    layerGroups: {
        'code-test': [
            { name: 'Code', paths: ['app/src/main/java'] },
            { name: 'JVM tests', paths: ['app/src/test/java'] },
            { name: 'Instrumented tests', paths: ['app/src/androidTest/java'] },
        ]
    }
})