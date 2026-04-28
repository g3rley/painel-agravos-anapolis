export function initNavigation() {
  window.showSection = (id) => {
    document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
  };
}
