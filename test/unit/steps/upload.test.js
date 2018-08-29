const modulePath = 'steps/upload/Upload.step';

const Upload = require(modulePath);
const End = require('steps/end/End.step');
const idam = require('services/idam');
const { middleware, question, sinon, content } = require('@hmcts/one-per-page-test-suite');

describe(modulePath, () => {
  beforeEach(() => {
    sinon.stub(idam, 'protect').returns(middleware.nextMock);
  });

  afterEach(() => {
    idam.protect.restore();
  });

  it('has idam.protect middleware', () => {
    return middleware.hasMiddleware(Upload, [ idam.protect() ]);
  });

  it('renders the content', () => {
    return content(Upload);
  });

  it('shows error if does not answer question', () => {
    return question.testErrors(Upload);
  });

  it('redirects to End if answer is no', () => {
    const fields = { upload: 'no' };
    return question.redirectWithField(Upload, fields, End);
  });

  it('redirects to End if answer is yes', () => {
    const fields = { upload: 'yes' };
    return question.redirectWithField(Upload, fields, End);
  });

  it('loads fields from the session', () => {
    const sessionData = { upload: 'yes' };
    return question.rendersValues(Upload, sessionData);
  });
});