/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var firstName = "Jack";
var age = 32;
var myArray = [];
var myFunc = function(){};
var myObject = {};

Truthy/Falsy
true	false
non-zero numbers	0
"strings"	""
objects	undefined
arrays	null
functions	NaN

Three ways of declearing objects
Literal:
var bio = {
	"name": "Jack Sparrow"
};

Dot:
bio.name = "Jack Sparrow";

Braket:
bio["name"] = "Jack Sparrow";

*/

var bio = {
	"name" : "Jack Sparrow",
	"role" : "Pirate",
	"contacts": {
		"mobile": "000-000-0000",
		"email": "jack@example.com",
		"github": "jacksparrow",
		"twitter": "@jacksparrow",
		"location": "Caribbean Sea"
	},
	"welcomeMessage": "Hello World!",
	"skills": ["Pirating", "Navigation"],
	"bioPic": "images/JackSparrow.jpg"
};

var education = {
	"schools": [
	{
		"name": "Example University",
		"location": "Example",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 2013,
		"url": "http://www.udacity.com"
	},
	{
		"name": "Example University",
		"location": "Example",
		"degree": "BS",
		"majors": ["CS"],
		"dates": 2013,
		"url": "http://www.udacity.com"
	}
	],
	"onlineCourses": [
	{
		"title": "example",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com"
	},
	{
		"title": "example",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com"
	}
	]
};

var work = {
	"jobs": [
	{
		"employer": "example",
		"title": "example",
		"location": "example",
		"dates": "example",
		"description": "example"
	},
	{
		"employer": "example",
		"title": "example",
		"location": "example",
		"dates": "example",
		"description": "example"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "example",
		"dates": "example",
		"description": "example",
		"images": ["http://placehold.it/200x200"]
	},
	{
		"title": "example",
		"dates": "example",
		"description": "example",
		"images": ["http://placehold.it/200x200"]
	}
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMsg);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#header").append(formattedSkills);
	}
}

work.display = function() {
	for(var index in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedWorkEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedWorkEmployerAndTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

projects.display = function(){
	for(var index in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[index].images.length > 0){
			for(var imgIndex in projects.projects[index].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[imgIndex]);
				$(".project-entry:last").append(formattedImage);	
			}
		}
	}
}

education.display = function(){
	for(var i in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for(var j in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
		formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[j].url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

bio.display();
work.display();
projects.display();
education.display();

function inName(){
  var nameArr = bio.name.split(" ");
  var firstName = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
  var lastName = nameArr[1].toUpperCase();
  var result = firstName + " " + lastName;
  console.log(result);
  return result;
}

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);


