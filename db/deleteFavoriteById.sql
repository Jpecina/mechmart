DELETE FROM favorites WHERE favorites_id = $1;
SELECT * FROM favorites INNER JOIN users ON favorites.user_favorites_id = users.authid WHERE authid = $2;
