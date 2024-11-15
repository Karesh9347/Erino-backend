const Contact=require("./contactSchema")
const updateUser = async (req, res) => {
    const { id } = req.params;  
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        }, { new: true });  

        if (!contact) {
            return res.status(404).json({ message: "Contact not found." });
        }

        return res.status(200).json({ message: "Contact updated successfully!"});
    } catch (err) {
        console.error("Error updating contact:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};
module.exports=updateUser
