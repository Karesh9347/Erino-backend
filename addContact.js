const Contact = require("./contactSchema");

const addContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !company || !jobTitle) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const isExist=await Contact.findOne({email})
    if(isExist){
      return res.status(401).json({message:"email already exited"})
    }
    const contact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
    await contact.save();

    return res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err.message);
    return res.status(500).json({ message: "Error storing the contact in the database", error: err.message });
  }
};

module.exports = addContact;
