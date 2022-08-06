function handleMouseEnter () {
	this.classList.add('h-card--hovered');
	document.body.id = `${this.id}-hovered`; /* aqui irá mexer com a animação do background das ids, cada vez que o mouse passar por cima de um spider, a imagem de fundo irá mudar e prencher a tela inteira */
}

function handleMouseLeave(){
	this.classList.remove('h-card--hovered');
	document.body.id = '';
}

function addEventListernersToCards() {
	const cardElements = document.getElementsByClassName('h-card');

	for (let index = 0; index < cardElements.length; index++) { /*aqui irá contar o número de card, que no caso são 3*/
		const card = cardElements[index];
		card.addEventListener('mouseenter', handleMouseEnter); /*o handleMouseEnter irá exercer uma ação quando o mouse passar pela imagem do card*/
		card.addEventListener('mouseleave', handleMouseLeave); /*já aqui, ele irá deixar o card como estava antes da ação, no caso quando o mouse sair da imagem*/
	}
}

document.addEventListener("DOMContentLoaded", addEventListernersToCards);
