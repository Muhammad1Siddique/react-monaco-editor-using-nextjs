import React, { useState, useRef } from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import monaco from "monaco-editor/esm/vs/editor/editor.api";

interface AppProps {
  defaultValue: string;
  appliedValue: string;
}


const ReactMonacoEditor: React.FC<AppProps> = ({defaultValue, appliedValue}) => {
  
  const options = {
     renderSideBySide: true
  };
  const theme:string = "light";
  const deploymentEvent:string = "upgrade";

  const [usePackageDefaults, setUsePackageDefaults] = useState(
    deploymentEvent === "upgrade" ? false : true,
  );

  const editorDidMount = (editor: monaco.editor.IStandaloneDiffEditor, m: typeof monaco) => {
    // Add "go to the next change" action
    editor.addAction({
      id: "goToNextChange",
      label: "Go to the next change",
      keybindings: [m.KeyMod.Alt | m.KeyCode.KeyG],
      contextMenuGroupId: "9_cutcopypaste",
      run: () => {
        const lineChanges = editor?.getLineChanges() as monaco.editor.ILineChange[];
        lineChanges.some(lineChange => {
          const currentPosition = editor?.getPosition() as monaco.Position;
          if (currentPosition.lineNumber < lineChange.modifiedEndLineNumber) {
            // Set the cursor to the next change
            editor?.setPosition({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Scroll to the next change
            editor?.revealPositionInCenter({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Return true to stop the loop
            return true;
          }
          return false;
        });
      },
    });
    // Add "go to the previous change" action
    editor.addAction({
      id: "goToPreviousChange",
      label: "Go to the previous change",
      keybindings: [m.KeyMod.Alt | m.KeyCode.KeyF],
      contextMenuGroupId: "9_cutcopypaste",
      run: () => {
        const lineChanges = editor?.getLineChanges() as monaco.editor.ILineChange[];
        lineChanges.some(lineChange => {
          const currentPosition = editor?.getPosition() as monaco.Position;
          if (currentPosition.lineNumber > lineChange.modifiedEndLineNumber) {
            // Set the cursor to the next change
            editor?.setPosition({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Scroll to the next change
            editor?.revealPositionInCenter({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Return true to stop the loop
            return true;
          }
          return false;
        });
      },
    });

    // Add the "toggle deployed/package default values" action
    if (deploymentEvent === "upgrade") {
      editor.addAction({
        id: "useDefaultsFalse",
        label: "Use default values",
        keybindings: [m.KeyMod.Alt | m.KeyCode.KeyD],
        contextMenuGroupId: "9_cutcopypaste",
        run: () => {
          setUsePackageDefaults(false);
        },
      });
      editor.addAction({
        id: "useDefaultsTrue",
        label: "Use package values",
        keybindings: [m.KeyMod.Alt | m.KeyCode.KeyV],
        contextMenuGroupId: "9_cutcopypaste",
        run: () => {
          setUsePackageDefaults(true);
        },
      });
    }
  };

const diffEditorOptions = {
    renderSideBySide: false,
    enableSplitViewResizing: true,
    automaticLayout: true,
  };

  return (
    <MonacoDiffEditor
      width="100vw"
      height="90vh"
      language="yaml"
      theme={theme === "dark" ? "vs-dark" : "light"}
      original={defaultValue}
      value={appliedValue}
      options={diffEditorOptions}
      editorDidMount={editorDidMount}
    />
  );
};

export default ReactMonacoEditor;
