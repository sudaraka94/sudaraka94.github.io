---
layout: page
title: Blog
permalink: /blog/
---

Welcome to my blog! Here I share my thoughts on software development, technology, and lessons learned along the way.

<div class="posts">
  {% for post in site.posts %}
    <article class="post">
      <h2 class="post-list-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
        {% if post.author %} • {{ post.author }}{% endif %}
      </p>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      {% if post.categories %}
      <div class="post-tags-small">
        {% for category in post.categories %}
          <a href="{{ '/tags/' | relative_url }}#{{ category | slugify }}" class="tag-small">{{ category }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </article>
  {% endfor %}
</div>
