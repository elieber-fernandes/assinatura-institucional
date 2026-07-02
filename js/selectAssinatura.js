// Função para copiar a assinatura usando Selection API nativa
function copiarAssinatura() {
  var signatureElement = document.getElementById('x_Signature');

  if (!signatureElement) {
    if (typeof showToast === 'function') {
      showToast('Gere a assinatura primeiro antes de copiar.', true);
    }
    return;
  }

  // Usa Selection API nativa para selecionar o conteúdo
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(signatureElement);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    // Tenta copiar usando a API moderna (Clipboard)
    if (navigator.clipboard && navigator.clipboard.write) {
      // Cria um blob HTML para manter a formatação
      var htmlContent = signatureElement.outerHTML;
      var textContent = signatureElement.innerText;

      var htmlBlob = new Blob([htmlContent], { type: 'text/html' });
      var textBlob = new Blob([textContent], { type: 'text/plain' });

      var clipboardItem = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': textBlob
      });

      navigator.clipboard.write([clipboardItem]).then(function () {
        if (typeof showToast === 'function') {
          showToast('Assinatura copiada para a área de transferência!');
        }
      }).catch(function () {
        // Fallback para execCommand
        fallbackCopy();
      });
    } else {
      // Fallback para navegadores antigos
      fallbackCopy();
    }
  } catch (err) {
    fallbackCopy();
  }
}

// Fallback de cópia usando execCommand
function fallbackCopy() {
  try {
    var result = document.execCommand('copy');
    if (result) {
      if (typeof showToast === 'function') {
        showToast('Assinatura copiada para a área de transferência!');
      }
    } else {
      if (typeof showToast === 'function') {
        showToast('Não foi possível copiar. Selecione manualmente e use Ctrl+C.', true);
      }
    }
  } catch (err) {
    if (typeof showToast === 'function') {
      showToast('Erro ao copiar. Selecione manualmente e use Ctrl+C.', true);
    }
  }

  // Limpa a seleção
  window.getSelection().removeAllRanges();
}

// Adiciona listener ao botão de copiar
document.getElementById('select-button').addEventListener('click', copiarAssinatura);
