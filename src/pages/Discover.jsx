import { genres } from '../assets/constants'

const Discover = () => {
    return (
        <div className="">
            <h2 className="">Discover</h2>
            <select className="" value='' onChange={() => { }}
            >
                {genres.map((genre) =>
                    <option
                        key={genre.value}
                        value={genre.value}
                    >
                        {genre.title}
                    </option>
                )}
            </select>
        </div>
    )
};

export default Discover;
