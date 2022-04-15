//Modela los siguientes diagramas en objetos de JS: Repositorio
const repo = {
    name: "Playbook",
    author: "EnriqueAguilarP",
    language: "JavaScript",
    numberOfCommits: 5,
    stars: 10,
    forks: 8,
    issues_open: 2,
    issues_close: 1,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log()


//Modelo del siguiente diagrama: Issues
const issue = {
    title: "PlaybookFunction",
    repositoryNameAssociated: "Playbook",
    status: "Active",
    numberOfComments: 2,
    labels: "javascript",
    author: "EnriqueAguilarP",
    dateCreated: "04 15 2022",
    lastUpdated: "04 15 2022",
    getTitleAndAuthor: function(){
      return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} is ${this.status} and was created on ${this.dateCreated}`
    }
   }
   
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log()

//Modelo del siguiente diagrama: PullRequest
const pullRequest = {
    title: "PlaybookAddComments",
    branchName: "Microsoft",
    dateCreated: "04 15 2022",
    status: "Active",
    repositoryNameAssociated: "Playbook",
    author: "EnriqueAguilarP",
    getStatus: function(){
      return `This PR ${this.title} is ${this.status}`
    },
    getTitleAndAuthor: function(){
      return `This PR ${this.title} was created by ${this.author}`
    }
   }
   
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())
console.log()
   