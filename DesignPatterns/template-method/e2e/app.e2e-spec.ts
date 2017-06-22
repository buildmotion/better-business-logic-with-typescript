import { TemplateMethodPage } from './app.po';

describe('template-method App', () => {
  let page: TemplateMethodPage;

  beforeEach(() => {
    page = new TemplateMethodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
