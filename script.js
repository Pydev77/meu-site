document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cliqueBtn");
  const p = document.getElementById("mensagemBotao");

  btn.addEventListener("click", () => {
    p.textContent = "Você clicou no botão! 😎";
  });

  const form = document.getElementById("contatoForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso! 📬");
    form.reset();
  });
});
