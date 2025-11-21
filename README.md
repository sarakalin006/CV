---
layout: default
permalink: /
---
<h1>{{ site.author }}</h1>
<p><em>{{ site.description }}</em></p>

<h2>Timeline</h2>
<ul class="timeline">
  <li class="timeline-item">
    <div class="timeline-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">SysAdmin Engineer at <a href="#">Favbet Tech</a></div>
        <div class="timeline-date">2025 – Present</div>
      </div>
      <div class="timeline-tags">
        <span class="tag">Linux</span><span class="tag">Azure</span><span class="tag">Bash</span>
      </div>
      <div class="timeline-description">
        <ul>
          <li>Administered Linux (Ubuntu, CentOS) and macOS environments.</li>
          <li>Automated server tasks via <strong>systemd</strong> and <strong>Bash</strong>.</li>
          <li>Managed Azure services and developed automation scripts for Microsoft Graph API.</li>
        </ul>
      </div>
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">SysAdmin Engineer at <a href="#">Binotel</a></div>
        <div class="timeline-date">2024 – 2025</div>
      </div>
      <div class="timeline-tags">
        <span class="tag">Linux</span><span class="tag">Telephony</span><span class="tag">Grafana</span>
      </div>
      <div class="timeline-description">
        <ul>
          <li>Maintained Linux servers for a high-traffic virtual PBX system.</li>
          <li>Developed Bash scripts to automate call data processing with the Binotel API.</li>
        </ul>
      </div>
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">Informational Security at <a href="#">State University of ICT</a></div>
        <div class="timeline-date">2022 – Present</div>
      </div>
      <div class="timeline-description">
        Bachelor's Degree in Cybersecurity and Information Protection.
      </div>
    </div>
  </li>
</ul>

<div class="contact-banner">
  <h2>Contact me</h2>
  <p>I'm always looking forward for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
  <div class="buttons">
    <a href="{{ site.cv_url }}" class="btn" download>Download Résumé <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
    <a href="https://t.me/{{ site.telegram }}" class="btn-link">Telegram me</a>
    <a href="mailto:{{ site.email }}" class="btn-link">Hit me an email</a>
  </div>
</div>