import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants'
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from "../redux/services/shazamCoreApi.js";

const Discover = () => {

    // PlayPause component
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    // Fetching data and handling it
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader />

    if (error) return <Error />

    return (
        <div className="flex flex-col">

            {/* Genre */}
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
                <select onChange={() => { }} value='' className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    {genres.map((genre) =>
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>)
                    }
                </select>
            </div>

            {/* Song Card */}
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard key={song.key} song={song} i={i} activeSong={activeSong} isPlaying={isPlaying} data={data} />
                ))}
            </div>
        </div>
    )
};

export default Discover;
