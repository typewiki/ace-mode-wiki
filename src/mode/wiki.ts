import { magicWords } from "./consts";
import "./rules/template";

ace.define("ace/mode/example", function (require, exports) {
  console.log("magicWords", magicWords);
  const oop = require("ace/lib/oop");
  const TextMode = require("ace/mode/text").Mode;
  const ExampleHighlightRules = require("ace/mode/example_highlight_rules")
    .ExampleHighlightRules;

  const Mode = function () {
    this.HighlightRules = ExampleHighlightRules;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    // Extra logic goes here.g (see below)
  }.call(Mode.prototype));

  exports.Mode = Mode;
});
