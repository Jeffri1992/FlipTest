import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';


export const genderize = {

  async getGender(user) {
    return Bluebird.promisifyAll(superagent).get(`https://api.genderize.io?name=${user}`)
  }

};
export default genderize;
