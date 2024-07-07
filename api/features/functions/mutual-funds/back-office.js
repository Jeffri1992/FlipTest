import { } from 'dotenv/config';
import Bluebird from 'bluebird';
import superagent from 'superagent';
import users from '../../../../website/features/helpers/users.js';

const backOffice = {

  clientLogs() {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/mutual-fund-hub/api/bo/staffs/assignment-logs?page=0&size=20`)
      .set('Cookie', users.cookies);
  },

  productLogs(type) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/mutual-fund-hub/api/bo/file-logs?page=0&size=20&type=${type}`)
      .set('Cookie', users.cookies);
  },

  kycLogs(type) {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/mutual-fund-hub/api/bo/file-logs?page=0&size=20&type=${type}`)
      .set('Cookie', users.cookies);
  },

  konfirmasiEksporDokumenLogs() {
    return Bluebird.promisifyAll(superagent).get(`${process.env.AIT_DOMAIN}/mutual-fund-hub/api/bo/activity-logs?activityType=CONFIRM_NON_BULK_CORES&size=20`)
      .set('Cookie', users.cookies);
  }

};
export default backOffice;
