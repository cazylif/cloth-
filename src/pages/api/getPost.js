import clientPromise from '../../../lib/mongodb'
import { ObjectId } from "mongodb"

const getSinglePost = async (req, res) => {
    try{

        const client = await clientPromise;
        const db = client.db("posts");
        const { id } = req.query;

        const post = await db.collection("posts").findOne({
            _id: new ObjectId(id)
        })

        res.json(post);

    } catch(e) {
        console.error(e);
        throw new Error(e).message;
    }
}
export default getSinglePost
