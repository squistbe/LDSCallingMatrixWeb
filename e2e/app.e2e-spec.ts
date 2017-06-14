import { LDSCallingMatrixWebPage } from './app.po';

describe('ldscalling-matrix-web App', () => {
  let page: LDSCallingMatrixWebPage;

  beforeEach(() => {
    page = new LDSCallingMatrixWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
