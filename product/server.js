require('dotenv').config()
const mongoose = require('mongoose')
const app = require("./app.js")
const port = process.env.PORT || 8082

mongoose.connect(process.env.MONGO_URI, { ssl: false })
  .then(() => console.log('MongoDB connected !'))
  .catch(() => console.log('Erreur with MongoDB connection'))

app.listen(port, () => {
  console.log(`product service listening on port ${port}`)
})