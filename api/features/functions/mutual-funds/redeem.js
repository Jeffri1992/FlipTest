import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';
import { ordersResponse } from "../../../../website/features/helpers/mutual-funds.js";

const portfolio = {

  changeRedemptionPaymentStatus() {
    return Bluebird.promisifyAll(superagent).patch(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/redeem/${ordersResponse.orderId}/complete-redemption`)
      .set('Cookie', users.cookies)
      .set('x-user-id', '6549dd9fef2f1500074c0576')
      .set('x-merchant-id', '766e5636-cf13-4fba-a6bc-df915c33ff8f');
  }

};
export default portfolio;
