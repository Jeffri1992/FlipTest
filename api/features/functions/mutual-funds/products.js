import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';

import users from '../../../../website/features/helpers/users.js';
import { fundListResponse } from '../../../../website/features/helpers/mutual-funds.js';

const products = {
  fundList(key, type) {
    console.log(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?${key}=${type}&status=active_subsenabled`);
    console.log(users.cookies);
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?${key}=${type.toUpperCase()}&status=active_subsenabled`)
      .set('Cookie', users.cookies);
  },

  fundDetail(i) {
    console.log((`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products/s/${fundListResponse.slug[i]}`));
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products/s/${fundListResponse.slug[i]}`)
      .set('Cookie', users.cookies);
  },

  sortFilterList(key, type, sort, filter) {
    console.log(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?${key}=${type.toUpperCase()}&status=active_subsenabled&${sort}&${filter}`);
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?${key}=${type.toUpperCase()}&status=active_subsenabled&${sort}&${filter}`)
      .set('Cookie', users.cookies);
  },

  searchSortFilterList(name, sort, filter) {
    console.log(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?name=${name}&page=0&size=50&status=active_subsenabled&${sort}&${filter}`);
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/api/v2/mutual-funds/products?name=${name}&page=0&size=50&status=active_subsenabled&${sort}&${filter}`)
      .set('Cookie', users.cookies);
  }

};
export default products;
