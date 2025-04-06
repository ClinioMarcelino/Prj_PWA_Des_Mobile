document.addEventListener('DOMContentLoaded', () => {
    const btnEye = document.getElementById('toggle-amount');
    const amountValue = document.getElementById('amount-value');
    const iconEye = document.getElementById('icon-eye');
    let hidden = false;
  
    btnEye.addEventListener('click', () => {
      hidden = !hidden;
      if (hidden) {
        // oculta valor
        amountValue.textContent = '****';
        // troca ícone para olho riscado
        iconEye.innerHTML = `
          <path d="M12 5c-7.633 0-12 7-12 7s4.367 
                   7 12 7 12-7 12-7-4.367-7-12-7zm0 
                   12c-2.761 0-5-2.239-5-5s2.239-5 
                   5-5 5 2.239 5 5-2.239 5-5 
                   5z" opacity="0.3"/>
          <path d="M1 1l22 22" stroke="#FFF" stroke-width="2"/>
        `;
      } else {
        // mostra valor original
        amountValue.textContent = '1.234,56';
        // volta ícone normal
        iconEye.innerHTML = `
          <path d="M12 5c-7.633 0-12 7-12 7s4.367 7 12 7 
                   12-7 12-7-4.367-7-12-7zm0 
                   12c-2.761 0-5-2.239-5-5s2.239-5 
                   5-5 5 2.239 5 5-2.239 5-5 
                   5z"/>
          <circle cx="12" cy="12" r="2.5"/>
        `;
      }
    });
  });
  