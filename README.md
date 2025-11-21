---
layout: default
permalink: /
---
<div class="header-content">
  <img src="{{ site.avatar | relative_url }}" alt="Avatar" class="avatar">
  <h1>{{ site.author }}</h1>
  <p><em>{{ site.description }}</em></p>
</div>

<div class="contact-icons">
  <a href="mailto:{{ site.email }}" title="Email"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
  <a href="tel:{{ site.phone }}" title="Phone"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
  <a href="{{ site.linkedin }}" title="LinkedIn" target="_blank"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
  <a href="https://github.com/{{ site.github }}" title="GitHub" target="_blank"><svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
  <a href="https://t.me/{{ site.telegram }}" title="Telegram" target="_blank"><svg viewBox="0 0 24 24"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2z"></path></svg></a>
</div>

<h2><span class="section-header">Timeline <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"></polyline></svg></span></h2>
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
        <div class="timeline-description-short">
          <ul>
            <li>Administered Linux (Ubuntu, CentOS) and macOS environments.</li>
            <li>Automated server tasks via <strong>systemd</strong> and <strong>Bash</strong>.</li>
          </ul>
          <button class="read-more-btn" onclick="toggleTimelineDescription(this)">Read more</button>
        </div>
        <div class="timeline-description-full">
          <ul>
            <li>Administered Linux (Ubuntu, CentOS) and macOS environments, configured services, development tooling, and troubleshooting networking/system-level issues.</li>
            <li>Automated Linux server tasks via <strong>systemd</strong> and <strong>Bash</strong>.</li>
            <li>Managed macOS dev environments: <strong>Homebrew</strong>, SSH keys, VPN, network configuration.</li>
            <li>Utilized Azure services including Functions, Logic Apps, Storage (Blob/Files), Monitor & Log Analytics, IAM, AD identities, RBAC.</li>
            <li>Developed Python & Bash automation scripts for Microsoft Graph/Azure API for Teams, Outlook, SharePoint, Users; OAuth2 and service-to-service flows.</li>
            <li>Managed Microsoft 365: Teams, SharePoint, Exchange Online, Entra ID; automated tasks via APIs and PowerShell.</li>
            <li>Version Control: Git (GitHub, GitLab) — branching strategies, repository management, pipeline triggers.</li>
            <li>Virtualization: Proxmox, VMware, UTM — VM deployment, snapshots, templates, resource management, cloud-init provisioning.</li>
            <li>Monitoring & Logging: Grafana, ELK — dashboards, alerting, log ingestion, metrics visualization.</li>
          </ul>
          <button class="read-more-btn" onclick="toggleTimelineDescription(this)">Show less</button>
        </div>
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
        <div class="timeline-description-short">
          <ul>
            <li>Maintained Linux servers for a high-traffic virtual PBX system.</li>
            <li>Developed Bash scripts to automate call data processing with the Binotel API.</li>
          </ul>
          <button class="read-more-btn" onclick="toggleTimelineDescription(this)">Read more</button>
        </div>
        <div class="timeline-description-full">
          <ul>
            <li>Maintained Linux servers hosting Binotel virtual PBX, ensured high availability of telephony services.</li>
            <li>Optimized system load during peak traffic (up to 100M calls/month).</li>
            <li>Configured SSH access, managed user roles, implemented backups, ensured system resilience.</li>
            <li>Developed Bash scripts for automated import of call statistics via <strong>Binotel API</strong>, CRM record creation, and logging.</li>
            <li>Implemented Grafana dashboards and alerting, tracked system metrics and telephony statistics.</li>
            <li>Assisted staff with environment setup, issue resolution, and access management.</li>
          </ul>
          <button class="read-more-btn" onclick="toggleTimelineDescription(this)">Show less</button>
        </div>
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

<h2>Technical Skills</h2>
<div class="skills-grid">
  <div>
    <h3>Core Technologies</h3>
    <ul>
      <li>Linux (Ubuntu, CentOS)</li>
      <li>macOS Server/Desktop</li>
      <li>Bash Scripting</li>
      <li>Azure Cloud Services</li>
      <li>Microsoft 365</li>
    </ul>
  </div>
  <div>
    <h3>Automation & DevOps</h3>
    <ul>
      <li>Python</li>
      <li>PowerShell (basic)</li>
      <li>Ansible (basic)</li>
      <li>Docker & Docker Compose</li>
      <li>CI/CD (GitHub Actions, GitLab CI)</li>
    </ul>
  </div>
  <div>
    <h3>Tools & Platforms</h3>
    <ul>
      <li>Git (GitHub, GitLab)</li>
      <li>Proxmox, VMware, UTM</li>
      <li>Grafana, ELK Stack</li>
      <li>Networking (TCP/IP, DNS, VPN)</li>
    </ul>
  </div>
</div>

<h2>Soft Skills</h2>
<div class="skills-grid">
  <ul>
    <li>Analytical thinking</li>
    <li>Troubleshooting</li>
    <li>Team collaboration</li>
    <li>Fast learner</li>
    <li>Mentoring support</li>
    <li>Effective communication</li>
  </ul>
</div>

<div class="contact-banner">
  <h2>Contact me</h2>
  <p>I'm always looking forward for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
  <div class="buttons">
    <a href="{{ site.cv_url }}" class="btn" download>Download Résumé <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
    <a href="https://t.me/{{ site.telegram }}" class="btn-link">Telegram me</a>
    <a href="mailto:{{ site.email }}" class="btn-link">Hit me an email</a>
  </div>
</div>