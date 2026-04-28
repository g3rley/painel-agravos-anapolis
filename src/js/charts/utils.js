export function mkLegend(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      ([color, label]) =>
        `<span class="legend-item"><span class="legend-dot" style="background:${color}"></span>${label}</span>`
    )
    .join('');
}

export function axisDefaults(color = '#ABABAB') {
  return {
    grid: { color: 'rgba(0,0,0,0.06)', drawBorder: false },
    ticks: { color, font: { family: 'DM Sans', size: 11 } },
  };
}

export const DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { callbacks: {} } },
  scales: {},
};
