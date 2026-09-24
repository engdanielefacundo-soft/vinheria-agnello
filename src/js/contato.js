document.addEventListener('DOMContentLoaded', () => {
  const contatoForm = document.getElementById('form-contato');
  if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nomeInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const mensagemInput = document.getElementById('mensagem');

      if (!nomeInput.value.trim() || !emailInput.value.trim() || !mensagemInput.value.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      alert(`Obrigado pelo contato, ${nomeInput.value.trim()}! Sua mensagem foi enviada aos especialistas da Vinheria Agnello. Responderemos em breve.`);
      contatoForm.reset();
    });
  }
});
