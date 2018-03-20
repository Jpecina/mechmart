SELECT * FROM favorites INNER JOIN users ON favorites.user_favorites_id = users.authid WHERE authid = $1;
