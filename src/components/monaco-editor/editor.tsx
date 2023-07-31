import React, { useRef, useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";

interface MonacoEditorProps {
  FuncYamlfile: (value: string) => void;
  chartvalue: string;
  onChange?: (value: string, event: monacoEditor.editor.IModelContentChangedEvent) => void;
}

function MonacoEditor({ FuncYamlfile, chartvalue, onChange }: MonacoEditorProps) {
  const [yamltext, setYamltext] = useState<string>(chartvalue);

  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      console.log("here is the monaco instance:", monaco);
    }

    FuncYamlfile(yamltext);
  }, [monaco, yamltext, FuncYamlfile]);

  function handleEditorChange(value: string, event: monacoEditor.editor.IModelContentChangedEvent) {
    FuncYamlfile(value);
    setYamltext(value);

    // Call the provided onChange callback if it exists
    if (onChange) {
      onChange(value, event);
    }
  }

  function handleEditorDidMount(
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) {
    editorRef.current = editor;
  }

  function handleEditorWillMount(monaco: typeof monacoEditor) {
    // Do any setup or configuration before the editor mounts
  }

  function handleEditorValidation(
    markers: monacoEditor.editor.IMarkerData[]
  ) {
    // Handle editor validation, if needed
  }

  return (
    <div className="card">
      <Editor
        height="90vh"
        defaultLanguage="yaml"
        defaultValue={yamltext}
        // @ts-ignore
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </div>
  );
}

export default MonacoEditor;
