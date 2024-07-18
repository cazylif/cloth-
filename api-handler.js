// pages/api-handler/[...path].js
import nextConnect from 'next-connect';
import bodyParser from 'body-parser';

const middleware = nextConnect();
middleware.use(bodyParser.json());

middleware.post(async (req, res) => {
    const { img, title, detail, price, color, size } = req.body;
    console.log(img, title, detail, price, color, size);

    // Perform any operations with the received data (e.g., save to database)

    res.status(201).json({ message: "Created" });
});

export default middleware;
