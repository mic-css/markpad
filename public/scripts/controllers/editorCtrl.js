'use strict';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

angular.module('markpad')
  .controller('EditorCtrl', function () {
    var self = this;
    self.result="";
    self.source="";

    self.renderMd = function () {
      self.result = marked(self.source);
    };
  });