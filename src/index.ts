ace.define("ace/mode/example", function (require, exports, module) {
  const oop = require("ace/lib/oop");
  const TextMode = require("ace/mode/text").Mode;
  const ExampleHighlightRules = require("ace/mode/example_highlight_rules")
    .ExampleHighlightRules;

  const Mode = function () {
    this.HighlightRules = ExampleHighlightRules;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    // Extra logic goes here. (see below)
  }.call(Mode.prototype));

  exports.Mode = Mode;
});

ace.define(
  "ace/mode/example_highlight_rules",
  function (require, exports, module) {
    const oop = require("ace/lib/oop");
    const TextHighlightRules = require("ace/mode/text_highlight_rules")
      .TextHighlightRules;

    const ExampleHighlightRules = function () {
      this.$rules = new TextHighlightRules().getRules();
    };

    oop.inherits(ExampleHighlightRules, TextHighlightRules);

    exports.ExampleHighlightRules = ExampleHighlightRules;
  }
);
