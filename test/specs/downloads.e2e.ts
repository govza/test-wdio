describe("Downloads", () => {
  it("h1 should have text", async () => {
    await browser.url('chrome://downloads//')
    const toolbar = await browser.$('h1').getElement();
    await expect(toolbar).toHaveText('Download history');
  });

  it("downloads-toolbar should be existing", async () => {
    await browser.url('chrome://downloads//')
    const toolbar = await browser.$('downloads-toolbar').getElement();
    await expect(toolbar).toBeExisting();
  });
});
