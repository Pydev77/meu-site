document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cliqueBtn");
  const p = document.getElementById("mensagemBotao");
  const form = document.getElementById("contatoForm");
  const feedback = form.querySelector(".feedback");

  btn.addEventListener("click", () => {
    // Animação curta no botão
    btn.disabled = true;
    p.textContent = "Você clicou no botão! 😎";
    btn.style.transform = "scale(1.15)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.disabled = false;
      p.textContent = "";
    }, 1500);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validação simples
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    
    if (!nome || !email || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = "red";
      return;
    }

    // Regex simples para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Digite um e-mail válido.";
      feedback.style.color = "red";
      return;
    }

    // Sucesso
    feedback.style.color = "#5a2a82";
    feedback.textContent = "Formulário enviado com sucesso! 📬";

    form.reset();

    setTimeout(() => {
      feedback.textContent = "";
    }, 4000);
  });
});
