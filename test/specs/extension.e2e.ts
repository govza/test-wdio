describe("Example", () => {
  it("extensions page should work", async () => {
    await browser.url('chrome://extensions/')
    const extensions = await browser.$$('extensions-item').getElements();
    await expect(extensions.length).toBeGreaterThan(0);
  });

  it("toolbar should be existing", async () => {
    await browser.url('chrome://extensions/')

    const toolbar = await browser.$('#toolbar').getElement();
    await expect(toolbar).toBeExisting();
  });
});
