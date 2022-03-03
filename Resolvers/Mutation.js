
exports.Mutation = {
    AddMessage: async (parent, { input },{Contact}) => {
        const { fullName, institution, email, phone } = input;

        const newContact = new Contact({
            fullName,
            institution,
            email,
            phone
        })
        newContact.id = newContact._id
        const savedContact = await newContact.save();
        return savedContact;
    }
}