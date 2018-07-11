Doc Schema:

1. Installation and running locally
	a. downloading & installing node.js 
	b. cmd commands & hosting locally
2. Front-end 
	a. technologies
	b. colour scheme
	c. CDNs
	d. remarks[template-design]
3. Back-end and database 
	a. technologies
	b. MongoDB via mLab
	c. remarks[form-functionality]

..........................................................................

1. Installation and running locally

a. downloading and installing node.js

install the lts version for your pc architecture (https://nodejs.org/en)

run the installer and proceed with the default options

b. cmd commands & localhost (<> caps are non-inclusive, to indicate that the
internal contents are the actual command)

open cmd (windows command prompt), and run <node --version> command to check 
the version of node.js and if it has been installed

similarly, run <npm --version>

if no issues, navigate to the folder where the proj contents were extracted to
within the cmd window and run <node app.js>

the cmd should give a "server-refresh" with the time stamp, implying that the 
node server has started and is being hosted on localhost:3000

to view the web pages in action, open your browser and type "localhost:3000" into
the address bar to view the website
 
..........................................................................

2. Front-end

a. technologies

html5, css3, js, bootstrap, 

view engine: ejs

b. colour scheme: (not strict)

#A8A7A8 (shallow grey)
#CC527A (deep lilac)
#E81759 (pink)
#474747 (deep grey)
#363636 (black, shallow)

c. CDNs

static resources are currently in the same folder... ideally need to be put onto
a CDN to ensure better loading time and less occupied space onthe main server

d. remarks[original idea for colour accents]

information panels, coloured grey and black (as in template) to contain schematic
information ideally (minimal text, flow charts, process charts, etc) with accents
of the brighter components of the mentioned colour scheme

images for parallax should ideally conform with the colour scheme to exploit the
template design to the fullest

also, buttons could share same accents (white and pink)

text, inline images ideally restricted to the clear (white) panels; contributes
to more white space in the UI and brings focus to the elements with the sharp
colour accents (schematic info, buttons)

also font family used is from Googlefonts, requires active internet connection 
to be able to be displayed in the Web pages, otherwise reverts to serif 

............................................................................

3. Back-end and database

a. technologies

back-end: node.js

"dependencies": {
	"body-parser": "^1.18.3",
    
	"ejs": "^2.6.1",
    
	"express": "^4.16.3",
    
	"mongoose": "^5.2.2",
    
	"nodemailer": "^4.6.7",
    
	"npm": "^6.1.0"
}

b. MongoDB via mLab

mLab is the biggest MongoDB cloud db service; gives you 500MB free server space
and has flexible options for vertical scalability

also lets you choose between AWS, Google Cloud, and Microsoft Azure

current template runs on AWS, and 500MB of free data

credentials: {
	mLab {
		account-name: demo.hydphcity
		email: demo.hydphcity@gmail.com
		username: demo.hydphcity
		pwd: demohpc1
	}
	gmail {
		id: demo.hydphcity@gmail.com
		pwd: demohpc1
	}
}

once logged into mLab account (https://mlab.com/login/), 
	database: demo-hpc
	database user details: 
		username: demosender
		pwd: demohpc1

to enable mongoose to service with Gmail, enable less secure apps 
(https://myaccount.google.com/lesssecureapps?pli=1)	 

c. remarks[form functionality]

the subscription form has six input fields: 4 text based, 2 checkboxes;

all have been marked as required;

form contents from the 4 textboxes are parsed to the backend using body-parser
and updated on the mLab database (see #issues at the end of the README)

typical flow of processes: (look up app.js) 
    .define db schema
    .create db model type
    .transport service for nodemailer (here, gmail)    
    .form content parsing, post method 
    .pass req.body (parsed info by body-parser) to the mLab db 
    .email detials 
    .sending the email

...........................................................................

#issues

.navbar collapse not working
	..no response on clicking toggle button in about.html
.db on mLab not updating industry key-value pair
	..no change in observation on switching "required" in html input tag 	
.active tabs on navbar not yet updated (views/navbar.ejs)