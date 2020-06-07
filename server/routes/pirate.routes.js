const PiratesCtl = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PiratesCtl.index);
    app.post('/api/pirates', PiratesCtl.createPirate);
    app.get('/api/pirates', PiratesCtl.getAll);
    app.get('/api/pirates/:id', PiratesCtl.getOne);
    app.delete('/api/pirates/:id', PiratesCtl.delete);
    app.put('/api/pirates/:id', PiratesCtl.update);
}