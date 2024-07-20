import clientPromise from '../../../lib/mongodb'

const addPost = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { title, img, details, price, gmail, imgOwner, colorInfo, sizeInfo } = req.body;

        const post = await db.collection("posts").insertOne({
            title, 
            img, 
            details, 
            price, 
            gmail, 
            imgOwner, 
            colorInfo, 
            sizeInfo
        })

        res.json(post);

    } catch(e) {
        console.log("error in addPost.js")
        console.error(e);
        throw new Error(e).message;
    }
}
export default addPost;