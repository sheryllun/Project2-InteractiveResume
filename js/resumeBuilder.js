var bio = {
	"name": "Sheryl Lun",
	"role": "Front End Web Developer",
	"welcomeMessage": "Fortune favors the prepared mind.",
	"contacts": {
		"mobile": "808-381-6466", 
		"email": "sheryl.v.lun@gmail.com", 
		"github": "sheryllun", 
		"location": "Washington, DC"},
	"skills": ["HTML5", "CSS3", "Javascript", "JQuery"],
	"biopic": "images/img_1488.jpg",

	"displayHeader": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		
		
		$('#header').prepend(formattedPic);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#header').append(formattedMessage);
		$('#header').append(HTMLskillsStart);
		for(i in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$('#header').append(formattedSkills);
		}
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
		
		$('#topContacts').append(formattedMobile);
		$('#topContacts').append(formattedEmail);
		$('#topContacts').append(formattedGithub);
		$('#topContacts').append(formattedLocation);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Google",
			"title": "Industry Programs Coordinator",
			"location": "Mountain View, CA",
			"datesworked": "2012-2014",
			"description": "Create and manage Google's presence at tech conferences, create events to attract industry candidates, and co-manage Code Jam, Google's largest annual coding competition."
		},

		{
			"employer": "Wine the Experience",
			"title": "Events Manager",
			"location": "Honolulu, HI",
			"datesworked": "2009-2011",
			"description": "Creative design and execution of custom wine education events, wine tastings and marketing efforts. Ran and hosted on average 10 events a month and increased new sales revenue by 15%."
		},

		{
			"employer": "Hawaii Pacific Health",
			"title": "Conference Coordinator",
			"location": "Honolulu, HI",
			"datesworked": "2008-2010",
			"description": "Coordinate health conferences, medical symposiums, and internal corporate events for audiences up to 5,000 participants."
		}
	]
	}
	function displayWork() {
		for(i in work.jobs) {
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var EmpTitle = formattedworkEmployer + formattedworkTitle;
			var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].datesworked);
			var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(EmpTitle);
			$('.work-entry:last').append(formattedworkDates);
			$('.work-entry:last').append(formattedworkLocation);
			$('.work-entry:last').append(formattedworkDescription);
		}
};

var projects = {
	"projects": [
		{
			"title": "Dynamic Quiz",
			"datesworked": "10/2014",
			"description": "Create a dynamic quiz with pure Javascript. Includes answer validation and score summary at the end.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},

		{
			"title": "Wine Charts",
			"datesworked": "08/2014",
			"description": "Used chart.js to graph my evaluation of wines I had kept track of over the years.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}
	],

	"displayProjects": function() {
		for(var i in projects.projects) {
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesworked);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(formattedProjTitle);
		$('.project-entry:last').append(formattedProjDates);
		$('.project-entry:last').append(formattedProjDescription);
			for(j in projects.projects[i].images) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[i].images	[j]);
				$('.project-entry:last').append(formattedProjImage);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Hawaii at Manoa",
			"location": "Honolulu, HI",
			"degree": "BBA",
			"majors": ["Business Administration", "Chinese"],
			"datesattended": "8/2004-05/2008",
			"url": "http://manoa.hawaii.edu"
		},
		{
			"name": "Hong Kong University of Science and Technology",
			"location": "Hong Kong, China",
			"degree": "International Study Abroad",
			"majors": ["Business Administration"],
			"datesattended": "8/2007-1/2008",
			"url": "http://www.ust.hk"
		}
	],

	"onlineCourses": [
		{
			"title": "Front End Web Development Nanodegree",
			"school": "Udacity",
			"datesattended": "10/2014-present",
			"url": "www.udacity.com"
		},

		{
			"title": "Front End Web Development Course",
			"school": "General Assembly",
			"datesattended": "9/2014-present",
			"url": "www.generalassembly.com"
		}
	],
	"displayEdu": function() {
		for(i in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var nameDeg = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesattended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
	
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(nameDeg);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
				for(j in education.schools[i].majors) {
					var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
					$('.education-entry:last').append(formattedSchoolMajors);
				}
			}
		$('#education').append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var titleSchool = formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].datesattended);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(titleSchool);
				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedOnlineURL);
		}
	}
};


function displayFooter() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	
	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);
}

$('#mapDiv').append(googleMap);

bio.displayHeader();
displayWork();
projects.displayProjects();
education.displayEdu();
displayFooter();





