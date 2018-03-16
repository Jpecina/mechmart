SELECT * FROM users INNER JOIN orders ON users.authid = orders.user_order_id WHERE authid = $1



