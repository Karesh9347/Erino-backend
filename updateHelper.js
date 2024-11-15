const Contact = require("./contactSchema"); // Import your contact schema

const updateHelper = async (req, res) => {
  const { email } = req.params; 
  if (!email) {
    return res.status(400).json({ message: "Email is required" })}
  try {
    const contact = await Contact.findOne({ email });  // Find the contact by email
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });  // If contact does not exist
    }
    return res.status(200).json(contact);  // Return the found contact as JSON
  } catch (err) {
    console.error("Error fetching contact:", err);
    return res.status(500).json({ message: "Internal server error" });  // Return error if something goes wrong
  }
};

module.exports = updateHelper;
