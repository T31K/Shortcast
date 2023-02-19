import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      name: 'Stuck with You',
      artist: 'Arianna Grande',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png',
    },
    {
      name: 'Open Arms',
      artist: 'SZA',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png',
    },
    {
      name: 'At My Worst',
      artist: 'Pink Sweat',
      type: 'Song',
      img: 'https://i.scdn.co/image/ab67616d0000b27387bb1da05f3491eea3401de5',
    },
    {
      name: "Say You Won't Let Go",
      artist: 'James Arthur',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg',
    },
    {
      name: 'Stuck with You',
      artist: 'Arianna Grande',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png',
    },
    {
      name: 'Open Arms',
      artist: 'SZA',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png',
    },
    {
      name: 'At My Worst',
      artist: 'Pink Sweat',
      type: 'Song',
      img: 'https://i.scdn.co/image/ab67616d0000b27387bb1da05f3491eea3401de5',
    },
    {
      name: "Say You Won't Let Go",
      artist: 'James Arthur',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg',
    },
    {
      name: 'Stuck with You',
      artist: 'Arianna Grande',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png',
    },
    {
      name: 'Open Arms',
      artist: 'SZA',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png',
    },
    {
      name: 'At My Worst',
      artist: 'Pink Sweat',
      type: 'Song',
      img: 'https://i.scdn.co/image/ab67616d0000b27387bb1da05f3491eea3401de5',
    },
    {
      name: "Say You Won't Let Go",
      artist: 'James Arthur',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg',
    },
    {
      name: 'Stuck with You',
      artist: 'Arianna Grande',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png',
    },
    {
      name: 'Open Arms',
      artist: 'SZA',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png',
    },
    {
      name: 'At My Worst',
      artist: 'Pink Sweat',
      type: 'Song',
      img: 'https://i.scdn.co/image/ab67616d0000b27387bb1da05f3491eea3401de5',
    },
    {
      name: "Say You Won't Let Go",
      artist: 'James Arthur',
      type: 'Song',
      img: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg',
    },
  ]);
  return (
    <main>
      <section className="p-5">
        <div className="flex align-center justify-between">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png"
              className="rounded-xl w-[130px] h-[130px] ml-3"
              alt=""
            />
          </div>
          <div className="w-[300px] flex justify-center items-center flex-col">
            <div>
              <h1 className="px-5 text-gray-900 text-lg text-center font-bold">Kill Bill</h1>
              <h4 className="px-5 text-gray-800 text-sm text-center font-medium p-0">SZA</h4>
            </div>
            <div className="flex items-center">
              <i className="ri-skip-back-fill"></i>
              <i className="ri-play-circle-fill"></i>
              {/* <i className="ri-pause-circle-fill"></i> */}
              <i className="ri-skip-forward-fill"></i>
            </div>
            <div className="progress-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="flex">
          <input
            type="text"
            className="mx-3"
            placeholder="search"
          />
        </div>
      </section>

      <section className="px-5 ">
        <div class="p-3 items-container">
          {items.map((item) => {
            return (
              <div className="item">
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium">{item.name}</h2>
                    <p>{item.artist}</p>
                  </div>
                </div>
                <div class="justify-end">
                  <p>{item.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
