const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true   
})

sr.reveal(`.rooms, .sevices, .team, .review, .gallery, .review, .form2, .contactus, .footer`)
sr.reveal(`.about-left`, { origin: 'left' })
sr.reveal(`.about-right`, { origin: 'right' })

