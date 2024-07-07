import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';

const investmentManagers = {

  investmentManagerList() {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/investment-managers?size=150`)
      .set('Cookie', users.cookies);
  }

};
export default investmentManagers;
