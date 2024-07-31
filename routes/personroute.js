const express=require("express")
const Person = require("../models/person")

const router=express.Router()


//ADD NEW USER

router.post("/add",async(req,res)=>{
    const {name,age,favoritefood}=req.body

    const user=new Person({
      name,
      age,
      favoritefood 
    })

    await user.save()
res.send({msg:"person add !",user})
})

//GET ALLPERSONS
router.get("/getAll",async(req,res)=>{

    const persons=await Person.find()
    res.send({msg: "data fetched  !",persons})
})

// EDIT ,UPDATE, sSAVA data
router.put("/putperson/:id", async (req, res) => {
    const { persona } = req.params;
    const { name, age, favoritefood } = req.body;
    try {
        const person = await Person.findOne(persona);
        if (!person) {
            return res.status(404).send({ msg: "Person not found" });
        }
        person.name = name;
        person.age = age;
        person.favoritefood = favoritefood;
        await person.save();
        res.send({ msg: "Person updated", person });
    } catch (error) {
        res.status(500).send({ msg: "Error updating person", error });
    }
});

//DELETE PERSON
router.delete("/deleteperson",async(req,res)=>{
    const {name}=req.params;
    try{
        const person =await Person.findOneAndDelete(name);
        if (!person){
            return res.send({msg:" error deleling person",person})
        }
        res.send({ msg: 'Person deleted', person });
    }
    catch(err) {
        res.send({ msg: 'Person deleted', error: err });
      }

});







module.exports=router