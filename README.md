# BENZINGA EARNINGS WIDGET

The widget is deployed on **Vercel**. You can access the live version https://benzinga-earnings-widget.vercel.app/

---

### `Functionality Overview`

**Purpose:**

The widget displays the most anticipated earnings releases for the current week, categorized by days and times (Before Open and After Close).

## Features
- **Dynamic Data Fetching**: Fetches earnings data and company logos from Benzinga's API.
- **Categorization**: Organizes earnings data by day and time for better readability.
- **Interactive UI**: Clicking on a company redirects users to its detailed page on Benzinga.
- **Loading States**: Displays shimmer effects while data is being fetched.
- **Error Handling**: Provides user-friendly error messages and retry options.
- **Responsive Design**: Fully responsive for all screen sizes.

---

## Visual Enhancements
- **Background Shade**: The widget includes a subtle background text "EARNINGS WHISPERS" in light grey as shown in the assignment screenshot.
- **Shimmer Effect**: Added a visually appealing shimmer effect to improve perceived performance during data loading.

---

## Performance Optimizations
- **Caching API Responses**: API responses are cached in `localStorage` to reduce redundant API calls. Also cached data is validated against a maximum age (5 minutes) to ensure freshness.
- **Lazy Loading**: Logos are fetched only for the tickers present in the earnings data.
- **Efficient Data Processing**: Data is filtered and organized using optimized utility functions like reduce etc.

---

### `Technologies Used:`
- **React**:  For building the component-based UI.
- **CSS**:  For styling and responsive design.
- **Benzinga API**: For fetching earnings and logo data.
- **Vercel**: For deployment and hosting.

---

## File Structure
- **EarningsCalendarWidget.js**: Main component rendering the widget.
- **EarningsDay.js**: Subcomponent for displaying earnings data for a specific day.
- **EarningsItem.js**: Subcomponent for individual earnings items.
- **EarningsUtils.js**: Utility functions for filtering and organizing data.
- **EarningsApi.js**: Handles API calls with caching.

---

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

I've written unit test cases for the required components.

### `Preview of widget`

![Screenshot 2025-04-18 at 3 35 37 PM](https://github.com/user-attachments/assets/afc68ad1-2228-4dc7-97c1-22ecc0d19a39)



