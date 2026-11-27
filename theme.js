(() => {
  const savedTheme = localStorage.getItem('pixelgear-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  const createThemeToggle = () => {
    if (document.querySelector('.theme-toggle')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Alternar modo escuro');

    const isDark = document.body.classList.contains('dark-mode');
    button.innerHTML = isDark ? '<span>☀</span><b>Modo claro</b>' : '<span>☾</span><b>Modo escuro</b>';

    button.addEventListener('click', () => {
      const enabled = document.body.classList.toggle('dark-mode');
      localStorage.setItem('pixelgear-theme', enabled ? 'dark' : 'light');
      button.innerHTML = enabled ? '<span>☀</span><b>Modo claro</b>' : '<span>☾</span><b>Modo escuro</b>';
      button.setAttribute('aria-pressed', String(enabled));
    });

    button.setAttribute('aria-pressed', String(isDark));
    document.body.appendChild(button);
  };

  if (document.body) {
    createThemeToggle();
  } else {
    document.addEventListener('DOMContentLoaded', createThemeToggle);
  }
})();
