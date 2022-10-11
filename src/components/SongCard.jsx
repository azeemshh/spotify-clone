import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongCard = ({ song, i }) => {

  const activeSong = 'Test'
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup">

      {/* Play and zPause functionality upon song image */}
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="song cover" />
      </div>


      {/* Title and Subtitle section */}
      <div>
        {/* Title section */}
        <p>
          <Link>

          </Link>
        </p>

        {/* Subtitle section */}
        <p>
          <Link>

          </Link>
        </p>
      </div>

    </div>
  )
}

export default SongCard;
