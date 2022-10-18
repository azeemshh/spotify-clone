import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ song, handlePlay, handlePause, activeSong, isPlaying }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={50}
      className='text-gray-300'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={50}
      className='text-gray-300'
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
