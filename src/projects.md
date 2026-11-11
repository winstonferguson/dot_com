---
layout: default
page_class: collection
title: Work
---

<section class="landing">
  <div class=" fade-in">
    <%= render Shared::Image.new(src:'images/landing.webp') %>
  </div>
  <div class="intro">
    <h1 class="title">Work</h1>
    <p>Software that takes admin off a business's hands: pricing and ordering systems, data import and export, generated documents, product configurators and online shops. Each case study shows the problem, what I built and the result.</p>
  </div>
</section>

<%= render 'collection_filter' %>

<section id="projects-list" class="center">
  <div class="list">
    <%= render 'yline' %>
    <ul>  
      <% collections.projects.resources.reverse!.group_by(&:date).each do |date, values| %>
        <h2 class="heading"><%= date %></h2>
        <% values.each do |value| %>
          <li class="project" data-categories="<%= category_code(categories: value.data.categories) %>">
            <a class="item purple" href="<%= value.relative_url %>">
              <%= render 'xline' %>
              <div class="plus">+</div>
              <%= value.data.title %>
            </a>
          </li>  
        <% end %>
      <% end %>
    </ul>
  </div>
</section>
