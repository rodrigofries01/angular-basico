function previewFile(){
       const preview = document.querySelector('imagem');
       const file = document.querySelector('input[type=file]').files[0];
       const reader = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file);
       } else {
           preview.src = "";
       }
  }

previewFile();