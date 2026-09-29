# Vinheria Agnello — São Paulo

> Website institucional desenvolvido com **HTML5 semântico** e **CSS3 puro**, criado com tom de voz empático, consultivo, acolhedor e didático para refletir a tradição de 15 anos da loja física na capital paulista e sua expansão para o e-commerce.

> [!NOTE]
> **Informativo sobre o Uso de Inteligência Artificial:** Apenas o conteúdo textual deste projeto (narrativas institucionais, história da empresa, notas sobre harmonizações, dicas enológicas e descrições dos rótulos) foi elaborado com o auxílio de Inteligência Artificial (IA). Toda a arquitetura de software, estrutura semântica em HTML5, estilização visual com CSS3 puro, responsividade e lógica de programação em JavaScript foram desenvolvidas integralmente pela desenvolvedora.

---

## Demonstração & Acesso Online

<p align="center">
  <a href="https://engdanielefacundo-soft.github.io/vinheria-agnello/" target="_blank" title="ir para o site">
    <img src="src/assets/imgs/preview.gif" alt="ir para o site" title="ir para o site" width="100%">
  </a>
</p>

---

## Sobre o Projeto & Contexto do Negócio

A **Vinheria Agnello** é uma tradicional loja de vinhos finos sediada em São Paulo - SP, atuando há mais de 15 anos. **A empresa não possui vinícola própria**: sua excelência baseia-se em uma curadoria rigorosa e independente de vinícolas parceiras nacionais e internacionais, cobrindo mais de **6.000 variedades de uvas viníferas**.

### Diferenciais Centrais
- **Tom de Voz Acolhedor e Didático:** O site guia com a mesma atenção tanto o consumidor iniciante quanto o enófilo avançado, desmistificando termos e oferecendo consultoria sob medida.
- **Armazenagem Controlada:** Controle rígido de temperatura (14°C a 16°C), umidade e proteção total contra luz e vibrações.
- **Transição Digital Humanizada:** Do atendimento tradicional "olho no olho" do fundador Sr. Giulio à modernização digital e e-commerce liderados por sua filha, Bianca Agnello.

### Paleta de Cores
- **Fundo principal / Textos claros:** `#ffffff` (Branco)
- **Detalhes e Destaques:** `#9F0423` (Vermelho vivo)
- **Elementos secundários / Botões:** `#6C0115` (Vinho médio)
- **Textos escuros / Rodapés / Fundos escuros:** `#3E0000` (Vinho escuro / Bordô)
- **Restrição de Animações:** Sem botões cintilantes, piscantes ou com luzes neon/glow. Cards estáticos sem zoom/elevação no hover. Transições suaves apenas em links e botões (`0.3s ease`).

---

## Estrutura das Páginas

1. **Início (`index.html`)**
   - **Hero com Vídeo em Loop (`agnello.mp4`):** Vídeo de fundo com sobreposição escura de contraste (`rgba(62, 0, 0, 0.72)`), título institucional e slogan oficial: *"Vinheria Agnello: Há mais de 15 anos trazendo o mundo dos vinhos para São Paulo. Tradição, qualidade e atendimento feito para você."*
   - **Convite à Loja Física:** Chamada convidativa para visitar o espaço em São Paulo e desfrutar de degustação no balcão.
   - **Vinhos em Destaque:** Grid com fotos em formato redondo (`border-radius: 50%`) com os nomes dos rótulos logo abaixo (cards estáticos).
   - **Diferencial (O Atendimento):** Foco em Consultoria Especializada — os atendentes auxiliam a escolher o vinho ideal para cada ocasião, refeição ou orçamento.
   - **Vinícolas Parceiras:** Destaque para a curadoria de produtores parceiros (Serra Gaúcha, Mantiqueira, Chile, Argentina, Itália, França, Espanha e Portugal).
   - **O Espaço (Slider):** Carrossel interativo com legendas destacando a **Armazenagem Controlada** (temperatura, umidade, vibração e luz) e o ambiente acolhedor da loja.

2. **Sobre Nós (`src/pages/sobre.html`)**
   - **Storytelling Emocional Completo:** A história do Sr. Giulio Agnello, a transição para o digital com Bianca Agnello durante as restrições de mobilidade e os **Quatro Pilares Essenciais** estruturados em lista semântica: Atendimento Consultivo, Curadoria sem Fronteiras, Armazenagem de Excelência e Democratização do Vinho.
   - **Linha do Tempo (`<ol>`):** Marcos históricos dos 15 anos de atuação em São Paulo.

3. **Equipe (`src/pages/equipe.html`)**
   - **Grid com 8 Cards de Colaboradores (Estáticos):**
     1. *Sr. Giulio Agnello* - Proprietário e Sommelier Sênior (Gestão Tradicional)
     2. *Bianca Agnello* - Diretora de E-commerce / Product Owner (Inovação)
     3. *Marcos Toledo (Vendedor 1)* - Consultor de Vinhos e Harmonização
     4. *Clara Mendonça (Vendedora 2)* - Especialista em Vinhos Internacionais
     5. *André Fagundes (Vendedor 3)* - Especialista em Vinhos Nacionais e Espumantes
     6. *Roberto Sanches (Administração)* - Gerente Administrativo/Financeiro
     7. *Tiago Meireles (Estoque)* - Especialista em Logística e Armazenagem Controlada
     8. *Juliana Ramos (Estoque)* - Assistente de Conservação de Qualidade

4. **Nossos Vinhos (`src/pages/nossos-vinhos.html`)**
   - **Foco Didático para Iniciantes:** Blocos práticos explicando o que significa Vinho Seco, Vinho Doce/Suave, Vinho Fortificado, além de Corpo e Taninos com ícone oficial de favicon.
   - **Tabela de Harmonização Perfeita (`<table>`):** Tabela semântica elegante com colunas para **Ocasião / Prato** (Almoço de família, Jantar para visitas, Risoto suave, Carré de cordeiro, etc.), **Tipo Sugerido** (Branco, Tinto, Espumante), **Características** (Seco, Semisseco, etc.) e Sugestão de Rótulo Parceiro.

5. **Contato (`src/pages/contato.html`)**
   - **Formulário Consultivo:** Com a frase quebra-gelo: *"Tem dúvidas sobre qual vinho escolher para o seu jantar? Nossos especialistas estão prontos para ajudar. Mande sua mensagem!"*
   - **Localização Real via Iframe:** Mapa interativo do Google Maps centrado na localização de São Paulo - SP.
   - **Canais Diretos:** Informações de WhatsApp dos consultores, telefone e horários de degustação no balcão.

6. **Painel Administrativo (`src/pages/admin.html`)**
   - **Área Restrita com Autenticação:** Proteção por senha com modais customizados que seguem a identidade visual da loja.
   - **Gestão de Inventário & Curadoria:** Tabela dinâmica de controle de rótulos sob armazenagem climatizada.
   - **Assistente Interativo de Cadastro:** Rotina passo a passo de cadastro de vinhos com validações em tempo real via loops `do...while`.

---

## Guia de Navegação e Acesso ao Admin de Cadastro de Vinhos

Para acessar a área restrita do sommelier e cadastrar novos rótulos de vinhos:

1. **Como Chegar ao Painel Admin:**
   - **Pela Página Nossos Vinhos:** Acesse o menu **Nossos Vinhos** e clique no botão de destaque **Acesso Administrativo (Sommelier)** localizado no topo da seção.
   - **Acesso Direto:** É possível acessar diretamente digitando o caminho `src/pages/admin.html` no navegador.

2. **Autenticação de Segurança:**
   - Ao abrir a página, um diálogo modal personalizado solicitará a senha de administrador.
   - **Senha de Administrador:** `agnelovinhocp` (ou `agnellocp`).
   - Se a senha estiver correta, um aviso de confirmação será exibido e o painel será liberado.
   - Caso clique em **Cancelar** ou digite uma senha incorreta, o acesso será negado e o sistema retornará automaticamente para a página inicial (`index.html`).

3. **Como Cadastrar um Novo Vinho:**
   - No painel administrativo, localize a seção de cadastro e clique no botão **Cadastrar Novo Vinho**.
   - O assistente interativo guiará o preenchimento com validações rigorosas em `do...while`:
     - **Etapa 1 (Nome do Rótulo):** Digite o nome do vinho (campo obrigatório, não permite valor em branco).
     - **Etapa 2 (Classificação):** Digite o tipo do vinho (restrito estritamente a `Tinto`, `Branco`, `Suave` ou `Seco`).
     - **Etapa 3 (Safra):** Digite o ano de colheita (número inteiro válido entre 1800 e 2030).
     - **Etapa 4 (Estoque):** Digite a quantidade disponível (número inteiro maior ou igual a 0).
   - Se o botão **Cancelar** for clicado em qualquer etapa, o processo é cancelado imediatamente e nenhum dado é registrado.
   - Concluído com sucesso, o novo vinho é adicionado no topo da tabela de inventário com o selo **Novo** e uma notificação de sucesso é disparada na interface e no console.

4. **Encerramento da Sessão:**
   - Para sair com segurança da área administrativa, clique no botão **Sair do Painel** no topo da tela. A sessão será finalizada e você será redirecionado para a página inicial.

---

## Árvore de Diretórios

```plaintext
vinharia-agnello/
├── favicon.ico
├── index.html
├── README.md
└── src/
    ├── assets/
    │   └── imgs/
    │       ├── agnello.mp4
    │       ├── preview.gif
    │       ├── hero-poster.jpg
    │       ├── logovert.png
    │       ├── logowhite.png
    │       ├── triglog.png
    │       ├── balcao.jpg
    │       ├── loja.png
    │       ├── loja2.png
    │       ├── loja3.png
    │       ├── espaco-adega.jpg
    │       ├── espaco-degustacao.jpg
    │       ├── vinho-reserva.jpg
    │       ├── vinho-branco.jpg
    │       ├── vinho-rose.jpg
    │       ├── espumante.jpg
    │       ├── agnello.jpg
    │       ├── bianca.jpg
    │       ├── trab1.jpg
    │       ├── trab2.jpg
    │       ├── trab6.png
    │       ├── trab7.png
    │       ├── trab8.png
    │       ├── trab9.png
    │       └── favicon-*.svg
    ├── css/
    │   ├── global.css
    │   ├── home.css
    │   ├── sobre.css
    │   ├── nossos-vinhos.css
    │   ├── equipe.css
    │   ├── contato.css
    │   └── admin.css
    ├── js/
    │   ├── global.js
    │   ├── home.js
    │   ├── contato.js
    │   ├── admin.js
    │   ├── cadastro.js
    │   └── script.js
    └── pages/
        ├── contato.html
        ├── equipe.html
        ├── nossos-vinhos.html
        ├── sobre.html
        └── admin.html
```

---

## Autor(a)

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/engdanielefacundo-soft" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/318645150?s=400&u=487f57065ae51d20c891423ce21b6140ef3d562b&v=4" width="160px;" alt="Foto de Daniele Amaro Facundo" style="border-radius: 50%; border: 3px solid #9F0423;"/><br>
        <sub><b>Daniele Amaro Facundo</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/daniele-amaro-facundo-1143113b9" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://www.instagram.com/danielefacundo_" target="_blank">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
      </a>
    </td>
  </tr>
</table>
