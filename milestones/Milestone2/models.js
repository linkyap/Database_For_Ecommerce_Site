const { Database } = require('./database');
class TestModel {
  constructor(ctx) {
    this.ctx = ctx;
    this.author = ctx.author.username;
  }

  response() {
    return `Hi, ${this.author}. I am alive`;
  }
}
  // Retrieve all products with a stock quantity greater than a specified minimum stock quantity and a price higher than the average price of products in their category.
async function retrieveProductsAboveAveragePriceAndStock(minStockQuantity) {
  try {
    const query = `
      SELECT p.name, p.description, p.quantity, p.price
      FROM Product p
      JOIN Category c ON p.product_categoryId = c.categoryId
      WHERE p.quantity > ? AND p.price > (
        SELECT AVG(price)
        FROM Product
        WHERE product_categoryId = c.categoryId
      )
    `;
    const values = [minStockQuantity];

    const results = await Database.execute(query, values);

    return results;/////////////////////////////////////////////////////
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw error;
  }
}

// Retrieve all customers who have placed orders with a total amount greater than a specified minimum amount. Show the user name, email, and total amount of their orders.
async function retrieveCustomersWithTotalAmountGreaterThan(minAmount) {
  try {
    const query = `
      SELECT au.username, au.email, SUM(o.total_amount) as total_amount
      FROM Approved_User au
      JOIN orderr o ON au.approv_trackingId = o.order_trackingId
      GROUP BY au.approv_trackingId
      HAVING total_amount > ?
    `;

    const values = [minAmount];/////////////////////////////////////////////////////works neeed to fix username

    const results = await Database.execute(query, values);

    return results;
  } catch (error) {
    throw error;
  }
}

// For each category, calculate the average price of products, excluding any products with a price higher than the overall average price across all categories. Show the category name and the average price.
async function calculateAveragePricePerCategory() {
  try {
    const query = `
      SELECT c.name AS category_name, AVG(p.price) AS average_price
      FROM Product p
      JOIN Category c ON p.product_categoryId = c.categoryId
      GROUP BY c.categoryId
    `;

    const results = await Database.execute(query);

    return results;///////////////////////////////////////////////////////wroks w/o direct input
  } catch (error) {
    throw error;
  }
}

// Find the top N merchants with the highest total revenue. Show the merchant name and their total revenue.
async function findTopMerchantsWithHighestRevenue(limit) {
  try {
    const query = `
      SELECT m.store_name AS merchant_name, SUM(r.revenue) AS total_revenue
      FROM merchant m
      JOIN Product p ON m.merchant_trackingId = p.product_merchantId
      JOIN revenue r ON p.productId = r.revenue_productId
      GROUP BY m.store_name
      ORDER BY total_revenue DESC
      LIMIT ?
    `;

    const values = [limit];

    const results = await Database.execute(query, values);

    return results;
  } catch (error) {
    throw error;
  }
}

// Find the products that have received the most reviews and have prices between a specified minimum and maximum price that have been bought between two specified dates. Show the product name, number of reviews, and price.
async function findProductsWithMostReviewsBetweenDates(startDate, endDate, minPrice, maxPrice) {
  try {
    const query = `
      SELECT p.name AS product_name, COUNT(r.reviewId) AS num_reviews, p.price
      FROM Product p
      LEFT JOIN Review r ON p.productId = r.rev_productId
      WHERE r.creationDate BETWEEN ? AND ?
      AND p.price BETWEEN ? AND ?
      GROUP BY p.productId
      ORDER BY num_reviews DESC
    `;

    const values = [startDate, endDate, minPrice, maxPrice];/////////////////////////////////////////////////////

    const results = await Database.execute(query, values);

    return results;
  } catch (error) {
    throw error;
  }
}

// Find the customers who have subscribed to the newsletter and have made purchases totaling over a specified minimum amount or have bought more than a specified minimum number of items. Show the customer name and email.
async function findCustomersWithNewsletterSubscriptionAndTotalPurchases(minAmount, minItems) {
  try {
    const query = `
      SELECT au.username AS customer_name, au.email AS customer_email
      FROM Approved_User au
      JOIN orderr o ON au.approv_trackingId = o.order_trackingId
      WHERE o.total_amount > ? OR (SELECT SUM(quantity) FROM order_details WHERE orderdet_cartdId = au.approv_trackingId) > ?
    `;

    const values = [minAmount, minItems];/////////////////////////////////////////////////////

    const results = await Database.execute(query, values);

    return results;
  } catch (error) {
    throw error;
  }
}

// For each merchant, calculate the total value of their inventory, considering the quantity of each product and its corresponding price. Show the merchant name and the total value.
async function calculateTotalValueOfInventory() {/////////////////////////////////////////////////////
  try {
    const query = `
      SELECT m.store_name AS merchant_name, SUM(p.price * i.stock) AS total_value_of_inventory
      FROM merchant m
      JOIN Product p ON m.merchantId = p.product_merchantId
      JOIN Inventory i ON p.productId = i.inventory_productId
      GROUP BY m.merchantId
    `;

    const results = await Database.execute(query);

    return results;
  } catch (error) {
    throw error;
  }
}

// Find the products that are currently out of stock for a given merchant, considering the inventory quantity of each product. Show the product name, the merchant name, and the date the product was added to the inventory.
async function findOutOfStockProducts(merchantName) {/////////////////////////////////////////////////////works bbut prints out undefined
  try {
    const query = `
      SELECT p.name AS product_name, m.store_name AS merchant_name
      FROM Product p
      JOIN merchant m ON p.product_merchantId = m.merchantId
      JOIN Inventory i ON p.productId = i.inventory_productId
      WHERE i.stock = 0 AND m.store_name = ?
    `;
    const value = [merchantName]
    const results = await Database.execute(query,value);

    return results;
  } catch (error) {
    throw error;
  }
}

//      description: 'Find the products that have received the most reviews based on the category entered. Show the product name, the number of reviews, and the average rating. Additionally, only consider products that have an average rating higher than the overall average rating for all products.',
async function findProductsAboveAverageRating(categoryName) {
  try {
    const query = `
      SELECT p.name AS product_name, COUNT(r.rating) AS num_reviews, AVG(r.rating) AS avg_rating
      FROM Product p
      LEFT JOIN Review r ON p.productId = r.rev_productId
      WHERE p.product_categoryId = (SELECT categoryId FROM Category WHERE name = ?)
      GROUP BY p.productId
      HAVING AVG(r.rating) > (SELECT AVG(rating) FROM Review)
      ORDER BY num_reviews DESC
    `;

    const values = [categoryName];
    const results = await Database.execute(query, values);

    return results;
  } catch (error) {
    throw error;
  }
}

// Insert a new customer into the database with their email, username, password, and shipping address..
async function insertNewCustomer(username, password, email, approv_addressId, approv_trackingId) {
  try {
    const query = `
      INSERT INTO Approved_User (username, password, email, approv_addressId, approv_trackingId) VALUES (?, ?, ?, ?, ?)
    `;

    const values = [username, password, email, approv_addressId, approv_trackingId];

    const results = await Database.execute(query, values);

    return results.insertId;
  } catch (error) {
    throw error;
  }
}

// Insert a new product into the db, associating it with the specified category and merchant. Apply a discount to the newly added product.
async function insertNewProductWithDiscount(name, quantity, price, description, imageUrl, keywords, tags, categoryId, merchantId, discountId) {
  try {
    // Check if the provided discountId exists in the Discount table and get the discount_amount
    const discountQuery = `
      SELECT discount_amount
      FROM Discount
      WHERE discountId = ?
    `;
    const discountValues = [discountId];
    const discountResult = await Database.execute(discountQuery, discountValues);

    if (discountResult.length === 0) {
      throw new Error('Invalid discountId. No such discount exists.');
    }

    const discountAmount = discountResult[0].discount_amount;

    // Calculate the discounted price
    const discountedPrice = price - discountAmount;

    // Check if the provided merchantId exists in the merchant table
    const merchantQuery = `
      SELECT merchantId
      FROM merchant
      WHERE merchantId = ?
    `;
    const merchantValues = [merchantId];
    const merchantResult = await Database.execute(merchantQuery, merchantValues);

    if (merchantResult.length === 0) {
      throw new Error('Invalid merchantId. No such merchant exists.');
    }

    // Check if the provided categoryId exists in the Category table
    const categoryQuery = `
      SELECT categoryId
      FROM Category
      WHERE categoryId = ?
    `;
    const categoryValues = [categoryId];
    const categoryResult = await Database.execute(categoryQuery, categoryValues);

    if (categoryResult.length === 0) {
      throw new Error('Invalid categoryId. No such category exists.');
    }

    // Insert the new product into the Product table with the provided discountId, merchantId, and categoryId
    const query = `
      INSERT INTO Product (name, quantity, price, description, main_image_url, keywords, tags, product_categoryId, product_merchantId, discountId)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [name, quantity, discountedPrice, description, imageUrl, keywords, tags, categoryId, merchantId, discountId];
    const results = await Database.execute(query, values);

    return results.insertId;
  } catch (error) {
    throw error;
  }
}




// Update the price of all products in a specific category to a new value.
async function getCategoryIdByName(categoryName, newPrice) {
  try {
    const query = 'CALL UpdateProductPriceInCategory(?, ?)';
    const values = [categoryName, newPrice];

    // Call the stored procedure and get the result
    await Database.execute(query, values);

    // Fetch the output parameter (categoryId) from the session variable
    const result = await Database.execute('SELECT @categoryId as categoryId');
    return result[0].categoryId;
  } catch (error) {
    throw error;
  }
}


//description: 'Update the phone number of a merchant based on their merchant ID, but only if they have at least a specified minimum number of products with a stock quantity greater than a specified minimum stock quantity.',
async function updateMerchantPhoneNumberIfQualified(merchantId, minStockQuantity, minNumberOfProducts, newPhoneNumber) {
  try {
    // Check if the provided merchantId exists in the merchant table
    const merchantQuery = `
      SELECT merchantId
      FROM merchant
      WHERE merchantId = ?
    `;
    const merchantValues = [merchantId];
    const merchantResult = await Database.execute(merchantQuery, merchantValues);

    if (merchantResult.length === 0) {
      throw new Error('Invalid merchantId. No such merchant exists.');
    }

    // Check if the merchant meets the qualification requirements
    const qualificationQuery = `
      SELECT product_merchantId
      FROM Product
      WHERE quantity > ? 
      GROUP BY product_merchantId
      HAVING COUNT(*) >= ?
    `;
    const qualificationValues = [minStockQuantity, minNumberOfProducts];
    const qualificationResult = await Database.execute(qualificationQuery, qualificationValues);

    const qualifiedMerchants = qualificationResult.map((row) => row.product_merchantId);

    // Check if the merchant is qualified
    const isQualified = qualifiedMerchants.includes(merchantId);

    if (!isQualified) {
      // Merchant is not qualified, return false
      return false;
    }

    // Update the phone number of the merchant
    const updateQuery = `
      UPDATE merchant SET contact_details = ? WHERE merchantId = ?
    `;
    const updateValues = [newPhoneNumber, merchantId];
    const updateResult = await Database.execute(updateQuery, updateValues);

    return updateResult.affectedRows > 0;
  } catch (error) {
    throw error;
  }
}

// Delete a product from the db along with its associated inventory and reviews if the rating is lower than the average rating of all products.
async function deleteProductIfRatingBelowOverallAverage(productId) {
  try {
    const overallAverageQuery = `
      SELECT AVG(rating) AS overallAverage FROM Review;
    `;

    const overallAverageResult = await Database.execute(overallAverageQuery);
    const overallAverage = overallAverageResult[0].overallAverage;

    const query = `
      DELETE Product, Inventory, Review
      FROM Product
      LEFT JOIN Inventory ON Product.productId = Inventory.inventory_productId
      LEFT JOIN Review ON Product.productId = Review.rev_productId
      JOIN (SELECT AVG(rating) as avgRating FROM Review WHERE rev_productId = ?) AS Subquery
      WHERE Product.productId = ? AND (Review.rating IS NULL OR Subquery.avgRating < ?);
    `;

    const values = [productId, productId, productId, overallAverage];
    const results = await Database.execute(query, values);

    // Return a boolean indicating whether the product was deleted
    return results.affectedRows > 0;
  } catch (error) {
    throw error;
  }
}


// Delete a customer from the database, removing all their personal information, orders, and reviews if they have been created within the last month.
async function deleteCustomerIfCreatedWithinLastMonth(approv_trackingId) {
  try {
    const query = `
      DELETE FROM Approved_User
      WHERE approv_trackingId = ? AND approv_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `;

    const values = [approv_trackingId];
    const results = await Database.execute(query, values);

    return results.affectedRows > 0;
  } catch (error) {
    throw error;
  }
}



module.exports = {
  TestModel,
  retrieveProductsAboveAveragePriceAndStock,
  retrieveCustomersWithTotalAmountGreaterThan,
  calculateAveragePricePerCategory,
  findTopMerchantsWithHighestRevenue,
  findProductsWithMostReviewsBetweenDates,
  findCustomersWithNewsletterSubscriptionAndTotalPurchases,
  calculateTotalValueOfInventory,
  findOutOfStockProducts,
  findProductsAboveAverageRating,
  insertNewCustomer,
  insertNewProductWithDiscount,
  getCategoryIdByName,
  updateMerchantPhoneNumberIfQualified,
  deleteProductIfRatingBelowOverallAverage,
  deleteCustomerIfCreatedWithinLastMonth,
};
