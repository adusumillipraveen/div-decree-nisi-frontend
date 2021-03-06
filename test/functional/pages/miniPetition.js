const MiniPetition = require('steps/mini-petition/MiniPetition.step');
const MiniPetitionContent = require('steps/mini-petition/MiniPetition.content');
const commonContent = require('common/content');
const LivedApartSinceSeparation = require('steps/lived-apart-since-separation/LivedApartSinceSeparation.step'); // eslint-disable-line

function testMiniPetitionPage() {
  const I = this;

  I.amOnLoadedPage(MiniPetition.path);
  I.waitInUrl(MiniPetition.path, 5);
  I.retry(2).click(MiniPetitionContent.en.fields.changes.hasBeenChanges.no);
  I.retry(2).click(MiniPetitionContent.en.fields.changes.statementOfTruthNoChanges.yes);
  I.navByClick(commonContent.en.continue);
}

module.exports = { testMiniPetitionPage };
