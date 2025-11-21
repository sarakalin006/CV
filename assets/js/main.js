// Social accounts data structure
const socialAccounts = {
  email: {
    icon: 'mail',
    url: 'mailto:{{ site.email }}',
    label: 'Email'
  },
  phone: {
    icon: 'phone',
    url: 'tel:{{ site.phone }}',
    label: 'Phone'
  },
  linkedin: {
    icon: 'linkedin',
    url: '{{ site.linkedin }}',
    label: 'LinkedIn'
  },
  github: {
    icon: 'github',
    url: 'https://github.com/{{ site.github }}',
    label: 'GitHub'
  },
  telegram: {
    icon: 'telegram',
    url: 'https://t.me/{{ site.telegram }}',
    label: 'Telegram'
  }
};

// SVG Icons
const icons = {
  mail: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-.996.082-1.483.082-9.94 0-18-8.06-18-18c0-.487.027-.953.082-1.483a1 1 0 0 1 .995-.898h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 7.72 6.116a1 1 0 0 1-.296 1.294l-1.238.884-.82-1.514z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
};

function toggleTimelineDescription(button) {
  const timelineItem = button.closest('.timeline-item');
  const shortDesc = timelineItem.querySelector('.timeline-description-short');
  const fullDesc = timelineItem.querySelector('.timeline-description-full');
  
  if (fullDesc.classList.contains('expanded')) {
    // Currently expanded, so collapse
    fullDesc.classList.remove('expanded');
    shortDesc.classList.remove('collapsed');
  } else {
    // Currently collapsed, so expand
    fullDesc.classList.add('expanded');
    shortDesc.classList.add('collapsed');
  }
}