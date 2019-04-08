#!/usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");

program.version("0.0.1", "-v --version");

// init project
program
  .command("project [projectName]")
  .alias("p")
  .description("init project")
  .action((projectName = "react") => {
    console.log("init project", projectName);
    // download project from github
    download(`ScorpionJay/${projectName}`, ".", function(err) {
      console.log(err ? "Error" : "Success");
    });
  });

// init snippet
program
  .command("snippet [snippetName]")
  .alias("s")
  .description("init snippet")
  .action((snippetName = "react") => {
    console.log("init snippet", snippetName);
    // download template from github
    // default branch react
    download(`ScorpionJay/jinit/#${snippetName}`, ".", function(err) {
      console.log(err ? "Error" : "Success");
    });
  });

program.parse(process.argv);
