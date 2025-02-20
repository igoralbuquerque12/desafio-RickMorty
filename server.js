const app = require('./app')
require('dotenv').config({ path: './.env' })

port = process.env.PORT 

app.listen(port, () => {
    console.log(`Ouvindo a porta ${port}...`)
})

