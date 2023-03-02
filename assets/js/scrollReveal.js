window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '20px' });


sr.reveal('.introduction', {delay:200, origin: 'left'});
sr.reveal('.items-r', {delay:200, origin: 'right'});
sr.reveal('.header', {origin: 'top'});
sr.reveal('.show', {origin:'bottom', reset:false});