import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongCard = ({ song, i }) => {
  return (
    <div>

      {/* Play and zPause functionality upon song image */}
      <div>
        <div>
          <PlayPause />
        </div>
        <img src="" alt="" />
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
