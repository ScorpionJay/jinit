#!/usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");

program
  .version("0.0.1", "-v --version")
  .command("init [template]")
  .alias("i")
  .action((template = "master", options) => {
    download(`ScorpionJay/template/#${template}`, ".", function(err) {
      console.log(err ? "Error" : "Success");
    });
  });

program.parse(process.argv);
