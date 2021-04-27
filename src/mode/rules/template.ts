ace.define("ace/mode/example_highlight_rules", function (require, exports) {
  const oop = require("ace/lib/oop");
  const TextHighlightRules = require("ace/mode/text_highlight_rules")
    .TextHighlightRules;

  const ExampleHighlightRules = function () {
    this.$rules = new TextHighlightRules().getRules();
  };

  oop.inherits(ExampleHighlightRules, TextHighlightRules);

  exports.ExampleHighlightRules = ExampleHighlightRules;
});
