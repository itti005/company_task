# company_task
Task: Write a code to get and display data in the data table using given endpoint

# XAMPP Installation Guide (Windows)

## Step-by-Step Guide for Installing XAMPP on Windows

### 1. Download XAMPP:
   Visit the official XAMPP website at [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html) and download the latest version of XAMPP for Windows.

### 2. Run the Installer:
   Execute the downloaded XAMPP installer file. If you encounter a User Account Control (UAC) warning, click "Yes" to proceed with the installation.

### 3. Select All Components:
   During the installation process, make sure to select all the components needed for your development environment, such as Apache, MySQL, PHP, and phpMyAdmin.

### 4. Choose Installation Folder:
   Choose the destination folder where you want to install XAMPP. The default location is usually in the `C:\` drive (`C:\xampp`), but you can select a different location if needed.

### 5. Install from VS Code Extensions:
   Open Visual Studio Code (VS Code), navigate to the Extensions view (`Ctrl+Shift+X`), and search for extensions like "PHP", "HTML", "JS In Browser," and "Live Server." Install these extensions to enhance your development experience.

### 6. Start Using XAMPP:
   - Start the XAMPP Control Panel.
   - Start the Apache and MySQL services.
   - Place your PHP, HTML, and JS files in the `htdocs` folder inside your XAMPP installation directory.
   - Access your projects by navigating to `http://localhost/` in your web browser.

## Additional Notes:
- XAMPP provides a local server environment for PHP development.
- Ensure that the required extensions in VS Code are installed for a seamless development experience.
- Regularly check for updates on the official XAMPP website.



# Mumbai News Web Application

## Overview
This web application fetches and displays the latest news headlines related to Mumbai from the given json file . 
## Features
- **Display News Table:**
  - Fetches news data from the given news  feed.
  - Presents the news in a tabular format using DataTables for enhanced functionality.

- **Table Columns:**
  - **Serial No.:** A sequential number assigned to each news entry.
  - **Title:** The headline of the news article.
  - **Description:** A brief summary or snippet of the news.
  - **Link:** A clickable link to the full news article.
  - **Publication Date:** The date and time when the news was published.
  - **Author:** The author or creator of the news article.

- **Table Customization:**
  - Adjusts column widths for better readability.
  - Displays images associated with news entries.
    

- **Table Interaction:**
  - Enables pagination to handle a large number of news entries.
  - Provides an option to customize the number of entries displayed per page.
  - Implements a hover effect for better user interaction.

- **Styling and Design:**
  - Applies a clean and responsive design for a pleasant user experience.
  - Utilizes DataTables and custom CSS to enhance the visual appearance of the news table.

## Technologies Used
- HTML, CSS for structure and styling.
- JavaScript (jQuery) for asynchronous data fetching and dynamic content updates.
- PHP for server-side processing and data retrieval.
- DataTables library for interactive and responsive tables.


## How to Use
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Explore the latest news headlines related to Mumbai.

## License
This project is licensed under the [MIT License](LICENSE).
