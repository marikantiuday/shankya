import ContentService from "../services/ContentService.mjs";

class ContentController{

    async contentCreate(req, res){
        const {data} = requestAnimationFrame.body;
        const result = ContentService.createContent(data);
        res.status(200).json({
            status:200,
            success:true,
            message:'content creater ',
            data:result,
        })
    }

}
export default ContentController;