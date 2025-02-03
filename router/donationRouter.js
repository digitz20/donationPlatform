const {makeDonation, totalDonation, getAllDonation} = require("../controller/donationController")

const donationRouter = require("express").Router()

donationRouter.post("/donate/:id", makeDonation)

donationRouter.get("/gettotaldonation/:id", totalDonation)

donationRouter.get("/getalldonation", getAllDonation)




module.exports = donationRouter