# ⛟ShopEase — React Developer Machine Test

A modern, responsive e-commerce web application built with **React.js** and **Vite** as part of a React Developer Machine Test.

The application fetches products from the Fake Store API and provides a complete shopping-cart experience with product browsing, cart management, quantity controls, and persistent cart data.

---

## ▶️Live Demo

**Live URL🧑‍💻:** `YOUR_DEPLOYED_URL_HERE`

# ✨Features

## Home Page🏠︎

- Fetches products from the Fake Store API
- Displays product image
- Displays product title and category
- Displays product rating and review count
- Displays product price
- Add to Cart functionality
- Visual feedback after adding an item
- Loading state
- API error handling
- Responsive product grid
- Professional product cards

## Cart Page🛒

- Displays all selected products
- Displays product quantity
- Increase quantity
- Decrease quantity
- Remove products
- Dynamic subtotal
- Dynamic total price
- Dynamic cart item count
- Empty cart state
- Continue Shopping option
- Checkout UI
- Responsive layout

## Navigation📌

- Home navigation
- Cart navigation
- Dynamic cart badge
- Responsive navigation bar



# </>Tech Stack

- **React.js**
- **Vite**
- **React Router DOM**
- **JavaScript ES6+**
- **CSS3**
- **Lucide React**
- **Fake Store API**
- **Browser LocalStorage**



# 🔥API

The application uses the following API:


https://fakestoreapi.com/products



# 🚧Project Structure


react-machine-test/

│

├── public/

│

├── src/

│   │

│   ├── components/

│   │   ├── Navbar.jsx

│   │   └── ProductCard.jsx

│   │

│   ├── pages/

│   │   ├── Home.jsx

│   │   └── Cart.jsx

│   │

│   ├── App.jsx

│   ├── main.jsx

│   └── index.css

│

├── .gitignore

├── index.html

├── package.json

├── package-lock.json

├── vercel.json

└── README.md


# ➤Application Flow


                ┌─────────────────┐
                │    Home Page    │
                └────────┬────────┘
                         │
                         ▼
              Fetch products from API
                         │
                         ▼
                Display Product Cards
                         │
                         ▼
                  Add to Cart
                         │
                         ▼
                ┌─────────────────┐
                │    Cart Page    │
                └────────┬────────┘
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Increase    Decrease    Remove
          Quantity    Quantity     Product
             │           │           │
             └───────────┼───────────┘
                         ▼
                  Update Cart State
                         │
                         ▼
                 Recalculate Total


# 🖼️UI / UX

The interface was designed with a focus on:

- Clean visual hierarchy
- Consistent spacing
- Responsive layouts
- Clear call-to-action buttons
- Accessible button labels
- Professional icons
- Loading feedback
- Error feedback
- Empty-state feedback
- Consistent typography
- Product-focused presentation



# ⚛️React Architecture

The application follows a simple component-based architecture:

App
│
├── Navbar
│
└── Routes
    │
    ├── Home
    │   │
    │   └── ProductCard
    │
    └── Cart

### `App.jsx`⚛️

Responsible for:

- Cart state
- Cart operations
- LocalStorage
- Application routing

### `Navbar.jsx`⚛️

Responsible for:

- Application branding
- Navigation
- Cart count

### `Home.jsx`⚛️

Responsible for:

- API request
- Product loading
- Error state
- Product listing

### `ProductCard.jsx`⚛️

Responsible for:

- Product presentation
- Rating
- Price
- Add to Cart interaction

### `Cart.jsx`⚛️

Responsible for:

- Cart items
- Quantity management
- Product removal
- Order summary
- Total calculation


# 🌐Deployment

The project can be deployed to:

- Vercel

# 🖥️Testing Checklist

### Home Page🏠︎

- [x] API products load
- [x] Product images display
- [x] Product title displays
- [x] Category displays
- [x] Rating displays
- [x] Review count displays
- [x] Price displays
- [x] Add to Cart works
- [x] Added state is displayed
- [x] Loading state works
- [x] API error state works

### Cart Page🛒

- [x] Cart items display
- [x] Quantity displays
- [x] Increase quantity works
- [x] Decrease quantity works
- [x] Remove works
- [x] Subtotal updates
- [x] Total updates
- [x] Cart count updates
- [x] Empty cart state works
- [x] Continue Shopping works

### UI🖼️

- [x] Responsive design
- [x] Professional icons
- [x] Consistent spacing
- [x] Hover states
- [x] Loading feedback
- [x] Error feedback
- [x] Mobile layout
- [x] Desktop layout

### Persistence💪

- [x] Cart survives page refresh
- [x] Cart is stored in LocalStorage

---

# 🔜Future Improvements

For a production-level e-commerce application, the following could be added:

- Product search
- Category filters
- Price filters
- Product sorting
- Product detail page
- Wishlist
- User authentication
- Backend integration
- Server-side cart
- Order management
- Payment gateway
- Order history
- Toast notifications
- Dark mode
- TypeScript
- Unit testing
- Integration testing
- Redux Toolkit or Zustand
- Accessibility improvements
- SEO optimization

---

# ✍️Author

**Aneej R Suku**👨🏻‍💻

React Developer⚛️👨🏻‍💻

💼Portfolio:  https://my-portfolio-deployment-8zmo.vercel.app/

📌LinkedIn : https://www.linkedin.com/in/aneej-r-suku-ba6959217/

---

# 📜License

This project was developed for a React Developer Machine Test and is intended for demonstration and evaluation purposes.
