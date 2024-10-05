describe("Example", () => {
    it("example page should work", async () => {
        await browser.url('https://example.com')
        const title = await browser.getTitle();
        await expect(title).toBe('Example Domain');
    });
});
