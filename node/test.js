const mongoose = require('mongoose')

try {
    mongoose.connect("mongodb+srv://tttUser:tttPwd@cluster0.t4kk3.mongodb.net/tttDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected !")
    });

    const TttSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name:{
            type: String,
            required: true
        },
        branch:{
            type: String,
            required: true
        },
    });

    tttModel = mongoose.model('tttCollection', TttSchema);

    // Create a new entry
    const entry = new tttModel({
        _id: new mongoose.Types.ObjectId(),
        name: "test nodejs",
        branch: "ttt",
    });

    entry.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    // Get all informations
    tttModel.find()
    .then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log(err);
    });

    // Update
    tttModel.update({ _id: "5fbae8c193941e2970b3e59f" }, {
        $set: {
            "name": "New Name",
            "branch": "update"
        }
    })
    .exec()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    
    // Remove an entry
    /*tttModel.remove({ _id: "5fbae6d92f8a2607282643fb" })
    .exec()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });*/
    
} catch (error) {
    console.log(error)
    process.exit(1)
}