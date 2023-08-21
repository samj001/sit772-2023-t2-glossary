var express = require('express');
var router = express.Router();

const itemList = [
  {'id':1,'term': 'Silo' ,'description':'boundaries in the software development process, created by parts of technology stack, steps in the delivery flow and artificial boundaries created by management and organizations','reference':'Kawaguchi, S.(2020), the wall of confusion, https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26'},
  {'id':2 , 'term':'Agile' ,'description': 'Agile is the ability to create and respond to change. It is a way of dealing with, and ultimately succeeding in, an uncertain and turbulent environment.', 'reference': 'Laoyan, S.(2022), What is Agile methodology? (A beginner’s guide), https://asana.com/resources/agile-methodology'},
  {'id':3 , 'term':'User stories' ,'description': 'A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.', 'reference': 'User Stories: An Agile Introduction, https://agilemodeling.com/artifacts/userstory.html'},
  {'id':4 , 'term':'Kanban cards' ,'description': 'A kanban card is a visual representation of an item of work. It’s an essential component of kanban, a work management framework that helps you visualize your work, limit work in progress, and maximize efficiency.', 'reference': 'What is kanban?, https://www.atlassian.com/agile/kanban'},
  {'id':5, 'term':'VSM' ,'description': 'Value stream mapping (VSM) is a lean manufacturing technique to analyze, design, and manage the flow of materials and information required to bring a product to a customer. Also known as "material and information-flow mapping", it uses a system of standard symbols to depict various work streams and information flows.', 'reference': 'MUKHERJEE, J.(2020), Value Stream Mapping: Learn how this analysis technique can optimize your CD pipeline., https://www.atlassian.com/continuous-delivery/principles/value-stream-mapping'},
  {'id':6 , 'term':'Microservices' ,'description': 'A software architecture pattern where applications are divided into smaller, loosely coupled services that can be developed, deployed, and scaled independently. Microservices promote flexibility, modularity, and ease of maintenance.', 'reference': 'Davis, A author. 2021, ‘Bootstrapping Microservices with Docker, Kubernetes, and Terraform / Davis, Ashley’, viewed 11 July 2022, <https://discovery.ebsco.com/linkprocessor/plink?id=db0e7980-bdfb-3d3b-b4e9-127c44a7aebb'},
  {'id':7 , 'term':'Scalability' ,'description': 'The ability of a system to handle an increasing workload by adapting its capacity. In DevOps, scalability refers to the ability to scale applications and infrastructure resources dynamically based on demand.', 'reference': 'Hassan, S., Bahsoon, R., & Buyya, R. (2022). Systematic scalability analysis for microservices granularity adaptation design decisions. Software: Practice & Experience, 52(6), 1378–1401. https://doi.org/10.1002/spe.3069'},
  {'id':8 , 'term':'Pair Programming' ,'description': 'Pair programming is an agile software development practice where two developers work collaboratively on the same computer to accomplish a coding task. The primary goals of pair programming are to improve code quality, enhance team collaboration, and promote knowledge sharing. ', 'reference': ''},
  {'id':9 , 'term':'Orchestration' ,'description': 'The automated coordination and management of multiple tasks, services, or systems to achieve a desired outcome. Orchestration tools help automate complex workflows and ensure the proper execution of tasks.', 'reference': 'Watts,S.(2020) , IT Automation vs Orchestration: What’s The Difference?, https://www.bmc.com/blogs/it-orchestration-vs-automation-whats-the-difference/'},
  {'id':10 , 'term':'Continuous Deployment (CD)' ,'description': 'The practice of automatically deploying code changes to production environments as soon as they pass the necessary tests and quality checks. It enables frequent and rapid releases of software.', 'reference': 'Dingsoyr, T., Jorgensen, M., Carlsen, F. O., Carlstrom, L., Engelsrud, J., Hansvold, K., Heibo-Bagheri, M., Roe, K., & Sorensen, K. O. V. (2022). Enabling Autonomous Teams and Continuous Deployment at Scale. IT Professional, IT Prof, 24(6), 47–53. https://doi.org/10.1109/MITP.2022.3209871'}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary',
    subheading: 'my website showing a collection of DevOps terms and their brief descriptions.',
    items: itemList});
});


module.exports = router;
