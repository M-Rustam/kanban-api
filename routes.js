

let cards = [
    {id: '1', name:'First Cards', status: 'todo', priority: 2},
    {id: '2', name:'Second Cards', status: 'progress', priority: 4},
    {id: '3', name:'Next Cards', status: 'response', priority: 10},
];

function routes(app) {


    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.get('/cards', (req, res) => {
        res.send(cards)
    })
    app.delete('/cards/:cardId', (req, res) => {
        console.log(req)
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId)
        res.send(cards)
    })

    app.post('/cards', (req, res) => {
        console.log(req)
        const newCard = req.body;
        cards.push({id: Math.random().toString(), ...newCard});
        res.send('Card created')
    })
    app.patch('/cards/:cardId', (req, res) => {
        const newCard = req.body;
        const cardId = req.params.cardId;
        cards = cards.map(el => el.id === cardId ? {...newCard, id: el.id} : el)
        res.send('Card updated')
    })
}

module.exports = routes;

