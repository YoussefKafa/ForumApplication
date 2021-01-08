import Token from './Token';
import AppStorage from './AppStorage'
class User {
    login(form) {
        axios.post('/api/auth/login', form).then(

            res => {
                this.saveData(res.data.access_token, res.data.user_name)
            }).
        catch(
            error => console.log(error.response.data)
        )
    }
    saveData(access_token, user_name) {

        if (Token.isValid(Token.getIss(Token.toJson(Token.decode(Token.getPayload(access_token)))))) {
            AppStorage.setTokenAndUserName(access_token, user_name);
            console.log("yes");
        } else { console.log("no"); }
    }
    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return true;
        } else
            return false;
    }
    loggedIn() {
        return this.hasToken();
    }
    logOut() {
        AppStorage.clearLocalStorage();
    }
    id() {
        if (this.loggedIn()) {
            return Token.getSub(AppStorage.getToken());
        }
    }
}
export default User = new User();
