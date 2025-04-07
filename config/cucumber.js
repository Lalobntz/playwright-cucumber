module.exports ={
    default: {
        paths: [
            "src/test/features/different_login.feature"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/test/steps/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}
