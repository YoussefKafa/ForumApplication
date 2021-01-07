class AppStorage {
    setToken(token) {
        localStorage.setItem('token', token);
    }
    setUserName(user) {
        localStorage.setItem('user_name', user);
    }
    setTokenAndUserName(token, user) {
        this.setToken(token);
        this.setUserName(user);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUserName() {
        return localStorage.getItem('user_name')
    }
    clearLocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
    }
}
export default AppStorage = new AppStorage;