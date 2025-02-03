const port = 6030

const express = require("express")

const cors = require("cors")

const campaignRouter = require("./router/campaignRouter")

const donationRouter = require("./router/donationRouter")

const app = express()


app.use(express.json())
app.use(cors())


app.use(campaignRouter)

app.use(donationRouter)

app.listen(port, ()=> {
    console.log(`my server is running on port ${port}`)
})