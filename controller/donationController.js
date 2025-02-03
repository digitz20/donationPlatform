

const {donation} = require("../models")

const {v4:uuidv4} = require("uuid")



exports.makeDonation = async (req, res)=> {
    try {


        const donationData = {
        id : uuidv4(), 
        campaignId :req.params.id,   
        name: req.body.name,
        userId: uuidv4(),
        amount: req.body.amount,
        }
        

        const myDonation = await donation.create(donationData)

        res.status(201).json({message: `find the made donation below`, data:myDonation})   
       
    } catch (error) {
        res.status(500).json({message: `error in making a donation`, error:error.message})
    }
}





exports.getAllDonation = async (req, res) => {
    try {
        const allDonation = await donation.findAll()


        res.status(201).json({message: `find all the donation below`, data:allDonation})  

    } catch (error) {

        res.status(500).json({message: `error in getting all the donation`, error:error.message})
    }
}








// exports.totalDonation = async(req, res) => {
//     try {

//         const {campaignId} = req.params;
//         // const {amount} = req.body
//         const mytotaldonate = await campaign.findOne({where: {id:campaignId}})

//         if(!mytotaldonate) {
//             return res.status(404).json({message: `total donation not found`})

//         }

//         const newDonate = await donation.findAll({where: {campaignId: campaignId,
//             // amount: {[Op.between]: [amount]}

//         }})
//         // console.log('newdonate: ',newDonate);
        
        
//         const newTotalDonate = newDonate.reduce((acc,donation) => acc + donation.amount , 0)
//         // console.log('new total: ',newTotalDonate);

//         res.status(200).json({message: `total amount per campaign`, totalAmount:newTotalDonate})
       

//     } catch (error) {
//         res.status(500).json({message:`error creating donation` ,error:error.message})
//     }
// }








exports.totalDonation = async (req, res) => {
    try {
        const donations = await donation.findAll(); 

        const campaignTotals = {};

        donations.forEach(donation => {
         
            if (!campaignTotals[donation.campaignId]) {
              
                campaignTotals[donation.campaignId] = 0;
            }
            campaignTotals[donation.campaignId] += donation.amount;
        });

        res.status(200).json({message: `Total donation amount by campaign`,data: campaignTotals});

    } catch (error) {
       
        res.status(500).json({message: `Error in calculating total donation by campaign`, error: error.message});
    }
}



































