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
    <p>My full track record: reviews and turnarounds, and the systems I've built. Each case study shows what I did and the result.</p>
    <p>I'm also named inventor on a US patent, with a second allowed and about to issue.</p>
    <p><strong>TODO:</strong> patent number and title for the issued one.</p>
    <p><strong>TODO:</strong> confirm who the applicant or assignee is.</p>
    <p><strong>TODO:</strong> when the second issues, change to "Named inventor on two US patents" and add the number.</p>
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
