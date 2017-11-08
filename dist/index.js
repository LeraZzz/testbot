'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tg = void 0;

function create() {
    var token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"; //zzz_bot

    tg = new _nodeTelegramBotApi2.default(token, {
        polling: true
    });
    tg.on('message', onMessage);
}

function onMessage(message) {

    console.log('message:', message);

    if (message.text && message.text.toLowerCase() === 'хуй') {
        tg.sendMessage(message.chat.id, '<b>Ты</b> ', {
            parse_mode: 'HTML'
        });
        return;
    } else if (message.text && message.text.toLowerCase() === '/start') {
        tg.sendMessage(message.chat.id, '<b>It works!</b> ', {
            parse_mode: 'HTML'
        });
        return;
    }
}

create();