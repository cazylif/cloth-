import clientPromise from '../../../lib/mongodb'

const fn = async (req, res) => {
    
    try {

        const client = await clientPromise;
        const db = client.db("posts");

        const posts = await db.collection("posts").find({}).limit(20).toArray();
        
        res.json(posts);

    } catch(e) {

        console.error(e);
        throw new Error(e).message;

    }

};
export default fn;