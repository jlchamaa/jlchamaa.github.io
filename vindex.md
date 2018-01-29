---
layout: default
#permalink: /
---
### This website is still being developed.
##### The pages are mostly complete, only a few still need content.
##### Click around and check it out!

# Projects
<div class="row justify-content-center">
{% for item in site.projects %}
{% capture namer %}{{ item.title }}{% endcapture %}
{% capture backer %}
	background: 
	/* top, transparent red, faked with gradient */ 
	linear-gradient(
        rgba({{ item.tilecolor }}, 0.9), 
        rgba({{ item.tilecolor }}, 0.5)
	),
	/* bottom, image */
	url('{{ item.imagelink }}');
{% endcapture %}
{% capture linker %}{{ item.permalink }}{% endcapture %}
{% include tiles.html name=namer background=backer link=linker %}
{% endfor %}
</div>
# Experience
<div class="row justify-content-center">
{% for item in site.experience %}
{% capture namer %}{{ item.title }}{% endcapture %}
{% capture backer %}
	background: 
	/* top, transparent red, faked with gradient */ 
	linear-gradient(
        rgba({{ item.tilecolor }}, 0.9), 
        rgba({{ item.tilecolor }}, 0.5)
	),
	/* bottom, image */
	url('{{ item.imagelink }}');
{% endcapture %}
{% capture linker %}{{ item.permalink }}{% endcapture %}
{% include tiles.html name=namer background=backer link=linker %}
{% endfor %}
</div>
# Hobbies
<div class="row justify-content-center">
{% for item in site.hobbies %}
{% capture namer %}{{ item.title }}{% endcapture %}
{% capture backer %}
	background: 
	/* top, transparent red, faked with gradient */ 
	linear-gradient(
        rgba({{ item.tilecolor }}, 0.9), 
        rgba({{ item.tilecolor }}, 0.5)
	),
	/* bottom, image */
	url('{{ item.imagelink }}');
{% endcapture %}
{% capture linker %}{{ item.permalink }}{% endcapture %}
{% include tiles.html name=namer background=backer link=linker %}
{% endfor %}
</div>
