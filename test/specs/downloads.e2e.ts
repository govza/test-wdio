describe("Downloads", () => {
  it("downloads page should work", async () => {
    await browser.url('chrome://downloads//')
    const toolbar = await browser.$('h1').getElement();
    await expect(toolbar).toHaveText('Download history');
  });
});
