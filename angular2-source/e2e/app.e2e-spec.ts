import { Angular2SourcePage } from './app.po';

describe('angular2-source App', function() {
  let page: Angular2SourcePage;

  beforeEach(() => {
    page = new Angular2SourcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
