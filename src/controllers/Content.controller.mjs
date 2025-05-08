import Content from "../models/Content.model.mjs";
import ContentService from "../services/ContentService.mjs";

class ContentController {

    async contentCreate(req, res) {
        try {

            const data= req.body;
            
            const result =  await ContentService.createContent(data);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'content creater ',
                data: result,
            });

        } catch (error) {
            console.log('error in creating content ', error.message)
            res.status(500).json({
                status: 500,
                success: false,
                message: error.message
            });         }
    }

    async updateContentController(req,res){
        try{
            const id = req.params.id;
            const data = req.body;

        const result =  await ContentService.updateContent(id ,data);
        res.status(200).json({
            status: 200,
            success: true,
            message: 'content sucessfully updated ',
            data: result,
        });
        }catch(error){
            console.log('error in updating ', error.message)
            res.status(500).json({
                status: 500,
                success: false,
                message: error.message
            });      
          }
    }


    async getByIdContent(req,res){
        try{
            const id = req.params.id;

        const result =  await ContentService.getById(id);
        res.status(200).json({
            status: 200,
            success: true,
            message: 'sucessfully get the data',
            data: result,
        });
        }catch(error){
            console.log('error in getting  data  ', error.message)
            res.status(500).json({
                status: 500,
                success: false,
                message: error.message
            });      
          }
    }

}
export default new ContentController ();