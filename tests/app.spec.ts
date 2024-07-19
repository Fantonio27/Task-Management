import {test, expect} from "@playwright/test"

test.describe("Main Page", () => {
    test.describe("Pop Up Modal", () => { 
        test("if there's parameter modal will show up", async({ page }) => {
            await page.goto("http://localhost:5174/?id=1");
            
            await expect(page.getByTestId('modal')).toBeVisible();
        });
    
        test("if there's no parameter modal will not show up", async({ page }) => {
            await page.goto("http://localhost:5174");
            
            await expect(page.getByTestId('modal')).not.toBeVisible();
        });
    
        test("if there's parameter but id is not exist, modal will not show up", async({ page }) => {
            await page.goto("http://localhost:5174/?id=9");
            
            await expect(page.getByTestId('modal')).not.toBeVisible();
        });
    });

    // test.describe("Pop Up Modal", () => { 
    //     test.beforeEach(async({page})=>{
    //         await page.goto("http://localhost:5174")
    //     });
    // });
});

test.describe("CRUD Function", ()=> {
    test.describe("Create Task", () => { 
        test.beforeEach( async({ page }) => { 
            await page.goto("http://localhost:5174")
        });

        test("submit form", async({ page }) => {
            const task_name = page.getByTestId('task_name');
            const description = page.getByTestId('description');
            const status = page.getByTestId('status');
            const date = page.getByTestId('date');

            await task_name.fill("Sample Task");
            await description.fill("Lorem ipsum");
            await status.fill("pending");
            await date.fill("2024-07-25");

            await page.getByRole("button").click();

            const tasklist = page.getByTestId('item').nth(1);

            await expect(tasklist.getByRole("heading", { level: 1 })).toHaveText("Sample Task")
        })
    });
})