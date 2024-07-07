import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';
import { fundListResponse, ordersResponse } from '../../../../website/features/helpers/mutual-funds.js';

const switching = {

  switchingList(i) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/switching/list?mutualFundId=${fundListResponse.mutualFundId[i]}`)
      .set('Cookie', users.cookies);
  },

  changeSwitchingPaymentStatus() {
    return Bluebird.promisifyAll(superagent).patch(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/switching/${ordersResponse.orderId}/complete-switching`)
      .set('Cookie', users.cookies)
      .set('x-user-id', '6549dd9fef2f1500074c0576')
      .set('x-merchant-id', '766e5636-cf13-4fba-a6bc-df915c33ff8f');
  }

};
export default switching;
