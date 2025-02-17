---
layout: default
page_class: collection
---

<section class="landing">
  <div class="hero">
    <%= render Shared::Image.new(src:'images/work.webp') %>
  </div>
  <div class="intro">
    <h1 class="title">Projects</h1>
    <p>Fusce finibus justo nulla, sit amet placerat enim finibus id. Nam eget purus congue lorem posuere placerat. Praesent a ligula ut erat interdum porta. Pellentesque egestas urna ligula, vel ullamcorper lorem sollicitudin id. Nullam mollis blandit bibendum. Integer at leo volutpat sem viverra sodales. Vivamus eu sem tellus.</p>
  </div>
</section>

<%= render 'collection_filter' %>

<section class="center">
  <div class="list">
    <%= render 'yline' %>
    <ul>  
      <% collections.projects.resources.reverse!.group_by(&:date).each do |date, values| %>
        <h2 class="heading"><%= date %></h2>
        <% values.each do |value| %>
          <li>
            <div class="item" >
              <%= render 'xline' %>
              <div class="plus">+</div>
              <%= value.data.title %>
            </div>
          </li>  
        <% end %>
      <% end %>
    </ul>
  </div>
</section>
