const express = require('express')
var router = express()
const create = require('../controller/emp')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/create',create.create)
module.exports = router

const update = require('../controller/emp')
router.patch('/:id',update.update)

function update(req,res,next){
    Emp.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
      if (err) {
        return res.status(500).send({error: "Problem with Updating the   Employee recored "})
      };
      res.send({success: "Updation successfull"});
    })
  }
  module.exports.update = update

  const remove = require('../controller/emp')
router.delete('/delete/:id',remove.remove)