import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [alignment, setAlignment] = useState('left');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} alignment={alignment} />
      <Editor
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setAlignment={setAlignment}
        alignment={alignment}
      />
    </main>
  );
}
