import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from 'react-flickity-component';
import { Head } from "@inertiajs/inertia-react";
import MovieCard from "@/Components/MovieCard";
import FeatureMovie from "@/Components/FeatureMovie";

export default function Dashboard() {
    const flickityOption = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return <Authenticated>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        </Head>
        <div>
            <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
            <Flickity className="gap-[30px]" options={flickityOption}>

                {/* Movie Thumbnail */}
                {[1, 2, 3, 4, 5].map(i => (
                    <FeatureMovie
                        key={i}
                        slug='asdasdsa'
                        name={`asdasdsa ${i}`}
                        category='asdasd'
                        thumbnail="/icons/ic_play.svg"
                        rating={i+1} />
                ))}

            </Flickity>
        </div>
        <div className="mt-[50px]">
            <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
            <Flickity className="gap-[30px]" options={flickityOption}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <MovieCard
                        key={i}
                        slug='asdasdsa'
                        name={`asdasdsa ${i}`}
                        category='asdasd'
                        thumbnail="/icons/ic_play.svg"

                    />
                ))}


            </Flickity>
        </div>
    </Authenticated>


}
