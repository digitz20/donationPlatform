const {createCampaign, getAllCampaign, getOneCampaign, createBulkCampaign} = require("../controller/campaignController")

const campaignRouter = require("express").Router()


campaignRouter.post("/createcampaign" , createCampaign)

campaignRouter.get("/getallcampaign" , getAllCampaign)

campaignRouter.get("/getonecampaign/:id" , getOneCampaign)

campaignRouter.post("/createbulkdonation" , createBulkCampaign)




module.exports = campaignRouter