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

var work = {
	"jobs" : [
		{
			"employer" : "Snapchat",
			"title" : "Software Engineer",
			"location" : "Venice",
			"date" : "2016 - present",
			"description" : "Work on the Monetization team as a software engineer"
		}
	]
};

var projects = {
	"proejcts" : [

	]
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

