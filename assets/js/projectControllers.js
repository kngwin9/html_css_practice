// Portfolio V0.1
app.controller('portfolio01Controller', function() {
    this.title = ['Portfolio Version 0.1', 'portfolio_v0.1'];
    this.description = "<p>This project is used to present the skills you learn through the program to potential employers. All employers will be looking for a portfolio site that has good coding & visual examples. The different versions of this project are directly related to the skill sets that you should have obtained at the time. This project the type of project that will be worked on through the program and is the default project to work on when you feel like you are caught up on all other items (Weekly Projects, Readings, Videos, Prototypes, Skill Assessments).</p>";
    this.repoName = "portfolio_root";
    this.branch = 'v0.1';
    this.projectId = 1;

    this.links = {
        'Related Slide': {
            'Internet &amp; Browsers': 'https://docs.google.com/presentation/d/1-Ds5wE1iv5WTBGK6D-BaCGwFWeVXSGYN8yvz8ojYnZo/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Elements &amp; Attributes': 'https://docs.google.com/presentation/d/1jHnfRkBVqiBw6GEa2mUR13fO468keu99NP_Befr8nmc/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Text Formatting &amp; Style': 'https://docs.google.com/presentation/d/1_FMjUbUgJjMOroOlVG4wkkNO9tvgRDVQ7YS2dirDPEI/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Head &amp; Style Tags': 'https://docs.google.com/presentation/d/1VwhN-Kv3m-BXPIHFWIvVBH_8yGxDrMuDNGDki_NCpug/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Links, Images &amp; Text Styling': 'https://docs.google.com/presentation/d/1BrpssbsEhd7NeIjQAMEXKq-HSGtmDXlN3-TS2bc4J0w/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Layout Structure &amp; Design #1': 'https://docs.google.com/presentation/d/1wJU3BPRs8Bdr-frGc61ijv2Hf8QHF_CrMNCtNl8PFV0/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Layout Structure &amp; Design #2': 'https://docs.google.com/presentation/d/1AUaknmBg8MEVCxnakMf6jPnjVJxxHLfo0o5MifvilsQ/pub?start=false&loop=false&delayms=3000&slide=id.p'

        },
        'Related Video': {
            'Internet &amp; Browsers': 'https://www.youtube.com/watch?v=pcwNtWyzwJo',
            'Elements &amp; Attributes': 'https://www.youtube.com/watch?v=2vqL3OsxRLE',
            'Text Formatting &amp; Style': 'https://www.youtube.com/watch?v=P5sPEr52OVs',
            'Head &amp; Style Tags': 'https://www.youtube.com/watch?v=Jnirh7CCMW8',
            'Links, Images &amp; Text Styling': 'https://www.youtube.com/watch?v=w8robcf8-GY',
            'Layout Structure &amp; Design': 'https://www.youtube.com/watch?v=0-WRsALktzE'
        }
    };

    this.features = {
        'v0.1': {
            html: "<h3>Getting Started</h3><ol class='left-border'><li>Within your <b>" + this.repoName + "</b> folder create a sub folder named: <code>" + this.branch + "</code></li><li>Within your new <code>" + this.branch + "</code> folder create the following files:<ol class='nested-1'><li><code>index.html</code></li><li><code>style.css</code></li></ol></li><li>In your new <code>index.html</code> file create a basic HTML skeleton that includes the following tags:<ol class='nested-1'><li><code>&lt;DOCTYPE&gt;</code></li><li><code>&lt;html&gt;</code></li><li><code>&lt;head&gt;</code></li><li><code>&lt;body&gt;</code></li></ol></li><li>In your <code>&lt;head&gt;</code>:<ol class='nested-1'><li>Use <code>&lt;title&gt;</code> to give your site a title</li><li>Link to your <code>style.css</code> file</li></ol></li><li>Choose a layout from html_fundamentals_5 prototype - <a href='#/HTML-Fundamentals-5' target='_blank'>view</a></li><li>Take content you have previously generated in past prototypes and complete the following feature sets.</li><li>Add content to appropriate section / page (depending on the layout choice) in your portfolio project</li></ol>"
        },
        'Feature Set 1 - About Me': {
            html: "<ol class='left-border'><li><b>About Me</b> Section<ol class='nested-1'><li>Short bio about what your background is</li><li>Why you are taking this class</li><li>What type of job you want to get</li><li>Why you are hungry for that job</li></ol></li></ol>"
        },
        'Feature Set 2 - Got Skills': {
            html: "<ol class='left-border'><li><b>Skills</b> Section<ol class='nested-1'><li>Add at least 5 relevant tech skills that you hope to achieve by end of class</li></ol></li></ol>"
        },
        'Feature Set 3 - Experience': {
            html: "<ol class='left-border'><li><b>Experience</b> Section<ol class='nested-1'><li>Add at least 2 recent jobs &amp; descriptions</li></ol></li></ol>"
        },
        'Feature Set 4 - Contact Me': {
            html: "<ol class='left-border'><li><b>Contact Me</b> Section<ol class='nested-1'><li>Github Account Link</li><li>Email Address</li><li>LinkedIn Profile Link</li></ol></li></ol>"
        },
        'Feature Set 5 - Navigation': {
            html: "<ol class='left-border'><li>Create an appropriate menu in your layout’s nav/header section<ol class='nested-1'><li>Link menu items to required content pages or sections (as defined in the layouts in the prototype referenced above)</li></ol></li></ol>"
        }
    }
});

// Portfolio V0.5
app.controller('portfolio05Controller', function() {
    this.title = ['Portfolio Version 0.5', 'portfolio_v0.5'];
    this.description = "<p>This project is used to present the skills you learn through the program to potential employers. All employers will be looking for a portfolio site that has good coding & visual examples. The different versions of this project are directly related to the skill sets that you should have obtained at the time. This project the type of project that will be worked on through the program and is the default project to work on when you feel like you are caught up on all other items (Weekly Projects, Readings, Videos, Prototypes, Skill Assessments).</p>";
    this.repoName = "portfolio_root";
    this.branch = 'v0.5';
    this.projectId = 2;

    this.links = {
        'Related Slide': {
            'Internet &amp; Browsers': 'https://docs.google.com/presentation/d/1-Ds5wE1iv5WTBGK6D-BaCGwFWeVXSGYN8yvz8ojYnZo/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Elements &amp; Attributes': 'https://docs.google.com/presentation/d/1jHnfRkBVqiBw6GEa2mUR13fO468keu99NP_Befr8nmc/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Text Formatting &amp; Style': 'https://docs.google.com/presentation/d/1_FMjUbUgJjMOroOlVG4wkkNO9tvgRDVQ7YS2dirDPEI/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Head &amp; Style Tags': 'https://docs.google.com/presentation/d/1VwhN-Kv3m-BXPIHFWIvVBH_8yGxDrMuDNGDki_NCpug/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Links, Images &amp; Text Styling': 'https://docs.google.com/presentation/d/1BrpssbsEhd7NeIjQAMEXKq-HSGtmDXlN3-TS2bc4J0w/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Layout Structure &amp; Design #1': 'https://docs.google.com/presentation/d/1wJU3BPRs8Bdr-frGc61ijv2Hf8QHF_CrMNCtNl8PFV0/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Layout Structure &amp; Design #2': 'https://docs.google.com/presentation/d/1AUaknmBg8MEVCxnakMf6jPnjVJxxHLfo0o5MifvilsQ/pub?start=false&loop=false&delayms=3000&slide=id.p'

        },
        'Related Video': {
            'Internet &amp; Browsers': 'https://www.youtube.com/watch?v=pcwNtWyzwJo',
            'Elements &amp; Attributes': 'https://www.youtube.com/watch?v=2vqL3OsxRLE',
            'Text Formatting &amp; Style': 'https://www.youtube.com/watch?v=P5sPEr52OVs',
            'Head &amp; Style Tags': 'https://www.youtube.com/watch?v=Jnirh7CCMW8',
            'Links, Images &amp; Text Styling': 'https://www.youtube.com/watch?v=w8robcf8-GY',
            'Layout Structure &amp; Design': 'https://www.youtube.com/watch?v=0-WRsALktzE'
        }
    };

    this.features = {
        'V0.5': {
            html: "<h4>Getting Started</h4><ol class='left-border'><li>Within your <b>" + this.repoName + "</b> folder create a sub folder named: <code>" + this.branch + "</code></li><li>You should now have two sub folders in your <b>" + this.repoName + "</b> folder, <b>v0.1</b> and <b>" + this.branch + "</b></li><li>Copy your <code>index.html</code> and <code>style.css</code> files from your <code>v0.1</code> folder and paste them into your new <code>" + this.branch + "</code> folder<ul><li><span class='label label-danger'>NOTE:</span> If you created any other files for your <code>v0.1</code> Portfolio, copy those to your new <code>" + this.branch + "</code> as well</li></ul></li><li>All work done on <b>" + this.branch + "</b> should be completed in your new <code>" + this.branch + "</code> folder</li></ol>"
        },
        'Feature Set 1 - Adding form': {
            html: "<h4>Add A contact form into your contact me section from v0.1</h4><ol class='left-border'> <li>The form should have the following fields: <ol class='nested-1'> <li><b>Name</b> (<i>text input</i>)</li> <li><b>Email</b> (<i>text input</i>)</li> <li><b>Message</b> (<i>textarea</i>)</li> <li><b>Submit</b> (<i>button of type submit</i>)</li> </ol> </li> <li>The form should be responsive and display appropriately on a mobile device <ul> <li>fields should be single columns</li> </ul> </li> <li>The form should submit <ol class='nested-1'> <li>URL to submit to <code>http://danielpaschal.com/learningfuze/reflect.php</code></li> <li>Utilize the <code>POST</code> method</li> </ol> </li>"
        },
        'Feature Set 2 - Add Bootstrap Module(s)':{
            html: "<h4>Add at least 1 bootstrap program module from the following list</h4><ol class='left-border'><li><a href='http://www.w3schools.com/bootstrap/bootstrap_panels.asp' target='_blank'>Multi-Panel | Tab-Panel</a></li><li><a href='http://www.w3schools.com/bootstrap/bootstrap_scrollspy.asp' target='_blank'>Scroll Spy</a></li><li><a href='http://www.w3schools.com/bootstrap/bootstrap_carousel.asp' target='_blank'>Carousel</a></li><li><a href='http://www.w3schools.com/bootstrap/bootstrap_modal.asp' target='_blank'>Modal Info</a></li><li><a href='http://www.w3schools.com/bootstrap/bootstrap_collapse.asp' target='_blank'>Collapse Panel</a></li></ol>"
        },
        'Feature Set 3 - Menu Overlay': {
            html: "<h4>Add a menu overlay that will serve to give more information about a project.</h4><ol class='left-border'><li><a href='https://jsfiddle.net/lfdaniel/pgdgn627/' target='_blank'>Simple Example</a></li><li><a href='https://jsfiddle.net/lfdaniel/eL7gtp0c/' target='_blank'>Advanced Example</a></li></ol>"
        }
    }
});

//MBoutique - Assignment 1
app.controller('mboutique1Controller', function() {
    this.title = ['MBoutique Assignment 1', 'mboutique_assignment_1'];
    this.description = "<p>This project will combine all the HTML and CSS knowledge you have gained so far to create a full website. For assignment 1 you will be building out the Home page of the MBoutique website.</p>";
    this.repoName = "mboutique_root";
    this.branch = 'assignment_1';
    this.projectId = 3;

    //this.links = {
    //    'Related Slide': {},
    //    'Related Video': {}
    //};

    this.features = {
        'Assignment 1': {
            html: '<h4>Getting Started</h4><ol class="left-border"><li>Within your <b>' + this.repoName + '</b> folder, create a sub folder named: <code>' + this.branch + '</code></li><li>In your new <code>' + this.branch + '</code> folder create the following files:<ol class="nested-1"><li><code>index.html</code></li><li><code>style.css</code></li></ol></li><li>In the <code>&lt;head&gt;</code>:<ol class="nested-1"><li>Give your site a title</li><li>Link to your <code>style.css</code></li></ol></li></ol>'
        },
        'Feature Set 1': {
            html: '<ol class="left-border"><li>Create the HTML and CSS necessary to reproduce the MBoutique home/welcome page<ul><li>Use the <code>index.html</code> file for your <b>HTML</b></li><li>Use the <code>style.css</code> file for your <b>CSS</b></li></ul></li><li>Use the design images for reference (Found in the assets folder)</li></ol>'
        },
        'Screenshot Example': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/Welcome_Screenshot.png" target="_blank"><img src="assets/images/projects/mboutique/Welcome_Screenshot.png" alt="MBoutique Home Page Screenshot" class="image-responsive"></a></li></ul>'
        },
        'Design Doc': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/welcome_exp.png" target="_blank"><img src="assets/images/projects/mboutique/welcome_exp.png" alt="MBoutique Home Page Design Doc" class="image-responsive"></a></li></ul>'
        },
        'Suggestions': {
            html: '<ol class="left-border"><li>Break the page down into sections and build one section at a time. For example:<ol class="nested-1"><li>Header section</li><li>Body/Main content section</li><li>Footer section</li></ol></li><li>Keep in mind that there are multiple pages<ol class="nested-1"><li>Notice the sections that are the same on all pages like the header and footer</li><li>Design your HTML so that it will be easy to reuse the header and footer sections on all the pages</li></ol></li><li>Don\'t panic<ul><li>If you get stuck or have any issues use google or the LearningFuze chat </li></ul></li><li>If you are familiar with them, make use of the chrome developer tools to prototype out your changes.<ul><li>You can find more details on <a href="http://discover-devtools.codeschool.com/" target="_blank">chrome developer tools</a> on codeschool and other places. </li></ul></li><li>Test each CSS change as you implement it. It can be difficult to ascertain "what went wrong" if you do many lines of code and then test it.</li><li>Pay attention to the gross details first, and then make a second pass for fine details. </li></ol>'
        }
    }
});

//MBoutique - Assignment 2
app.controller('mboutique2Controller', function() {
    this.title = ['MBoutique Assignment 2', 'mboutique_assignment_2'];
    this.description = "<p>This project will combine all the HTML and CSS knowledge you have gained so far to create a full website. For assignment 2 you will be building out the Our Macarons Page of the MBoutique website.</p>";
    this.repoName = "mboutique_root";
    this.branch = 'assignment_2';
    this.projectId = 4;

    //this.links = {
    //    'Related Slide': {},
    //    'Related Video': {}
    //};

    this.features = {
        'Assignment 2': {
            html: '<h4>Getting Started</h4><ol class="left-border"><li>Within your <b>' + this.repoName + '</b> folder, create a sub folder named: <code>' + this.branch + '</code></li><li>Copy all your files from your <b>assignment_1</b> folder and paste them into your new <code>' + this.branch + '</code> folder</li><li>In your new <code>' + this.branch + '</code> folder create the following file:<ol class="nested-1"><li><code>our_macarons.html</code></li></ol></li><li>In the <code>&lt;head&gt;</code>:<ol class="nested-1"><li>Give your new page an appropriate title</li><li>Link to your <code>style.css</code><ul><li><b>YES</b> - You are using the same stylesheet from the previous assignment. You will be using the same stylesheet file throughout the whole project</li><li>Altogether you will have <b>ONE</b> stylesheet for all 4 pages</li></ul></li></ol></li></ol>'
        },
        'Feature Set 1 - Our Macarons Page': {
            html: '<ol class="left-border"><li>Create the HTML and CSS necessary to reproduce the MBoutique Our Macarons page<ul><li>Use the <code>our_macarons.html</code> file for your HTML</li><li>Use the file for your CSS</li></ul></li><li>Don\'t forget to link your CSS to your HTML<ul><li>ex: <code>&lt;link rel="stylesheet" type="text/css" src="style.css"&gt;</code></li></ul></li><li>Use the design images for reference (Found in the assets folder)</li></ol>'
        },
        'Screenshot Example': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/our-macarons-screenshot.png" target="_blank"><img src="assets/images/projects/mboutique/our-macarons-screenshot.png" alt="MBoutique Our Macarons Page Screenshot"></a></li></ul>'
        },
        'Design Doc': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/our-macarons_exp.png" target="_blank"><img src="assets/images/projects/mboutique/our-macarons_exp.png" alt="MBoutique Our Macarons Page Design Doc"></a></li></ul>'
        },
        'Suggestions': {
            html: '<ol class="left-border"><li>Break the page down into sections and build one section at a time. For example:<ol class="nested-1"><li>Header section</li><li>Body/Main content section</li><li>Footer section</li></ol></li><li>Keep in mind that there are multiple pages<ol class="nested-1"><li>Notice the sections that are the same on all pages like the header and footer</li><li>Design your HTML so that it will be easy to reuse the header and footer sections on all the pages</li></ol></li><li>Don\'t panic<ol class="nested-1"><li>If you get stuck or have any issues use google or the LearningFuze forum</li></ol></li><li>If you are familiar with them, make use of the chrome developer tools to prototype out your changes.<ol class="nested-1"><li>You can find more details on <a href="http://discover-devtools.codeschool.com">CODESCHOOL</a> and other places.</li></ol></li><li>Test each CSS change as you implement it. It can be difficult to ascertain "what went wrong" if you do many lines of code and then test it.</li><li>Pay attention to the gross details first, and then make a second pass for fine details.</li></ol>'
        }
    }
});

//MBoutique - Assignment 3
app.controller('mboutique3Controller', function() {
    this.title = ['MBoutique Assignment 3', 'mboutique_assignment_3'];
    this.description = "<p>This project will combine all the HTML and CSS knowledge you have gained so far to create a full website. For assignment 3 you will be building out the Gift &amp; Parties Page of the MBoutique website.</p>";
    this.repoName = "mboutique_root";
    this.branch = 'assignment_3';
    this.projectId = 4;

    //this.links = {
    //    'Related Slide': {},
    //    'Related Video': {}
    //};

    this.features = {
        'Assignment 3': {
            html: '<h4>Getting Started</h4><ol class="left-border"><li>Within your <b>' + this.repoName + '</b> folder, create a sub folder named: <code>' + this.branch + '</code></li><li>Copy all your files from your <b>assignment_2</b> folder and paste them into your new <code>' + this.branch + '</code> folder</li><li>In your new <code>' + this.branch + '</code> folder create the following file:<ol class="nested-1"><li><code>gifts_parties.html</code></li></ol></li><li>In the <code>&lt;head&gt;</code>:<ol class="nested-1"><li>Give your new page an appropriate title</li><li>Link to your <code>style.css</code><ul><li><b>YES</b> - You are using the same stylesheet from the previous assignment. You will be using the same stylesheet file throughout the whole project</li><li>Altogether you will have <b>ONE</b> stylesheet for all 4 pages</li></ul></li></ol></li></ol>'
        },
        'Feature Set 1 - Gifts &amp; Parties page': {
            html: '<ol class="left-border"><li>Create the HTML and CSS necessary to reproduce the MBoutique Gifts &amp; Parties page<ul><li>Use the <code>gifts_parties.html</code> file for your HTML</li><li>Use the <code>style.css</code> file for your CSS</li></ul></li><li>Don\'t forget to link your CSS to your HTML<ul><li>ex: <code>&lt;link rel="stylesheet" type="text/css" src="style.css"&gt;</code></li></ul></li><li>Use the design images for reference (Found in the assets folder)</li></ol>'
        },
        'Screenshot Example': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/gift-&-parties-screenshot.png" target="_blank"><img src="assets/images/projects/mboutique/gift-&-parties-screenshot.png" alt="MBoutique Gifts and Parties Page Screenshot"></a></li></ul>'
        },
        'Design Doc': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/gift-&-parties_exp.png" target="_blank"><img src="assets/images/projects/mboutique/gift-&-parties_exp.png" alt="MBoutique Gifts and Parties Page Design Doc"></a></li></ul>'
        },
        'Suggestions': {
            html: '<ol class="left-border"><li>Break the page down into sections and build one section at a time. For example:<ol class="nested-1"><li>Header section</li><li>Body/Main content section</li><li>Footer section</li></ol></li><li>Keep in mind that there are multiple pages<ol class="nested-1"><li>Notice the sections that are the same on all pages like the header and footer</li><li>Design your HTML so that it will be easy to reuse the header and footer sections on all the pages</li></ol></li><li>Don\'t panic<ol class="nested-1"><li>If you get stuck or have any issues use google or the LearningFuze forum</li></ol></li><li>If you are familiar with them, make use of the chrome developer tools to prototype out your changes.<ol class="nested-1"><li>You can find more details on <a href="http://discover-devtools.codeschool.com">CODESCHOOL</a> and otherplaces.</li></ol></li><li>Test each CSS change as you implement it. It can be difficult to ascertain "what went wrong" if you do manylines of code and then test it.</li><li>Pay attention to the gross details first, and then make a second pass for fine details.</li></ol>'
        }
    }
});

//MBoutique - Assignment 4
app.controller('mboutique4Controller', function() {
    this.title = ['MBoutique Assignment 4', 'mboutique_assignment_4'];
    this.description = "<p>This project will combine all the HTML and CSS knowledge you have gained so far to create a full website. For assignment 4 you will be building out the Contact Page of the MBoutique website.</p>";
    this.repoName = "mboutique_root";
    this.branch = 'assignment_4';
    this.projectId = 5;

    //this.links = {
    //    'Related Slide': {},
    //    'Related Video': {}
    //};

    this.features = {
        'Assignment 4': {
            html: '<h4>Getting Started</h4><ol class="left-border"><li>Within your <b>' + this.repoName + '</b> folder, create a sub folder named: <code>' + this.branch + '</code></li><li>Copy all your files from your <b>assignment_3</b> folder and paste them into your new <code>' + this.branch + '</code> folder</li><li>In your new <code>' + this.branch + '</code> folder create the following file:<ol class="nested-1"><li><code>contact.html</code></li></ol></li><li>In the <code>&lt;head&gt;</code>:<ol class="nested-1"><li>Give your new page an appropriate title</li><li>Link to your <code>style.css</code><ul><li><b>YES</b> - You are using the same stylesheet from the previous assignment. You will be using the same stylesheet file throughout the whole project</li><li>Altogether you will have <b>ONE</b> stylesheet for all 4 pages</li></ul></li></ol></li></ol>'
        },
        'Feature Set 1 - Contact Page Mobile Friendly': {
            html: '<ol class="left-border"><li>Create the HTML and CSS necessary to reproduce a mobile friendly version of the MBoutique Contact page<ol class="nested-1"><li>Use the <code>contact.html</code> file for your HTML</li><li>Use the <code>style.css</code> file for your CSS</li><li>The page should match the design dock when displayed on a large screen</li><li>The page should switch to a mobile version on smaller screens<ul><li>Refer to mobile images below for desired look</li></ul></li></ol></li><li>Don\'t forget to link your CSS to your HTML<ul><li>ex: <code>&lt;link rel="stylesheet" type="text/css" src="style.css"&gt;</code></li></ul></li><li>Use the design images for reference (Found in the assets folder)</li><li>For testing on a mobile device refer to the <a href="#Tutorials-Dev-Tools-Mobile-View">Dev Tools - Mobile View</a> tutorial<ul><li>For this assignment you will be testing the output for an <b>iPhone 6</b></li></ul></li><li>In the <code>&lt;head&gt;</code> section of your <code>contact.html</code> page add the following <code>&lt;meta&gt;</code> tag<ul><li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></li><li>Without the above tag, your page will not display properly on a mobile device</li></ul></li></ol>'
        },
        'Screenshot Example': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/contact-screenshot.png" target="_blank"><img src="assets/images/projects/mboutique/contact-screenshot.png" alt="MBoutique Contact Page Screenshot"></a></li></ul>'
        },
        'Design Doc': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/contact_exp.png" target="_blank"><img src="assets/images/projects/mboutique/contact_exp.png" alt="MBoutique Contact Page Design Doc"></a></li></ul>'
        },
        'Mobile Screenshots': {
            html: '<ul class="left-border"><li class="clean-list"><a href="assets/images/projects/mboutique/mb-mobile-1.png"><img src="assets/images/projects/mboutique/mb-mobile-1.png" alt="Top half of page in mobile view"></a><a href="assets/images/projects/mboutique/mb-mobile-2.png"><img src="assets/images/projects/mboutique/mb-mobile-2.png" alt="Bottom half of page in mobile view"></a></li></ul>'
        },
        'Mobile Suggestions': {
            html: '<ol class="left-border"><li>Use media quieries for your CSS, like<ul><li><code>@media sceen and (max-width: 627px)</code></li></ul></li><li>For your sizing use percentages, vh and vw</li><li>Keep mobile in mind when you are building the full size site<ul><li>Use the mobile first approach</li></ul></li></ol>'
        },
        'Suggestions': {
            html: '<ol class="left-border"><li>Break the page down into sections and build one section at a time. For example:<ol class="nested-1"><li>Header section</li><li>Body/Main content section</li><li>Footer section</li></ol></li><li>Keep in mind that there are multiple pages<ol class="nested-1"><li>Notice the sections that are the same on all pages like the header and footer</li><li>Design your HTML so that it will be easy to reuse the header and footer sections on all the pages</li></ol></li><li>Don\'t panic<ol class="nested-1"><li>If you get stuck or have any issues use google or the LearningFuze forum</li></ol></li><li>If you are familiar with them, make use of the chrome developer tools to prototype out your changes.<ol class="nested-1"><li>You can find more details on <a href="http://discover-devtools.codeschool.com">CODESCHOOL</a> and otherplaces.</li></ol></li><li>Test each CSS change as you implement it. It can be difficult to ascertain "what went wrong" if you do manylines of code and then test it.</li><li>Pay attention to the gross details first, and then make a second pass for fine details.</li></ol>'
        }
    }
});