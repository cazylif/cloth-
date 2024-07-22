import { title } from 'process';
import clientPromise from '../../../lib/mongodb'
import { ObjectId } from "mongodb"
import { color } from 'framer-motion';

const editPost = async (req, res) => {
    // console.log("...............",title,img,details,price,gmail,imgOwner,colorInfo,sizeInfo)
    try {

        const client = await clientPromise;
        const db = client.db("posts");
        const { id } = req.query;

        // const {
        //     title, 
        //     img, 
        //     details, 
        //     price, 
        //     gmail, 
        //     imgOwner, 
        //     colorInfo, 
        //     sizeInfo
        // } = req.body;
        // const data = req.body.json()
        /////title: find world in req.body/////
        let title1 = req.body.split('\",\"')[0]
        let title2 = title1.split('\":\"')[1]

        /////img: find world in req.body/////
        let img1 = req.body.split('\",\"')[1]
        let img2 = img1.split('\":\"')[1]

        /////details: find world in req.body/////
        let details1 = req.body.split('\",\"')[2]
        let details2 = details1.split('\":\"')[1]

        /////price: find world in req.body/////
        let price1 = req.body.split('\",\"')[3]
        let price2 = price1.split('\":\"')[1]

        /////gmail: find world in req.body/////
        let gmail1 = req.body.split('\",\"')[4]
        let gmail2 = gmail1.split('\":\"')[1]

        /////imgOwner: find world in req.body/////
        let imgOwner1 = req.body.split('\",\"')[5]
        let imgOwner2 = imgOwner1.split('\":\"')[1]

        /////color: find world in req.body/////
        let color1 = req.body.split('\"colorInfo\":{\"color\":[\"')[1]
        let color2 = color1.split('\"]},\"')[0]
        let color3 = color2.split('\",\"')

        /////size: find world in req.body/////
        let size1 = req.body.split('\"sizeInfo\":{\"size\":[\"')[1]
        let size2 = size1.split('\"]}}')[0]
        let size3 = size2.split('\",\"')
        
        
        const post = await db.collection("posts").updateOne(
            {
                _id: new ObjectId(id)
                
            },
            {
                $set:{
                    title: title2,
                    img: img2,
                    details: details2,
                    price: price2,
                    gmail: gmail2,
                    imgOwner: imgOwner2,
                    colorInfo: {
                        color: color3
                    },
                    sizeInfo: {
                        size: size3
                    }
                    
                    
                }
            }
        )
        
        // console.log("...............",title,img,details,price,gmail,imgOwner,colorInfo,sizeInfo);
        console.log(">>>>>>>>>>>>>>>>>>>",req.body)
        console.log("========",size2)
        res.json(post);


    } catch(e) {
        console.error(e);
        throw new Error(e).message;
    }
}
export default editPost