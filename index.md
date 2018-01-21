---
layout: default
permalink: /
---
# THIS PAGE IS UNDER CONSTRUCTION
### The nav bar works, and almost all pages are live 
{% for item in site.hobbies %}
{% capture namer %}{{ item.title }}{% endcapture %}
{% capture linky %}{{ item.imagelink }}{% endcapture %}
{% include tiles.html name=namer imagelink=linky %}
{% endfor %}

