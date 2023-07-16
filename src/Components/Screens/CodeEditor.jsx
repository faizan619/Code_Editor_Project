import CodeMirror from "@uiw/react-codemirror"

export default function CodeEditor() {
  return (
    <>
    <div className="codeContainer">
      <div className="codeUsers">
      <h1>Participants</h1>
      <ol>
        <li>Faizan </li>
        <li>Giridhar </li>
        <li>Wase </li>
        <li>Tauxif</li>
        <li>Zoef</li>
        <li>Ferhan</li>
        <li>Taushar</li>
        <li>Asad</li>
        <li>Unknown</li>
      </ol>
      </div>  
      <div className="codeWriter">
        <center>Faizan Code Editor</center>
        <CodeMirror
          value="console.log(Hello world);"
          height="90vh"
          basicSetup={{
            foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
          }}
        />
      </div>
      <div className="codeRunner">
      <div className="codeRunnerInput cr">
      <h2>Inputs</h2>
      <CodeMirror
          value=""
          basicSetup={{
            foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
          }}
        />
      </div>
      <div className="codeRunnerError cr">
      <h2>Error Log</h2>
      <CodeMirror
          value="No-Errors"
          basicSetup={{
            foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
          }}
        />
      </div>
        <button>Run</button>
      </div>
    </div>
    </>
  )
}
