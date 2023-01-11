import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [font, setFont] = useState('');
  const [alignment, setAlignment] = useState('left');
  const [text, setText] = useState('Text');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} alignment={alignment} font={font} text={text} />
      <Editor
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setAlignment={setAlignment}
        setFont={setFont}
        setText={setText}
      />
    </main>
  );
}
