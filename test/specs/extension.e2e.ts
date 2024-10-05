describe("Example", () => {
  it("toolbar should be existing", async () => {
    await browser.url('chrome://extensions/')

    const toolbar = await browser.$('h1').getElement();
    await expect(toolbar).toHaveText('Extensions');
  });

  it("extensions page should work", async () => {
    await browser.url('chrome://extensions/')
    const extensions = await browser.$$('extensions-item').getElements();
    await expect(extensions.length).toBeGreaterThan(0);
  });
});
