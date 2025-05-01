document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for the bio section
    const bioTyping = document.querySelector('.bio-typing');
    let text = "I am a web developer passionate about coding and design.";
    let i = 0;
  
    function type() {
      if (i < text.length) {
        bioTyping.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100); // Delay between characters
      }
    }
  
    type(); // Start typing animation
  
    // Scroll animation for the Hero section (Optional)
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        heroSection.style.opacity = 0.7; // Fading effect as you scroll
      } else {
        heroSection.style.opacity = 1;
      }
    });
  });
  