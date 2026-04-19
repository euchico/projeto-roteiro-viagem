import { roteiro } from "../../data/roteiro.js";

const DEFAULT_ACTIVITY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCB-DfnDGzVz2A1Z7R-xxzYVoDZNd-P2c72k6Ekz7J-uexwmKor9caM13otEstfEoMOxUAd_kO93lcmKDpPvhV5H9gmCl5S0fJQXxZtWB6G6z_wENCX1jJqyjmtpNO-3UM_YFGU6LUI-kKUXaFWmgcuzn6bIpmmv-1z5VcZPnNtb85qUAiBTD_nfN8fCHlzKhIqN4S20MjEsrD6xN_EbMCHzdZnUGrXmuyum57WSeRvHVltUV4hWlbl5R8HlC7actcP7jQr7yIiFzJ4";

const state = {
  diaAtivoId: getInitialDayId()
};

const elements = {
  tripTitle: document.querySelector("#trip-title"),
  tripPeriod: document.querySelector("#trip-period"),
  tripIndicators: document.querySelector("#trip-indicators"),
  dayNav: document.querySelector("#day-nav"),
  daySummary: document.querySelector("#day-summary"),
  activities: document.querySelector("#activities"),
  activityTemplate: document.querySelector("#activity-card-template"),
  toast: document.querySelector("#toast")
};

renderApp();
window.addEventListener("hashchange", handleHashChange);

function renderApp() {
  renderTripHeader();
  renderIndicators();
  renderDayNav();
  renderDaySummary();
  renderActivities();
}

function renderTripHeader() {
  elements.tripTitle.textContent = roteiro.viagem.titulo;
  elements.tripPeriod.textContent = roteiro.viagem.periodo;
}

function renderIndicators() {
  const totalDias = roteiro.dias.length;
  const todosPasseios = roteiro.dias.flatMap((dia) => dia.passeios);
  const totalPasseios = todosPasseios.length;
  const ingressosComprados = todosPasseios.filter((passeio) => passeio.ingresso.comprado).length;

  const indicadores = [
    {
      icon: "dashboard",
      text: `${totalDias} ${pluralize(totalDias, "Dia", "Dias")}`,
      emphasized: false
    },
    {
      icon: "hiking",
      text: `${totalPasseios} ${pluralize(totalPasseios, "Passeio", "Passeios")}`,
      emphasized: false
    },
    {
      icon: "confirmation_number",
      text: `${ingressosComprados} Ingressos Comprados`,
      emphasized: true
    }
  ];

  elements.tripIndicators.innerHTML = indicadores
    .map(
      (item) => `
        <li class="indicator-pill ${item.emphasized ? "is-emphasis" : ""}">
          <span class="material-symbols-outlined indicator-icon" aria-hidden="true">${item.icon}</span>
          ${item.text}
        </li>
      `
    )
    .join("");
}

function renderDayNav() {
  const navButtons = roteiro.dias
    .map((dia) => {
      const isActive = dia.id === state.diaAtivoId;
      return `
        <button
          class="day-button ${isActive ? "is-active" : ""}"
          type="button"
          data-day-id="${dia.id}"
          aria-pressed="${isActive}"
        >
          ${dia.label}
        </button>
      `;
    })
    .join("");

  elements.dayNav.innerHTML = navButtons;
  elements.dayNav.querySelectorAll(".day-button").forEach((button) => {
    button.addEventListener("click", () => setActiveDay(button.dataset.dayId));
  });
}

function renderDaySummary() {
  const diaAtual = getActiveDay();
  const passeioCount = diaAtual.passeios.length;

  elements.daySummary.innerHTML = `
    <div class="day-summary-content">
      <p class="day-date">${diaAtual.data}</p>
      <h2 class="day-title">${diaAtual.titulo}</h2>
      <div class="day-meta">
        <span class="material-symbols-outlined day-meta-icon" aria-hidden="true">layers</span>
        <span>${passeioCount} ${pluralize(passeioCount, "Passeio", "Passeios")}</span>
      </div>
      <p class="day-observation">"${diaAtual.observacao}"</p>
    </div>
    <div class="day-summary-glow" aria-hidden="true"></div>
  `;
}

function renderActivities() {
  const diaAtual = getActiveDay();

  elements.activities.innerHTML = "";

  diaAtual.passeios.forEach((passeio, index) => {
    const fragment = elements.activityTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".activity-card");

    card.querySelector(".activity-name").textContent = `${index + 1}. ${passeio.nome}`;

    const priorityBadge = card.querySelector(".priority-badge");
    priorityBadge.textContent = `Prioridade ${passeio.prioridade}`;
    priorityBadge.classList.add(`priority-${normalizePriority(passeio.prioridade)}`);

    const activityImage = card.querySelector(".activity-image");
    activityImage.style.backgroundImage = `url('${passeio.imagem || DEFAULT_ACTIVITY_IMAGE}')`;

    card.querySelector(".activity-address").textContent = passeio.endereco;

    const mapLink = card.querySelector(".action-map");
    mapLink.href = passeio.mapa;

    const officialLink = card.querySelector(".action-official");
    officialLink.href = passeio.ingresso.oficial;

    card.querySelector(".ticket-price").textContent = `${passeio.ingresso.valor}`;

    const ticketStatus = card.querySelector(".ticket-status-badge");
    ticketStatus.textContent = passeio.ingresso.comprado ? "Comprado: Sim" : "Comprado: Não";
    ticketStatus.classList.toggle("is-positive", passeio.ingresso.comprado);
    ticketStatus.classList.toggle("is-pending", !passeio.ingresso.comprado);

    card.querySelector(".open-days").textContent = passeio.funcionamento.dias;
    card.querySelector(".open-hours").textContent = passeio.funcionamento.entrada;

    card.querySelector(".distance").textContent = passeio.planejamento.distancia;
    card.querySelector(".time").textContent = passeio.planejamento.tempo;
    card.querySelector(".cost").textContent = passeio.planejamento.valor;

    const checklist = card.querySelector(".checklist");
    checklist.innerHTML = passeio.checklist
      .map(
        (item) => `
          <li class="check-item">
            <span class="material-symbols-outlined check-icon" aria-hidden="true">check_circle</span>
            ${item}
          </li>
        `
      )
      .join("");

    card.querySelector(".notes-text").textContent = passeio.notas;

    const copyButton = card.querySelector(".action-copy");
    copyButton.addEventListener("click", async () => {
      const success = await copyToClipboard(passeio.endereco);
      showToast(success ? "Endereço copiado" : "Não foi possível copiar");
    });

    elements.activities.appendChild(fragment);
  });
}

function setActiveDay(dayId) {
  if (!roteiro.dias.some((dia) => dia.id === dayId)) {
    return;
  }

  state.diaAtivoId = dayId;
  window.location.hash = dayId;
  renderDayNav();
  renderDaySummary();
  renderActivities();
}

function getActiveDay() {
  return roteiro.dias.find((dia) => dia.id === state.diaAtivoId) || roteiro.dias[0];
}

function getInitialDayId() {
  const hash = window.location.hash.replace("#", "");
  if (roteiro.dias.some((dia) => dia.id === hash)) {
    return hash;
  }
  return roteiro.dias[0]?.id;
}

function handleHashChange() {
  const hash = window.location.hash.replace("#", "");
  if (!hash || hash === state.diaAtivoId) {
    return;
  }

  if (roteiro.dias.some((dia) => dia.id === hash)) {
    state.diaAtivoId = hash;
    renderDayNav();
    renderDaySummary();
    renderActivities();
  }
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const fallbackInput = document.createElement("textarea");
    fallbackInput.value = text;
    fallbackInput.style.position = "fixed";
    fallbackInput.style.opacity = "0";
    document.body.appendChild(fallbackInput);
    fallbackInput.focus();
    fallbackInput.select();
    const copied = document.execCommand("copy");
    fallbackInput.remove();
    return copied;
  } catch {
    return false;
  }
}

let toastTimeout;

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  elements.toast.classList.add("is-visible");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
    elements.toast.hidden = true;
  }, 1800);
}

function normalizePriority(priority) {
  return priority
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function pluralize(value, singular, plural) {
  return value === 1 ? singular : plural;
}
