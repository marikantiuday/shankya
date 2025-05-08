import express from "express";
import ContentController from "../../controllers/Content.controller.mjs";

const ContentRouter = express.Router();

ContentRouter.post('/createContent',ContentController.contentCreate);
ContentRouter.put('/updateContent/:id',ContentController.updateContentController);
ContentRouter.get('/getById/:id',ContentController.updateContentController);




ContentRouter.get('/test', (req, res) => {
    res.json({ message: 'Welcome, test the content !' });
});

export default ContentRouter;
