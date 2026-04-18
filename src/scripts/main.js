import { roteiro } from "../../data/roteiro.js";

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
    `${totalDias} ${pluralize(totalDias, "dia", "dias")}`,
    `${totalPasseios} ${pluralize(totalPasseios, "passeio", "passeios")}`,
    `${ingressosComprados} ingressos comprados`
  ];

  elements.tripIndicators.innerHTML = indicadores
    .map((item) => `<li class="indicator-pill">${item}</li>`)
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
    <p class="day-date">${diaAtual.data}</p>
    <h2 class="day-title">${diaAtual.titulo}</h2>
    <p class="day-meta">${passeioCount} ${pluralize(passeioCount, "passeio", "passeios")}</p>
    <p class="day-observation">${diaAtual.observacao}</p>
  `;
}

function renderActivities() {
  const diaAtual = getActiveDay();

  elements.activities.innerHTML = "";

  diaAtual.passeios.forEach((passeio, index) => {
    const fragment = elements.activityTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".activity-card");

    card.querySelector(".activity-index").textContent = `Passeio ${index + 1}`;
    card.querySelector(".activity-name").textContent = passeio.nome;

    const priorityBadge = card.querySelector(".priority-badge");
    priorityBadge.textContent = `Prioridade ${passeio.prioridade}`;
    priorityBadge.classList.add(`priority-${normalizePriority(passeio.prioridade)}`);

    card.querySelector(".activity-address").textContent = passeio.endereco;

    const mapLink = card.querySelector(".action-map");
    mapLink.href = passeio.mapa;

    const officialLink = card.querySelector(".action-official");
    officialLink.href = passeio.ingresso.oficial;

    card.querySelector(".ticket-price").textContent = `Valor: ${passeio.ingresso.valor}`;

    const ticketStatus = card.querySelector(".ticket-status");
    ticketStatus.textContent = passeio.ingresso.comprado ? "Status: Comprado" : "Status: Pendente";
    ticketStatus.classList.toggle("is-positive", passeio.ingresso.comprado);

    card.querySelector(".open-days").textContent = passeio.funcionamento.dias;
    card.querySelector(".open-hours").textContent = passeio.funcionamento.entrada;

    card.querySelector(".best-time").textContent = passeio.planejamento.melhorHorario;
    card.querySelector(".travel-time").textContent = passeio.planejamento.deslocamento;
    card.querySelector(".duration").textContent = passeio.planejamento.duracao;

    const checklist = card.querySelector(".checklist");
    checklist.innerHTML = passeio.checklist
      .map((item) => `<li class="check-item">${item}</li>`)
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
