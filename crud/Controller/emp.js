const Emp = require('../models/emp')
const mongoose = require('mongoose')
function create(req,res,next){
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile
  })
  emp.save().then((data)=>{
    res.send(data)
  })
}
module.exports.create = create

const router = require('./routes/emp')
app.use('/emp',router)

function remove(req,res,next){
  Emp.findByIdAndDelete(req.params.id, (err,emp)=>{
    if(err){
      return res.status(500).send({error: "Problem with Deleting theEmployee recored "})
    }
    res.send({success: 'Employee deleted successfully'})
  })
}
module.exports.remove = remove