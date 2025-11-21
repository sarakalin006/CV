(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const sunIcon = `<path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path><circle cx="12" cy="12" r="5"></circle>`;
  const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleIcon.innerHTML = sunIcon;
    } else {
      document.body.classList.remove('dark-mode');
      themeToggleIcon.innerHTML = moonIcon;
    }
  }

  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  }

  themeToggle.addEventListener('click', toggleTheme);

  // Apply theme on initial load
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
})();
