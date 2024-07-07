import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';

const portfolio = {

  portfolioList() {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/portfolio?active=true`)
      .set('Cookie', users.cookies);
  }

};
export default portfolio;
