import React, { useRef, useEffect, useState } from "react";
import { DiffEditor, useMonaco } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";

interface MonacoDiffEditorProps {
  FuncYamlfile: (value: string) => void;
  chartvalue: string;
  orginalvalue: string;
}

function MonacoDiffEditor({
  FuncYamlfile,
  chartvalue,
  orginalvalue
}: MonacoDiffEditorProps) {
  const [yamltext, setYamltext] = useState<string>(chartvalue);

  const originalyaml = useRef<string>(orginalvalue);
  const editorRef = useRef<monacoEditor.editor.IStandaloneDiffEditor | null>(
    null
  );
  const monaco = useMonaco();

  useEffect(() => {
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    FuncYamlfile(yamltext);
  }, [monaco, yamltext, FuncYamlfile]);

  function handleEditorChange(value: string, event: any) {
    FuncYamlfile(value);
    setYamltext(value);
  }

  function handleEditorDidMount(
    editor: monacoEditor.editor.IStandaloneDiffEditor,
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
      <DiffEditor
        height="90vh"
        language="yaml"
        // @ts-ignore
        defaultValue={yamltext}
        original={originalyaml.current}
        modified={yamltext}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </div>
  );
}

export default MonacoDiffEditor;
