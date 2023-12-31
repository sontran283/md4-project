-- #   ---------------- orders  ----------------
-- #   ---------------- orders  ----------------
-- #   ---------------- orders  ----------------


DELIMITER //
CREATE PROCEDURE ORDER_ADD(
    IN or_customer_id INT,
    IN or_total DOUBLE,
    IN or_phone varchar(25),
    IN or_address text,
    IN or_note varchar(255),
    OUT order_id int
)
BEGIN
    INSERT INTO orders (customer_id, total, phone, address, note)
    VALUES (or_customer_id, or_total, or_phone, or_address, or_note);

    SELECT LAST_INSERT_ID() INTO order_id;
END //
DELIMITER ;

-- Lấy tất cả đơn hàng
DELIMITER //
CREATE PROCEDURE ORDER_FY_BY_ALL()
BEGIN
    SELECT * FROM orders;
END //
DELIMITER ;


-- #update trạng thái
DELIMITER //
CREATE PROCEDURE ORDER_CHANGE_STATUS(
    IN or_id INT,
    IN or_status BIT
)
BEGIN
    UPDATE orders
    SET status = or_status
    WHERE order_id = or_id;
END //
DELIMITER ;


-- Sửa thông tin đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_UPDATE(
    IN or_order_id INT,
    IN or_customer_id INT,
    IN or_total DOUBLE,
    IN or_status BIT
)
BEGIN
    UPDATE orders
    SET customer_id = or_customer_id,
        total       = or_total,
        status      = or_status
    WHERE order_id = or_order_id;
END //
DELIMITER ;


-- Xoá đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_DELETE(
    IN or_order_id INT
)
BEGIN
    DELETE FROM orders WHERE order_id = or_order_id;
END //
DELIMITER ;


-- Lấy đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_FY_BY_ID(
    IN or_id INT
)
BEGIN
    SELECT * FROM orders WHERE order_id = or_id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE ORDERS_SORT_BY_DATE()
BEGIN
    SELECT *
    FROM orders
    ORDER BY order_date;
END //
DELIMITER ;

DELIMITER //


CREATE PROCEDURE ORDERS_SEARCH_BY_NAME(IN search_name VARCHAR(255))
BEGIN
    SELECT o.*, c.name as customer_name
    FROM orders o
             JOIN customer c ON o.customer_id = c.customer_id
    WHERE c.name LIKE CONCAT('%', search_name, '%');
END //;


-- phân trang
DELIMITER //
create procedure ORDERS_PAGINATION(IN _limit int, IN no_page int, OUT total int)
BEGIN
    declare _offset int;
    SET _offset = (no_page - 1) * _limit;
    SET total = CEIL((SELECT count(*) FROM orders) / _limit);
    SELECT * FROM orders LIMIT _limit OFFSET _offset;
end;
//
delimiter //
create
    procedure proc_accept_or_deny_order(IN oId int, IN _status int)
BEGIN
    UPDATE orders SET status = _status WHERE order_id = oId;
END;

-- Lấy đơn hàng theo ID
DELIMITER //
CREATE PROCEDURE ORDER_FY_BY_USER_ID(
    IN or_id INT
)
BEGIN
    SELECT * FROM orders WHERE customer_id = or_id;
END //
DELIMITER ;

