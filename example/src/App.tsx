import React from 'react';
import AceEditor from "react-ace";

import "ace-mode-wiki";
import "ace-builds/src-noconflict/theme-github";

function App() {
  return (
    <AceEditor
      mode="wiki"
      // theme="github"
      //name="example"
      editorProps={{ $blockScrolling: true }}
    />
  );
}

export default App;
