const mongoose=require("mongoose")

require("dotenv").config();

const connectDB=()=>{

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connecté à MongoDB avec succès !');
})
.catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
});
}

module.exports=connectDB