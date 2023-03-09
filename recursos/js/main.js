
const fetchPromise = fetch('https://randomuser.me/api/');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results[0]); 
    extract(data.results[0]); 
  }) 
  .catch((error) => {
    console.error(`No se pudieron obtener los datos: ${error}`);
  });

  
  
  function extract(obj) {
    const { name: { first } } = obj;
    const { name: { last } } = obj;
    const { dob: { age } } = obj;
    const { gender } = obj;
    const { email } = obj;
    const { cell } = obj;   
    const { picture: { large } } = obj;
    const { location: { city } } = obj;
    const { location: { country } } = obj;

    procedure(first, last, age, gender, email, cell, large, city, country);
  }

  function procedure(nombre, apellido, edad, genero, mail, celu, img, ciudad, pais ) {
    
    const nombre_apellido = nombre + " " + apellido;

    let imgBx = document.getElementById('imgBx')
    imgBx.innerHTML = `<img src="${img}" alt="${nombre_apellido}">`; 
    
    let nameProfession = document.getElementById('nameProfession')
    nameProfession.innerHTML = `<h2 class="nameProfession">${nombre_apellido}<br><span>Web Developer</span></h2>`;
    
    let infoTel = document.getElementById('infoTel')
    infoTel.innerHTML = `${celu}`; 
    
    let infoMail = document.getElementById('infoMail')
    infoMail.innerHTML = `${emailReal(mail)}`; 
    
    const NPLower = nombre.toLowerCase() + "-" + apellido.toLowerCase() ; //Los Links deben estar en minusculas obligatoriamente

    let infoLinckedIn = document.getElementById('infoLinkedIn')
    infoLinkedIn.innerHTML = `linkedin.com/in/${NPLower}`; 
    
    let infoUbi = document.getElementById('infoUbi')
    infoUbi.innerHTML = `${ciudad}, ${pais}`;

    if (genero == "male") {
      let presentacion = document.getElementById('presentacion')
      presentacion.innerHTML = `Soy ${nombre_apellido}, tengo ${edad} años. Soy atento al detalle, responsable, flexible y tengo gran capacidad para aprender nuevas habilidades. Estoy interesado esta oportunidad laboral porque creo que tengo las condiciones necesarias para realizar de manera sencilla las tareas de este trabajo,
      Aportando mí experiencia en el ámbito.`;

      let profesion1 = document.getElementById('profesion1')
      profesion1.innerHTML = `Fotógrafo Profesional`;

      let experience1 = document.getElementById('experience1')
      experience1.innerHTML = `Trabaje durante un periodo de 3 meses como fotógrafo independiente, cubriendo eventos deportivos, personales y públicos. Además, también realice fotografías de productos para la venta algunas veces`;

    } else {
      
      let presentacion = document.getElementById('presentacion')
      presentacion.innerHTML = `Soy ${nombre_apellido}, tengo ${edad} años. Soy atenta al detalle, responsable, flexible y tengo gran capacidad para aprender nuevas habilidades. Estoy interesada esta oportunidad laboral porque creo que tengo las condiciones necesarias para realizar de manera sencilla las tareas de este trabajo,
      Aportando mí experiencia en el ámbito.`;
      
      let profesion1 = document.getElementById('profesion1')
      profesion1.innerHTML = `Fotógrafa Profesional`;

      let experience1 = document.getElementById('experience1')
      experience1.innerHTML = `Trabaje durante un periodo de 3 meses como fotógrafa independiente, cubriendo eventos deportivos, personales y públicos. Además, también realice fotografías de productos para la venta algunas veces`;

    }

  }


  function emailReal(mail) {
    let mailR = new String()
    for (let i = 0; i < mail.length; i++) {

      if(i == 0){

        mailR = mail[i]
      }else if (mail[i] == "@") {

        mailR += "@gmail.com";
        i =+ mail.length;
      }else{
        
        mailR = mailR + mail[i];
      }
    }
    return mailR;
  }