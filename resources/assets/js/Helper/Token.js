/**
 * Created by jay on 7/10/18
 */

class Token {
    decode (token) {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    }

    isValid(token) {
        //console.log('whole token', atob(token.split('.')[2]));
        const payload = this.decode(token);
        if (payload) {
            console.log(payload.iss);
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" ||
                "http://127.0.0.1:8000/api/auth/signup" ? true : false;
        }
        return false;
    }
}

export default Token = new Token();