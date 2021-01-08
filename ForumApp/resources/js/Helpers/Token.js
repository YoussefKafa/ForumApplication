class Token {
    //takes access_token and returns payload
    getPayload(token) {
            const payload = token.split('.')[1]
            return payload;
        }
        //takes payload and returns data
    decode(token) {
            return atob(token);
        }
        //takes data and returns json
    toJson(data) {
            return JSON.parse(data);
        }
        //takes json and returns iss
    getIss(payload) {
            return payload.iss;
        }
        //takes iss and returns isValid
    isValid(data) {
        if (data) {
            return data == "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/signup" ?
                true : false
        }
        return false
    }
    getSub(token) {
        const jsonToken = this.toJson(this.decode(this.getPayload(token)));
        return jsonToken.sub;
    }
}
export default Token = new Token();
