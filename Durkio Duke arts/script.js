function unlockGallery() {
  const password =prompt ( "Enter your access password:");
  if(password === "artpass2025") {
    const images=
    document .querySelectorAll(".blurred-gallery img");
    images.forEach(img=> {
      img.style.filter = "none";
    });
    alert("Gallery unlocked! Enjoy the artworks.");

  } else {  
    alert("Wrong password. Please contact the artist after payment.");
      }
   
  }
