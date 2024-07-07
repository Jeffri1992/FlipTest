import Bluebird from 'bluebird';
import superagent from 'superagent';

const getOtp = {
  getOtpIndodana(userId) {
    return Bluebird.promisifyAll(superagent).get(`https://sandbox01-api.indodana.com/chermes/dev-tool/v1/users/${userId}/authentication/active-otp?scenario=GENERAL`)
      .endAsync();
  }
};
export default getOtp;
