 // je vais chercher le driver sqlite3 dans node_modules 
 const sqlite3 = require('sqlite3').verbose(); 
 const express = require ('express');
 const fs = require('fs'); 
 const app = express ();
 
 const dbFile = 'test.db'; 
 const db = new sqlite3.Database(dbFile); 


// la partie   permet de faire sqlite 3 au niveau du database
 // sans db.serialize. 
 // les operations sont lancées en même temps. 
 // le INSERT risque d'etre executé. 
 // avant que la creation de la table soit finie. 
 db.serialize( () => { 
 
  //  if ( !fs.existsSync(dbFile) ) { 
    // on a cree un tableau types
    db.run ('CREATE TABLE types(types_id INTEGER PRIMARY KEY AUTOINCREMENT, types_name TEXT UNIQUE)');
    db.run('INSERT INTO types (types_name) VALUES (?)', 'pc');
    db.run('INSERT INTO types (types_name) VALUES (?)', 'ps4');
    db.run('INSERT INTO types (types_name) VALUES (?)', 'xbox');
    db.run('INSERT INTO types (types_name) VALUES (?)', 'switch');
     
    // on a cree un tableau product
    db.run('CREATE TABLE products (products_id INTEGER PRIMARY KEY AUTOINCREMENT, products_name TEXT UNIQUE, price FLOAT, photo TEXT, like BOOLEAN, types_id INTEGER , FOREIGN KEY (types_id) REFERENCES  types(id))');  
     db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'gta',100,'https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47',true,2);
       db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'fifa',150,'https://file-cdn.scdkey.com/product/20180615165312_scdk.jpg',true,4);
       db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'asphalt',90, 'https://m.media-amazon.com/images/M/MV5BMDdlYjYwMDktZmM5MC00NTMzLWFjYTgtMGU4ZWNjYTJlYjhhXkEyXkFqcGdeQXVyODA0ODUyOTk@._V1_UY268_CR69,0,182,268_AL_.jpg',true,3);                      


   // on a creer un tableau link

       db.run ('CREATE TABLE links(link_id INTEGER PRIMARY KEY AUTOINCREMENT, like_name TEXT UNIQUE)');
       db.run('INSERT INTO links (like_name) VALUES (?)', 'A');
       db.run('INSERT INTO links (like_name) VALUES (?)', 'B');
       db.run('INSERT INTO links (like_name) VALUES (?)', 'C');
       
        







   db.all('SELECT * FROM products NATURAL JOIN links NATURAL JOIN types', function (error, data) { 
     if (!error) console.log(data); 
      else console.log(error); 
   }); 
 })

app.get ('/', function (request,response) {
  db.all('SELECT * FROM types NATURAL JOIN products NATURAL JOIN link', function (error,data){
    response.send(data);
  })
});
 //app.listen(3000,function(error){
  // if (!error) console.log ( 'app listening port 3000');


 //})

























































//  db.run('CREATE TABLE products (products_id INTEGER PRIMARY KEY AUTOINCREMENT, products_name TEXT UNIQUE, price FLOAT, photo TEXT, like BOOLEAN, types_id INTEGER , FOREIGN KEY (types_id) REFERENCES  types(id))');  
  
  

//    db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'gta','100','https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47','true',2);
//    db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'fifa','150','https://file-cdn.scdkey.com/product/20180615165312_scdk.jpg','true',4);
//    db.run('INSERT INTO products (products_name,price,photo,like,types_id) VALUES (?, ?, ?, ?, ?)', 'asphalt','90', 'https://m.media-amazon.com/images/M/MV5BMDdlYjYwMDktZmM5MC00NTMzLWFjYTgtMGU4ZWNjYTJlYjhhXkEyXkFqcGdeQXVyODA0ODUyOTk@._V1_UY268_CR69,0,182,268_AL_.jpg','true',3);
