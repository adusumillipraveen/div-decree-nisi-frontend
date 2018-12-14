const config = require('config');
const logger = require('@hmcts/nodejs-logging').Logger.getLogger(__filename);

const authTokenString = '__auth-token';

const redirectToUrl = (req, res, baseUrl) => {
  const queryString = `${baseUrl}?${authTokenString}=${req.cookies[authTokenString]}`;
  res.redirect(`${queryString}`);
};

const redirectToFrontend = (req, res) => {
  logger.info('Redirecting user to Petitioner Frontend as no case was found on CCD');

  const petitionerFrontend = config.services.petitionerFrontend;
  redirectToUrl(req, res, `${petitionerFrontend.url}${petitionerFrontend.landing}`);
};

const redirectToAos = (req, res) => {
  logger.info('Redirecting user to AOS. User is a respondent user');

  const aosFrontend = config.services.aosFrontend;
  redirectToUrl(req, res, `${aosFrontend.url}${aosFrontend.landing}`);
};

module.exports = { redirectToFrontend, redirectToAos };