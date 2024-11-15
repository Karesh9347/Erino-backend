const Contact=require("./contactSchema");
const allContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json(contacts);
    } catch (err) {
        console.error("Error fetching contacts:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
module.exports=allContacts