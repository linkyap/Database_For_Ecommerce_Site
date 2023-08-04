const { Client, Intents, Permissions } = require('discord.js');
const { Database } = require('./database');
const {
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
  deleteCustomerIfCreatedWithinLastMonth,} = require('./models'); // functions from models.js
const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: 3276799, // all intents
});

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  
  try {
    const dbConnection = await Database.connection(); // connect to database
    console.log(`${client.user.username} is connected to the remote database`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
});

const commands = [
  {
    name: 'peos',//////////////////////////////////////////////
    description: 'Retrieve all products with a stock quantity greater than a specified minimum stock quantity and a price higher than the average price of products in their category.',
    usage:' <minStockQuantity> ' ,
    execute: async (message, args) => {
      //get minstockquan input
      const minStockQuantity = parseInt(args[0]);
      
      try {
        // function passing input in
        const products = await retrieveProductsAboveAveragePriceAndStock(minStockQuantity);

        //send result to discord
        const productNames = products.map((product) =>          product.name).join(', ');
        message.channel.send(`Products with stock greater than ${minStockQuantity}: ${productNames}`);
      } catch (error) {
        console.error('Error retrieving products:', error);
        message.channel.send('An error occurred while retrieving products.');
      }
    },
  },//peos done 1
  {
    name: 'co',/////////////////////////////////////////////////////
    description: 'Retrieve all customers who have placed orders with a total amount greater than a specified minimum amount. Show the user name, email, and total amount of their orders.',
    usage:' <minAmount> ',
    execute: async (message, args) => {
      // get min amount from input
      const minAmount = parseFloat(args[0]);
      
      try {
        // call function and pass arg
        const customers = await retrieveCustomersWithTotalAmountGreaterThan(minAmount);

        // send result to discord
        
        const customerInfo = customers.map((customer) => `${customer.username} (${customer.email}) - Total Amount:     $${customer.total_amount}`).join('\n');
        message.channel.send(`Customers with total amount greater than $${minAmount}:\n${customerInfo}`);
      } catch (error) {
        console.error('Error retrieving customers:', error);
        message.channel.send('An error occurred while retrieving customers.');
      }
    },
  },//co done 2
  {
    name: 'catavg',/////////////////////////////////////////////////////
    description: 'For each category, calculate the average price of products, excluding any products with a price higher than the overall average price across all categories. Show the category name and the average price.',
    usage:'  ',
    execute: async (message, args) => {
      try {
        // no input atm call function
        const categories = await calculateAveragePricePerCategory();

        // send result to discord
        
        const categoryInfo = categories.map((category) => `${category.category_name} - Average Price: $${category.average_price.toFixed(2)}`).join('\n');
        message.channel.send(`Average Price per Category:\n${categoryInfo}`);
      } catch (error) {
        console.error('Error calculating average price per category:', error);
        message.channel.send('An error occurred while calculating average price per category.');
      }
    },
  },//catavg done 3
  {
    name: 'topn',//come back to
    description: 'Find the top N merchants with the highest total revenue. Show the merchant name and their total revenue.',
    usage:' <int> ',
    execute: async (message, args) => {
      // top N merchnats user input
      const limit = parseInt(args[0]);
      
      try {
        // call function and pass arg
        const topMerchants = await findTopMerchantsWithHighestRevenue(limit);

        // send result to discord
        
        const merchantInfo = topMerchants.map((merchant) => `${merchant.merchant_name} - Total Revenue: $${merchant.total_revenue.toFixed(2)}`).join('\n');
        message.channel.send(`Top ${limit} Merchants by Total Revenue:\n${merchantInfo}`);
      } catch (error) {
        console.error('Error finding top merchants:', error);
        message.channel.send('An error occurred while finding top merchants.');
      }
    },
  },//topn done 4
  {
    name: 'chosenprod',/////////////////////////////////////////////////////
    description: 'Find the products that have received the most reviews and have prices between a specified minimum and maximum price that have been bought between two specified dates. Show the product name, number of reviews, and price.',
    usage:' <minPrice> <maxPrice> <startDate>YYYY-MM-DD <endDate> ',
    execute: async (message, args) => {
      // get iargs from input
      const minPrice = parseFloat(args[0]);
      const maxPrice = parseFloat(args[1]);
      const startDate = args[2]; // date format: YYYY-MM-DD
      const endDate = args[3]; // date format: YYYY-MM-DD
      
      try {
        // call function and pass args in
        const products = await findProductsWithMostReviewsBetweenDates(startDate, endDate, minPrice, maxPrice);

        // send result to discord
        
        const productInfo = products.map((product) => `${product.product_name} - Reviews: ${product.num_reviews} - Price: $${product.price.toFixed(2)}`).join('\n');
        message.channel.send(`Products with most reviews between ${startDate} and ${endDate} and price between $${minPrice} and $${maxPrice}:\n${productInfo}`);
      } catch (error) {
        console.error('Error finding products with most reviews:', error);
        message.channel.send('An error occurred while finding products with most reviews.');
      }
    },
  },//chosenprod done 5
  {
    name: 'news',/////////////////////////////////////////////////////
    description: 'Find the customers who have subscribed to the newsletter and have made purchases totaling over a specified minimum amount or have bought more than a specified minimum number of items. Show the customer name and email.',
    usage:' <minAmount> <minItems> ',
    execute: async (message, args) => {
      // input from args
      const minAmount = parseFloat(args[0]);
      const minItems = parseInt(args[1]);
      
      try {
        // call function and pass args in
        const customers = await findCustomersWithNewsletterSubscriptionAndTotalPurchases(minAmount, minItems);

        // send result to discord
        
        const customerInfo = customers.map((customer) => `${customer.customer_name} (${customer.customer_email})`).join('\n');
        message.channel.send(`Customers subscribed to the newsletter with total purchases over $${minAmount} or more than ${minItems} items:\n${customerInfo}`);
      } catch (error) {
        console.error('Error finding customers with newsletter subscription:', error);
        message.channel.send('An error occurred while finding customers with newsletter subscription.');
      }
    },
  },//news done 6
  {
    name: 'totalup',/////////////////////////////////////////////////////
    description: 'For each merchant, calculate the total value of their inventory, considering the quantity of each product and its corresponding price. Show the merchant name and the total value.',
    usage:'  ',
    execute: async (message, args) => {
      try {
        // no input atm call func
        const merchantsInventoryValue = await calculateTotalValueOfInventory();

        // send result to discord
        
        const merchantInfo = merchantsInventoryValue.map((merchant) => `${merchant.merchant_name} - Total Inventory Value: $${merchant.total_value_of_inventory.toFixed(2)}`).join('\n');
        message.channel.send(`Total Value of Inventory for Each Merchant:\n${merchantInfo}`);
      } catch (error) {
        console.error('Error calculating total value of inventory:', error);
        message.channel.send('An error occurred while calculating total value of inventory.');
      }
    },
  },//totalup done 7
  {
    name: 'oofs',/////////////////////////////////////////////////////works 
    description: 'Find the products that are currently out of stock for a given merchant, considering the inventory quantity of each product. Show the product name, the merchant name, and the date the product was added to the inventory.',
    usage:' <merchantName> ',
    execute: async (message, args) => {
      // user input
      const merchantName = args.join(' ');
      
      try {
        // call function and pass arg
        const outOfStockProducts = await findOutOfStockProducts(merchantName);

        // send result to discord
        
        const productInfo = outOfStockProducts.map((product) => `${product.product_name} - Merchant: ${product.merchant_name} - Added to Inventory: ${product.date_added}`).join('\n');
        message.channel.send(`Out of Stock Products for Merchant "${merchantName}":\n${productInfo}`);
      } catch (error) {
        console.error('Error finding out of stock products:', error);
        message.channel.send('An error occurred while finding out of stock products.');
      }
    },
  },//oofs done 8
  {
     name: 'highprod',
     description: 'Find the products that have received the most reviews based on the category entered. Show the product name, the number of reviews, and the average rating. Additionally, only consider products that have an average rating higher than the overall average rating for all products.',
    usage:' <categoryName> ',
     execute: async (message, args) => {
        try {
          // categ chk
          const categoryName = args[0];
          if (!categoryName) {
            message.channel.send('Please provide a category name.');
            return;
          }
    
          // pass into fucntion
          const highReviewProducts = await findProductsAboveAverageRating(categoryName);
    
          // send to Discord
          if (highReviewProducts.length === 0) {
            message.channel.send(`No products found in the '${categoryName}' category with an above-average rating.`);
          } else {
            const productInfo = highReviewProducts.map((product) => `${product.product_name} - Reviews: ${product.num_reviews} - Average Rating: ${product.avg_rating.toFixed(2)}`).join('\n');
            message.channel.send(`Products with most reviews and above average rating in category '${categoryName}':\n${productInfo}`);
          }
        } catch (error) {
          console.error('Error finding products with most reviews above average rating:', error);
          message.channel.send('An error occurred while finding products with most reviews above average rating.');
        }
      },
  },//highprod done 9
  {
    name: 'insert',
    description: 'Insert a new customer into the database with their email, username, password, and shipping address.',
    usage:' <username> <password> <email> <addressId> <trackingId> ',
    execute: async (message, args) => {
      // args from user input
      const username = args[0];
      const password = args[1];
      const email = args[2];
      const approv_addressId = args[3];
      const approv_trackingId = args[4];
      
      try {
        // call function and pass args in
        const newCustomerId = await insertNewCustomer(username, password, email, approv_addressId, approv_trackingId);
  
        // send success message
        message.channel.send(`New customer with ID ${newCustomerId} has been inserted.`);
      } catch (error) {
        console.error('Error inserting new customer:', error);
        message.channel.send('An error occurred while inserting the new customer.');
      }
    },
  },//insert    done 10
  {
    name: 'newprod', // add new product with category and merchant and add discount to it
    description: 'Insert a new product into the db, associating it with the specified category and merchant. Apply a discount to the newly added product',
    usage:' <name> <quantity> <price> <description> <imageUrl> <keywords> <tags> <categoryId> <merchantId> <discountId> ',
    execute: async (message, args) => {
      try {
        // Get user input for the new product details
        const name = args[0];
        const quantity = parseInt(args[1]);
        const price = parseFloat(args[2]);
        const description = args[3];
        const imageUrl = args[4];
        const keywords = args[5];
        const tags = args[6];
        const categoryId = parseInt(args[7]);
        const merchantId = parseInt(args[8]);
        const discountId = parseInt(args[9]); // Get user input for the discountId
    
        // Call the insertNewProductWithDiscount function with the provided arguments
        const productId = await insertNewProductWithDiscount(name, quantity, price, description, imageUrl, keywords, tags, categoryId, merchantId, discountId);
    
        // Get the discounted price from the database by querying the inserted product
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
    
        message.channel.send(`New product with ID ${productId} has been added to the database with a discounted price of $${discountedPrice}.`);
      } catch (error) {
        message.channel.send(`Error inserting new product: ${error.message}`);
      }
    },
  },//newprod 11 done
  {
    name: 'update',
description: 'Update the price of all products in a specific category to a new value.',
usage: '<categoryName> <newPrice>',
execute: async (message, args) => {
  // check if passed
  if (args.length !== 2) {
    message.channel.send('Please provide both the category name and the new price.');
    return;
  }

  // input args
  const categoryName = args[0];
  const newPrice = parseFloat(args[1]);

  try {
    // get cat by procedure
    const categoryId = await getCategoryIdByName(categoryName, newPrice);

    // print
    message.channel.send(`Updated all products in category "${categoryName}" to the new price $${newPrice.toFixed(2)}.`);
  } catch (error) {
    console.error('Error updating product prices:', error);
    message.channel.send('An error occurred while updating product prices.');
  }
},
  },//update 12 done 
  {
   name: 'phoneup',
description: 'Update the phone number of a merchant based on their merchant ID, but only if they have at least a specified minimum number of products with a stock quantity greater than a specified minimum stock quantity.',
    usage:' <merchantId> <minStockQuantity> <minNumberOfProducts> <newPhoneNumber> ',
execute: async (message, args) => {
  // args
  const merchantId = parseInt(args[0]);
  const minStockQuantity = parseInt(args[1]);
  const minNumberOfProducts = parseInt(args[2]);
  const newPhoneNumber = args.slice(3).join(' '); 

  try {
    // pass the args
    const isMerchantQualified = await updateMerchantPhoneNumberIfQualified(merchantId, minStockQuantity, minNumberOfProducts, newPhoneNumber);

    // merchant qualified
    if (!isMerchantQualified) {
      message.channel.send(`Merchant with ID ${merchantId} does not meet the qualification requirements and was not updated.`);
    } else {
      message.channel.send(`Updated merchant with ID ${merchantId} with the new phone number.`);
    }
  } catch (error) {
    console.error('Error updating merchant phone number:', error);
    message.channel.send('An error occurred while updating merchant phone number.');
  }
}
,
  },//phoneup 13 done
  {
    name: 'remvsoil',
    description: 'Delete a product from the database along with its associated inventory and reviews if the rating is lower than the average rating of all products.',
    usage:' <productId> ',
    execute : async (message, args) => {
  const productId = parseInt(args[0]);

  try {
    // pass arg
    const productDeleted = await deleteProductIfRatingBelowOverallAverage(productId);

    if (productDeleted) {
      message.channel.send(`Product with ID ${productId} has been deleted along with its associated inventory and reviews.`);
    } else {
      message.channel.send(`Product with ID ${productId} was not deleted as its rating is not below the overall average.`);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    message.channel.send('An error occurred while deleting the product.');
  }
},
  },//remvsoil 14 done 
  {
  
     name: 'remv',
    description: 'Delete a customer from the database, removing all their personal information, orders, and reviews if they have been created within the last month.',
    usage:' <customerId> ',
    execute: async (message, args) => {
      // arg from input
      const customerId = parseInt(args[0]);
    
      try {
        // call function and pass arg
        const isDeleted = await deleteCustomerIfCreatedWithinLastMonth(customerId);
    
        if (isDeleted) {
          // send success message to discord
          message.channel.send(`Customer with ID ${customerId} has been deleted along with their orders and reviews.`);
        } else {
          // s if customer has been created within the last month
          message.channel.send(`Customer with ID ${customerId} has been created within the last month and cannot be deleted.`);
        }
      } catch (error) {
        console.error('Error deleting customer:', error);
        message.channel.send('An error occurred while deleting the customer.');
      }
    },
  },//remv 15 done

];

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!')) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const selectedCommand = commands.find((cmd) => cmd.name === command);
  if (selectedCommand) {
    const { execute } = selectedCommand;
    execute(message, args);
  } else {
    // list existing commands if invalid
    const commandList = commands.map((cmd) => cmd.name).join(', ');
    message.channel.send(`Invalid command. Available commands: ${commandList}`);
  }
});

client.login(TOKEN);
