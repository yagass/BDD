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
     db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, price FLOAT, photo TEXT, like BOOLEAN)');  
  //  } 
   db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)', 'gta','100','https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47','true');
   db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)', 'fifa','150','https://file-cdn.scdkey.com/product/20180615165312_scdk.jpg','true');
   db.run('INSERT INTO products (name,price,photo,like) VALUES (?, ?, ?, ?)', 'asphalt','90', 'https://m.media-amazon.com/images/M/MV5BMDdlYjYwMDktZmM5MC00NTMzLWFjYTgtMGU4ZWNjYTJlYjhhXkEyXkFqcGdeQXVyODA0ODUyOTk@._V1_UY268_CR69,0,182,268_AL_.jpg','true');
  
 
   db.all('SELECT * FROM products', function (error, data) { 
     if (!error) console.log(data); 
     else console.log(error); 
   }); 
 })

app.get ('/', function (request,response) {
  db.all('SELECT * FROM products', function (error,data){
    response.send(data);
  })
});
 app.listen(3000,function(error){ console.log ( 'app listening port 3000');


 })