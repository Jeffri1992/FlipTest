import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import { fundListResponse } from '../../../../website/features/helpers/mutual-funds.js';

const containerAccounts = {

  containerAccountList(i) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/container-accounts?code=${fundListResponse.code[i]}&type=SUBSCRIPTION`);
  }

};
export default containerAccounts;
