const { Database } = require('./database')
const { retrieveProductsAboveAveragePriceAndStock,
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
  deleteCustomerIfCreatedWithinLastMonth, } = require('./models');




async function testPeosCommand() {
  // example input chnge as desired
  const minStockQuantity = 10;

  try {
    // pass input
    const products = await retrieveProductsAboveAveragePriceAndStock(minStockQuantity);

    // print
    console.log('Products with stock greater than', minStockQuantity, ':');
    products.forEach((product) => {
      console.log('Name:', product.name);
      console.log('Description:', product.description);
      console.log('Stock Quantity:', product.quantity);
      console.log('Price:$', product.price);
      console.log('---------------------');
    });
  } catch (error) {
    console.error('Error retrieving products:', error);
  }
}



// call test function
testPeosCommand();





async function testCoCommand() {
  // example input chnge as desired
  const minAmount = 100;

  try {
    // pass input
    const customers = await retrieveCustomersWithTotalAmountGreaterThan(minAmount);

    // print
    console.log(`Customers with total amount greater than $${minAmount}:`);
    customers.forEach((customer) => {
      console.log('Username:', customer.username);
      console.log('Email:', customer.email);
      console.log('Total Amount:$', customer.total_amount);
      console.log('---------------------');
    });
  } catch (error) {
    console.error('Error retrieving customers:', error);
  }
}

// call func
testCoCommand();



async function testCatavgCommand() {
  try {
    // call func
    const categories = await calculateAveragePricePerCategory();

    // results
    console.log('Average Price per Category:');
    categories.forEach((category) => {
      console.log(`${category.category_name} - Average Price: $${category.average_price.toFixed(2)}`);
    });
    console.log('---------------------');
  } catch (error) {
    console.error('Error calculating average price per category:', error);
  }
}

// call func
testCatavgCommand();



async function testTopnCommand() {
  //example input chnge as desired
  const limit = 5; 
  
  try {
    // pass arg
    const topMerchants = await findTopMerchantsWithHighestRevenue(limit);

    // print out
    console.log(`Top ${limit} Merchants by Total Revenue:`);
    console.log('---------------------');
    topMerchants.forEach((merchant) => {
    console.log(`${merchant.merchant_name} - Total Revenue: $${merchant.total_revenue.toFixed(2)}`);
       console.log('---------------------');
    });
  } catch (error) {
    console.error('Error finding top merchants:', error);
  }
}

// call dunc
testTopnCommand()




async function testChosenprodCommand() {
  // example input chnge as desired
  const minPrice = 10;
  const maxPrice = 5000;
  const startDate = '2023-01-01';
  const endDate = '2023-12-31';
  
  try {
    //pass args
    const products = await findProductsWithMostReviewsBetweenDates(startDate, endDate, minPrice, maxPrice);

    // print
    console.log(`Products with most reviews between ${startDate} and ${endDate} and price between $${minPrice} and $${maxPrice}:`);
    console.log('---------------------');
    products.forEach((product) => {
      console.log(`${product.product_name} - Reviews: ${product.num_reviews} - Price: $${product.price.toFixed(2)}`);
    console.log('---------------------');});
  } catch (error) {
    console.error('Error finding products with most reviews:', error);
  }
}

//call func
testChosenprodCommand();





async function testNewsCommand() {
  // example input chnge as desired
  const minAmount = 100;
  const minItems = 3;
  
  try {
    // pass args
    const customers = await findCustomersWithNewsletterSubscriptionAndTotalPurchases(minAmount, minItems);

    // pprint
    console.log(`Customers subscribed to the newsletter with total purchases over $${minAmount} or more than ${minItems} items:`);
    customers.forEach((customer) => {
      console.log(`${customer.customer_name} (${customer.customer_email})`);
    });
    console.log('---------------------');
  } catch (error) {
    console.error('Error finding customers with newsletter subscription:', error);
  }
}

// call func
testNewsCommand();




async function testTotalupCommand() {
  try {
    // function call
    const merchantsInventoryValue = await calculateTotalValueOfInventory();

    // print
    console.log('Total Value of Inventory for Each Merchant:');
    merchantsInventoryValue.forEach((merchant) => {
      console.log(`${merchant.merchant_name} - Total Inventory Value: $${merchant.total_value_of_inventory.toFixed(2)}`);
    });
    console.log('---------------------');
  } catch (error) {
    console.error('Error calculating total value of inventory:', error);
  }
}

// call func
testTotalupCommand();





async function testOofsCommand() {
  // example input chnge as desired
  const merchantName = "artisanAura";
  
  try {
    // call
    const outOfStockProducts = await findOutOfStockProducts(merchantName);

    // print
    console.log(`Out of Stock Products for Merchant "${merchantName}":`);
    outOfStockProducts.forEach((product) => {
      console.log(`${product.product_name} - Merchant: ${product.merchant_name} - Added to Inventory: ${product.date_added}`);
      console.log('---------------------');
    });
  } catch (error) {
    console.error('Error finding out of stock products:', error);
  }
}

//call func
testOofsCommand();




async function testHighprodCommand() {
  //example input chnge as desired
  const categoryName = "jewelery";
  
  try {
    // pass args
    const highReviewProducts = await findProductsAboveAverageRating(categoryName);

    // print
    if (highReviewProducts.length === 0) {
      console.log(`No products found in the '${categoryName}' category with an above-average rating.`);
    } else {
      console.log(`Products with most reviews and above average rating in category '${categoryName}':`);
      highReviewProducts.forEach((product) => {
        console.log(`${product.product_name} - Reviews: ${product.num_reviews} - Average Rating: ${product.avg_rating.toFixed(2)}`);
        console.log('---------------------');
      });
    }
  } catch (error) {
    console.error('Error finding products with most reviews above average rating:', error);
  }
}

// call func
testHighprodCommand();




async function testInsertCommand() {
  // example input chnge as desired
  const username = "newuser";
  const password = "newpassword";
  const email = "newuser@example.com";
  const approv_addressId = "4";
  const approv_trackingId = "10";
  
  try {
    // pass
    const newCustomerId = await insertNewCustomer(username, password, email, approv_addressId, approv_trackingId);

    // print
    console.log(`New customer with ID ${newCustomerId} has been inserted.`);
    console.log('---------------------');
  } catch (error) {
    console.error('Error inserting new customer:', error);
  }
}

// call func
testInsertCommand();



async function testNewprodCommand() {
  // example input chnge as desired
  const name = "gold neckalce";
  const quantity = 100;
  const price = 320;
  const description = "A new product with discount";
  const imageUrl = "https://example.com/gold-necklace.jpg";
  const keywords = "gold, necklace, discount";
  const tags = "necklace, gold, new";
  const categoryId = 1;
  const merchantId = 1;
  const discountId = 2;
  
  try {
    // call
    const productId = await insertNewProductWithDiscount(name, quantity, price, description, imageUrl, keywords, tags, categoryId, merchantId, discountId);

   //product
    const getProductQuery = `
      SELECT price
      FROM Product
      WHERE productId = ?
    `;
    const getProductValues = [productId];
    const getProductResult = await Database.execute(getProductQuery, getProductValues);

    if (getProductResult.length === 0) {
      throw new Error('Product with the given ID not found.');
    }

    const discountedPrice = getProductResult[0].price;

    // perint
    console.log('---------------------');
    console.log(`New product with ID ${productId} has been added to the database with price of $${price} with a discounted price of $${discountedPrice}.`);
    console.log('---------------------');
  } catch (error) {
    console.error(`Error inserting new product: ${error.message}`);
  }
}

//call func
testNewprodCommand();




async function testUpdateCommand() {
  // example input chnge as desired
  const categoryId = "1";
  const newPrice = 600;

  try {
    // pass args
    const categoryyy = await getCategoryIdByName(categoryId, newPrice);

    // print
    console.log('---------------------');
    console.log(`Updated all products in category "${categoryId}" to the new price $${newPrice.toFixed(2)}.`);
     console.log('---------------------');
  } catch (error) {
    console.error('Error updating product prices:', error);
  }
}

//call func
testUpdateCommand();



async function testPhoneupCommand() {
  //example input chnge as desired
  const merchantId = 1;
  const minStockQuantity = 10;
  const minNumberOfProducts = 1;
  const newPhoneNumber = "555-123-4567";

  try {
    // pass args
    const isMerchantQualified = await updateMerchantPhoneNumberIfQualified(merchantId, minStockQuantity, minNumberOfProducts, newPhoneNumber);

    //print
    console.log('---------------------');
     if (!isMerchantQualified) {
      console.log(`Merchant with ID ${merchantId} does not meet the qualification requirements and was not updated.`);
    } else {
      console.log(`Updated merchant with ID ${merchantId} with the new phone number.`);
       console.log('---------------------');
    }
  } catch (error) {
    console.error('Error updating merchant phone number:', error);
  }
}

//call func
testPhoneupCommand();




async function testRemvsoilCommand() {
  // example input chnge as desired
  const productId = 2;

  try {
    // pass args
    const productDeleted = await deleteProductIfRatingBelowOverallAverage(productId);

    // print
    if (productDeleted) {
      console.log(`Product with ID ${productId} has been deleted along with its associated inventory and reviews.`);
    } else {
      console.log(`Product with ID ${productId} was not deleted as its rating is not below the overall average.`);
      console.log('---------------------');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// call func
testRemvsoilCommand();





async function testRemvCommand() {
  // example input chnge as desired
  const customerId = 2;

  try {
    // pass args
    const isDeleted = await deleteCustomerIfCreatedWithinLastMonth(customerId);
console.log('---------------------');
    // print
    if (isDeleted) {
      console.log(`Customer with ID ${customerId} has been deleted along with their orders and reviews.`);
    } else {
      console.log(`Customer with ID ${customerId} has been created within the last month and cannot be deleted.`);
    }
    console.log('---------------------');
    
  } catch (error) {
    console.error('Error deleting customer:', error);
  }
}

//call func
testRemvCommand();