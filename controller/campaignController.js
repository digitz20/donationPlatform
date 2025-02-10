const {campaign} =  require("../models")

const {v4:uuidv4} = require("uuid")



exports.createCampaign = async(req, res) =>  {
    try {
        const campaignData = {
            id : uuidv4(),
            title: req.body.title,
            goalAmount: req.body.goalAmount
        }
        
        const newCampaign = await campaign.create(campaignData)

        res.status(201).json({message: `these is the created campaign`, data:newCampaign})
        
    } catch (error) {
        res.status(500).json({message: `error creating campaign`, error:error.message})
        
    }
}





exports.getAllCampaign = async (req, res) => {
    try {
        const myCampaign = await campaign.findAll()

        res.status(201).json({message: `these are all the created campaign`, data:myCampaign})
    } catch (error) {
        
        res.status(500).json({message: `error creating campaign`, error:error.message})
    }
}




exports.getOneCampaign = async (req, res) => {
    try {
        const oneCampaign = await campaign.findByPk(req.params.id)

        if(!oneCampaign) {
            return res.status(201).json(`campaign not found`)
        }

        res.status(201).json({message: `find below the campaign with the id`, data:oneCampaign})

    } catch (error) {
        res.status(500).json({message: `error creating campaign`, error:error.message})
    }
}








exports.createBulkCampaign = async(req, res) => {
    try {
        const bulkCampaign = req.body

        bulkCampaign.map((e) => { return e.id = uuidv4()})

        const newBulk = await campaign.bulkCreate(bulkCampaign, {validate:true})

        res.status(201).json({message: `find all created campaigns below`, data:newBulk})
    } catch (error) {

        res.status(500).json({message: `error creating campaign`, error:error.message})
    }
}













exports.highestFundedCampaign = async (req, res) => {
    try {
        const highestCampaign = await campaign.findOne()

        highestCampaign.sort({goalAmount: -1})

       if(!highestCampaign) {
        return res.status(404).json({messaga: 'no campaign found'})
       }

       res.status(200).json({message: 'kindly find the highest funded campaign below',
        data: highestCampaign
       })
    } catch (error) {
        res.status(500).json({message: 'error finding campaign', error:error.message})
    }
}




