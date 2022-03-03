exports.Query = {
    getMessages: async (parent, args, { Contact }) => {
        return await Contact.find({});
    }
}