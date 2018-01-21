---
layout: default
permalink: /
---
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
{% capture linker %}{{ site.baseurl  }}{{ item.permalink }}{% endcapture %}


{% include tiles.html name=namer background=backer link=linker %}
{% endfor %}
</div>
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
{% capture linker %}{{ site.baseurl  }}{{ item.permalink }}{% endcapture %}


{% include tiles.html name=namer background=backer link=linker %}
{% endfor %}
</div>
### THIS PAGE IS UNDER CONSTRUCTION
### THIS PAGE IS UNDER CONSTRUCTION
##### The nav bar works, and almost all pages are live 
