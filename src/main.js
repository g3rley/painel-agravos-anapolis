import './css/style.css';
import Chart from './js/charts/setup';
import { COLORS as C, ANOS, IDADES, MESES } from './data/constants';
import { mkLegend, axisDefaults, DEFAULTS } from './js/charts/utils';
import { initNavigation } from './js/navigation';

// Initialize Navigation
initNavigation();

/* ═══════════════════════════════════
   VISÃO GERAL
═══════════════════════════════════ */

/* Linha geral */
const lineGeralCtx = document.getElementById('lineGeral');
if (lineGeralCtx) {
  new Chart(lineGeralCtx, {
    type: 'line',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Acidente Trab.', data: [290, 318, 335, 348, 352], borderColor: C.blue, backgroundColor: C.blueL, tension: 0.4, fill: false, pointRadius: 5, borderWidth: 2 },
        { label: 'LER/DORT', data: [140, 158, 162, 171, 181], borderColor: C.amber, backgroundColor: C.amberL, tension: 0.4, fill: false, pointRadius: 5, borderWidth: 2 },
        { label: 'Intoxicação', data: [105, 115, 128, 140, 146], borderColor: C.purple, backgroundColor: C.purpleL, tension: 0.4, fill: false, pointRadius: 5, borderWidth: 2 },
        { label: 'Mat. Biológico', data: [88, 102, 68, 62, 69], borderColor: C.teal, backgroundColor: C.tealL, tension: 0.4, fill: false, pointRadius: 5, borderWidth: 2 },
        { label: 'Transt. Mental', data: [58, 72, 82, 89, 97], borderColor: C.red, backgroundColor: C.redL, tension: 0.4, fill: false, pointRadius: 5, borderWidth: 2 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
  mkLegend('legendLineGeral', [
    [C.blue, 'Acidente Trab.'], [C.amber, 'LER/DORT'], [C.purple, 'Intoxicação'],
    [C.teal, 'Mat. Biológico'], [C.red, 'Transt. Mental'],
  ]);
}

/* Pizza geral */
const pieAgravosCtx = document.getElementById('pieAgravos');
if (pieAgravosCtx) {
  new Chart(pieAgravosCtx, {
    type: 'doughnut',
    data: {
      labels: ['Acid. Trabalho', 'LER/DORT', 'Intoxicação', 'Mat. Biológico', 'Acid. Animais', 'Transt. Mental', 'PAIR', 'Dermatose', 'Pneumoconiose', 'Câncer Trab.'],
      datasets: [{
        data: [1643, 812, 634, 389, 204, 398, 276, 187, 82, 62],
        backgroundColor: [C.blue, C.amber, C.purple, C.teal, C.red, C.red, C.green, C.teal, C.gray, '#3C3434'],
        borderWidth: 2, borderColor: '#ffffff',
      }],
    },
    options: { ...DEFAULTS, cutout: '55%' },
  });
  mkLegend('legendPie', [
    [C.blue, 'Ac. Trab. 38,3%'], [C.amber, 'LER/DORT 19,0%'], [C.purple, 'Intox. 14,8%'],
    [C.teal, 'Mat. Biol. 9,1%'], [C.green, 'PAIR 6,4%'], [C.red, 'T. Mental 9,3%'],
  ]);
}

/* Pirâmide etária */
const piramideCtx = document.getElementById('piramide');
if (piramideCtx) {
  new Chart(piramideCtx, {
    type: 'bar',
    data: {
      labels: IDADES,
      datasets: [
        { label: 'Masculino', data: [-142, -298, -356, -312, -241, -98], backgroundColor: C.blueA, borderRadius: 3 },
        { label: 'Feminino', data: [88, 176, 214, 178, 132, 61], backgroundColor: C.redA, borderRadius: 3 },
      ],
    },
    options: {
      ...DEFAULTS, indexAxis: 'y',
      scales: {
        x: { ...axisDefaults(), ticks: { callback: (v) => Math.abs(v), color: '#ABABAB', font: { size: 11 } } },
        y: axisDefaults(),
      },
    },
  });
}

/* Radar sexo */
const radarSexoCtx = document.getElementById('radarSexo');
if (radarSexoCtx) {
  new Chart(radarSexoCtx, {
    type: 'radar',
    data: {
      labels: ['Acid. Trab.', 'LER/DORT', 'Intox.', 'Mat. Biol.', 'Animais', 'T. Mental', 'PAIR', 'Dermatose', 'Pneumo.'],
      datasets: [
        { label: 'Masculino', data: [78, 32, 52, 29, 65, 42, 83, 48, 96], backgroundColor: 'rgba(27,94,168,0.15)', borderColor: C.blue, pointBackgroundColor: C.blue, borderWidth: 2 },
        { label: 'Feminino', data: [22, 68, 48, 71, 35, 58, 17, 52, 4], backgroundColor: 'rgba(194,59,59,0.15)', borderColor: C.red, pointBackgroundColor: C.red, borderWidth: 2 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: {
        r: {
          ticks: { display: false }, grid: { color: 'rgba(0,0,0,0.08)' },
          pointLabels: { color: '#6B6B68', font: { size: 11, family: 'DM Sans' } },
        },
      },
    },
  });
}

/* Barras setor */
const barSetorCtx = document.getElementById('barSetor');
if (barSetorCtx) {
  new Chart(barSetorCtx, {
    type: 'bar',
    data: {
      labels: ['Indústria', 'Saúde', 'Comércio', 'Construção', 'Agropecuária', 'Transporte', 'Serviços', 'Outros'],
      datasets: [{
        label: 'Notificações', data: [1124, 748, 586, 412, 358, 287, 441, 331],
        backgroundColor: [C.blueA, C.tealA, C.amberA, C.grayA, C.greenA, C.purpleA, C.redA, 'rgba(100,100,100,0.5)'],
        borderRadius: 4, borderWidth: 0,
      }],
    },
    options: {
      ...DEFAULTS, indexAxis: 'y',
      scales: { x: axisDefaults(), y: axisDefaults() },
    },
  });
}

/* ═══════════════════════════════════
   LER/DORT
═══════════════════════════════════ */
const barLerSexoCtx = document.getElementById('barLerSexo');
if (barLerSexoCtx) {
  new Chart(barLerSexoCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Masculino', data: [46, 52, 54, 56, 59], backgroundColor: C.blueA, borderRadius: 3, borderWidth: 0 },
        { label: 'Feminino', data: [94, 106, 108, 115, 122], backgroundColor: C.redA, borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true, stacked: false } } },
  });
}

const areaLerDermCtx = document.getElementById('areaLerDerm');
if (areaLerDermCtx) {
  new Chart(areaLerDermCtx, {
    type: 'line',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'LER/DORT', data: [140, 158, 162, 171, 181], backgroundColor: C.amberL, borderColor: C.amber, fill: true, tension: 0.4, borderWidth: 2 },
        { label: 'Dermatoses', data: [32, 36, 38, 40, 41], backgroundColor: C.tealL, borderColor: C.teal, fill: true, tension: 0.4, borderWidth: 2 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const barLerIdadeCtx = document.getElementById('barLerIdade');
if (barLerIdadeCtx) {
  new Chart(barLerIdadeCtx, {
    type: 'bar',
    data: {
      labels: IDADES,
      datasets: [{
        label: 'LER/DORT', data: [48, 198, 245, 182, 98, 41],
        backgroundColor: IDADES.map((_, i) => `rgba(184,107,13,${0.4 + i * 0.08})`), borderRadius: 3,
      }],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const pieLerCtx = document.getElementById('pieLer');
if (pieLerCtx) {
  new Chart(pieLerCtx, {
    type: 'pie',
    data: {
      labels: ['Tendinite', 'DORT', 'T. Carpo', 'Bursite', 'Cervicalgia', 'Outros'],
      datasets: [{
        data: [28, 22, 18, 14, 10, 8],
        backgroundColor: [C.amber, '#D4891A', '#E8B45E', '#F5D49A', C.teal, C.gray], borderWidth: 2, borderColor: '#fff',
      }],
    },
    options: { ...DEFAULTS },
  });
  mkLegend('legendLerPie', [[C.amber, 'Tendinite 28%'], ['#D4891A', 'DORT 22%'], ['#E8B45E', 'T. Carpo 18%'], ['#F5D49A', 'Bursite 14%'], [C.teal, 'Cervicalgia 10%']]);
}

const barLerSetorCtx = document.getElementById('barLerSetor');
if (barLerSetorCtx) {
  new Chart(barLerSetorCtx, {
    type: 'bar',
    data: {
      labels: ['Comércio', 'Saúde', 'Indústria', 'Serviços', 'T.I.', 'Admin.'],
      datasets: [{ label: 'LER/DORT', data: [218, 175, 142, 138, 78, 61], backgroundColor: C.amberA, borderRadius: 3, borderWidth: 0 }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

/* ═══════════════════════════════════
   ACIDENTES
═══════════════════════════════════ */
const mesesAll = [
  ...MESES.map((m) => m + '/22'),
  ...MESES.map((m) => m + '/23'),
  ...MESES.map((m) => m + '/24'),
];
const acidMensal = [28, 24, 31, 27, 33, 29, 35, 38, 32, 34, 30, 26, 29, 26, 34, 31, 36, 32, 38, 41, 35, 37, 33, 29, 31, 28, 36, 33, 39, 35, 40, 44, 37, 40, 36, 31];
const animalMensal = [3, 2, 4, 5, 7, 8, 9, 10, 8, 6, 4, 3, 3, 3, 5, 6, 8, 9, 10, 11, 9, 7, 5, 4, 4, 3, 5, 7, 9, 10, 11, 12, 10, 8, 6, 5];

const lineMensalCtx = document.getElementById('lineMensal');
if (lineMensalCtx) {
  new Chart(lineMensalCtx, {
    type: 'line',
    data: {
      labels: mesesAll,
      datasets: [
        { label: 'Acid. Trabalho', data: acidMensal, borderColor: C.blue, backgroundColor: 'transparent', tension: 0.3, borderWidth: 2, pointRadius: 2 },
        { label: 'Animais Peçonhentos', data: animalMensal, borderColor: C.red, backgroundColor: 'transparent', tension: 0.3, borderWidth: 2, pointRadius: 2 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: {
        x: { ...axisDefaults(), ticks: { maxRotation: 45, color: '#ABABAB', font: { size: 10 }, maxTicksLimit: 12 } },
        y: { ...axisDefaults(), beginAtZero: true },
      },
    },
  });
}

const barAcidSexoCtx = document.getElementById('barAcidSexo');
if (barAcidSexoCtx) {
  new Chart(barAcidSexoCtx, {
    type: 'bar',
    data: {
      labels: ['Acid. Grave', 'Acid. Biológico', 'Acid. Animais', 'Acid. Trajeto'],
      datasets: [
        { label: 'Masculino', data: [1281, 112, 138, 201], backgroundColor: C.blueA, borderRadius: 3, borderWidth: 0 },
        { label: 'Feminino', data: [362, 277, 66, 159], backgroundColor: C.redA, borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const pieAcidSetorCtx = document.getElementById('pieAcidSetor');
if (pieAcidSetorCtx) {
  new Chart(pieAcidSetorCtx, {
    type: 'pie',
    data: {
      labels: ['Indústria', 'Construção', 'Transporte', 'Comércio', 'Saúde', 'Agropec.', 'Outros'],
      datasets: [{
        data: [34, 22, 16, 12, 8, 5, 3],
        backgroundColor: [C.blue, '#3A82C0', '#6EAEE0', C.teal, C.purple, C.green, C.gray], borderWidth: 2, borderColor: '#fff',
      }],
    },
    options: { ...DEFAULTS },
  });
  mkLegend('legendAcidPie', [[C.blue, 'Indústria 34%'], ['#3A82C0', 'Construção 22%'], ['#6EAEE0', 'Transporte 16%'], [C.teal, 'Comércio 12%'], [C.purple, 'Saúde 8%']]);
}

const barParteCorpoCtx = document.getElementById('barParteCorpo');
if (barParteCorpoCtx) {
  new Chart(barParteCorpoCtx, {
    type: 'bar',
    data: {
      labels: ['Mãos/Dedos', 'Pés/Tornozelo', 'Olhos', 'Coluna', 'Membros inf.', 'Cabeça', 'Tronco'],
      datasets: [{
        label: 'Frequência', data: [382, 248, 195, 178, 156, 134, 112],
        backgroundColor: ['#1B5EA8', '#2A72C4', '#4A90D8', '#6EAEE0', '#96C8EC', '#BAD9F2', '#D6EAF8'].map((c) => c + 'CC'), borderRadius: 3,
      }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

const pieAnimalCtx = document.getElementById('pieAnimal');
if (pieAnimalCtx) {
  new Chart(pieAnimalCtx, {
    type: 'doughnut',
    data: {
      labels: ['Escorpiões', 'Serpentes', 'Aranhas', 'Abelhas', 'Outros'],
      datasets: [{
        data: [48, 28, 14, 7, 3],
        backgroundColor: [C.red, C.amber, C.purple, C.green, C.gray], borderWidth: 2, borderColor: '#fff',
      }],
    },
    options: { ...DEFAULTS, cutout: '45%' },
  });
  mkLegend('legendAnimalPie', [[C.red, 'Escorpiões 48%'], [C.amber, 'Serpentes 28%'], [C.purple, 'Aranhas 14%'], [C.green, 'Abelhas 7%']]);
}

const lineAcidTendCtx = document.getElementById('lineAcidTend');
if (lineAcidTendCtx) {
  new Chart(lineAcidTendCtx, {
    type: 'line',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Acid. Trabalho', data: [290, 318, 335, 348, 352], borderColor: C.blue, tension: 0.4, fill: false, borderWidth: 2, pointRadius: 5 },
        { label: 'Animais Peçonhentos', data: [36, 38, 40, 43, 47], borderColor: C.red, tension: 0.4, fill: false, borderWidth: 2, pointRadius: 5, borderDash: [4, 3] },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

/* ═══════════════════════════════════
   BIOLÓGICO & CÂNCER
═══════════════════════════════════ */
const barBioSexoCtx = document.getElementById('barBioSexo');
if (barBioSexoCtx) {
  new Chart(barBioSexoCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Masculino', data: [24, 28, 18, 17, 19], backgroundColor: C.blueA, borderRadius: 3, borderWidth: 0 },
        { label: 'Feminino', data: [64, 74, 50, 45, 50], backgroundColor: C.redA, borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const pieExposicaoCtx = document.getElementById('pieExposicao');
if (pieExposicaoCtx) {
  new Chart(pieExposicaoCtx, {
    type: 'pie',
    data: {
      labels: ['Pérfuro-cortante', 'Respingo mucosa', 'Contato pele', 'Mordedura', 'Outros'],
      datasets: [{
        data: [58, 22, 12, 5, 3],
        backgroundColor: [C.purple, '#7865D0', '#9E90E2', '#C0B8F0', C.gray], borderWidth: 2, borderColor: '#fff',
      }],
    },
    options: { ...DEFAULTS },
  });
  mkLegend('legendBioPie', [[C.purple, 'Pérfuro-cortante 58%'], ['#7865D0', 'Respingo 22%'], ['#9E90E2', 'Contato pele 12%']]);
}

const barBioProfissaoCtx = document.getElementById('barBioProfissao');
if (barBioProfissaoCtx) {
  new Chart(barBioProfissaoCtx, {
    type: 'bar',
    data: {
      labels: ['Enfermagem', 'Aux. Enf.', 'Médico', 'Dentista', 'Fisioterapeuta', 'Limpeza', 'Outros'],
      datasets: [{
        label: 'Casos', data: [138, 84, 52, 38, 24, 31, 22],
        backgroundColor: C.purpleA, borderRadius: 3, borderWidth: 0,
      }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

const barCancerCtx = document.getElementById('barCancer');
if (barCancerCtx) {
  new Chart(barCancerCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Pulmão', data: [5, 6, 7, 7, 8], backgroundColor: C.red, borderRadius: 3, borderWidth: 0 },
        { label: 'Pele', data: [3, 4, 4, 5, 5], backgroundColor: C.amber, borderRadius: 3, borderWidth: 0 },
        { label: 'Bexiga', data: [1, 2, 2, 2, 3], backgroundColor: C.purple, borderRadius: 3, borderWidth: 0 },
        { label: 'Leucemia', data: [1, 1, 2, 2, 2], backgroundColor: C.teal, borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: {
        x: axisDefaults(),
        y: { ...axisDefaults(), beginAtZero: true, stacked: true },
      },
    },
  });
}

/* ═══════════════════════════════════
   AUDITIVA & INTOXICAÇÃO
═══════════════════════════════════ */
const areaAudIntCtx = document.getElementById('areaAudInt');
if (areaAudIntCtx) {
  new Chart(areaAudIntCtx, {
    type: 'line',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'PAIR', data: [48, 54, 56, 58, 60], backgroundColor: 'rgba(15,115,96,0.25)', borderColor: C.teal, fill: true, tension: 0.4, borderWidth: 2 },
        { label: 'Intoxicação', data: [105, 115, 128, 140, 146], backgroundColor: 'rgba(82, 65, 176,0.15)', borderColor: C.purple, fill: true, tension: 0.4, borderWidth: 2 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const pieIntoxAgenteCtx = document.getElementById('pieIntoxAgente');
if (pieIntoxAgenteCtx) {
  new Chart(pieIntoxAgenteCtx, {
    type: 'doughnut',
    data: {
      labels: ['Agrotóxico', 'Medicamento', 'Domissanitário', 'Metal pesado', 'Solvente', 'Outros'],
      datasets: [{
        data: [44, 22, 14, 9, 6, 5],
        backgroundColor: [C.green, C.purple, C.amber, C.red, C.teal, C.gray], borderWidth: 2, borderColor: '#fff',
      }],
    },
    options: { ...DEFAULTS, cutout: '50%' },
  });
  mkLegend('legendIntoxPie', [[C.green, 'Agrotóxico 44%'], [C.purple, 'Medicamento 22%'], [C.amber, 'Domissanitário 14%'], [C.red, 'Metal pesado 9%']]);
}

const barPairIdadeCtx = document.getElementById('barPairIdade');
if (barPairIdadeCtx) {
  new Chart(barPairIdadeCtx, {
    type: 'bar',
    data: {
      labels: IDADES,
      datasets: [
        { label: 'Masculino', data: [18, 42, 58, 64, 36, 11], backgroundColor: C.blueA, borderRadius: 3 },
        { label: 'Feminino', data: [3, 7, 10, 12, 6, 2], backgroundColor: C.redA, borderRadius: 3 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const barPairSetorCtx = document.getElementById('barPairSetor');
if (barPairSetorCtx) {
  new Chart(barPairSetorCtx, {
    type: 'bar',
    data: {
      labels: ['Metalurgia', 'Mineração', 'Ind. Cimento', 'Construção', 'Ind. Madeira', 'Agropec.'],
      datasets: [{ label: 'PAIR', data: [84, 42, 38, 36, 28, 24], backgroundColor: C.tealA, borderRadius: 3 }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

const barIntoxGravCtx = document.getElementById('barIntoxGrav');
if (barIntoxGravCtx) {
  new Chart(barIntoxGravCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Leve', data: [64, 72, 80, 87, 90], backgroundColor: C.greenA, borderRadius: 3, borderWidth: 0 },
        { label: 'Moderada', data: [28, 31, 34, 37, 39], backgroundColor: C.amberA, borderRadius: 3, borderWidth: 0 },
        { label: 'Grave', data: [11, 10, 12, 14, 15], backgroundColor: C.redA, borderRadius: 3, borderWidth: 0 },
        { label: 'Óbito', data: [2, 2, 2, 2, 2], backgroundColor: '#222', borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true, stacked: true } },
    },
  });
}

/* ═══════════════════════════════════
   TRANSTORNOS MENTAIS
═══════════════════════════════════ */
const barMentalDiagCtx = document.getElementById('barMentalDiag');
if (barMentalDiagCtx) {
  new Chart(barMentalDiagCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Burnout / Exaustão', data: [14, 18, 22, 27, 32], backgroundColor: C.redA, borderRadius: 3, borderWidth: 0 },
        { label: 'Depressão', data: [18, 21, 24, 26, 28], backgroundColor: C.purpleA, borderRadius: 3, borderWidth: 0 },
        { label: 'Ansiedade', data: [12, 16, 18, 20, 22], backgroundColor: C.amberA, borderRadius: 3, borderWidth: 0 },
        { label: 'PTSD / Estresse', data: [8, 10, 11, 10, 9], backgroundColor: C.blueA, borderRadius: 3, borderWidth: 0 },
        { label: 'Outros', data: [6, 7, 7, 6, 6], backgroundColor: C.grayA, borderRadius: 3, borderWidth: 0 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true, stacked: true } },
    },
  });
  mkLegend('legendMentalDiag', [
    [C.red, 'Burnout/Exaustão'], [C.purple, 'Depressão'], [C.amber, 'Ansiedade'], [C.blue, 'PTSD/Estresse'], [C.gray, 'Outros'],
  ]);
}

const barMentalIdadeCtx = document.getElementById('barMentalIdade');
if (barMentalIdadeCtx) {
  new Chart(barMentalIdadeCtx, {
    type: 'bar',
    data: {
      labels: IDADES,
      datasets: [
        { label: 'Masculino', data: [18, 42, 44, 38, 22, 9], backgroundColor: C.blueA, borderRadius: 3 },
        { label: 'Feminino', data: [24, 58, 62, 52, 31, 12], backgroundColor: C.redA, borderRadius: 3 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const barMentalSetorCtx = document.getElementById('barMentalSetor');
if (barMentalSetorCtx) {
  new Chart(barMentalSetorCtx, {
    type: 'bar',
    data: {
      labels: ['Saúde', 'Educação', 'Serviços', 'Comércio', 'Indústria', 'Adm. Pública', 'Outros'],
      datasets: [{ label: 'Casos', data: [112, 74, 62, 54, 44, 31, 21], backgroundColor: C.redA, borderRadius: 3 }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

/* ═══════════════════════════════════
   PNEUMOCONIOSES
═══════════════════════════════════ */
const barPneumoTipoCtx = document.getElementById('barPneumoTipo');
if (barPneumoTipoCtx) {
  new Chart(barPneumoTipoCtx, {
    type: 'bar',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Silicose', data: [10, 11, 11, 12, 13], backgroundColor: C.grayA, borderRadius: 3 },
        { label: 'Asbestose', data: [2, 2, 3, 3, 3], backgroundColor: C.blueA, borderRadius: 3 },
        { label: 'Pneum. Carvão', data: [1, 1, 1, 1, 1], backgroundColor: 'rgba(50,50,50,0.6)', borderRadius: 3 },
        { label: 'ODTS', data: [2, 2, 2, 3, 3], backgroundColor: C.amberA, borderRadius: 3 },
      ],
    },
    options: {
      ...DEFAULTS,
      scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true, stacked: true } },
    },
  });
  mkLegend('legendPneumoTipo', [[C.gray, 'Silicose 61%'], [C.blue, 'Asbestose 16%'], ['rgba(50,50,50,0.8)', 'Pneum. Carvão 9%'], [C.amber, 'ODTS 14%']]);
}

const barPneumoIdadeCtx = document.getElementById('barPneumoIdade');
if (barPneumoIdadeCtx) {
  new Chart(barPneumoIdadeCtx, {
    type: 'bar',
    data: {
      labels: IDADES,
      datasets: [{
        label: 'Casos', data: [1, 4, 14, 28, 22, 13],
        backgroundColor: IDADES.map((_, i) => `rgba(107,107,104,${0.3 + i * 0.12})`), borderRadius: 3,
      }],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}

const barPneumoSetorCtx = document.getElementById('barPneumoSetor');
if (barPneumoSetorCtx) {
  new Chart(barPneumoSetorCtx, {
    type: 'bar',
    data: {
      labels: ['Mineração', 'Ind. Cerâmica', 'Construção Civil', 'Ind. Cimento', 'Fundição', 'Outros'],
      datasets: [{ label: 'Casos', data: [28, 18, 14, 10, 7, 5], backgroundColor: C.grayA, borderRadius: 3 }],
    },
    options: { ...DEFAULTS, indexAxis: 'y', scales: { x: axisDefaults(), y: axisDefaults() } },
  });
}

const linePneumoCtx = document.getElementById('linePneumo');
if (linePneumoCtx) {
  new Chart(linePneumoCtx, {
    type: 'line',
    data: {
      labels: ANOS,
      datasets: [
        { label: 'Notificadas', data: [15, 16, 17, 17, 18], borderColor: C.gray, backgroundColor: 'rgba(107,107,104,0.1)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 5 },
        { label: 'Estimativa real', data: [75, 78, 82, 84, 88], borderColor: C.red, backgroundColor: 'rgba(194,59,59,0.05)', fill: true, tension: 0.4, borderWidth: 2, borderDash: [6, 4], pointRadius: 4 },
      ],
    },
    options: { ...DEFAULTS, scales: { x: axisDefaults(), y: { ...axisDefaults(), beginAtZero: true } } },
  });
}
