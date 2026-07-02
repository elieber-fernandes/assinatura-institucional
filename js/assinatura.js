// Função para gerar a assinatura
function gerarAssinatura() {
  // Obtém os valores dos campos do formulário
  var nome = document.getElementById("nome").value.trim();
  var cargo = document.getElementById("cargo").value.trim();
  var setor = document.getElementById("setor").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefone = document.getElementById("telefone").value.trim();
  var celular = document.getElementById("celular").value.trim();
  var unidadeSelecionada = document.getElementById("unidades_de_missao").value;

  // Verifica se a unidade foi selecionada
  if (unidadeSelecionada === "") {
    showToast("Selecione uma unidade de missão.", true);
    return;
  }

  // Verifica campos obrigatórios
  if (!nome) {
    showToast("Preencha o campo Nome.", true);
    document.getElementById("nome").focus();
    return;
  }

  if (!email) {
    showToast("Preencha o campo E-mail.", true);
    document.getElementById("email").focus();
    return;
  }

  // Lista de unidades válidas
  var unidadesValidas = ["cecb", "cecc", "cecma", "padre", "timoteo", "ubec"];

  if (unidadesValidas.indexOf(unidadeSelecionada) === -1) {
    showToast("Unidade de missão inválida.", true);
    return;
  }

  // Monta o caminho usando diretamente o valor do select
  var caminhoAssinatura = "assinaturas/" + unidadeSelecionada + ".html";

  // Realiza uma requisição AJAX para carregar o arquivo HTML da assinatura
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Substitui as variáveis no conteúdo do arquivo HTML da assinatura com os valores do formulário
      var assinatura = this.responseText;
      assinatura = assinatura.replace("{{nome}}", nome);
      assinatura = assinatura.replace("{{cargo}}", cargo);
      assinatura = assinatura.replace("{{setor}}", setor);
      assinatura = assinatura.replace("{{email}}", email);
      assinatura = assinatura.replace("{{telefone}}", telefone);
      assinatura = assinatura.replace("{{celular}}", celular);

      // Define o conteúdo da área de preview como a assinatura gerada
      var column2 = document.getElementById("column-2");
      column2.innerHTML = "<div class='centered-content'>" + assinatura + "</div>";

      // Esconde o placeholder e marca a área de preview como ativa
      var placeholder = document.getElementById("preview-placeholder");
      if (placeholder) {
        placeholder.classList.add("hidden");
      }

      var previewArea = document.querySelector(".preview-area");
      if (previewArea) {
        previewArea.classList.add("has-content");
      }

      showToast("Assinatura gerada com sucesso!");
    }
  };

  xhttp.onerror = function () {
    showToast("Erro ao carregar o template da assinatura.", true);
  };

  xhttp.open("GET", caminhoAssinatura, true);
  xhttp.send();
}

// Função para exibir notificação toast
function showToast(message, isError) {
  var toast = document.getElementById("toast");
  var toastMessage = document.getElementById("toast-message");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.remove("show", "error");

  if (isError) {
    toast.classList.add("error");
  }

  // Força reflow para reiniciar animação
  void toast.offsetWidth;
  toast.classList.add("show");

  // Auto-dismiss em 3 segundos
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}

// Adiciona um listener de evento para o botão "Gerar Assinatura"
document.getElementById("submit-button").addEventListener("click", gerarAssinatura);
