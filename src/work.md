---
layout: default
page_class: collection
---

<section class="landing">
  <div class="hero">
    <%= render Shared::Image.new(src:'images/work.webp') %>
  </div>
  <div class="intro">
    <h1 class="title">Work</h1>
    <p>Fusce finibus justo nulla, sit amet placerat enim finibus id. Nam eget purus congue lorem posuere placerat. Praesent a ligula ut erat interdum porta. Pellentesque egestas urna ligula, vel ullamcorper lorem sollicitudin id. Nullam mollis blandit bibendum. Integer at leo volutpat sem viverra sodales. Vivamus eu sem tellus.</p>
  </div>
</section>

<%= render 'collection_filter' %>

<section class="center">
  <div class="list">
    <%= render 'yline' %>
    <ul>  
      <% collections.works.resources.each do |work| %>
          <li>
            <div class="item" >
              <%= render 'xline' %>
              <div class="plus">+</div>
              <%= work.data.title %>
            </div>
          </li>  
      <% end %>
    </ul>
  </div>
</section>
