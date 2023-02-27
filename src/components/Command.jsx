function CommandWrapper({ items, activeIndex }) {
  return (
    <div className="commandWrapper">
      <div className="nowPlaying">
        <div className="widget">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="currentTrack">
            <h4>Stuck with You</h4>
            <p>Ariana Grande</p>
          </div>
        </div>
        <div className="controls">
          <i className="ri-skip-back-fill"></i>
          <i className="ri-play-circle-fill"></i>
          <i className="ri-skip-forward-fill"></i>
        </div>
      </div>
      <div className="content">
        {items.map((item, key) => {
          return (
            <div
              className={activeIndex !== key ? 'option' : 'option active'}
              key={key}
              // onClick={() => playSong(item)}
            >
              <div className="left">
                <img
                  src={item?.album?.images[0]?.url}
                  className="rounded-sm w-[30px] h-[30px] mr-3"
                  alt=""
                />
                <div>
                  <h4>{item.name.length > 36 ? item.name.substring(0, 35) + '...' : item.name}</h4>
                  <p>{item?.artists[0]?.name}</p>
                </div>
              </div>
              <div className="shortcuts">
                <kbd>⌘</kbd>
                <kbd>{key + 1}</kbd>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommandWrapper;
