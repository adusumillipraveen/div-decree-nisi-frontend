// const basicDivorceSession = require('test/resources/basic-divorce-session');

Feature('Test all pages');

Scenario('Pages', async I => {
  await I.createAUser();

  // await I.createDnCaseForUser(basicDivorceSession);
  //
  // I.amOnLoadedPage('/');
  //
  // await I.testIdamPage();
  //
  // I.testProgressBar();
  //
  // I.testDnNoResponse();
  //
  // I.testAmendApplication();
  //
  // I.testRespNotAdmitAdultery();
  //
  // I.testReviewAosResponseFromCoRespondent();
  //
  // I.testAdulteryFirstFound();
  //
  // I.testApplyForDecreeNisiPage();
  //
  // I.testBehaviourContinuedSinceApplicationPage();
  //
  // I.testClaimCostsPage();
  //
  // I.testIntolerable();
  //
  // I.testLivedApartSinceAdulteryPage();
  //
  // I.testLivedApartSinceDesertionPage();
  //
  // I.testLivedApartSinceLastIncidentDatePage();
  //
  // I.testLivedApartSinceSeparationPage();
  //
  // I.testMiniPetitionPage();
  //
  // I.testReviewAosResponsePage();
  //
  // I.testShareCourtDocumentsPage();
  //
  // await I.testUploadPage();
  //
  // I.testDesertionAskedToResumeDN();
  //
  // I.testCourtFeedback();
  //
  // I.testCheckYourAnswersPage();
  //
  // I.testDonePage();
  //
  // await I.testExitPage();
  //
  // await I.testExitIntolerable();
  //
  // I.testContactDivorceTeam();
  //
  // I.testContactDivorceTeamError();
  //
  // I.testCookiesPolicyPage();
  //
  // I.testPrivacyPolicyPage();
  //
  // I.testTermsAndConditionsPage();
  //
  // I.testAccessibilityStatementPage();
  //
  // I.checkUrlsNotTested();
}).retry(3);
