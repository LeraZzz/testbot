import TelegramBot from 'node-telegram-bot-api'


let tg

function create() {
    const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s" //zzz_bot

    tg = new TelegramBot(token, {
        polling: true
    })
    tg.on('message', onMessage)


}


function onMessage(message) {

    console.log('message:', message)


    if (message.text && message.text.toLowerCase() === 'хуй') {
        tg.sendMessage(message.chat.id, '<b>Ты</b> ', {
            parse_mode: 'HTML'
        })
        return
    }

    else if (message.text && message.text.toLowerCase() === '/start') {
        tg.sendMessage(message.chat.id, '<b>It works!</b> ', {
            parse_mode: 'HTML'
        })
        return
    }

}

create()