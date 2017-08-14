import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './editor.css';

class CiaoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editorControls: [
        {label: 'H1', style: 'H1', toggled: false},
        {label: 'H2', style: 'H2', toggled: false},
        {label: 'H3', style: 'H3', toggled: false},
        {label: 'H4', style: 'H4', toggled: false},
        {label: 'H5', style: 'H5', toggled: false},
        {label: 'H6', style: 'H6', toggled: false},
        {label: 'Blockquote', style: 'BLOCKQUOTE', toggled: false},
        {label: 'UL', style: 'UL', toggled: false},
        {label: 'OL', style: 'OL', toggled: false},
        {label: 'Code Block', style: 'CODE_BLOCK', toggled: false},
        {label: 'Bold', style: 'BOLD', toggled: false},
        {label: 'Italic', style: 'ITALIC', toggled: false},
        {label: 'Underline', style: 'UNDERLINE', toggled: false},
        {label: 'Monospace', style: 'MONOSPACE', toggled: false},
      ],
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.createEditorControl = this.createEditorControl.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  toggleInlineStyle(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  }

  createEditorControl(control) {
    return (
      <li className="editor-control-item" key={control.label}>
        <label>
          <input 
            type="checkbox"
            onClick={() => RichUtils.toggleInlineStyle(this.state.editorState, control.style)}
          />
          {control.label}
        </label>
      </li>
    )
  }

  render() {
    let editorControls = this.state.editorControls.map(this.createEditorControl);
    return (
      <div className="editor">
      <div className="editor-controls">
      <ul>
        {editorControls}
      </ul>
      </div>
        <div className="draft-editor-container">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default CiaoEditor;