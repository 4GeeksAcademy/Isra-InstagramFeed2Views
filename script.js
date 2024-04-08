function moveToImg(ID) {
    // Cambia a la segunda pestaña
    let secondTab = document.getElementById("pills-profile-tab");
    secondTab.click();
  
    // Desplázate a la imagen correspondiente
    let image = document.getElementById(ID);
    if (image) {
      image.scrollIntoView({ behavior: "smooth" });
    }
  }
  