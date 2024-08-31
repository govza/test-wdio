describe("Example", () => {
  it("example page should work", async () => {
    await browser.url(`https://example.com/`);

    const element = await browser.$("h1");
    await expect(element).toHaveText("Example Domain");
  });
});
