const db = require('../model');

module.exports = (app) => {
    app.get('/api/collection', (req, res) => {
        const { query } = req;
        
        db.User.findOne({_id: query.id}).then((e, data) => {
            if(e) throw e;
            res.json(data.cardCollection);
        })
    })
    app.post('/api/card/add', (req, res) => {
        const { body } = req

        db.User.findByIdAndUpdate({id: body.id}, {$push: {'collection.cards': body.card}}).then((e, data) => {
            if(e) {
                res.json({
                success: false,
                message: 'Error adding card'
                })
            } else {
                res.json({
                    success: true,
                    message: `Card Added, data: ${data}`
                })
            }

        })
    })
    app.post('/secret/user', (req, res) => {
        const { body } = req

        db.User.create({body}).then((e, data) => {
            res.json(data);
        })
    })
}