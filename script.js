function changeGradient() {
      const color1 = document.getElementById("color-1").value;
      const color2 = document.getElementById("color-2").value;

      const canvas = document.getElementById('gradient');
      const ctx = canvas.getContext('2d');

      // Create gradient from top right to bottom left
      const gradient = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height); 
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
function download() {
      const canvas = document.getElementById('gradient');
      const dataURL = canvas.toDataURL('image/png'); 
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'Sapirrior.gradient.png'; 
      link.click()
    }