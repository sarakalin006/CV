---
layout: default
permalink: /
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="icon" href="{{ '/favicon.svg' | relative_url }}" type="image/svg+xml">

<style>
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #f9f9f9;
    color: #333;
  }
  .wrapper {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  h1, h2, h3 {
    font-weight: 700;
    color: #0077B5;
  }
  h1 { font-size: 2.25rem; margin-bottom: 0.5rem; }
  h2 { font-size: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; margin-top: 2.5rem; }
  h3 { font-size: 1.2rem; font-weight: 500; color: #333; }
  a { color: #0077B5; text-decoration: none; }
  a:hover { text-decoration: underline; }
  strong { font-weight: 500; }
  .intro { font-size: 1.1rem; color: #555; margin-bottom: 2rem; }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 2rem 0;
    padding: 1rem 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .contact-column { list-style: none; padding: 0; margin: 0; }
  .contact-column li { display: flex; align-items: center; margin-bottom: 0.5rem; }
  .contact-column svg { margin-right: 0.5rem; color: #0077B5; }
</style>

<div class="wrapper">
  <h1>Petrova Oleksandra</h1>
  <p class="intro">SysAdmin engineer with hands-on experience in Linux and macOS administration, Azure cloud services, automation using Bash, containerization with Docker, CI/CD pipelines (beginner), monitoring with Grafana and ELK. Experienced in integrating Microsoft 365 ecosystem via Graph API and managing virtualized environments (Proxmox, VMware, UTM). Passionate about DevOps, automation, and continuous learning, seeking opportunities to grow under mentorship and contribute to production-ready infrastructure.</p>

  <div class="contact-container">
    <ul class="contact-column">
      <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><path d="M3 7l9 6 9-6" /></svg> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h6l2 4-2 1c1 3 3 5 6 6l1-2 4 2v6c-9 0-16-7-16-16z" /></svg> <a href="tel:{{ site.phone }}">{{ site.phone }}</a></li>
    </ul>
    <ul class="contact-column">
      <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> <a href="{{ site.linkedin }}">LinkedIn</a></li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a8 8 0 0 1 16 0c0 5.25-8 12-8 12s-8-6.75-8-12z" /><circle cx="12" cy="10" r="3" /></svg> {{ site.location }}</li>
    </ul>
  </div>

  ## Professional Experience

  ### Favbet Tech — SysAdmin Engineer
  *Kyiv, Ukraine / Remote (2025–present, 7 months)*

  **Operating Systems:** Linux (Ubuntu, CentOS), macOS  
  - Administered Linux and macOS environments, configured services, development tooling, and troubleshooting networking/system-level issues.  
  - Automated Linux server tasks via **systemd** and **Bash**.  
  - Managed macOS dev environments: **Homebrew**, SSH keys, VPN, network configuration.

  **Microsoft Ecosystem:**  
  - **Azure:** Functions, Logic Apps, Storage (Blob/Files), Monitor & Log Analytics, IAM, AD identities, RBAC.  
  - **Microsoft Graph / Azure API:** Python & Bash automation scripts for Teams, Outlook, SharePoint, Users; OAuth2 and service-to-service flows.  
  - **Microsoft 365:** Teams, SharePoint, Exchange Online, Entra ID; automated tasks via APIs and PowerShell.

  **Version Control:** Git (GitHub, GitLab) — branching strategies, repository management, pipeline triggers.

  **Virtualization:** Proxmox, VMware, UTM — VM deployment, snapshots, templates, resource management, cloud-init provisioning.

  **Monitoring & Logging:** Grafana, ELK — dashboards, alerting, log ingestion, metrics visualization.

  **Scripting & Automation:** Bash, PowerShell (basic)

  ---

  ### Binotel — SysAdmin Engineer
  *Kyiv, Ukraine (2024–2025, 6 months)*

  **Linux Infrastructure & Telephony Systems:**  
  - Maintained Linux servers hosting Binotel virtual PBX, ensured high availability of telephony services.  
  - Optimized system load during peak traffic (up to 100M calls/month).

  **Security & Access Management:**  
  - Configured SSH access, managed user roles, implemented backups, ensured system resilience.

  **Automation & Scripting:**  
  - Developed Bash scripts for automated import of call statistics via **Binotel API**, CRM record creation, and logging.

  **Monitoring & Logging:**  
  - Implemented Grafana dashboards and alerting, tracked system metrics and telephony statistics.

  **Team Support & Troubleshooting:**  
  - Assisted staff with environment setup, issue resolution, and access management.

  ---

  ## Technical Skills

  **Operating Systems:**  
  - Linux (Ubuntu, CentOS): server provisioning, systemd, networking, user & permission management, troubleshooting, automation  
  - macOS: environment setup, Homebrew, SSH, VPN, network configuration

  **Cloud & Microsoft Ecosystem:**  
  - Azure: Functions, Logic Apps, Storage, Monitor & Log Analytics, IAM, AD identities, RBAC  
  - Microsoft Graph / Azure API: Python/Bash automation scripts, Teams/Outlook/SharePoint/Users integration, OAuth2 flows  
  - Microsoft 365: Teams, SharePoint, Exchange Online, Entra ID, PowerShell automation

  **Scripting & Automation:** Bash, Python, PowerShell (basic), Ansible (basic)

  **Version Control:** Git (GitHub, GitLab) — branching, repo management, CI/CD triggers

  **Containerization & CI/CD (Basic):**  
  - Docker: basic builds, docker-compose multi-service environments  
  - CI/CD: basic usage of GitHub Actions, GitLab CI, Jenkins

  **Monitoring & Logging:** Grafana, ELK Stack — dashboards, alerts, log ingestion, metrics visualization

  **Virtualization:** Proxmox, VMware, UTM — VM deployment, snapshots, templates, resource allocation, cloud-init templates

  **Networking & Security:** TCP/IP, DNS, VPN, SSH, firewall rules, secure access, RBAC

  ### Soft Skills:

   Analytical thinking, troubleshooting, team collaboration, fast learner, mentoring support, effective communication

  ---

  ## Education

  **Bachelor's Degree in Cybersecurity and Information Protection**  
  *State University of Information and Communication Technologies, 2022–Present*  
  Specialization: 125 — Cybersecurity and Information Protection
</div>