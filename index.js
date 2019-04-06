#!/usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");

program
  .version("0.0.1", "-v --version")
  .command("install [name] [template]")
  .alias("i")
  .action((name = "jinit", template = "react") => {
    console.log("init", name, template);
    // download template from github
    // defalut repository jinit
    // default branch react
    download(`ScorpionJay/${name}/#${template}`, ".", function(err) {
      console.log(err ? "Error" : "Success");
    });
  });

program.parse(process.argv);
