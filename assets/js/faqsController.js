app.controller('faqsController', function() {
    this.title = "Course Faqs";
    this.faqList = [
        {
            question: 'When are assignments due?',
            answer: 'All Prototypes & Skill Assessments are due at 10pm. Prototypes and Skill Assessments are due 1 day after they are assigned in the portal. Projects are due 2 days later at the same time.'
        },
        {
            question: 'When are instructors available to answer questions?',
            answer: 'Travis is available Monday through Thursday nights from 7 - 9 pm. Dan, Scott, and Tim are available during business hours via slack (Current Full Immersion students take priority)'
        },
        {
            question: 'When can I expect feedback on my assignment?',
            answer: 'Feedback will usually be given within 72 hours of submission'
        }
    ]
});