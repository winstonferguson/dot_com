---
layout: default
page_class: collection
---

<section class="landing">
  <div class=" fade-in">
    <%= render Shared::Image.new(src:'images/landing.webp') %>
  </div>
  <div class="intro">
    <h1 class="title">Projects</h1>
    <p>A collection of projects where design, development, and strategy intersect. From AI-powered configurators and full Ruby on Rails builds to bespoke Shopify themes, digital design and business automation, each project reflects my multidisciplinary approach to crafting elegant, efficient solutions.</p>
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
