import path from 'node:path'
import url from 'node:url'
// get browser version from environment variable
const browserVersion = process.env.BROWSER_VERSION || 'canary'

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
        browserVersion: browserVersion,
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

    logLevel: 'error',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async ({ browserName }: WebdriverIO.Capabilities, _specs, browser: WebdriverIO.Browser) => {
        console.log(`Running tests in ${browserName} version ${browser.capabilities.browserVersion}`)
    },
}
