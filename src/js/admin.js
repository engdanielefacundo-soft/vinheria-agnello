const SENHA_ADMIN = "agnelovinhocp";

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

function customAlert(mensagem, titulo = "Vinheria Agnello") {
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
                    <button type="button" class="btn-modal-confirm" id="btn-modal-ok">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(backdrop);
        const btnOk = backdrop.querySelector("#btn-modal-ok");
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

function customPrompt(mensagem, valorPadrao = "", titulo = "Área Restrita", isPassword = false) {
    if (typeof document === "undefined" || !document.body) {
        if (typeof prompt === "function") return Promise.resolve(prompt(mensagem, valorPadrao));
        return Promise.resolve(null);
    }
    garantirEstilosModal();
    return new Promise((resolve) => {
        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";
        const inputType = isPassword ? "password" : "text";
        backdrop.innerHTML = `
            <div class="modal-card">
                <h3 class="modal-title">${titulo}</h3>
                <p class="modal-message">${mensagem}</p>
                <input type="${inputType}" class="modal-input" id="input-modal-prompt" value="${valorPadrao}" autocomplete="off">
                <div class="modal-actions">
                    <button type="button" class="btn-modal-cancel" id="btn-modal-cancel">Cancelar</button>
                    <button type="button" class="btn-modal-confirm" id="btn-modal-submit">Confirmar</button>
                </div>
            </div>
        `;
        document.body.appendChild(backdrop);

        const input = backdrop.querySelector("#input-modal-prompt");
        const btnSubmit = backdrop.querySelector("#btn-modal-submit");
        const btnCancel = backdrop.querySelector("#btn-modal-cancel");

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

function irParaIndex() {
    const destino = (window.location.pathname.includes("/pages/") || window.location.pathname.includes("/src/"))
        ? "../../index.html"
        : "index.html";
    window.location.replace(destino);
    window.location.href = destino;
}

async function sairAdmin() {
    sessionStorage.removeItem("vinheria_admin_autenticado");
    await customAlert("Sessão encerrada com sucesso. Retornando para a página inicial.", "Sessão Encerrada");
    irParaIndex();
}

async function verificarAcessoAdmin() {
    const painel = document.getElementById("conteudo-admin");

    if (sessionStorage.getItem("vinheria_admin_autenticado") === SENHA_ADMIN) {
        if (painel) painel.style.display = "block";
        return;
    }

    if (painel) painel.style.display = "none";

    let senha = await customPrompt("Área Restrita. Digite a senha de administrador da Vinheria Agnello:", "", "Área Administrativa", true);

    if (senha === null) {
        sessionStorage.removeItem("vinheria_admin_autenticado");
        if (painel) painel.style.display = "none";
        await customAlert("Acesso cancelado pelo usuário. Retornando para a página inicial.", "Acesso Cancelado");
        irParaIndex();
        return;
    }

    if (senha.trim() !== SENHA_ADMIN) {
        sessionStorage.removeItem("vinheria_admin_autenticado");
        if (painel) painel.style.display = "none";
        await customAlert("Senha incorreta! Acesso negado. Retornando para a página inicial.", "Acesso Negado");
        irParaIndex();
        return;
    }

    sessionStorage.setItem("vinheria_admin_autenticado", SENHA_ADMIN);
    await customAlert("Acesso autorizado! Bem-vindo(a) ao painel administrativo.", "Acesso Autorizado");
    if (painel) painel.style.display = "block";
}

function iniciarControleAdmin() {
    const paginaAdmin = document.getElementById("pagina-admin");
    if (paginaAdmin) {
        verificarAcessoAdmin();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarControleAdmin);
} else {
    iniciarControleAdmin();
}
