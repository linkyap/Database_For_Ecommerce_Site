-- INSERTS-- INSERTS
 -- Script name: inserts.sql
   -- Author:      James Donnelly
   -- Purpose:     insert sample data to test the integrity of this database system
   
USE `ecommerceDB`;



-- General_User
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();



-- Account
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('username_1', 'Password_123!', 'john.doe@example.com', 'SessionData_abc123','1');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('user123', 'SecurePass987@', 'emily.smith@example.com', 'RandomSession_xyz456','2');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('johndoe91', 'RandomPwd456#', 'david.wilson@example.com', 'SecureSession_789pqr','3');


-- Sessions
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('1', '1');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('2', '2');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('3', '3');

-- newsletter
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ( 'john.doe@example.com','subscriibed','1'); 
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('emily.smith@example.com', 'subscribed','2');
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('david.wilson@example.com', 'subscribed','3');

-- service_ticket
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('login', 'john.doe@example.com', 'your_status_value','1');
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('missing item', 'emily.smith@example.com', 'your_status_value','2');
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('double charged', 'david.wilson@example.com', 'your_status_value','3');

-- Category
INSERT INTO Category (name, description) VALUES ('jewelery', 'gold,silver,earrings, braclet,rings');
INSERT INTO Category (name, description) VALUES ('electronics', 'anything with electrcity, tv , gamboys');
INSERT INTO Category (name, description) VALUES ('plants', 'any plants or for plants, seeds');

-- merchant
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('artisanAura', 'artisanAura', '12341243', '430-230-3230', 'sustainable jewelry','1');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('shopify', 'sh0p1fii', 'yessir', '930-234-2321', 'ecommerce system for easy store setup','2');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('zales', 'z4les', 'idekbro', '232-123-1231', 'big jewelry company','3');


-- Product
INSERT INTO Product (name, description, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('iphone', 'iphone 14', 'https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_blue__ce5igjmvhjua_large.jpg', '5', '14', '2', '2');
INSERT INTO Product (name, description, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('ring', 'gold ring', 'https://image.brilliantearth.com/media/diamond_ring_vto/GK/BE1D13065_yellow_Round_top_2_carat.png', '5', '14', '1', '1');
INSERT INTO Product (name, description, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'platinum necklace', 'https://www.datocms-assets.com/25216/1618868740-solitaire-pear-pendant-1-0ct-white-gold-front.jpg?q=50&ar=1%3A1&fit=crop&auto=format&fit=crop&crop=focalpoint&fp-z=1&w=1534', '5', '14', '1', '1');


-- Manufacturer
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('Rivian', '650-234-2345', '1');
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('Tesla', '650-224-2345', '2');
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('Rivian', '650-234-6445', '3');


-- address
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2900 greenwood dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2192 berkshire dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('1000 whipple ave', 'redwood city', 'us', 'ca', '94061');

-- Approved_User
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('yessir', 'john.doe@example.com', 'johndooo', '1', '1');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('bruh', 'emily.smith@example.com', 'ems', '2', '2');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('cmon)now', 'david.wilson@example.com', 'daviii', '3', '3');

-- Review
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('cool plant', '5', 'it was nice and green', '1', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('awesome pleton', '5', 'it was nice to use', '1', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad cord', '1', 'broke day after i got it', '2', '2');

-- product_image
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg', '1');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202305232133', '1');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_blue__ce5igjmvhjua_large.jpg', '1');

-- Inventory
INSERT INTO Inventory (stock, inventory_productId) VALUES ('0','1');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('0','2');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('300','3');

-- Cart
INSERT INTO Cart (cartId,totalwotax,cart_trackingId) VALUES ('1','10.32','1');
INSERT INTO Cart (cartId,totalwotax,cart_trackingId) VALUES ('2','200.99','2');
INSERT INTO Cart (cartId,totalwotax,cart_trackingId) VALUES ('3','10233.45','3');

-- Cart_detail
INSERT INTO Cart_detail (Quantity, cartdet_productId, cartdet_cartId) VALUES ('23', '1', '1');
INSERT INTO Cart_detail (Quantity, cartdet_productId, cartdet_cartId) VALUES ('3', '2', '1');
INSERT INTO Cart_detail (Quantity, cartdet_productId, cartdet_cartId) VALUES ('3', '2', '2');

-- shipping_address
INSERT INTO shipping_address (shippingId,ship_addressId) VALUES ('1','1');
INSERT INTO shipping_address (shippingId,ship_addressId) VALUES ('2','1');
INSERT INTO shipping_address (shippingId,ship_addressId) VALUES ('3','3');

-- billing_address
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('1','1');
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('2','1');
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('3','3');


-- shippingMethod
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('usps', '1.00', '10 days');
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('ups', '20.00', '2 days');
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('fedex', '29.00', '1 day');

-- orders
INSERT INTO orderr (orderStatus, paymentStatus, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', 'agsvhbejehcoq23', '1', '1', '1','1');
INSERT INTO orderr (orderStatus, paymentStatus, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', 'agsvhbsdcdejehcoq23', '1', '1', '3','1');
INSERT INTO orderr (orderStatus, paymentStatus, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', 'agsvhbejehcoqevrsd23', '2', '3', '1','2');

-- order_details
INSERT INTO order_details (orderdet_cartdId, orderdet_orderId, orderdet_productId,quantity) VALUES ('1', '1', '1','2');
INSERT INTO order_details (orderdet_cartdId, orderdet_orderId, orderdet_productId,quantity) VALUES ('2', '2', '2','20');
INSERT INTO order_details (orderdet_cartdId, orderdet_orderId, orderdet_productId,quantity) VALUES ('3', '3', '3','21');

-- wishlist
INSERT INTO wishlist (name, wish_approvedUserId, wish_productId) VALUES ('christmas', '1', '1');
INSERT INTO wishlist (name, wish_approvedUserId, wish_productId) VALUES ('christmas', '1', '2');
INSERT INTO wishlist (name, wish_approvedUserId, wish_productId) VALUES ('christmas', '1', '3');
-- Discount
INSERT INTO Discount (description, discount_amount, valid_till, valid_from) VALUES ('yearlong', '20.00', '2023-12-12', '2023-12-14');
INSERT INTO Discount (description, discount_amount, valid_till, valid_from) VALUES ('anualsale', '30.00', '2024-12-12', '2024-12-24');
INSERT INTO Discount (description, discount_amount, valid_till, valid_from) VALUES ('justcuz', '20.00', '2025-02-12', '2025-06-24');

-- revenue
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('200', '200.00', '130.00', '1');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('300', '3000.00', '2200.00', '2');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('100', '252.00', '130.00', '3');

-- payment_type
INSERT INTO payment_type (debit_credit, paypal, crypto) VALUES ('credit', 'false', 'false');
INSERT INTO payment_type (debit_credit, paypal, crypto) VALUES ('false', 'true', 'false');
INSERT INTO payment_type (debit_credit, paypal, crypto) VALUES ('debit', 'false', 'false');

-- payment_method
INSERT INTO payment_method (payment_details, method_paymenttypeId,method_trackingId) VALUES ('credit', '1','1');
INSERT INTO payment_method (payment_details, method_paymenttypeId,method_trackingId) VALUES ('crypto', '2','2');
INSERT INTO payment_method (payment_details, method_paymenttypeId,method_trackingId) VALUES ('debit', '3','3');


-- payment
INSERT INTO payment (amount, status, pay_paymentmethodId, pay_orderId,paymentId) VALUES ('20.00', 'paid', '1', '1','1');
INSERT INTO payment (amount, status, pay_paymentmethodId, pay_orderId,paymentId) VALUES ('200.00', 'paid', '2', '2','2');
INSERT INTO payment (amount, status, pay_paymentmethodId, pay_orderId,paymentId) VALUES ('30.22', 'paid', '3', '3','3');

-- products_added
INSERT INTO products_added (productadded_productId,productadded_trackingId) VALUES ('1','1');
INSERT INTO products_added (productadded_productId,productadded_trackingId) VALUES ('2','2');
INSERT INTO products_added (productadded_productId,productadded_trackingId) VALUES ('2','3');


-- promotional
INSERT INTO promotional (promo_discountId, promo_productId) VALUES ('1', '1');
INSERT INTO promotional (promo_discountId, promo_productId) VALUES ('1', '2');
INSERT INTO promotional (promo_discountId, promo_productId) VALUES ('1', '3');

