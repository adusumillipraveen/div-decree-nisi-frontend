const { Interstitial } = require('@hmcts/one-per-page/steps');
const { goTo } = require('@hmcts/one-per-page/flow');
const config = require('config');
const idam = require('services/idam');
const { getUserData } = require('middleware/ccd');

class ReviewAosResponse extends Interstitial {
  static get path() {
    return config.paths.reviewAosResponse;
  }

  get session() {
    return this.req.session;
  }

  next() {
    return goTo(this.journey.steps.ApplyForDecreeNisi);
  }

  get middleware() {
    return [...super.middleware, idam.protect(), getUserData];
  }
}

module.exports = ReviewAosResponse;