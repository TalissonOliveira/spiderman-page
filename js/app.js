document.addEventListener('DOMContentLoaded', () => {
    // Instanciar elemento timeline
    let timeline = new TimelineMax()

    timeline
        .fromTo(
            '.bg-loader',
            1,
            {width: '100%'},
            {width: '0%', delay: 4, ease: Expo.easeInOut}
        )
        .fromTo(
            '.bg-video',
            2,
            {width: '0%', opacity: 0},
            {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1'
        )
        .fromTo(
            '.logo',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.nav-list',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.nav-social',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.bg-lines',
            0.7,
            {width: '0%', opacity: 0},
            {width: '100%', opacity: 1, ease: Power2.out}, '-=0.5'
        )
        .fromTo(
            '.item-1',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.item-2',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.item-3',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.item-4',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
        .fromTo(
            '.item-5',
            0.7,
            {y: -50, opacity: 0},
            {y: 0, opacity: 1, ease: Back.easeInOut}, '-=0.5'
        )
})