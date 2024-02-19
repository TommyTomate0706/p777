function detectarAudio() {
    // Crear un objeto de audio
    var audio = new Audio("audios/perro.wav");
  
    // Crear un modelo de detección de audio
    var modelo = ml5.AudioClassifier("bird_dog_cat");
  
    // Empezar a detectar el audio
    modelo.detect(audio, function(error, resultados) {
      if (error) {
        console.log(error);
      } else {
        // Actualizar el contador
        $("#contador").text(resultados.length);
  
        // Actualizar el nombre del animal
        $("#nombreAnimal").text(resultados[0].className);
  
        // Actualizar la imagen
        $("#imagen").attr("src", "imagenes/" + resultados[0].className + ".gif");
      }
    });
  }
  