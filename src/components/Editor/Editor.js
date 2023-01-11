import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubtitle, setAlignment, setFont, setText }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setSubtitle(e.target.value);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAlignmentClick = (e) => {
    setAlignment(e.target.value);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <input onChange={handleTitleChange} name="title" type="text" defaultValue={'Title'} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input onChange={handleSubtitleChange} type="text" defaultValue={'Subtitle'} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select onChange={handleFontChange}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input onClick={handleAlignmentClick} name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input onClick={handleAlignmentClick} name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input onClick={handleAlignmentClick} name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea onChange={handleTextChange} style={{ height: '250px' }} defaultValue={'Text'} />
        <label>Text</label>
      </div>
    </div>
  );
}
