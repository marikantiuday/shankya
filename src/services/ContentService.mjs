import Content from "../models/Content.model.mjs";

class ContentService {
async createContent(data){
    const savedData = Content.save(data);
    return savedData;
}
}

export default new ContentService();