var games =[
    {
     price:100,
     name:"gta",
     categorie:"guerre",
     url: "https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47  ",
    
      like:true
    },




    {
    price:150,
    name:"fifa",
    categorie:"foot",
     url:"https://file-cdn.scdkey.com/product/20180615165312_scdk.jpg",
    like:false
    },


   { 
   price:90,
   name:"asphalt",
   categorie:"course",
   url:"https://m.media-amazon.com/images/M/MV5BMDdlYjYwMDktZmM5MC00NTMzLWFjYTgtMGU4ZWNjYTJlYjhhXkEyXkFqcGdeQXVyODA0ODUyOTk@._V1_UY268_CR69,0,182,268_AL_.jpg",
    like:false
},
 ];

// foreach pour parcourrir trous les elmts // love= contenaire
 var love = document.getElementById('love');
 games.forEach(function(produit) {

    var ladivduproduit = document.getElementById(produit.name);
    //creer une div
     var elmtProduit= document.createElement('div');
     elmtProduit.setAttribute('id',produit.name);
     love.appendChild(elmtProduit);
     

    //creer une img et un prix
     elmtProduit.innerHTML=produit.name +'<img src=" '+ produit.url+' ">'+ produit.price;

    //creer un bouton
     var button = document.createElement("button");
     button.setAttribute("id","button");
     document.getElementById(produit.name).appendChild(button);
     button.innerHTML= 'buy';


     //creer un coeur et like
     var like=document.createElement("i");
     like.setAttribute("class","fas fa-heart");
     document.getElementById(produit.name).appendChild(like);
     like.onclick = function(event) {
      if (produit.like == true) {
       like.innerHTML="",
       like.setAttribute ('class','fas fa-heart red')
         produit.like = false;
      }
      else {
        like.setAttribute('class', 'fas fa-heart');
        produit.like = true
      }
      console.log(produit.like); 
   }
  });



   // fonction like 


// exemple pour la serie game of trone 

//  $.get("https://swapi.co/api/people", function (data){    
//           data.results.forEach(function (personnage){   
//           console.log(personnage.name);               
//           const element=document.createElement("div")        
//                         element.innerHTML=personnage.name                     
//                                const ct= document.getElementById("container")                                          
//               ct.appendChild(element); 
//                })
//         })

// titre exemplaire

// recupere hello world dans mon dossier 
$.get('http://localhost:3000/', function (response, error){

console.log(response);
});

