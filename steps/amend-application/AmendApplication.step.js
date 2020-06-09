const { Interstitial } = require('@hmcts/one-per-page/steps');
const { action } = require('@hmcts/one-per-page/flow');
const config = require('config');
const idam = require('services/idam');
const caseOrchestrationService = require('services/caseOrchestrationService');
const redirectToFrontendHelper = require('helpers/redirectToFrontendHelper');
const { getFeeFromFeesAndPayments, feeTypes } = require('middleware/feesAndPaymentsMiddleware');
const checkWelshToggle = require('middleware/checkWelshToggle');
const i18next = require('i18next');
const commonContent = require('common/content');

class AmendApplication extends Interstitial {
  static get path() {
    return config.paths.amendApplication;
  }

  get case() {
    return this.req.session.case.data;
  }

  get divorceWho() {
    const sessionLanguage = i18next.language;
    return commonContent[sessionLanguage][this.req.session.case.data.divorceWho];
  }

  get middleware() {
    return [
      ...super.middleware,
      idam.protect(),
      getFeeFromFeesAndPayments(feeTypes.amendFee),
      checkWelshToggle
    ];
  }


  get amendFee() {
    return this.res.locals.applicationFee ? this.res.locals.applicationFee[feeTypes.amendFee] : '';
  }

  next() {
    return action(caseOrchestrationService.amendApplication)
      .then(redirectToFrontendHelper.redirectToFrontendAmend);
  }
}

module.exports = AmendApplication;
