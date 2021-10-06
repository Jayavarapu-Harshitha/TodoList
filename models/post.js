const mongoose =require('mongoose');

const PostSchema = mongoose.Schema({
   task:String
});

module.exports=mongoose.model('Posts',PostSchema);