const images = [
    "https://toyishland.com/wp-content/uploads/2022/10/23.jpg",
    "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
    "https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/pulsar-ns400-2024/ns400z-bike.png"
  ];
  
  let currentIndex = 0;
  const totalImages = images.length; 
  const galleryImage = document.getElementById('gellimg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function showImage() {
    galleryImage.src = images[currentIndex];
  }
  
  
  
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage();
  });
  
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage();
  });
  showImage(); 