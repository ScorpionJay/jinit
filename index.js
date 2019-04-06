#!/usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");

program
  .version("0.0.1", "-v --version")
  .command("install [name]")
  .alias("i")
  .action((name = "react") => {
    console.log("init", name);
    // download template from github
    // default branch react
    download(`ScorpionJay/jinit/#${name}`, ".", function(err) {
      console.log(err ? "Error" : "Success");
    });
  });

program.parse(process.argv);
