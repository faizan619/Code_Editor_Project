import CodeMirror from "@uiw/react-codemirror"

const EditorPage = ()=> {

  return (
    // <textarea id="realtimeEditor"></textarea>
    <div className="codemirrorstyle">
      <CodeMirror
            value="Write JavaScript Programs Here"
            height="100vh"
            width="100%"
            basicSetup={{
              foldCode:true,
            }}
          />
    </div>
  )
} 

export default EditorPage;