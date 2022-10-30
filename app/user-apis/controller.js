

const { response } = require('express');
const {
   
    getUser_data,

    addUser_data
   


} = require('./service');
const getUser = async  (req, res) =>{
    try{

        let userdata= await  getUser_data(req.body,req.query);
        if(userdata===0)
        {
            res.status(400).send({message: "System Error"});
        }
        if(userdata=='0' || userdata=='-1')
            res.status(400).send({message: "No Data.",data:{}})

        if(userdata!='0' || userdata!='1')
            res.status(200).send(userdata)

    }catch(e){
        console.log(e)
        res.status(500).send({message: "Something went wrong.",data:{}})

    }
  }

 
const  addUser= async (req,res)=>{
    
    // console.log("hhgihih")
    try {

        // let a  = req.query.arrPoints;
        // let b  = JSON.parse(a);
        // console.log(b) 
        const respond = await   addUser_data(req.body,req.query)
        if(respond===0)
        {
            res.status(400).send({message:"System Error"})

        } else {res.status(200).send(respond)}
    } catch (error) {
        res.status(500).send({message:error.message})

    }
}



module.exports = {
   
    addUser,
  
    getUser
   

  }