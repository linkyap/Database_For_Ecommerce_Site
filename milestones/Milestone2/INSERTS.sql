-- INSERTS-- INSERTS
 -- Script name: inserts.sql
   -- Author:      James Donnelly
   -- Purpose:     insert sample data to test the integrity of this database system
   
USE `ecommerceDB`;



-- General_User
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
INSERT INTO General_user ()VALUES ();
-- Account
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('username_1', 'Password_123!', 'john.doe@example.com', 'SessionData_abc123','1');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('user123', 'SecurePass987@', 'emily.smith@example.com', 'RandomSession_xyz456','2');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('johndoe91', 'RandomPwd456#', 'david.wilson@example.com', 'SecureSession_789pqr','3');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('user38', 'P123!', 'ring.doe@example.com', 'SessionData_abc123','4');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('ur123', 'SrePss987@', 'emily.savedra@example.com', 'RandomSession_xyz456','5');
INSERT INTO Account (username, password, email, sessionData, acc_trackingId) VALUES ('davdoe91', 'Rad456#', 'david.321@example.com', 'SecureSession_789pqr','6');


-- Sessions
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('1', '1');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('2', '2');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('3', '3');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('4', '4');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('5', '5');
INSERT INTO Sessions (sessionId,  seesion_accountId) VALUES ('6', '6');

-- newsletter
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ( 'john.doe@example.com','subscribed','1'); 
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('emily.smith@example.com', 'subscribed','2');
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('david.wilson@example.com', 'subscribed','3');
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ( 'ring.doe@example.com','subscribed','4'); 
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('emily.savedra@example.com', 'subscribed','5');
INSERT INTO newsletter (email, status, newsltr_trackingId) VALUES ('david.321@example.com', 'subscribed','6');

-- service_ticket
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('login', 'john.doe@example.com', 'your_status_value','1');
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('missing item', 'emily.smith@example.com', 'your_status_value','2');
INSERT INTO service_ticket (issue, email, status,ticket_trackingId) VALUES ('double charged', 'david.wilson@example.com', 'your_status_value','3');

-- Category
INSERT INTO Category (name, description) VALUES ('jewelery', 'gold,silver,earrings,braclet,rings,diamonds');
INSERT INTO Category (name, description) VALUES ('electronics', 'anything with electrcity, tv , gamboys');
INSERT INTO Category (name, description) VALUES ('plants', 'any plants or for plants, seeds');

-- merchant
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('artisanAura', 'artisanAura', '12341243', '430-230-3230', 'sustainable jewelry','1');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('shopify', 'sh0p1fii', 'yessir', '930-234-2321', 'ecommerce system for easy store setup','2');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('zales', 'z4les', 'idekbro', '232-123-1231', 'big jewelry company','3');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('pandora', 'p@nd0ra', 'yuoguess', '765-536-2342', 'jewelry','4');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('appl3', '@pple', 'neveeea', '543-232-5437', 'electronics','5');
INSERT INTO merchant (store_name, username, password, contact_details, buisness_info, merchant_trackingId) VALUES ('', 'z4les', 'bangsegmenttation', '543-2342-2142', 'big jewelry company','6');

-- Product
INSERT INTO Product (name, description, quantity, price,main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('diamond earrings', '1carat diamond earrings', '31', '1400', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb-kBxYR-4xTbhfL81kLPfgtv8KTOa1AiJZjI_X0oP2HenSOJo97LZW-p6fxalCjmBnc&usqp=CAU', '5', '14', '1', '1');
INSERT INTO Product (name, description, quantity, price,main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('ring', 'gold ring', '21', '300','https://image.brilliantearth.com/media/diamond_ring_vto/GK/BE1D13065_yellow_Round_top_2_carat.png', '5', '14', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'platinum necklace',  '11', '3220','https://www.datocms-assets.com/25216/1618868740-solitaire-pear-pendant-1-0ct-white-gold-front.jpg?q=50&ar=1%3A1&fit=crop&auto=format&fit=crop&crop=focalpoint&fp-z=1&w=1534', '5', '14', '1', '3');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'tar necklace',  '11', '120','idkt.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'moonstone necklace',  '11', '820','idkm.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'opal necklace',  '11', '320','idko.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'emerald necklace',  '11', '920','idke.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'saphhire necklace',  '11', '720','idks.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('necklace', 'ruby necklace',  '11', '420','idkr.com', 'necklace', 'necklace', '1', '1');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('iphonx', 'phonex',  '141', '800','idkx.com', 'phone', 'apple,new', '2', '6');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('iphone14', 'phone14',  '234', '1400','idk14.com', 'phone', 'applenew', '2', '6');
INSERT INTO Product (name, description, quantity, price, main_image_url, keywords, tags, product_categoryId, product_merchantId) VALUES ('iphone13', 'phone13',  '231', '1200','idk13.com', 'phone', 'applenew', '2', '6');


-- Manufacturer
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('artisanAura', '650-234-2345', '1');
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('shopify', '650-224-2345', '2');
INSERT INTO Manufacturer (name, contact_info, manufact_productId) VALUES ('zales', '650-234-6445', '3');


-- address
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2900 greenwood dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2192 berkshire dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('1000 whipple ave', 'redwood city', 'us', 'ca', '94061');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2923 greenwood dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2121 berkshire dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('1993 whipple ave', 'redwood city', 'us', 'ca', '94061');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('4392 greenwood dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('2023 berkshire dr', 'san bruno', 'us', 'ca', '94066');
INSERT INTO address (street, city, county, state, postalcode) VALUES ('923 whipple ave', 'redwood city', 'us', 'ca', '94061');

-- Approved_User
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('yessir', 'john.doe@example.com', 'johndooo', '1', '1');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('bruh', 'emily.smith@example.com', 'ems', '2', '2');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('cmon)now', 'david.wilson@example.com', 'daviii', '3', '3');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('P123!', 'ring.doe@example.com', 'user38', '4', '4');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('SrePss987@', 'ring.doe@example.com', 'ur123', '5', '5');
INSERT INTO Approved_User (password, email, username, approv_addressId, approv_trackingId) VALUES ('Rad456#', 'ring.doe@example.com', 'davdoe91', '6', '6');


-- Review
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('amazing earrings', '5', 'it was nice and shiny', '1', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('wack earrings', '2', 'they were poorly set', '1', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad ring', '1', 'broke day after i got it', '2', '2');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('eh ', '3', 'it was nice and shiny', '1', '3');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('wack ', '2', 'they were poorly set', '6', '4');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('good', '5', 'broke day after i got it', '2', '5');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('amazing ', '4', 'it was nice and shiny', '1', '6');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('ok', '4', 'it was not poorly set', '6', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad ', '2', 'broke day after i got it', '2', '2');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('amazing ', '5', 'it was nice and shiny', '1', '3');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('wack ', '3', 'they were poorly set', '1', '4');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad ', '1', 'broke day after i got it', '2', '5');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('amazingingly normal ', '3', 'it was nice and shiny', '1', '6');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('wack ', '2', 'poor', '1', '1');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad at being bad', '4', 'nothing', '6', '2');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('amazing ', '5', 'it was nice and shiny', '1', '3');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('wacky good ', '5', 'they were greatly set', '6', '4');
INSERT INTO Review (title, rating, feedback, rev_productId, rev_approvedUserId) VALUES ('bad at being bad', '5', 'loved it', '6', '5');

-- product_image
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg', '12');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202305232133', '11');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_blue__ce5igjmvhjua_large.jpg', '10');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '9');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '8');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '7');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '6');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '5');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '4');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '3');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '2');
INSERT INTO product_image (image_Url, productimage_productId) VALUES ('123.jpg', '1');


-- Inventory
INSERT INTO Inventory (stock, inventory_productId) VALUES ('12','1');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('23','2');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('300','3');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('23','4');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('44','5');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('0','6');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('230','7');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('10','8');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('16','9');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('120','10');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('0','11');
INSERT INTO Inventory (stock, inventory_productId) VALUES ('22','12');
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
INSERT INTO shipping_address (shippingId,ship_addressId) VALUES ('2','2');
INSERT INTO shipping_address (shippingId,ship_addressId) VALUES ('3','3');

-- billing_address
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('1','1');
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('2','2');
INSERT INTO billing_address (billingId,bill_addressId) VALUES ('3','3');


-- shippingMethod
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('usps', '1.00', '10 days');
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('ups', '20.00', '2 days');
INSERT INTO shippingMethod (name, cost, estimateddeliverytime) VALUES ('fedex', '29.00', '1 day');

-- orders
INSERT INTO orderr (orderStatus, paymentStatus, total_amount, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', '1270','agsvhbejehcoq23', '1', '1', '1','1');
INSERT INTO orderr (orderStatus, paymentStatus, total_amount, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', '680','agsvhbsdcdejehcoq23', '2', '2', '3','2');
INSERT INTO orderr (orderStatus, paymentStatus, total_amount, shipping_tracking, order_billingId, order_shippingId, order_shippingmethodId, order_trackingId) VALUES ('pending', 'accepted', '930','agsvhbejehcoqevrsd23', '3', '3', '1','3');

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
INSERT INTO Discount (description, discount_amount, valid_till, valid_from) VALUES ('new', '30.00', '2023-08-01', '2023-12-24');
INSERT INTO Discount (description, discount_amount, valid_till, valid_from) VALUES ('justcuz', '20.00', '2025-02-12', '2025-06-24');

-- revenue
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('200', '200.00', '330.00', '1');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('300', '3000.00', '5200.00', '2');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('100', '252.00', '230.00', '3');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('200', '200.00', '330.00', '4');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('400', '3000.00', '1200.00', '5');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('600', '252.00', '330.00', '6');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('100', '200.00', '4430.00', '7');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('400', '1000.00', '4200.00', '8');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('200', '152.00', '430.00', '9');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('400', '200.00', '230.00', '10');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('600', '4000.00', '3200.00', '11');
INSERT INTO revenue (sales, revenue, profit, revenue_productId) VALUES ('100', '252.00', '230.00', '12');
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

