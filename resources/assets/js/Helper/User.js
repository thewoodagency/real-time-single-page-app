/**
 * Created by jay on 7/10/18
 */

import AppStorage from './AppStorage';
import Token from './Token';

class User {
    login(form) {
        axios.post('/api/auth/login', form)
            .then(res => {
                console.log(res.data);
                this.responseAfterLogin(res);
            })
            .catch(error => console.log(error.response.data));
    }

    signup(form) {
        axios.post('/api/auth/signup', form)
            .then(res => {
                console.log(res.data);
                this.responseAfterLogin(res);
            })
            .catch(error => {
                return error.response.data
            });
    }

    responseAfterLogin(res) {
        let {access_token, user} = res.data;
        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, user);
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }

        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = '/forum';
    }

    name() {
        if (this.loggedIn()) {
            return AppStore.getUser();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.decode(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id) {
        return this.id() == id;
    }

    isadmin() {
        return this.id() == 1;
    }
}

export default User = new User();
