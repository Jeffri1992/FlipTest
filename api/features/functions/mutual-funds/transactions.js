import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import { ordersResponse } from "../../../../website/features/helpers/mutual-funds.js";

const transactions = {

  changePaymentStatus() {
    return Bluebird.promisifyAll(superagent).patch(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/transactions/${ordersResponse.orderId}/update-payment-status-automation`)
      .send(
        {
          'channel': 'EXTERNAL_BANK_PENAMPUNG',
          'status': 'PAID'
        }
      );
  }

};
export default transactions;
