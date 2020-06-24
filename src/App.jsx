import React, { useState } from 'react';
import logo from './logo.svg';
import Button from './Button';
import css from 'csz';

function App() {
  return (
    <div className={ css`text-align:center;`}>
      <h1>React Buttons with csz</h1>
      <p><Button>Normal</Button></p>
      <p>
        <Button inverted>Inverted</Button>
      </p>
      <p>
        <Button primary>Primary</Button>
      </p>
      <p>
        <Button danger>Danger</Button>
      </p>
      <p>
        <Button disabled>Disabled</Button>
      </p>
      <p>
        <Button link>Link</Button>
      </p>
      <p>
        <Button small>Small</Button>
      </p>
      <p>
        <Button large>Large</Button>
      </p>
    </div>
  );
}

export default App;
