import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "userPJBL",
    password: "admin1",
    database: "pjbl_usuarios"
});