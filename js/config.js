// Load environment variables from .env file
require('dotenv').config();

window._config = {
    cognito: {
        userPoolId: 'eu-north-1_ZS8ShuBVW', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '5q9vvbhm17mq2uejtn4v4u2c2j', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        userPoolClientSecret: process.env.COGNITO_CLIENT_SECRET,
        region: 'eu-north-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
