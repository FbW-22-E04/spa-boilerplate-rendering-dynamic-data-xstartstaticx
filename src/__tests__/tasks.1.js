describe("Render object data", () => {
    it("Data from `customer` object is rendered on the page", async () => {
        document.body.innerHTML = '<div id="root"></div>';
        await import('../../src/index.js')
        await new Promise(resolve => setTimeout(resolve, 1)) // pause
        expect(document.body.innerHTML).toMatch(/bob/i)
        expect(document.body.innerHTML).toMatch(/dylan/i)
    });
});