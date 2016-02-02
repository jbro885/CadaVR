Router.route('/', function () {
  this.render('index');
});

Views = [
	"aframeTest",
	"menuSelection",
	"moveObject",
	"operatingTable",
	"pitchPresent",
	"pitchWatch1stPerson",
	"present",
	"views",
	"watchPresentation1stPerson",
	"watchPresentationOwnPerspective",
];

Views.forEach( function (page) {
	Router.route('/' + page, function () {
		this.render(page);
	});
});