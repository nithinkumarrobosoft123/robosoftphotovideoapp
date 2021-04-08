import ApiService from "@/services/ajax";

const apiService = ApiService.getInstance();
export default class Common {
    private static instance: Common;
    public static getInstance(): Common {
        if (!Common.instance) {
            Common.instance = new Common();
        }
        return Common.instance;
    }

    photoUrl = 'https://api.pexels.com/v1/videos';


    async getAllPhotos() {
        return await apiService.asyncApiAction(this.photoUrl, 'GET');
    }

}
