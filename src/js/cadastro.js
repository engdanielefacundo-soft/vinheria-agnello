function garantirEstilosModal() {
    if (typeof document === "undefined" || !document.head) return;
    if (document.getElementById("vinheria-modal-theme")) return;
    const style = document.createElement("style");
    style.id = "vinheria-modal-theme";
    style.textContent = `
.modal-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(62, 0, 0, 0.75); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 100000; animation: modalFadeIn 0.25s ease-out; }
@keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
.modal-card { background-color: #ffffff; border-radius: 8px; border-top: 5px solid #9F0423; border-left: 1px solid #eadae0; border-right: 1px solid #eadae0; border-bottom: 1px solid #eadae0; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35); max-width: 480px; width: 90%; padding: 2.2rem 2rem; text-align: center; animation: modalSlideUp 0.25s ease-out; }
@keyframes modalSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.modal-title { font-family: 'Cinzel', serif; color: #3E0000; font-size: 1.4rem; margin-bottom: 0.6rem; }
.modal-message { font-family: 'Montserrat', sans-serif; color: #5c3838; font-size: 0.98rem; line-height: 1.6; margin-bottom: 1.5rem; }
.modal-input { width: 100%; box-sizing: border-box; padding: 0.85rem 1.1rem; border: 1.5px solid #eadae0; border-radius: 4px; font-family: 'Montserrat', sans-serif; font-size: 1rem; color: #3E0000; background-color: #fcfbfb; margin-bottom: 1.6rem; transition: all 0.3s ease; }
.modal-input:focus { outline: none; border-color: #9F0423; background-color: #ffffff; box-shadow: 0 0 0 3px rgba(159, 4, 35, 0.15); }
.modal-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-modal-confirm { background-color: #9F0423; color: #ffffff; font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.95rem; padding: 0.75rem 1.75rem; border: none; border-radius: 4px; cursor: pointer; transition: all 0.3s ease; }
.btn-modal-confirm:hover { background-color: #85031b; transform: translateY(-1px); }
.btn-modal-cancel { background-color: #fcfbfb; color: #3E0000; font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.95rem; padding: 0.75rem 1.5rem; border: 1px solid #eadae0; border-radius: 4px; cursor: pointer; transition: all 0.3s ease; }
.btn-modal-cancel:hover { background-color: #ebdce0; transform: translateY(-1px); }
`;
    document.head.appendChild(style);
}

function solicitarDadoVinho(mensagem, valorPadrao = "", titulo = "Cadastro de Vinhos") {
    if (typeof document === "undefined" || !document.body) {
        if (typeof prompt === "function") return Promise.resolve(prompt(mensagem, valorPadrao));
        return Promise.resolve(null);
    }
    garantirEstilosModal();
    return new Promise((resolve) => {
        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";
        backdrop.innerHTML = `
            <div class="modal-card">
                <h3 class="modal-title">${titulo}</h3>
                <p class="modal-message">${mensagem}</p>
                <input type="text" class="modal-input" id="input-modal-cadastro" value="${valorPadrao}" autocomplete="off">
                <div class="modal-actions">
                    <button type="button" class="btn-modal-cancel" id="btn-modal-cancel-cad">Cancelar</button>
                    <button type="button" class="btn-modal-confirm" id="btn-modal-submit-cad">Confirmar</button>
                </div>
            </div>
        `;
        document.body.appendChild(backdrop);

        const input = backdrop.querySelector("#input-modal-cadastro");
        const btnSubmit = backdrop.querySelector("#btn-modal-submit-cad");
        const btnCancel = backdrop.querySelector("#btn-modal-cancel-cad");

        if (input) {
            input.focus();
            input.select();
        }

        function confirmar() {
            const val = input ? input.value : "";
            backdrop.remove();
            resolve(val);
        }

        function cancelar() {
            backdrop.remove();
            resolve(null);
        }

        if (btnSubmit) btnSubmit.addEventListener("click", confirmar);
        if (btnCancel) btnCancel.addEventListener("click", cancelar);

        if (input) {
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    confirmar();
                } else if (e.key === "Escape") {
                    e.preventDefault();
                    cancelar();
                }
            });
        }
    });
}

function notificarModal(mensagem, titulo = "Cadastro de Vinhos") {
    if (typeof customAlert === "function") {
        return customAlert(mensagem, titulo);
    }
    if (typeof document === "undefined" || !document.body) {
        if (typeof alert === "function") alert(mensagem);
        return Promise.resolve();
    }
    garantirEstilosModal();
    return new Promise((resolve) => {
        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";
        backdrop.innerHTML = `
            <div class="modal-card">
                <h3 class="modal-title">${titulo}</h3>
                <p class="modal-message">${mensagem}</p>
                <div class="modal-actions">
                    <button type="button" class="btn-modal-confirm" id="btn-modal-ok-cad">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(backdrop);
        const btnOk = backdrop.querySelector("#btn-modal-ok-cad");
        function fechar() {
            backdrop.remove();
            resolve();
        }
        if (btnOk) {
            btnOk.focus();
            btnOk.addEventListener("click", fechar);
            backdrop.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === "Escape") {
                    fechar();
                }
            });
        } else {
            fechar();
        }
    });
}

function exibirNotificacaoCadastro(mensagem) {
    let toast = document.getElementById("admin-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "admin-toast";
        toast.className = "admin-notificacao-toast";
        if (document.body) {
            document.body.appendChild(toast);
        }
    }
    toast.textContent = mensagem;
    toast.classList.add("is-visible");
    setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 4500);
}

async function iniciarCadastro() {
    const senhasValidas = ["agnelovinhocp", "agnellocp"];
    let autenticado = false;

    if (typeof window !== "undefined" && window.adminAutenticado === true) {
        autenticado = true;
    }

    const painel = document.getElementById("conteudo-admin");
    if (painel && (painel.style.display === "block" || (typeof window !== "undefined" && window.getComputedStyle && window.getComputedStyle(painel).display !== "none"))) {
        autenticado = true;
    }

    if (!autenticado && typeof estaAutenticado === "function") {
        autenticado = estaAutenticado();
    }

    if (!autenticado) {
        try {
            const sessao = sessionStorage.getItem("vinheria_admin_autenticado");
            if (sessao && senhasValidas.includes(sessao)) autenticado = true;
        } catch (e) {}
    }

    if (!autenticado) {
        try {
            const local = localStorage.getItem("vinheria_admin_autenticado");
            if (local && senhasValidas.includes(local)) autenticado = true;
        } catch (e) {}
    }

    if (!autenticado) {
        await notificarModal("Acesso não autorizado! Redirecionando para a página inicial.", "Acesso Negado");
        if (typeof irParaIndex === "function") {
            irParaIndex();
        } else {
            window.location.replace("../../index.html");
        }
        return;
    }

    let nome;
    let tipo;
    let safra;
    let quantidade;

    let nomeValido = false;
    do {
        nome = await solicitarDadoVinho("Digite o nome do vinho:", "", "Etapa 1: Nome do Rótulo");
        if (nome === null) {
            await notificarModal("Cadastro cancelado pelo usuário. Nenhum dado foi registrado.", "Cadastro Cancelado");
            return;
        }
        nome = nome.trim();
        if (nome === "") {
            await notificarModal("O nome do vinho não pode ficar em branco. Por favor, preencha o campo.", "Campo Obrigatório");
        } else {
            nomeValido = true;
        }
    } while (!nomeValido);

    const tiposPermitidos = ["suave", "tinto", "seco", "branco"];
    let tipoValido = false;
    do {
        tipo = await solicitarDadoVinho("Digite o tipo do vinho (apenas: Tinto, Branco, Suave ou Seco):", "", "Etapa 2: Classificação");
        if (tipo === null) {
            await notificarModal("Cadastro cancelado pelo usuário. Nenhum dado foi registrado.", "Cadastro Cancelado");
            return;
        }
        tipo = tipo.trim().toLowerCase();
        if (!tiposPermitidos.includes(tipo)) {
            await notificarModal("Tipo inválido! Escolha estritamente entre: Tinto, Branco, Suave ou Seco.", "Classificação Inválida");
        } else {
            tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            tipoValido = true;
        }
    } while (!tipoValido);

    let safraValida = false;
    do {
        safra = await solicitarDadoVinho("Digite o ano da safra (ex: 2021):", "", "Etapa 3: Safra");
        if (safra === null) {
            await notificarModal("Cadastro cancelado pelo usuário. Nenhum dado foi registrado.", "Cadastro Cancelado");
            return;
        }
        safra = safra.trim();
        let anoNum = parseInt(safra, 10);
        if (safra === "" || isNaN(anoNum) || anoNum < 1800 || anoNum > 2030) {
            await notificarModal("Por favor, digite um ano de safra válido (apenas números entre 1800 e 2030).", "Ano Inválido");
        } else {
            safraValida = true;
        }
    } while (!safraValida);

    let qtdValida = false;
    do {
        quantidade = await solicitarDadoVinho("Digite a quantidade em estoque:", "", "Etapa 4: Estoque");
        if (quantidade === null) {
            await notificarModal("Cadastro cancelado pelo usuário. Nenhum dado foi registrado.", "Cadastro Cancelado");
            return;
        }
        quantidade = quantidade.trim();
        let qtdNum = parseInt(quantidade, 10);
        if (quantidade === "" || isNaN(qtdNum) || qtdNum < 0) {
            await notificarModal("Por favor, digite uma quantidade válida em estoque (apenas números inteiros maiores ou iguais a 0).", "Quantidade Inválida");
        } else {
            qtdValida = true;
        }
    } while (!qtdValida);

    await notificarModal("Cadastro realizado! Veja os detalhes no console.", "Sucesso");
    await notificarModal("A seguir, veja os detalhes do vinho no console.", "Detalhes do Rótulo");

    console.log("=== NOVO VINHO CADASTRADO ===");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Estoque: " + quantidade);
    console.log("=============================");

    const tabelaCorpo = document.getElementById("tabela-corpo-vinhos");
    if (tabelaCorpo) {
        const classeTipo = "badge-" + tipo.toLowerCase();
        const novaLinha = document.createElement("tr");
        novaLinha.classList.add("linha-recem-cadastrada");
        novaLinha.innerHTML = `
            <td><strong>${nome}</strong> <span class="badge-novo">Novo</span></td>
            <td><span class="badge-tipo ${classeTipo}">${tipo}</span></td>
            <td>${safra}</td>
            <td>${quantidade} un.</td>
            <td><span class="status-badge status-ativo">Em Estoque</span></td>
        `;
        tabelaCorpo.prepend(novaLinha);
    }

    exibirNotificacaoCadastro("Vinho '" + nome + "' cadastrado com sucesso no inventário!");
}
