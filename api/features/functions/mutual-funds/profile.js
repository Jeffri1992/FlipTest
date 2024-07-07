import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';

const profile = {
  
  usersProfile() {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v1/profile`)
      .set('Cookie', users.cookies);
  }

};
export default profile;
