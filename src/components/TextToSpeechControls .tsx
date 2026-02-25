import React from "react";

function TextToSpeechControls() {
  const audioSrc = `${import.meta.env.BASE_URL}speech.mp3`;

  return (
    <div className="recording">
      <audio 
        style={{ width: '25rem', height: '9rem' }} 
        controls 
        src={audioSrc}
      />
      {/* Rest of your component */}
    </div>
  );
}

// function TextToSpeechControls() {
//   const [count, setCount] = useState<number>(0.25);
//   // function handleCount() {
//   //   setCount(count > 1.75 ? 0.25 : count + 0.25);
//   // }

//   function handleCount(event: React.ChangeEvent<HTMLInputElement>) {
//     const value = parseFloat(event.target.value);
//     setCount(value);
//   }


//   return (
//     <div className="recording">
//       {/* <FaPlay size={30} />
//       <FaCirclePause size={30} />
//       <FaRegStopCircle size={30} />
//       <IoSpeedometer size={30} /> */}
//       <audio style={{ width: '25rem', height: '9rem'}} controls src="./speech.mp3"></audio>
//       {/* <source className="audio_source" type="audio/mpeg" src="./speech.mp3"/> */}
//       <i className="fa-solid fa-microphone" data-name="microphone"></i>
//       <i className="fa-solid fa-pause" data-name="pause"></i>
//       <i className="fa-solid fa-stop" data-name="stop"></i>
//       <div className="speed-wrapper">
//         {/* <label htmlFor="speed">Speed</label> */}
//         {/* <input onChange={handleCount}
//           type="number"
//           name="speed"
//           id="speed"
//           min="0.25"
//           max="2"
//           step="0.25"
//           value={count}
//         ></input> */}
//       </div>
//     </div>
//   );
// }

export default TextToSpeechControls;
