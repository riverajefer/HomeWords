export default class Helper {
    constructor() {}

    async onGetTokenApiFlaticon() {
        try {
            const url = "https://api.flaticon.com/v3/app/authentication";

            const response = await this.$http.post(
                url, {
                    apikey: "8eda479a116a5e1af17b3ddd40f0fcd14c66e61e",
                },
            );

            console.log("response token: ", response.data.token);
            return response.data.token;

        } catch (error) {
            console.log(error);
        }
    }
}