
// Efeitos visuais para a calculadora estilo gamer
document.addEventListener('DOMContentLoaded', () => {
  // Adiciona efeitos de áudio ao clicar nos botões (quando disponível)
  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      // Efeito visual de onda ao clicar
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      
      const rect = e.target.getBoundingClientRect();
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      ripple.style.left = e.clientX - rect.left - rect.width / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - rect.height / 2 + 'px';
      
      e.target.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  });
  
  // Adiciona estilos de animação
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes glow {
      0% { box-shadow: 0 0 5px #8B5CF6; }
      50% { box-shadow: 0 0 20px #8B5CF6; }
      100% { box-shadow: 0 0 5px #8B5CF6; }
    }
    
    .calculator-btn:hover {
      animation: glow 1.5s infinite;
    }
  `;
  document.head.appendChild(style);
});
