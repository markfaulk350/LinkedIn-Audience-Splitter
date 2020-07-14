const chalk     = require('chalk');
const axios     = require('axios');
const package   = require('./package.json');
const secrets   = require('./secrets.json');
const log       = console.log;


async function main() {

    // Oauth2 Http Request

    // let res = await axios.get('url', {
    //     headers: {
    //         'Authorization': 'Bearer ' + secrets.token
    //     }
    // })
    // console.log(res.data)
}











log(chalk.yellow('------------------------------------------------------------'));
log(chalk.green(package.name) + ' ' + chalk.blueBright(package.version));
log(chalk.yellow('------------------------------------------------------------'));

main();