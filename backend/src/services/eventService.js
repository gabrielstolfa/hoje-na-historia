const events = require('../eventsData')

function getEvent() {
     const today = new Date().getDate()
     const realMonth = new Date().getMonth()+1

    const eventToSend = events.find((e)=> {
            if(e.day === today && e.month === realMonth){
                return e
            }
        })

    return eventToSend
}

module.exports = getEvent