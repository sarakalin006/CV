---
layout: default
permalink: /
---
<style>
  /* General Styles */
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }
  .container {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }
  h1, h2 {
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }
  h1 { font-size: 2.5em; }
  h2 { font-size: 1.8em; margin-top: 40px; }
  a { color: #007bff; text-decoration: none; }
  a:hover { text-decoration: underline; }

  /* Timeline Styles */
  .timeline {
    position: relative;
    padding: 20px 0;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
  }
  .event {
    position: relative;
    margin-bottom: 30px;
    padding-left: 50px;
  }
  .event::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #007bff;
    border: 2px solid #fff;
    z-index: 1;
  }
  .event-date {
    font-weight: bold;
    color: #555;
  }
  .event-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 5px 0;
  }
  .event-company {
    font-style: italic;
    color: #777;
    margin-bottom: 10px;
  }
  .event-description ul {
    padding-left: 20px;
    margin-top: 10px;
  }
  .event-description li {
    margin-bottom: 5px;
  }

  /* Contact Form Styles */
  .contact-form {
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }
  .submit-btn {
    display: inline-block;
    background: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  .submit-btn:hover {
    background: #0056b3;
  }
</style>

<div class="container">
  <h1>SysAdmin Engineer CV</h1>
  <p><em>Individual eager to grow into a skilled DevOps engineer, transforming complex systems into reliable, automated, and scalable environments. Fast learner, team player, and driven to deliver results from day one.</em></p>

  <h2>Professional Experience</h2>
  <div class="timeline">
    <div class="event">
      <div class="event-date">2025–present (7 months)</div>
      <div class="event-title">SysAdmin Engineer</div>
      <div class="event-company">Favbet Tech, Kyiv, Ukraine / Remote</div>
      <div class="event-description">
        <ul>
          <li>Administered Linux (Ubuntu, CentOS) and macOS environments, configured services, and development tooling.</li>
          <li>Automated Linux server tasks via <strong>systemd</strong> and <strong>Bash</strong>.</li>
          <li>Managed macOS dev environments: <strong>Homebrew</strong>, SSH keys, VPN, network configuration.</li>
          <li>Utilized Azure services including Functions, Logic Apps, Storage, and Monitor.</li>
          <li>Developed Python & Bash automation scripts for Microsoft Graph/Azure API.</li>
          <li>Managed virtual machines using Proxmox, VMware, and UTM.</li>
        </ul>
      </div>
    </div>
    <div class="event">
      <div class="event-date">2024–2025 (6 months)</div>
      <div class="event-title">SysAdmin Engineer</div>
      <div class="event-company">Binotel, Kyiv, Ukraine</div>
      <div class="event-description">
        <ul>
          <li>Maintained Linux servers hosting Binotel virtual PBX, ensuring high availability for up to 100M calls/month.</li>
          <li>Configured SSH access, managed user roles, and implemented system backups.</li>
          <li>Developed Bash scripts for automated import of call statistics via Binotel API.</li>
          <li>Implemented Grafana dashboards and alerting for system and telephony metrics.</li>
        </ul>
      </div>
    </div>
  </div>

  <h2>Technical Skills</h2>
  <ul>
    <li><strong>Operating Systems:</strong> Linux (Ubuntu, CentOS), macOS</li>
    <li><strong>Cloud & Microsoft Ecosystem:</strong> Azure (Functions, Logic Apps, Storage), Microsoft Graph API, Microsoft 365</li>
    <li><strong>Scripting & Automation:</strong> Bash, Python, PowerShell (basic), Ansible (basic)</li>
    <li><strong>Version Control:</strong> Git (GitHub, GitLab)</li>
    <li><strong>Containerization & CI/CD (Basic):</strong> Docker, GitHub Actions, GitLab CI, Jenkins</li>
    <li><strong>Monitoring & Logging:</strong> Grafana, ELK Stack</li>
    <li><strong>Virtualization:</strong> Proxmox, VMware, UTM</li>
    <li><strong>Networking & Security:</strong> TCP/IP, DNS, VPN, SSH, Firewall Rules, RBAC</li>
  </ul>

  <h2>Education</h2>
  <p><strong>Bachelor's Degree in Cybersecurity and Information Protection</strong><br>
  <em>State University of Information and Communication Technologies, 2022–Present</em></p>

  <h2>Contact Me</h2>
  <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
  </form>
</div>