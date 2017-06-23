import { CompositePage } from './app.po';

describe('composite App', () => {
  let page: CompositePage;

  beforeEach(() => {
    page = new CompositePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
