function AlbumCover({ src }) {
  return (
    <>
      <img
        src={src ?? 'https://via.placeholder.com/150'}
        className="w-[35px] h-[435px0px] rounded-md mr-3"
        alt=""
      />
    </>
  );
}

export default AlbumCover;
