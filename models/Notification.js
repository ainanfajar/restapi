import { Timestamp } from "bson";
import mongoose from "mongoose";

const Notification = mongoose.Schema({
    reqID:{
        type:String,
        require:true,
    },
    tittle:{
        type:String,
        require:true,
    },
    description:{   
        type:String,
    },
    userID:{ 
        type:Number,
        require:true,
    },
    file:{
        type:Number,
    },
},{
    timestamps: true,
});

export default mongoose.model("Notifications", Notification);