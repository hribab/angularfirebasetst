import { SSSPage } from './app.po';

describe('sss App', function() {
  let page: SSSPage;

  beforeEach(() => {
    page = new SSSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
