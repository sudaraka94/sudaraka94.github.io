---
layout: page
title: Projects
permalink: /projects/
---

# Projects

Here are some of the projects I've worked on:

<div class="projects-grid">
  {% for project in site.projects %}
    <article class="project-card">
      <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
      {% if project.description %}
        <p>{{ project.description }}</p>
      {% endif %}
      {% if project.tech_stack %}
        <div class="tech-stack">
          {% for tech in project.tech_stack %}
            <span class="tech-tag">{{ tech }}</span>
          {% endfor %}
        </div>
      {% endif %}
      <a href="{{ project.url | relative_url }}" class="project-link">View Project →</a>
    </article>
  {% endfor %}
</div>
