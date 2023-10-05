### Links:

- Live Link: <a href="https://custom-computer-client.vercel.app/" target="_blank">https://custom-computer-client.vercel.app/</a>

### Navbar:

- Add a button named **PC Builder**.
- Clicking on the **PC Builder** button should redirect the user to the PC Builder page to start building their PC.
- The navbar should also have a Categories dropdown with the following categories:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - Others
  Each category should have a corresponding route. (SSG implementation)

### Home Page: (SSG implementation)

- The home page should feature at least 6 random PC components as Featured Products.

  - Each Featured product card should display the following properties:
    - Image
    - Product Name
    - Category
    - Price
    - Status ( In Stock | Out of stock)
    - Rating (Out of 5 Stars)
  - Each featured product will be clickable and should take the user to the product detail page. (Button/Entire Card)

- There are 6 Featured Categories under the Featured Product section. The Categories are:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - Others (GPU, Mouse, Keyboard, etc…)

### Featured Category Sections: (SSG implementation)

- Each featured category is clickable.
- Clicking on any of the Featured Categories will redirect the user to another page where at least 3 products of that category will be displayed.
- Each product card on this page should show the following properties:
  - Image
    - Product Name
    - Category
    - Price
    - Status ( In Stock | Out of stock)
    - Rating (Out of 5 Stars)
- Each product retrieved after querying on this page will also be clickable and should take the user to the product detail page.

### Product Detail Page / Route: (SSG implementation)

- Product Details:
  - Each PC Component must have the following properties:
    - Image
    - Product Name
    - Category
    - Status: In Stock | Out of stock
    - Price
    - Description
    - Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
    - Individual Rating (Out of 5 Stars)
    - Average Rating (Out of 5 Stars)
    - Reviews

### PC Builder Page: (SSR implementation)

- The PC Builder page should have category sections as follows:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
- Each category will have a **Choose/Select** Button.
- Clicking on the **Choose/Select** Button will take the user to another page where at least 3 components of that specific category will be displayed.
- Each component card on this page should show the following properties:
  - Image
  - Product Name
  - Category
  - Price
  - Status
  - Rating
- Each component card on that page will have an **Add To Builder** Button.
- Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below. (I have used Redux)
- After adding at least 5 - 6 Components (CPU, RAM, Power Supply, Storage, Motherboard, Casing), the user will be able to click on the **Complete Build** button. (This button will be disabled unless the user adds at least 5-6 of the mentioned components)


- The PC Builder Page has a protected/private route (only logged-in users can visit this route). I used NextAuth with at least one social login (Google/Github) provider to enable user authentication.
- Clicking on the **Complete Build** button will show a success alert.
- The Home page should also have a hero section/banner section and a footer.
- The entire application must be responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices.
- Create a [ReadMe.md](http://ReadMe.md) file describing our application, explaining its features, and providing clear instructions on how to run the project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
