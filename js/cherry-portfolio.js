angular.module('cherry-portfolio', [])
	.controller('AccomplishmentsController', function() {
		var accomplishments = this;
		accomplishments.list = [
			{img: 'images\\resume.png', text: 'Resume', link: 'http://rawgit.com/mttchrry/frontend-nanodegree-resume/master/index.html'},
			{img: 'images\\froggerGame.PNG', text: 'Frogger Arcade Game', link: 'http://rawgit.com/mttchrry/frontend-nanodegree-arcade-game/master/index.html'},
			{img: 'images\\cleveland-skyline.jpg', text: 'Cleveland Hotspots', link: 'http://mttchrry.github.io/MapProject5/'},
			{img: 'images\\Ds3.png', text: 'Shortest Path Visualizer', link: 'http://mttchrry.github.io/CrossChxTravellingSalesman/'},
			{img: 'images\\game-2048-java.png', text: 'My 2048 Mods', link: 'http://mttchrry.github.io/2048/'},
			{img: 'images\\moving.jpg', text: 'Move Planner', link: 'http://mttchrry.github.io/FEDLesson4MovePlanner'}];
	});
