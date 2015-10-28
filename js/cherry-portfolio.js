angular.module('cherry-portfolio', [])
	.controller('AccomplishmentsController', function() {
		var accomplishments = this;
		accomplishments.list = [
			{img: 'images\\resume.png', text: 'Resume', link: 'http://rawgit.com/mttchrry/frontend-nanodegree-resume/master/index.html', summary: 'This is My Resume, its got a list of a lot of my accomplishments and work and through formal education. Check it out on the link!'},
			{img: 'images\\blogspot.png', text: "Cherry Blog", link: 'http://mrcherryontop.appspot.com/blog', summary: 'A little editable blog I put together with Python and google app engine'},
			{img: 'images\\froggerGame.PNG', text: 'Frogger Arcade Game', link: 'http://rawgit.com/mttchrry/frontend-nanodegree-arcade-game/master/index.html'},
			{img: 'images\\cleveland-skyline.jpg', text: 'Cleveland Hotspots', link: 'http://mttchrry.github.io/MapProject5/'},
			{img: 'images\\Ds3.png', text: 'Shortest Path Visualizer', link: 'http://mttchrry.github.io/CrossChxTravellingSalesman/', summary: 'pretty cool graphics eh? And Djikstras algorithm? whats not to like?'},
			{img: 'images\\game-2048-java.png', text: 'My 2048 Mods', link: 'http://mttchrry.github.io/2048/', summary: 'This is my version of 2048, but its a little buggy, never got the bottom row working right while changing dimensions to 5x5'},
			{img: 'images\\moving.jpg', text: 'Move Planner', link: 'http://mttchrry.github.io/FEDLesson4MovePlanner'}];
	});
