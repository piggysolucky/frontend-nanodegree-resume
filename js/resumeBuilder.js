/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*Customize the reseme*/
var userName = "Rui Yan";
var userRole = "Software Engineer"
var formattedName = HTMLheaderName.replace("%data%", userName);
var formattedRole = HTMLheaderRole.replace("%data%", userRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	locClicks(x, y);
});

var projects = {
	"proejcts": [{
		"title": "Web Application: Perfect Gift",
		"dates": "09/2015 -- 11/2015",
		"description": "-Developing a web application that allows farmers, craftsmen or anyone to sell original product using this web application"
	}, {
		"title": "Android Phone Application: Find Buddy",
		"dates": "09/2015 --  11/2015",
		"description": "-Developing an Android app that allows users to find partners and form a group quickly and do things together"
	}, {
		"title": "Game of Set Design",
		"dates": "02/2015 -- 03/2015",
		"description": "--Developed an interactive, intelligent game application as a member of five person team"
	}]
};

var bio = {
	"name" : "Rui Yan",
	"skills" : ["Java", "JavaScript", "Java EE", "Android Programming", "JSP","HTML5", "CSS", "Spring MVC"],
	"role" : "Software Engineer",
	"welcomeMessage" : "Hi, I'm Piggysolucky",
	"contact" :{
		"mobile" : "614-7697656",
		"email" : "erinyan1992@gmail.com",
		"github" : "Piggysolucky",
		"location" : "Greater Los Angeles Area"
	}
};

var education = {
	"schools" : [
		{
			"name" : "The Ohio State University",
			"location" : "Columbus, Ohio",
			"degree" : "MS",
			"major" : "Computer Science"
		},
		{
			"name" : "Xidian University",
			"location" : "Xi'an, China",
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

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}



/*This section is solely for practice*/