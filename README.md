# ✉️ Gerador de Assinatura Institucional - UBEC

Ferramenta web para geração padronizada de assinaturas de e-mail institucional das Unidades de Missão da **UBEC** (União Brasileira de Educação Católica).

## 📋 Sobre o Projeto

Este gerador permite que colaboradores criem assinaturas de e-mail com identidade visual padronizada, garantindo consistência na comunicação institucional de todas as unidades.

## 🏫 Unidades de Missão Disponíveis

| Sigla | Unidade |
|-------|---------|
| UBEC | UBEC - Sede |
| CECB | Colégio Católica de Brasília |
| CECC | Colégio Católica de Curitiba |
| CECMA | Colégio Católica Machado de Assis |
| Padre | Colégio Católica Padre de Man |
| Timóteo | Colégio Católica de Timóteo |

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Selecione a **Unidade de Missão**
3. Preencha os dados do colaborador (nome, cargo, setor, e-mail, telefone, celular)
4. Clique em **"Gerar Assinatura"**
5. Clique em **"Copiar Assinatura"**
6. Cole (`Ctrl+V`) na configuração de assinatura do seu cliente de e-mail

## 🛠️ Tecnologias

- **HTML5** — Estrutura da aplicação
- **CSS3** — Estilização com design system (variáveis CSS, responsivo)
- **JavaScript** — Lógica de geração e formatação
- **Handlebars.js** — Templates de assinatura
- **Google Fonts** — Tipografia (Inter)

## 📁 Estrutura do Projeto

```
├── index.html              # Página principal
├── style.css               # Estilos e design system
├── js/
│   ├── assinatura.js       # Lógica de geração da assinatura
│   ├── selectAssinatura.js # Seleção e cópia da assinatura
│   ├── formatarTelefone.js # Máscara de telefone
│   └── formatarCelular.js  # Máscara de celular
├── assinaturas/
│   ├── ubec.html           # Template UBEC
│   ├── cecb.html           # Template CECB
│   ├── cecc.html           # Template CECC
│   ├── cecma.html          # Template CECMA
│   ├── padre.html          # Template Padre de Man
│   └── timoteo.html        # Template Timóteo
└── logomarca/
    ├── logo.png            # Logo do header
    ├── ubec.png            # Logo UBEC
    ├── cecb.png            # Logo CECB
    ├── cecc.png            # Logo CECC
    ├── cecma.png           # Logo CECMA
    ├── padre.png           # Logo Padre de Man
    └── timoteo.png         # Logo Timóteo
```

## 📄 Licença

Projeto desenvolvido para uso interno da UBEC e suas Unidades de Missão.

---

> Criado por [Elieber Fernandes Martins](https://github.com/elieber-fernandes)
