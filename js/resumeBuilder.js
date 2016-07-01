/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*Customize the reseme*/
var userName = "Rui Yan";
var userRole = "Software Engineer";
var formattedName = HTMLheaderName.replace("%data%", userName);
var formattedRole = HTMLheaderRole.replace("%data%", userRole);
var myBioPic = HTMLbioPic.replace("%data%", "images/piggy.jpeg");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$('#header').prepend(myBioPic);
//internationalize button is so ugly
//$("#header").append(internationalizeButton);
/*Work Section*/
var work = {
	"jobs" : [
		{
			"employer" : "Snapchat",
			"title" : "Software Engineer",
			"location" : "Venice, CA",
			"date" : "2016 - present",
			"description" : "Work on the Monetization team as a software engineer"
		},
		{
			"employer" : "Amazon.com, Inc",
			"title" : "Software Engineer Intern",
			"location" : "Seattle, WA",
			"date" : "06/2015 - 08/2015",
			"description" : "Work on the PrimeNow team as a software engineerin intern"
		}
	]
};

function displayWork(){
		for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		$(".work-entry:last").append(formattedEmployerInfo);
	}
}
displayWork();
/*functions*/
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

// chnage internationalized nmae


function inName(name){
	var names = name.split(' ');
	return names[0].slice(0, 1).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
}

//Project seciton
var projects = {
	"projects": [{
		"title": "Web Application: Perfect Gift",
		"dates": "09/2015 -- 11/2015",
		"description": "-Developing a web application that allows farmers, craftsmen or anyone to sell original product using this web application",
		"images" : ["images/project1.JPG", "images/project2.JPG"]
	}, {
		"title": "Android Phone Application: Find Buddy",
		"dates": "09/2015 --  11/2015",
		"description": "-Developing an Android app that allows users to find partners and form a group quickly and do things together"
	}, {
		"title": "Game of Set Design",
		"dates": "02/2015 -- 03/2015",
		"description": "--Developed an interactive, intelligent game application as a member of five person team"
	}],
};


projects.display = function(){
	for(var projectId in projects.projects){
		var project = projects.projects[projectId];
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedprojectDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if(project.images && project.images.length != 0){
        	for(var imageId in project.images){
        		var formattedImage = HTMLprojectImage.replace("%data%", project.images[imageId]);
        		$(".project-entry:last").append(formattedImage);
        	}
        }
	}
}
projects.display();

var bio = {
	"name" : "Rui Yan",
	"skills" : ["Java", "JavaScript", "Java EE", "Android Programming", "JSP","HTML5", "CSS", "Spring MVC"],
	"role" : "Software Engineer",
	"welcomeMessage" : "Hi, I'm Piggysolucky",
	"contacts" :{
		"mobile" : "614-7697656",
		"email" : "erinyan1992@gmail.com",
		"github" : "Piggysolucky",
		"location" : "Greater Los Angeles Area"
	}
};

//education section
var education = {
	"schools" : [
		{
			"name" : "The Ohio State University",
			"location" : "Columbus, Ohio",
			"dates" : "08/2014 -- 05/2016 ",
			"degree" : "MS",
			"major" : "Computer Science"
		},
		{
			"name" : "Xidian University",
			"location" : "Xi'an, China",
			"dates" : "08/2010 -- 07/2014 ",
			"degree" : "BS",
            "major" : "Telecommunications Engineering"
		}		
	],
	"onlineCourses" : [
		{
			"title" : "Networking for Web Developers",
			"school" : "Udacity",
			"dates" : "06/2016"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "06/2016"
		}
	]
};

education.display = function(){
	//display schools
	$("#education").append(HTMLschoolStart);

	for(var schoolId in education.schools){
		var school = education.schools[schoolId];

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedSchoolName);
        
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedSchoolMajor);
	}
}

education.display();
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}
$("#mapDiv").append(googleMap);

/*This section is solely for practice*/