-- #   ---------------- order_detail  ----------------
-- #   ---------------- order_detail  ----------------
-- #   ---------------- order_detail  ----------------
-- Thêm chi tiết đơn hàng
DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_ADD(
    IN dt_order_id INT,
    IN dt_product_id INT,
    IN dt_quantity INT,
    IN dt_price DOUBLE
)
BEGIN
INSERT INTO order_detail (order_id, product_id, quantity, price)
VALUES (dt_order_id, dt_product_id, dt_quantity, dt_price);
END; //


-- Sửa thông tin chi tiết đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_UPDATE(
    IN dt_order_id INT,
    IN dt_product_id INT,
    IN dt_quantity INT,
    IN dt_price DECIMAL(10, 2)
)
BEGIN
UPDATE order_detail
SET quantity = dt_quantity, price = dt_price
WHERE order_id = dt_order_id AND product_id = dt_product_id;
END; //


-- Xoá chi tiết đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_DELETE(
    IN dt_order_id INT,
    IN dt_product_id INT
)
BEGIN
DELETE FROM order_detail WHERE order_id = dt_order_id AND product_id = dt_product_id;
END; //


-- Lấy tất cả chi tiết đơn hàng
DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_FY_BY_ALL()
BEGIN
SELECT * FROM order_detail;
END; //


-- Lấy chi tiết đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_FY_BY_ID(
    IN dt_order_id INT,
    IN dt_product_id INT
)
BEGIN
SELECT * FROM order_detail WHERE order_id = dt_order_id AND product_id = dt_product_id;
END; //


DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_SORT_BY_QUANTITY()
BEGIN
SELECT * FROM order_detail
ORDER BY quantity;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ORDER_DETAIL_SORT_BY_PRICE()
BEGIN
SELECT * FROM order_detail
ORDER BY price;
END //
DELIMITER ;