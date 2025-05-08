import express from "express";

const ContentRouter = express.Router();

UserRouter.get('/content', (req, res) => {
    res.json({ message: 'Welcome, User!' });
});

export default ContentRouter;
