
const Contact=require("./contactSchema")

const removeUser = async (req, res) => {
    const { email } = req.params;  

    try {
        const contact = await Contact.findOneAndDelete({email});
        
        if (!contact) {
            return res.status(404).json({ message: "Contact not found." });
        }

        return res.status(200).json({ message: "Contact removed successfully!" });
    } catch (err) {
        console.error("Error removing contact:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
module.exports=removeUser
