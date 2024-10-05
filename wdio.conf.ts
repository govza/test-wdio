import path from 'node:path'
import url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './test/specs/**/*.ts'
    ],

    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--disable-web-security',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                `--load-extension=${path.join(__dirname, 'extension',)}`,
            ],
            prefs: { 'extensions.ui.developer_mode': true },
        },
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
