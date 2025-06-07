import { Episode } from "./Episode";
import { episodes } from "../../pages";

export const EpisodeList = ({episodes}) => {
    return (
        <>
            <div className="episodes-list">
                {episodes.map((episode) => (
                    <Episode key={episode.title} num={episode.num} title={episode.title} guest={episode.guest} />
                ))}
            </div>
        </>
    );
};