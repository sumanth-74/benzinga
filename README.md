# BENZINGA EARNINGS WIDGET
**Functionality Overview**
**Purpose:**

The widget displays the most anticipated earnings releases for the current week, categorized by days and times (Before Open and After Close).

**Key Features:**
Dynamic Data Fetching: Fetches earnings data and company logos from Benzinga's API.
Categorization: Organizes earnings data by day and time for better readability.
Interactive UI: Clicking on a company redirects users to its detailed page on Benzinga.
Loading States: Displays shimmer effects while data is being fetched.
Error Handling: Provides user-friendly error messages and retry options.
Responsive Design:
The widget is fully responsive, ensuring usability across devices with varying screen sizes.

**Performance Improvements**

Caching API Responses:
Implemented a caching mechanism using localStorage to reduce redundant API calls.
Cached data is validated against a maximum age (5 minutes) to ensure freshness.
Optimized Data Processing:

Used reduce to efficiently organize earnings data by day and time.
Filtered recent earnings to limit the dataset to relevant information.
Lazy Loading Logos:

Logos are fetched only for the tickers present in the earnings data, reducing unnecessary API calls.
Shimmer Loading Effect:

Added a visually appealing shimmer effect to improve perceived performance during data loading.
Error Resilience:

Gracefully handles API failures with retry options, ensuring a better user experience.

**Technologies Used**
React: For building the component-based UI.
CSS: For styling and responsive design.
Benzinga API: For fetching earnings and logo data.
Vercel: For deployment and hosting.

I've deployed this to vercel and you can view it directly here: https://benzinga-earnings-widget.vercel.app/

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

I've written unit test cases for the required components.

![Screenshot 2025-04-18 at 2 43 31 PM](https://github.com/user-attachments/assets/f84fc4e4-1383-4489-a2b3-9d0a8e4aca83)



