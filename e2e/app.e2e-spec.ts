import { PhotobookPage } from './app.po';

describe('photobook App', () => {
  let page: PhotobookPage;

  beforeEach(() => {
    page = new PhotobookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
