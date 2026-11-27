# 💻 S4_AT1_R4_LIMA — Projeto Web (HTML, CSS e JavaScript)

> Repositório documentando a evolução do desenvolvimento de um site de **personalização e venda de PCs** para a atividade **S4_AT1_R4_LIMA (Hypertext Markup Language)**, dividido em quatro versões incrementais (V1 a V4).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estruturação semântica, navegação multipágina e formulários interativos
* **CSS3** — Estilização, posicionamento com classes e personalização visual
* **JavaScript** — Interatividade de carrinho de compras e alternância de temas

---

## 📁 Estrutura do Projeto

```text
S4_AT1_R4_LIMA/
├── index.html          # Página principal / área do usuário
├── entrar.html         # Página de login (adicionada na V3)
├── montarPC.html       # Página de personalização do PC (adicionada na V3)
├── style.css           # Folha de estilos
├── cart.js             # Lógica do carrinho de compras (adicionada na V4)
├── theme.js            # Alternador de modo claro/escuro (adicionada na V4)
└── README.md
```

---

## 📌 Histórico de Versões

### 🧱 Versão 1 (V1) — Estrutura Base e Estilização Inicial

#### HTML
* Criação da estrutura inicial do site utilizando tags semânticas (`<header>` e `<footer>`), imagens (`<img src="...">`) e classes (`class`) para estilização no CSS.
* Hierarquia textual definida inicialmente com `<h1>` para títulos/subtítulos e `<h3>` para descrições.
* Imagens posicionadas à esquerda para melhor ergonomia visual, com as descrições inicialmente dispostas abaixo delas.

#### CSS
* Reorganização do layout utilizando classes para posicionar as descrições ao lado das imagens.
* Definição de uma identidade visual em tema escuro:
  * **Fundo da página (`background`):** Preto.
  * **Cabeçalho (`<header>`) e Rodapé (`<footer>`):** Fundo azulado (`rgb(155, 155, 255)`).

---

### 🎨 Versão 2 (V2) — Classes, Listas, Bordas e Links Externos

* **Classes principais (`.imagem` e `.texto`):**
  * A imagem foi estruturada como um contêiner com borda invisível no CSS para que todo o texto dentro da `<div>` ficasse alinhado ao lado dela, e não abaixo.
  * A classe `.texto` padronizou a cor dos textos para branco.
  * Aplicação de borda azulada nas imagens utilizando `style="border: 4px solid rgb(155, 155, 255);"`.
* **Listas não ordenadas:** Inclusão de listas estruturadas com `<ul>`, `<li>` e estilização em itálico com `<i>`.
* **Links em textos:** Associação de links clicáveis a textos com abertura em nova aba (`target="_blank"`) para não sobrepor o site:

```html
<a href="[https://www.linkqualquer.com/](https://www.linkqualquer.com/)" target="_blank">
  <strong>TEXTO QUALQUER</strong>
</a>
```

---

### 🔗 Versão 3 (V3) — Navegação Multipágina, Botões Interativos e Formulários

#### Novas Páginas
Foram adicionados dois novos arquivos HTML, expandindo o site para **3 páginas** (Login, Usuário e Personalização de PC):
* `entrar.html`
* `montarPC.html`

#### Elementos Interativos
* **Textos com link de navegação:**
```html
<a href="URL_ou_arquivo.html">
  <h1 style="color: aliceblue;">Texto Qualquer</h1>
</a>
```

* **Botões de navegação entre páginas:**
```html
<a href="entrar.html">
  <button type="button" style="right: 0; position: absolute;">
    <h3 style="color: rgb(0, 0, 0);">Sair</h3>
  </button>
</a>
```

#### Formulários com `<fieldset>`
Implementação de campos interativos para entrada de dados e seleção de componentes:

* **Menu suspenso (`<select>`):**
```html
<select id="idgenerico" name="nomegenerico" required>
  <option value="valor1">textogenerico1</option>
  <option value="valor2">textogenerico2</option>
  <option value="valor3">textogenerico3</option>
</select>
```

* **Seleção única (`radio`):**
```html
<input type="radio" name="textogenerico" value="generico" onclick="valorgenerico"> nomegenerico
```

* **Múltipla escolha (`checkbox`):**
```html
<input type="checkbox" id="generico" name="nomegenerico" value="valorgenerico" checked>
```

* **Área de texto (`<textarea>`):**
```html
<textarea id="idgenerico" name="nomegenerico" rows="1" cols="10" placeholder="Texto que fica dentro da caixa até alguém digitar"></textarea>
```

---

### ✨ Versão 4 (V4) — Aprimoramento Visual (IA) e Funcionalidades JavaScript

Nesta versão, o visual e os efeitos (VFX) do site foram aprimorados com o auxílio de Inteligência Artificial, além da adição de novos itens/mercadorias e de dois arquivos JavaScript:

| Arquivo | Funcionalidade |
| :--- | :--- |
| `cart.js` | Implementa o sistema de **carrinho de compras** para os produtos do site. |
| `theme.js` | Implementa o **alternador de tema (Modo Claro / Modo Escuro)**, alterando a paleta de cores de **branco, laranja e preto** para **preto, azul e branco**, respectivamente. |

---

## 🚀 Como Visualizar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` (ou `entrar.html`) diretamente no navegador de sua preferência.


---
