const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    name: {
        type:string
    },
    age:{
        type:number
    }
});

const User = mongoose.model('User',userSchema)

export default User