# Optativa

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Bookshop</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Acme&family=Assistant&family=EB+Garamond&family=Ubuntu+Condensed&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Source+Serif+Pro:ital@1&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <style>
      body{
        background-color: rgb(235, 235, 235);
        text-align: justify;
      }
      li :hover {
        opacity: 0.60;
        color: #ff821c;
        margin-top: 10px;
        padding-bottom: 10px;
      }
      #imagen{
        position: relative;
        left: 60px;
      }
      #A{
        background-color: #f1b229;
        height: 90px;
        box-shadow: 0px 7px 1px #D9D6A6;
        border-radius: 0px 10px 50px ;
      }
      .navbar-brand{
        position:relative;
        left: 450px;
        font-size: 30px;
      }
      .nav-item{
        position: relative;
        left: 90px;
        padding: 10px;
        padding-top: 0px;
        font-size: 20px;
        margin-left: 0px;
      }
      a{
        text-decoration: none; 
        color: aliceblue;    
      }
      #carouselExampleCaptions{
        top: 7px;
        width: 1332px;
        position: relative;
        left: -109px;
      }
      #Car::before{
        content: "";
        position: absolute;
        top: 7px;
        width: 1332px;
        left: -109px;
        background: magenta;
      }
      h5{
        font-size: 40px;
        position: relative;
        top: -10px;
      }
      .container1{
        top: 10px;
        text-align: justify;
        height: 130px;
        padding: 30px 30px;
        margin: 7px;
        background-color: #f8b857;
        color: aliceblue;
        border-radius: 5px;
      }
      #letra{
        font-size: 17px;
      }
      .container2{
            margin-top: 30px;
      }
      #cardy1{
            width: 350px;
            height: 100px;
            position: relative;
            left: 115px;
            border-radius: 6px;
      }
      #efect:hover{
           transition: 0.2s;
           opacity: 0.6;
      }
      h5{
            font-family: 'Ubuntu Condensed', sans-serif;
      }
      .np{
        margin-left: 90px;
        font-family: 'Lobster', cursive;
        font-size: 60px;
      }
      #bookshop{
        background-color: #f8b857;
      }
      #C1{
        border-radius: 10px;
      }
      .card-title{
        text-align: center;
        font-family: 'Abril Fatface', cursive;
        font-size: 37px;
      }
      #botonC{
        position: relative;
        left: 78px;
        background-color: #DD9E73;
        border-color: #DD9E73;
        margin-left: 60px;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 160px;
      }
      #cardy3{
        width: 350px;
        height: 100px;
        position: relative;
        left: 210px;
      }
      .container3{
        background-color: #f1b229;
        margin-top: 40px;
        position: relative;
        color: rgb(131, 131, 131);
      }
      .d-block{
        font-size: 20px;
      }
      li:hover{
        transform: translate(10px);
        transition: 0.9s;   
      }
      small:hover{
        transition: 0.5s;
        transform: translate(10px);    
      }
      .logan{
        text-align: center;
        font-family: 'Source Serif Pro', serif;
        color: #e98400ee;
        margin-left: 20px;
      }
      .pp{
        margin-top: 40px;
        margin-left: 170px;
      }
      .pp2{
        margin-top: 460px;
        font-family: 'Amatic SC', cursive;
        font-size: 75px;
        text-align: center;
        color: #b6b276;
      }
      #in{
        font-family: 'EB Garamond', serif;
        font-size: 20px;
      }
      #shop{
        text-align: center;
      }
      #bookshop{
        background-color: #f8b857;
        height:900px;
        text-align: center;
      }
      #tar{
        font-family: 'Assistant', sans-serif;
      }
      .ap{
        margin-left: 30px;
        opacity: 30px;
      }
      #botonC{
        position: relative;
        left: -5px;
        background-color: #DD9E73;
        border-color: #DD9E73;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #i{
        width: 140px;
        position: relative;
        left: 80px;
      }
      #seccionabout{
        background-color: transparent;
        width: 100%;
        height: 100%;
      }
      #aboutus{
        text-align:center + justify;
        font-family: 'Tinos', serif;
        line-height:1.875em;
        position: 10px ;
        padding-left: 55%;
        padding-right: 5%;
      }
      #aboutus1{
        text-align:right + justify;
        font-family: 'cosa1';
        line-height:1.875em;
        font-size: 40px;
        padding-left: 55%;
        padding-right: 5%;
      }
      #figura{
      height: 655px;
      width: 650px;
      float: left;
      }
      #imagennn{
        height: 400px;
        width: 1000px;
      }
      #C1{
        border-radius: 10px;
      }
      #cardy1{
        width: 370px;
        height: 100px;
        position: relative;
        left: 160px;
        text-align: center;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 175px;
        text-align: center;
      }
      #cardy3{
        width: 356px;
        height: 100px;
        position: relative;
        left: 190px;
        text-align: center;
      }
      .footer3{
        grid-area: footer3;   
      }
      .tainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 2 auto;
        grid-template-areas: "navone   navone   navone"
                             "navtwo   navtwo   navtwo";
        max-width: 100%;
      }
      .navone{
        grid-area: navone;
      }
      .navtwo{
        grid-area: navtwo;
      }
      .products{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 3 auto;
        grid-template-areas: "Titulo2    Titulo2   Titulo2  Titulo2"
                              "product1  product2  product3  product4"
                              "product5  product6  product7  product8"
                              "titulo3   titulo3   titulo3   titulo3"
                              "last      last      last      last";
        
        gap: 5%;
        margin-top: 2%;
      }
      .Titulo2{
        grid-area: Titulo2;
      }
      .product1{
        grid-area: product1;
      }
      .product2{
        grid-area: product2;
      }
      .product3{
        grid-area: product3;
      }
      .product4{
        grid-area: product4;
      }
    </style>
</head>
<body>
    <div id="A"> 
        <nav class="navbar navbar-expand-lg navbar-dark " id="A">
            <div class="container-fluid" id="Navbar">
              <img src="logo.png" width="100" height="80"  alt="logo" id="imagen">
              <h1 class="np">Review Bookshop|</h1>
              <h2 class="logan">"The readers corner"</h2>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" ><a href="html.html"> Home</a></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#bookshop">Bookshop</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    <br>
        
    <div class="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
            </div>
            <div class="carousel-inner" >
              <div class="carousel-item active">
                <img src="https://libroveolibroleo.com/wp-content/uploads/2021/01/libreria-online.png" class="d-block w-100"  alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://queleerlibros.com/wp-content/uploads/2021/10/Tips-infalibles-para-cuidar-tus-libros..png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>

    <div class="container1">
      <p id="in">"Los libros largos, cuando se leen, son normalmente sobrevalorados, porque el lector quiere 
        convencer a los demas y a si mismo de que no ha perdido el tiempo." <br> -E.M. Foster.
      </p><br>
    </div>
      <br><br><br><br>
      <div class="container2">
        <div class="row row-cols-2 row-cols-md-3 g-30" >
          <div class="col" id="cardy1">
            <div class="card" id="C1">
              <div class="card-body">
                <h5 class="card-title">Misi??n</h5>
                <img src="https://i.pinimg.com/564x/23/32/3f/23323f792dd8fd35c178968759e48d58.jpg" alt="mision" width="75%">
                <p class="card-text" id="tar">Llevar la promoci??n de lectura y escritura a diversos turistas, mediante programas y proyectos 
                  que fomenten la interculturalidad, los valores, el pensamiento cr??tico, el pensamiento creativo y el amor por la lectura.<br></p>
              </div>
            </div>
          </div>
          <div class="col" id="cardy2">
            <div class="card" id="C1">
              <div class="card-body">
                <h5 class="card-title">Valores</h5>
                <img src="logo.png" alt="mision" width="95%">
                <p class="card-text" id="tar">
                    Vocacion de servicio <br>
                    Responsabilidad <br>
                    Formalidad <br>
                    Innovaci??n <br>
                    Pasi??n
                    <br><br>
                </p>
              </div>
            </div>
          </div>
          <div class="col" id="cardy3">
            <div class="card" id="C1">
              <div class="card-body">
                <h5 class="card-title">Visi??n</h5>
                <img src="https://eslamoda.com/wp-content/uploads/sites/2/2021/04/candles-and-books-photo-deas.jpeg" alt="mision" width="75%">
                <p class="card-text" id="tar">Ser un referente formador y promotor de la lectura dentro del Aeropuerto Internacional de Tocumen
                  para desarrollar el pensamiento creativo y reflexivo, mejorar la comunicaci??n verbal y escrita e incentivar la producci??n escrita 
                  de diversos textos.<br></p>
              </div>
            </div>
          </div>
          </div>
      </div>
    <br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <section id="seccionabout">
      <img src="https://64.media.tumblr.com/beda5b1a806724ecdced8ad1cfc9656a/a97df2410e650046-c1/s1280x1920/b1cb77109eec2b1f18267b7742ddafbe8fa236a5.jpg" class="img-fluid" class="card-img-top" class="rounded" alt="..." id="figura">
      <br><br><br><br><br>
      <h3 id="aboutus1">Review Bookshop</h3>
      <br><br> 
      <p id="aboutus">
        Naci?? de la necesidad de crear un espacio creativo y de interes para toda persona entusiasta a crear conocomiento mediante los libros.
        Desarrollamos un mundo lleno de imaginaci??n y oportunidades, donde ofrecemos diferentes generos de libros para todo p??blico.
        <br>
        Nuestra meta es poner al alcance de nuestros clientes la mejor selecci??n de libros. Al igual, que una experiencia centrada en nuestro 
        excelente servicio al cliente, nuestro personal capacitado d??a a d??a para proveer al cliente una experiencia ??nica. 
      </p>
     
      <br><br> <br><br><br><br>
    </section>
        <br><br><br><br>
        <section id="bookshop">
          <a href="bookshop" style="font-size: 60px; font-family: 'Abril Fatface', cursive; color: #ff821c;" id="shop">Bookshop</a>
        <div class="tainer" style="font-family: Poppins;">
          <div class="products" style="text-align: center;">
            <div class="product1">
             <div class="card" style="width: 18rem;">
               <img src="https://images-na.ssl-images-amazon.com/images/I/61rArrCpGvL.jpg" class="card-img-top" alt="Boulevard">
               <div class="card-body">
                 <h5 class="card-title">Boulevard</h5>
                 <spam> Flor M. Salvador <spam/>
                 <p class="card-text">$15.33</p>
               </div>
               <a href="formulario.html" class="btn btn-dark">Comprar</a>
             </div>
            </div>
            <div class="product2">
             <div class="card" style="width: 18rem;">
               <img src="https://images.penguinrandomhouse.com/cover/9781644735497" class="card-img-top" alt="Silence">
               <div class="card-body">
                 <h5 class="card-title">Silence</h5>
                 <spam> Flor M. Salvador <spam/>
                 <p class="card-text">$18.95</p>
                </div>
                <a href="formulario.html" class="btn btn-dark">Comprar</a>
             </div>
            </div>
            <div class="product3">
             <div class="card" style="width: 18rem;">
               <img src="https://m.media-amazon.com/images/I/41TCYOZgv4L.jpg" class="card-img-top" alt="Dune">
               <div class="card-body">
                 <h5 class="card-title">Dune</h5>
                 <spam> Frank Herbert <spam/>
                 <p class="card-text">$19.95</p>
                 </div>
                 <a href="formulario.html" class="btn btn-dark">Comprar</a>
             </div>
            </div>
            <div class="product4">
             <div class="card" style="width: 18rem;">
               <img src="https://thediaryofbooks.files.wordpress.com/2021/05/moxie-es-hora-de-pelear-9789877473766-urno-e1572996643215.jpg" class="card-img-top" alt="Moxie">
               <div class="card-body">
                 <h5 class="card-title">MOXIE</h5>
                 <spam> Jennifer Mathieu <spam/>
                 <p class="card-text">$17.00</p>
                </div>             
                 <a href="formulario.html" class="btn btn-dark">Comprar</a>
             </div>
            </div>
          </div>
       </div>
        </section>
        <br><br><br>
        <h1 style="font-family: 'Source Serif Pro', serif; text-align: center;">Upcoming Events</h1>
      <div class="container2">
        <div class="row row-cols-2 row-cols-md-3 g-30" >
          <div class="col" id="cardy1">
            <div class="card" id="C1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpG71nSKQ3kD_B3VL6rBIBH8jHTOT2Zl3nSQ&usqp=CAU" class="card-img-top" id="efect" alt="...">
              <div class="card-body">
                <h5 class="card-title">Author Interviews</h5>
                <p class="card-text" id="tar">dom, 19 enero | Atlapa<br><br></p>
              </div>
            </div>
          </div>
          <div class="col" id="cardy2">
            <div class="card" id="C1">
              <img src="https://www.newyorkenglishacademy.com/wp-content/uploads/2018/09/Poetry.png" class="card-img-top" id="efect" alt="...">
              <div class="card-body">
                <h5 class="card-title">Poetry Reading</h5>
                <p class="card-text" id="tar">mar, 22 abril | Altaplaza<br><br></p>
                
              </div>
            </div>
          </div>
          <div class="col" id="cardy3">
            <div class="card" id="C1">
              <img src="https://webosfritos.es/wp-content/uploads/2012/06/6465542869_febed17e03_b1-849x437.jpg" class="card-img-top" id="efect" alt="...">
              <div class="card-body">
                <h5 class="card-title">Book Signing</h5>
                <p class="card-text" id="tar">mier. 17 agosto | Albrook mall<br><br></p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
    <br><br><br><br> <br><br><br><br><br><br>
    <div class="container3">
      <footer class="container py-5">
        <h3 style="color: rgb(27, 27, 27); text-align: center; font-family: 'Tinos', serif;">Formulario de subscripcion</h3>
        <input type="email" value="correo electronico" size="30px" style="border-radius: 1px; background-color: transparent; margin-left: 36%;">
        <input type="submit" value="Enviar" style="background-color: black; color: whitesmoke;"> <br>
        <span style="color: rgb(27, 27, 27); font-family: 'Tinos', serif; margin-left: 43%;">Gracias por suscribirte!</span>
        <br><br><br>
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" width="20" height="20" style="margin-left: 48%;">
        <img src="twitter.png" width="20" height="20" style="margin-right: 48%;">
        <br>
            <!-- Copyright -->
            <div class="text-center p-3" style="color: black; font-size: 10px;">
              ??2021 by Revie Bookshop.
            </div>
            <!-- Copyright -->
      </footer>
    </div>
</body>
</html>

Forms:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Bookshop</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Acme&family=Assistant&family=EB+Garamond&family=Ubuntu+Condensed&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Source+Serif+Pro:ital@1&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="javas.js"></script>
    <style>
      body{
        background-color: rgb(235, 235, 235);
        text-align: justify;
      }
      li :hover {
        opacity: 0.60;
        color: #ff821c;
        margin-top: 10px;
        padding-bottom: 10px;
      }
      #imagen{
        position: relative;
        left: 60px;
      }
      #A{
        background-color: #f1b229;
        height: 90px;
        box-shadow: 0px 7px 1px #D9D6A6;
        border-radius: 0px 10px 50px ;
      }
      .navbar-brand{
        position:relative;
        left: 450px;
        font-size: 30px;
      }
      .nav-item{
        position: relative;
        left: 90px;
        padding: 10px;
        padding-top: 0px;
        font-size: 20px;
        margin-left: 0px;
      }
      a{
        text-decoration: none; 
        color: aliceblue; 
      }
      #carouselExampleCaptions{
        top: 7px;
        width: 1332px;
        position: relative;
        left: -109px;
      }
      #Car::before{
        content: "";
        position: absolute;
        top: 7px;
        width: 1332px;
        left: -109px;
        background: magenta;
      }
      h5{
        font-size: 40px;
        position: relative;
        top: -10px;
      }
      .container1{
        top: 10px;
        text-align: justify;
        height: 130px;
        padding: 30px 30px;
        margin: 7px;
        background-color: #f8b857;
        color: aliceblue;
        border-radius: 5px;
      }
      #letra{
        font-size: 17px;
      }
      .container2{
            margin-top: 30px;
      }
      #cardy1{
            width: 350px;
            height: 100px;
            position: relative;
            left: 115px;
            border-radius: 6px;
      }
      #efect:hover{
           transition: 0.2s;
           opacity: 0.6;
      }
      h5{
            font-family: 'Ubuntu Condensed', sans-serif;
      }
      .np{
        margin-left: 90px;
        font-family: 'Lobster', cursive;
        font-size: 60px;
      }
      #bookshop{
        background-color: #f8b857;
      }
      #C1{
        border-radius: 10px;
      }
      .card-title{
        text-align: center;
        font-family: 'Abril Fatface', cursive;
        font-size: 37px;
      }
      #botonC{
        position: relative;
        left: 78px;
        background-color: #DD9E73;
        border-color: #DD9E73;
        margin-left: 60px;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 160px;
      }
      #cardy3{
        width: 350px;
        height: 100px;
        position: relative;
        left: 210px;
      }
      .container3{
        background-color: #f1b229;
        margin-top: 40px;
        position: relative;
        color: rgb(131, 131, 131);
      }
      .d-block{
        font-size: 20px;
      }
      li:hover{
        transform: translate(10px);
        transition: 0.9s;   
      }
      small:hover{
        transition: 0.5s;
        transform: translate(10px);    
      }
      .logan{
        text-align: center;
        font-family: 'Source Serif Pro', serif;
        color: #e98400ee;
        margin-left: 20px;
      }
      .pp{
        margin-top: 40px;
        margin-left: 170px;
      }
      .pp2{
        margin-top: 460px;
        font-family: 'Amatic SC', cursive;
        font-size: 75px;
        text-align: center;
        color: #b6b276;
      }
      #in{
        font-family: 'EB Garamond', serif;
        font-size: 20px;
      }
      #tar{
        font-family: 'Assistant', sans-serif;
      }
      .ap{
        margin-left: 30px;
        opacity: 30px;
      }
      #botonC{
        position: relative;
        left: -5px;
        background-color: #DD9E73;
        border-color: #DD9E73;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #i{
        width: 140px;
        position: relative;
        left: 80px;
      }
      #seccionabout{
        background-color: transparent;
        width: 100%;
        height: 100%;
      }
      #aboutus{
        text-align:center + justify;
        font-family: 'Tinos', serif;
        line-height:1.875em;
        position: 10px ;
        padding-left: 55%;
        padding-right: 5%;
      }
      #aboutus1{
        text-align:right + justify;
        font-family: 'cosa1';
        line-height:1.875em;
        font-size: 40px;
        padding-left: 55%;
        padding-right: 5%;
      }
      #figura{
      height: 655px;
      width: 650px;
      float: left;
      }
      #imagennn{
        height: 400px;
        width: 1000px;
      }
      #C1{
        border-radius: 10px;
      }
      #cardy1{
        width: 370px;
        height: 100px;
        position: relative;
        left: 160px;
        text-align: center;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 175px;
        text-align: center;
      }
      #cardy3{
        width: 356px;
        height: 100px;
        position: relative;
        left: 190px;
        text-align: center;
      }
      .footer3{
        grid-area: footer3;   
      }
      .tainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 2 auto;
        grid-template-areas: "navone   navone   navone"
                             "navtwo   navtwo   navtwo";
        max-width: 100%;
      }
      .navone{
        grid-area: navone;
      }
      .navtwo{
        grid-area: navtwo;
      }
      .products{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 3 auto;
        grid-template-areas: "Titulo2    Titulo2   Titulo2  Titulo2"
                              "product1  product2  product3  product4"
                              "product5  product6  product7  product8"
                              "titulo3   titulo3   titulo3   titulo3"
                              "last      last      last      last";
        
        gap: 5%;
        margin-top: 2%;
      }
      .Titulo2{
        grid-area: Titulo2;
      }
      .product1{
        grid-area: product1;
      }
      .product2{
        grid-area: product2;
      }
      .product3{
        grid-area: product3;
      }
      .product4{
        grid-area: product4;
      }
    </style>
</head>
<body>
    <div id="A"> 
        <nav class="navbar navbar-expand-lg navbar-dark " id="A">
            <div class="container-fluid" id="Navbar">
              <img src="logo.png" width="100" height="80"  alt="" id="imagen">
              <h1 class="np">Review Bookshop|</h1>
              <h2 class="logan">"The readers corner"</h2>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><a href="html.html"> Home</a></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    <br> <br>
    <section>
        <img src="https://img.chilango.com/2020/04/sagas-literarias-imperdibles.jpg" class="img-fluid" class="card-img-top" class="rounded" alt="..." style="margin-left: 40px; float: left;">
        <br><br> <br><br>
        <form  style="margin-left: 850px; font-family: Tahoma, serif;">
            <h4>Direcci??n de env??o</h4>
            <input type="email" id="correo" placeholder="correo electr??nico" required style="width: 400px;"> <br>
            <input type="text" id="Nombre"  placeholder="Nombre" value="nombre">
            <input type="text" id="Apellido"  placeholder="Apellido" value="apellido"> <br>
            <input type="text" id="Direcci??n" placeholder="Direcci??n" value="direcci??n" style="width: 400px;"> <br>
            <input type="tel" id="telefono" placeholder="Tel??fono" value="tel??fono">
            <label>Regi??n:</label>
            <select name="Regi??n" id="regi??n">
             <option value="value0"></option>
             <option value="Bocas del Toro">Bocas del Toro</option>
             <option value="Cocl??">Cocl??</option>
             <option value="Col??n">Col??n</option>
             <option value="Chiriqu??">Chiriqu??</option>
             <option value="Dari??n">Dari??n</option>
             <option value="Herrera">Herrera</option>
             <option value="Los Santos">Los Santos</option>
             <option value="Panam??">Panam??</option>
             <option value="Veraguas">Veraguas</option>
             <option value="Panam?? Oeste">Panam?? Oeste</option>
             <option value="Ember??-Wounaan">Ember??-Wounaan</option>
             <option value="Guna Yala">Guna Yala</option>
             <option value="Ng??be-Bugl??">Ng??be-Bugl??</option>
            </select>
            <br>
            <label>Cantidad:</label>
            <input type="number" id="cantidad" placeholder="libros" value="pedidos" style="width: 100px;">
            <label>Precio:</label>
            <input type="text" id="precio"  placeholder="precio del libro" style="width: 120px;">
            <br>
            
            <br><br>
            <button class="btn btn-lg btn-primary btn-block" type="button" value="enviar" onclick="recogerdatos()" style="background-color: #f1b229; border-color: #f1b229;">Enviar</button>
       
         </form>
    </section>

    <br><br><br><br><br><br><br><br><br>

    <div class="container3">
        <footer class="container py-5">
          <h3 style="color: rgb(27, 27, 27); text-align: center; font-family: 'Tinos', serif;">Formulario de subscripcion</h3>
          <input type="email" value="correo electronico" size="30px" style="border-radius: 1px; background-color: transparent; margin-left: 36%;">
          <input type="submit" value="Enviar" style="background-color: black; color: whitesmoke;"> <br>
          <span style="color: rgb(27, 27, 27); font-family: 'Tinos', serif; margin-left: 43%;">Gracias por suscribirte!</span>
          <br><br><br>
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" width="20" height="20" style="margin-left: 48%;">
          <img src="twitter.png" width="20" height="20" style="margin-right: 48%;">
          <br>
              <!-- Copyright -->
              <div class="text-center p-3" style="color: black; font-size: 10px;">
                ??2021 by Revie Bookshop.
              </div>
              <!-- Copyright -->
        </footer>
      </div>
  </body>
  </html>

JAVASCRIPT:

function recogerdatos(){
  let correo = document.getElementById("correo").value;
  let nombre = document.getElementById("Nombre").value; 
  let apellido = document.getElementById("Apellido").value;
  let direccion = document.getElementById("Direcci??n").value; 
  let telefono = document.getElementById("telefono").value;
  let region = document.getElementById("regi??n").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  
  
  var jubilado = prompt("??Estas jubilado? \n 1. Si \n 2. No \n (escribe Si o No, tal cual aparece en las opciones.)");
  if(jubilado == "Si"){
    let monto= parseFloat(precio*cantidad);
    let descuento= parseFloat(monto*15/100);
    let total= parseFloat(monto-descuento);
      document.write("Correo="+correo +"<br>");
      document.write("Nombre="+nombre +apellido+"<br>");
      document.write("Direcci??n="+direccion +"<br>");
      document.write("N??mero telef??nico="+telefono +"<br>");
      document.write("Regi??n="+region +"<br>");
      document.write("cantidad="+cantidad +"<br>");
      document.write("Total importe="+ parseFloat (precio*cantidad )+"<br>");
      document.write("Descuento="+descuento+"<br>");
      document.write("Monto gravado="+ monto +"<br>" + "<br>"); 
      document.write("Total ="+ total +"<br>");
    
  }
  if(jubilado == "No"){
      let monto= parseFloat(precio*cantidad);
      let impuesto= parseFloat(monto*7/100);
      let total= parseFloat (monto+impuesto);
    
      document.write("Correo="+correo +"<br>");
      document.write("Nombre="+nombre +apellido+"<br>");
      document.write("Direcci??n="+direccion +"<br>");
      document.write("N??mero telef??nico="+telefono +"<br>");
      document.write("Regi??n="+region +"<br>");
      document.write("cantidad="+cantidad +"<br>");
      document.write("Total importe="+ parseFloat (precio*cantidad )+"<br>");
      document.write("Monto gravado="+ monto +"<br>");
      document.write("Total impuesto="+ impuesto  +"<br>" + "<br>");
      document.write("Total ="+total +"<br>");
  }
}

CSS:

body{
        background-color: rgb(235, 235, 235);
        text-align: justify;
      }
      li :hover {
        opacity: 0.60;
        color: #ff821c;
        margin-top: 10px;
        padding-bottom: 10px;
      }
      #imagen{
        position: relative;
        left: 60px;
      }
      #A{
        background-color: #f1b229;
        height: 90px;
        box-shadow: 0px 7px 1px #D9D6A6;
        border-radius: 0px 10px 50px ;
      }
      .navbar-brand{
        position:relative;
        left: 450px;
        font-size: 30px;
      }
      .nav-item{
        position: relative;
        left: 90px;
        padding: 10px;
        padding-top: 0px;
        font-size: 20px;
        margin-left: 0px;
      }
      a{
        text-decoration: none; 
        color: aliceblue;    
      }
      #carouselExampleCaptions{
        top: 7px;
        width: 1332px;
        position: relative;
        left: -109px;
      }
      #Car::before{
        content: "";
        position: absolute;
        top: 7px;
        width: 1332px;
        left: -109px;
        background: magenta;
      }
      h5{
        font-size: 40px;
        position: relative;
        top: -10px;
      }
      .container1{
        top: 10px;
        text-align: justify;
        height: 130px;
        padding: 30px 30px;
        margin: 7px;
        background-color: #f8b857;
        color: aliceblue;
        border-radius: 5px;
      }
      #letra{
        font-size: 17px;
      }
      .container2{
            margin-top: 30px;
      }
      #cardy1{
            width: 350px;
            height: 100px;
            position: relative;
            left: 115px;
            border-radius: 6px;
      }
      #efect:hover{
           transition: 0.2s;
           opacity: 0.6;
      }
      h5{
            font-family: 'Ubuntu Condensed', sans-serif;
      }
      .np{
        margin-left: 90px;
        font-family: 'Lobster', cursive;
        font-size: 60px;
      }
      #bookshop{
        background-color: #f8b857;
      }
      #C1{
        border-radius: 10px;
      }
      .card-title{
        text-align: center;
        font-family: 'Abril Fatface', cursive;
        font-size: 37px;
      }
      #botonC{
        position: relative;
        left: 78px;
        background-color: #DD9E73;
        border-color: #DD9E73;
        margin-left: 60px;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 160px;
      }
      #cardy3{
        width: 350px;
        height: 100px;
        position: relative;
        left: 210px;
      }
      .container3{
        background-color: #f1b229;
        margin-top: 40px;
        position: relative;
        color: rgb(131, 131, 131);
      }
      .d-block{
        font-size: 20px;
      }
      li:hover{
        transform: translate(10px);
        transition: 0.9s;   
      }
      small:hover{
        transition: 0.5s;
        transform: translate(10px);    
      }
      .logan{
        text-align: center;
        font-family: 'Source Serif Pro', serif;
        color: #e98400ee;
        margin-left: 20px;
      }
      .pp{
        margin-top: 40px;
        margin-left: 170px;
      }
      .pp2{
        margin-top: 460px;
        font-family: 'Amatic SC', cursive;
        font-size: 75px;
        text-align: center;
        color: #b6b276;
      }
      #in{
        font-family: 'EB Garamond', serif;
        font-size: 20px;
      }
      #shop{
        text-align: center;
      }
      #bookshop{
        background-color: #f8b857;
        height:900px;
        text-align: center;
      }
      #tar{
        font-family: 'Assistant', sans-serif;
      }
      .ap{
        margin-left: 30px;
        opacity: 30px;
      }
      #botonC{
        position: relative;
        left: -5px;
        background-color: #DD9E73;
        border-color: #DD9E73;
      }
      #botonC:hover{
        background: #D9D6A6;
        border-color: #D9D6A6;
        color: black;
      }
      #i{
        width: 140px;
        position: relative;
        left: 80px;
      }
      #seccionabout{
        background-color: transparent;
        width: 100%;
        height: 100%;
      }
      #aboutus{
        text-align:center + justify;
        font-family: 'Tinos', serif;
        line-height:1.875em;
        position: 10px ;
        padding-left: 55%;
        padding-right: 5%;
      }
      #aboutus1{
        text-align:right + justify;
        font-family: 'cosa1';
        line-height:1.875em;
        font-size: 40px;
        padding-left: 55%;
        padding-right: 5%;
      }
      #figura{
      height: 655px;
      width: 650px;
      float: left;
      }
      #imagennn{
        height: 400px;
        width: 1000px;
      }
      #C1{
        border-radius: 10px;
      }
      #cardy1{
        width: 370px;
        height: 100px;
        position: relative;
        left: 160px;
        text-align: center;
      }
      #cardy2{
        width: 350px;
        height: 100px;
        position: relative;
        left: 175px;
        text-align: center;
      }
      #cardy3{
        width: 356px;
        height: 100px;
        position: relative;
        left: 190px;
        text-align: center;
      }
      .footer3{
        grid-area: footer3;   
      }
      .tainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 2 auto;
        grid-template-areas: "navone   navone   navone"
                             "navtwo   navtwo   navtwo";
        max-width: 100%;
      }
      .navone{
        grid-area: navone;
      }
      .navtwo{
        grid-area: navtwo;
      }
      .products{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 3 auto;
        grid-template-areas: "Titulo2    Titulo2   Titulo2  Titulo2"
                              "product1  product2  product3  product4"
                              "product5  product6  product7  product8"
                              "titulo3   titulo3   titulo3   titulo3"
                              "last      last      last      last";
        
        gap: 5%;
        margin-top: 2%;
      }
      .Titulo2{
        grid-area: Titulo2;
      }
      .product1{
        grid-area: product1;
      }
      .product2{
        grid-area: product2;
      }
      .product3{
        grid-area: product3;
      }
      .product4{
        grid-area: product4;
      }
