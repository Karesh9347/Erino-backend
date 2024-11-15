//import require libraries
const express=require("express")
const app=express()

const mongoose=require("mongoose")
const Contact=require("./contactSchema")
const addContact=require("./addContact")
const allContacts=require("./allContacts")
const removeContact=require("./removeContact")
const updateHelper=require("./updateHelper")
const updateContact=require("./updateContact")
const cors=require("cors")
app.use(cors())

app.use(express.json())
//mongod connection using mongoose library
const MONGO_URI = 'mongodb+srv://naresh9848:Karesh9848@cluster1.94mleuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
//add contact to the db
app.post("/add-contact",addContact)
//remove contact
app.delete("/remove-contact/:email", removeContact); 
//update helper
app.get("/update-helper/:email",updateHelper)
//update contact 
app.put("/update-contact/:id", updateContact); 
 
//all contact 
app.get("/all-contacts", allContacts);


const PORT= 5000
app.listen(PORT,()=>{
    console.log(`server running on port numer ${PORT}`)
})
