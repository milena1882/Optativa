function recogerdatos(){
  let correo = document.getElementById("correo").value;
  let nombre = document.getElementById("Nombre").value; 
  let apellido = document.getElementById("Apellido").value;
  let direccion = document.getElementById("Direcciòn").value; 
  let telefono = document.getElementById("telefono").value;
  let region = document.getElementById("regiòn").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  
  
  var jubilado = prompt("¿Estas jubilado? \n 1. Si \n 2. No \n (escribe Si o No, tal cual aparece en las opciones.)");
  if(jubilado == "Si"){
    let monto= parseFloat(precio*cantidad);
    let descuento= parseFloat(monto*15/100);
    let total= parseFloat(monto-descuento);
      document.write("Correo="+correo +"<br>");
      document.write("Nombre="+nombre +apellido+"<br>");
      document.write("Dirección="+direccion +"<br>");
      document.write("Número telefónico="+telefono +"<br>");
      document.write("Región="+region +"<br>");
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
      document.write("Dirección="+direccion +"<br>");
      document.write("Número telefónico="+telefono +"<br>");
      document.write("Región="+region +"<br>");
      document.write("cantidad="+cantidad +"<br>");
      document.write("Total importe="+ parseFloat (precio*cantidad )+"<br>");
      document.write("Monto gravado="+ monto +"<br>");
      document.write("Total impuesto="+ impuesto  +"<br>" + "<br>");
      document.write("Total ="+total +"<br>");
  }
}
