import Content from "../models/Content.model.mjs";

class ContentService {
    async createContent(data) {
        try {

            const savedData = await Content.create(data);

            return savedData;
        } catch (error) {
            console.log('error creating the content', error.message);
            return error.message;
        }
    }

    // async updateContent(id, data) {
    //     try {

    //         const parseId = parseInt(id);
    //         console.log('parested int ', id )
    //         const existingOne = await Content.findOne({ where: { id: parseId } });
    
    //         if (!existingOne) {
    //             return `Content with id ${id} not found.`;
    //         }
    
    //         const updatedRowsCount = await Content.update(data, {
    //             where: { id:parseId }
    //         });
    
    //         if (updatedRowsCount === 0) {
    //             return `No changes made to content with id ${id}.`;
    //         }
    
    //         return updatedRowsCount;

    //     } catch (error) {
    //         console.log('Error in updating:', error.message);
    //         return error.message;
    //     }
    // }
    async updateContent(id, data) {
        try {
            const parseId = parseInt(id);
            console.log('parsed int:', parseId);
    
            const existingOne = await Content.findOne({ where: { id: parseId } });
    
            if (!existingOne) {
                return `Content with id ${id} not found.`;
            }
    
            await Content.update(data, {
                where: { id: parseId }
            });
    
            // Re-fetch the updated record
            const updatedContent = await Content.findOne({ where: { id: parseId } });
    
            return updatedContent;
    
        } catch (error) {
            console.log('Error in updating:', error.message);
            return error.message;
        }
    }

    async getById(id){
        try{
            const contentData = await Content.findOne({
                where:{
                    id
                }
            });
             return contentData;
        } catch(error){
            console.log('error message ',error.message);
            return error.message;
        }

    }
    
    
}

export default new ContentService();