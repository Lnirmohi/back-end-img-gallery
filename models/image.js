const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    imgData: {
      data: Buffer,
      type: String
    },
    user: mongoose.Schema.Types.ObjectId,
});

imageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Image', imageSchema);