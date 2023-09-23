const app = require('express')()
const { log } = require('console')
// const router = require('./config/routes')
const PORT = 5000


require('./config/express')(app);
require('./config/routes')(app)


app.listen(PORT, () =>log(`Server running on port ${PORT}`));