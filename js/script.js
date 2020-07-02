jQuery(document).ready(function() {

/* HEADER SLIDESHOW */

const personasSlides = [
	{videoSrc: 'video/ms_header-video_01.mp4',
	videoPoster: 'imgs/ms_header-img_01.png',
	headingSpan: 'ao longo da vida.',
	quote: 'Compro na Marques Soares há mais de 50 anos. Para mim, para o meu marido, para os meus filhos e agora também para o meu neto.',
	personaName: 'Maria Amélia'},

	{videoSrc: 'video/ms_header-video_02.mp4',
	videoPoster: 'imgs/ms_header-img_02.png',
	headingSpan: 'em cada momento.',
	quote: 'Com o cartão MS+ estou sempre a par das últimas tendências, compro sem preocupações e pago à medida do meu orçamento.',
	personaName: 'Joana Costa'},

	{videoSrc: 'video/ms_header-video_03.mp4',
	videoPoster: 'imgs/ms_header-img_03.png',
	headingSpan: 'em qualquer lugar.',
	quote: 'A caminho da faculdade, recebi uma notificação da app MS+ a informar-me que as calças que eu mais queria estão novamente disponíveis.',
	personaName: 'Ricardo Pereira'}
];

const videoSrc = jQuery('.page-header__bg-video source');
const headingSpan = jQuery('.page-header__content h2 span');
const quote = jQuery('.page-header__content q');
const personaName = jQuery('.page-header__slide-label')
const personasBullets = jQuery('.page-header__slide-nav a');
// jQuery targeting would return a jQuery object
// used JavaScript targeting to get video DOM object 
const video = document.querySelector('.page-header__bg-video');

personasBullets.click(function() {
	// store current persona index
	const currentPersonaIndex = jQuery(this).data('persona-index');

	// replace last persona video src for current persona video src
    videoSrc.attr('src', personasSlides[currentPersonaIndex].videoSrc);

	// fade out last persona video and load with fade in the current persona video
	jQuery('.page-header__bg-video').fadeOut(100, function() {
		video.load();
	}).fadeIn(100);

	// remove class active from last persona slide bullet
	// and add it to current persona slide bullet
	personasBullets.removeClass('active-slide');
	jQuery(this).addClass('active-slide');

	// replace last persona heading for current persona heading
	headingSpan.fadeOut(300, function() {
		jQuery(this).text(personasSlides[currentPersonaIndex].headingSpan);
	}).fadeIn(300);

	// replace last persona quote for current persona quote
	quote.fadeOut(400, function() {
		jQuery(this).text(personasSlides[currentPersonaIndex].quote);
	}).fadeIn(400);

	// replace last persona name for current persona name
	personaName.fadeOut(400, function() {
		jQuery(this).text(personasSlides[currentPersonaIndex].personaName);
	}).fadeIn(400);
});

/* HEADER VIDEO TIMELINE */

const videoTimeBar = jQuery('.page-header__bg-video-progress-bar span');

const updateVideoTimeline = video.addEventListener('timeupdate', function() {
	//update video progress bar based on current play time
	let percentage = (video.currentTime / video.duration) * 100;

	videoTimeBar.css('width', percentage + '%');
	
	//once video has looped progress bar remains completed
	const hasLoopedOnce = video.played.end(video.played.length-1);

	if (hasLoopedOnce == video.duration) {
		videoTimeBar.css('width', '100%');
	}

});

/* HEADER BUTTON */

const headerButton = jQuery('.page-header__content a.button');
const headerButtonText = jQuery('.page-header__content a.button span');

// replace text from header button on hover with fadeOut/fadeIn effect
headerButton.mouseenter(function() {
	headerButtonText.fadeOut(function() {
		jQuery(this).text('Aderir ao cartão');
	}).fadeIn(200);
}).mouseleave(function() {
	headerButtonText.fadeOut(function() {
		jQuery(this).text('Fazer parte desta história');
	}).fadeIn(200);
});

});
