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
  {'id':10 , 'term':'Continuous Deployment (CD)' ,'description': 'The practice of automatically deploying code changes to production environments as soon as they pass the necessary tests and quality checks. It enables frequent and rapid releases of software.', 'reference': 'Dingsoyr, T., Jorgensen, M., Carlsen, F. O., Carlstrom, L., Engelsrud, J., Hansvold, K., Heibo-Bagheri, M., Roe, K., & Sorensen, K. O. V. (2022). Enabling Autonomous Teams and Continuous Deployment at Scale. IT Professional, IT Prof, 24(6), 47–53. https://doi.org/10.1109/MITP.2022.3209871'},
  {'id':11 , 'term': 'Continuous Integration (CI)', 'description': 'By doing the practice of Continous Integration, code changes from multiple contributors can be automatively integrated into single projec. This practice allows developers who work on the same project to merge code changes into the same repository.', 'reference': 'Dingsoyr, T., Jorgensen, M., Carlsen, F. O., Carlstrom, L., Engelsrud, J., Hansvold, K., Heibo-Bagheri, M., Roe, K., & Sorensen, K. O. V. (2022). Enabling Autonomous Teams and Continuous Deployment at Scale. IT Professional, IT Prof, 24(6), 47–53. https://doi.org/10.1109/MITP.2022.3209871'},
  {'id':12 , 'term': 'Infrastructure as Code (IaC)', 'description': 'By doing the practice of IaC, infrastructure provisioning and configuration are treated as code. This approach allows for automated and version-controlled infrastructure management, making it easier to maintain and scale complex systems, which enables a seamless and integrated delivery process.', 'reference': 'What is Infrastructure as Code (IaC)? https://www.ibm.com/topics/infrastructure-as-code'},
  {'id':13 , 'term': 'Automation', 'description': 'Automation is the practice of using specialized software tools and methodologies to automate repetitive and manual tasks throughout the software development lifecycle. It takes parts in all the stages in DevOps, especially in code building, self-testing, package configuration and etc.', 'reference': 'Fernandes, C., 2022, DevOps automation: Best practices and benefits, https://www.sumologic.com/blog/devops-automation-best-practices-benefits/'},
  {'id':14 , 'term': 'Preprod', 'description': 'Preprod (short for pre-production) refers to the staging or testing environment that precedes the production environment. It is a crucial phase in the software development and deployment process where the software is tested and validated before being released to the live production environment.', 'reference': 'Fernandes, C., 2022, DevOps automation: Best practices and benefits, https://www.sumologic.com/blog/devops-automation-best-practices-benefits/'},
  {'id':15 , 'term': 'SLAs', 'description': 'SLAs (Service Level Agreements) means agreed-upon performance metrics that define the expected level of service between different teams or parties.', 'reference': 'SLA vs. SLO vs. SLI: What’s the difference?, https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli'},
  {'id':16 , 'term': 'Regression Test', 'description': 'Regression testing refers to the practice of retesting software applications or components after changes have been made to the codebase. The purpose of regression testing is to ensure that new code changes, updates, or bug fixes do not negatively impact existing functionality.', 'reference': 'Wickramasinghe, S., 2021, Testing in DevOps: Concepts, Best Practices & More, https://www.bmc.com/blogs/devops-testing/'},
  {'id':17 , 'term': 'Acceptance Test', 'description': 'Acceptance test is carried out to verify that the software meets the specified business requirements and is accepted by stakeholders.', 'reference': 'Wickramasinghe, S., 2021, Testing in DevOps: Concepts, Best Practices & More, https://www.bmc.com/blogs/devops-testing/'},
  {'id':18 , 'term': 'Triggered Release', 'description': 'a triggered release refers to a deployment process that is initiated manually or automatically based on specific events or conditions. he deployment is "triggered" when certain predefined requirements are met, ensuring that the software is deployed to production only when it is ready and meets specific criteria.', 'reference': 'Watts, S., 2023, DevOps Release Management Concepts & Best Practices, https://www.splunk.com/en_us/blog/learn/devops-release-management.html#:~:text=In%20a%20DevOps%20environment%2C%20release,%2C%20efficient%2C%20and%20timely%20manner.'},
  {'id':19 , 'term': 'APM', 'description': 'Application Performance Monitoring (APM) refers to tools and practices used to monitor and analyze the performance of applications and services. APM provides developers, operations teams, and other stakeholders with valuable insights into how an application is performing, identifying bottlenecks, and helping to ensure optimal user experiences.', 'reference': 'Watts, S., 2023, DevOps Release Management Concepts & Best Practices, https://www.splunk.com/en_us/blog/learn/devops-release-management.html#:~:text=In%20a%20DevOps%20environment%2C%20release,%2C%20efficient%2C%20and%20timely%20manner.'},
  {'id':20 , 'term': 'Staging Environment', 'description': 'A staging environment, also known as a pre-production environment, is a replica of the production environment where software applications are tested, validated, and fine-tuned before being deployed to the live production environment.', 'reference': 'What Is a Staging Environment? How to Get It Right, https://www.plutora.com/blog/what-staging-environment-how-get-it-right'},
  {'id':21 , 'term': 'Image', 'description': 'An image is a read-only template that contains the necessary instructions for creating a Docker container. Images are the building blocks for containers and can be shared and reused across different environments.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 3/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':22 , 'term': 'Container', 'description': 'A lightweight, standalone, and executable software package that encapsulates an application along with its runtime environment and dependencies. ', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 3/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':23, 'term': 'Docker', 'description': 'Docker provides a platform for creating, packaging, and distributing applications and their dependencies in a consistent and isolated manner, using containers.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 3/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':24, 'term': 'Docker Compose', 'description': 'Docker Compose provides an easy way to define, manage, and run applications that involve several Docker containers working together.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 4/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':25, 'term': 'YAML', 'description': 'YAML is a human-readable data serialization format that is often used for configuration files and data exchange between applications. It is designed to be easy to read and write by humans, while also being easily interpreted by machines.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 4/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':26 , 'term': 'Dockerfile', 'description': 'A Dockerfile is a text file that contains instructions for building a Docker image. It defines the base image, application code, dependencies, and configuration needed to create a functional container.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 4/ Davis, Ashley, Manning Publications viewed 11 July 2022'},
  {'id':27 , 'term': 'Registry', 'description': 'A registry is a centralized repository that stores Docker images.', 'reference': 'Docker containers, images and registries, 2022, https://learn.microsoft.com/en-us/dotnet/architecture/microservices/container-docker-introduction/docker-containers-images-registries'},
  {'id':28 , 'term': 'Service', 'description': 'Service refers to a containerized application component defined in the docker-compose.yml file. Each service can be scaled independently and may include settings like the image, ports, volumes, and environment variables.', 'reference': 'Run multiple services in a container, https://docs.docker.com/config/containers/multi-service_container/'},
  {'id':29 , 'term': 'Kubernetes', 'description': 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. ', 'reference': 'Kubernetes overview, https://kubernetes.io/docs/concepts/overview/'},
  {'id':30 , 'term': 'Networking', 'description': 'Docker provides networking features that allow containers to communicate with each other and with external networks.Docker creates a bridge network by default, and users can define custom networks in Docker Compose for isolated communication between services.', 'reference': 'Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Chapter 4/ Davis, Ashley, Manning Publications viewed 11 July 2022'},



]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary',
    subheading: 'my website showing a collection of DevOps terms and their brief descriptions.',
    items: itemList});
});


module.exports = router;
