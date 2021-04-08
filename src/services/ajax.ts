import axios from "axios";
export default class ApiService {
    private static instance: ApiService;
    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }
    asyncApiAction(url: any, method: any, params?: any) {
        const t = method ? method.toUpperCase() : "GET";

        const token = '563492ad6f91700001000001663e8dbcabbf48e8bfea94da16b28ca3';

        const headers = { Authorization: token };

        const defaultConfig = {
            headers: headers,
            params: {},
            body: {},
        };

        //PREPARING PARAMS
        if (params && Object.keys(params).length > 0) {
            if (t == "GET") {
                defaultConfig.params = params;
            } else if (t == "DELETE" || t == "POST" || t == "PUT" || t == "PATCH") {
                defaultConfig.body = params;
            } else {
                defaultConfig.params = params;
            }
        }

        switch (t) {
            case "GET":
                return axios.get(url, defaultConfig);
            case "POST":
                return axios.post(url, params || {}, defaultConfig);
            case "DELETE":
                return axios.delete(url, defaultConfig);
            case "PUT":
                return axios.put(url, params || {}, defaultConfig);
            case "PATCH":
                return axios.patch(url, params || {}, defaultConfig);
            default:
                return axios.get(url, defaultConfig);
        }
    }
}
