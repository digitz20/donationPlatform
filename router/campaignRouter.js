const {createCampaign, getAllCampaign, getOneCampaign, createBulkCampaign, highestFundedCampaign} = require("../controller/campaignController")

const campaignRouter = require("express").Router()


campaignRouter.post("/createcampaign" , createCampaign)

campaignRouter.get("/getallcampaign" , getAllCampaign)

campaignRouter.get("/getonecampaign/:id" , getOneCampaign)

campaignRouter.post("/createbulkdonation" , createBulkCampaign)

campaignRouter.get("/highestcampaign" , highestFundedCampaign)




module.exports = campaignRouter