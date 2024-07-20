import clientPromise from '../../../lib/mongodb'
import { ObjectId } from "mongodb"

const editPost = async (req, res) => {
    // console.log("...............",title,img,details,price,gmail,imgOwner,colorInfo,sizeInfo)
    try {

        const client = await clientPromise;
        const db = client.db("posts");
        const { id } = req.query;

        const {
            title, 
            img, 
            details, 
            price, 
            gmail, 
            imgOwner, 
            colorInfo, 
            sizeInfo
        } = req.body;

        const post = await db.collection("posts").updateOne(
            {
                _id: new ObjectId(id)
                
            },
            {
                $set: {
                    title: title,
                    img: img, 
                    details: details, 
                    price: price, 
                    gmail: gmail, 
                    imgOwner: imgOwner, 
                    colorInfo: colorInfo, 
                    sizeInfo: sizeInfo                  
                }
            }
        )
        
        console.log("...............",title,img,details,price,gmail,imgOwner,colorInfo,sizeInfo),
        res.json(post);


    } catch(e) {
        console.error(e);
        throw new Error(e).message;
    }
}
export default editPost