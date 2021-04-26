/* eslint no-var: off */
type DefineCallback = (
  require: (dep: string) => any,
  exports: any,
  module?: any
) => void;

declare var ace: {
  define(require: string, cb: DefineCallback);
};
