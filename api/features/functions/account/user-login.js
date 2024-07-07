import Bluebird from 'bluebird';
import superagent from 'superagent';

const signin = {

  authSignIn(email, password) {

    let DOMAIN = process.env.CERMATI_DOMAIN;
    return Bluebird.promisifyAll(superagent).post(`${DOMAIN}/api/v1/auth/signin`)
      .send({ "email": email, "password": password })
      .endAsync();
  }
};
export default signin;
