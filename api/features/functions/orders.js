import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../website/features/helpers/users.js';

const orders = {

  incompleteOrderList(productType) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v1/orders?productType=${productType}&section=inComplete&skip=0&limit=10`)
      .set('Cookie', users.cookies);
  },

  otherOrderList(productType) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v1/orders?productType=${productType}&section=other&skip=0&limit=10`)
      .set('Cookie', users.cookies);
  }

};
export default orders;
