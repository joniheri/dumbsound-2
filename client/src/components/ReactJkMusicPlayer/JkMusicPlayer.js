import React, { useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./style.css";

export default function JkMusicPlayer({ musicFile }) {
  const [instance, setInstance] = useState();
  return (
    <>
      <div className="App" style={{ marginTop: "60px" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button
          onClick={() => {
            instance.appendAudio(1, [
              {
                name: "test",
                musicSrc: musicFile,
              },
            ]);
          }}
        >
          Add test
        </button>
        <ReactJkMusicPlayer
          getAudioInstance={(instance) => setInstance(instance)}
          audioLists={[musicFile]}
        />
      </div>
    </>
  );
}
