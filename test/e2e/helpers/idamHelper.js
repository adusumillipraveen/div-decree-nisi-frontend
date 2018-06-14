const config = require('config');
const logger = require('@hmcts/nodejs-logging').Logger.getLogger(__filename);
const randomstring = require('randomstring');
const idamExpressTestHarness = require('@hmcts/div-idam-test-harness');
const idamConfigHelper = require('./idamConfigHelper');

const args = config.services.idamApp;
const Helper = codecept_helper; // eslint-disable-line

class IdamHelper extends Helper {
  _before() {
    if (config.environment !== 'development') {
      const randomString = randomstring.generate({
        length: 16,
        charset: 'numeric'
      });
      const emailName = `simulate-delivered-${randomString}`;
      const testEmail = `${emailName}@notifications.service.gov.uk`;
      const testPassword = randomstring.generate(9);

      args.testEmail = testEmail;
      args.testPassword = testPassword;

      idamConfigHelper.setTestEmail(testEmail);
      idamConfigHelper.setTestPassword(testPassword);

      idamExpressTestHarness.createUser(args)
        .then(() => {
          logger.info(`Created IDAM test user: ${testEmail}`);
        })
        .catch(error => {
          logger.warn(`Unable to create IDAM test user: ${error}`);
        });
    }
  }

  _after() {
    if (config.environment !== 'development') {
      idamExpressTestHarness.removeUser(args)
        .then(() => {
          logger.info(`Removed IDAM test user: ${args.testEmail}`);
        })
        .catch(error => {
          logger.warn(`Unable to remove IDAM test user: ${error}`);
        });
    }
  }
}

module.exports = IdamHelper;