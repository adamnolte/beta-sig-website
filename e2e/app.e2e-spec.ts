import { BetaSigPage } from './app.po';

describe('beta-sig App', () => {
  let page: BetaSigPage;

  beforeEach(() => {
    page = new BetaSigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
