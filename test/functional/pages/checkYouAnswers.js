const CheckYourAnswers = require('steps/check-your-answers/CheckYourAnswers.step');
const CheckYourAnswersContent = require('steps/check-your-answers/CheckYourAnswers.content');

function testCheckYourAnswersPage() {
  const I = this;

  I.amOnLoadedPage(CheckYourAnswers.path);
  I.retry(2).click(CheckYourAnswersContent.en.fields.statementOfTruth.yes);
  I.see(CheckYourAnswersContent.en.title);
}

module.exports = { testCheckYourAnswersPage };
