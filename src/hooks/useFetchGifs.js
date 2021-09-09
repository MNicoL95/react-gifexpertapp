import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from '../helpers/GetGif';

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState(

        {
            data: [],
            loading: true
        }
    );
    useEffect(() => {
        
        getGifs(category)
            .then ( imgs => {

                setTimeout(() => {
                    setstate
                    ({
                    data: imgs,
                    loading: false,
                    })
                }, 500);
                
            })
    }, [category])
        // setTimeout(() => {
        //     setstate ({
        //         data: [1,2,3,4,5],
        //         loading: false
        //     })
        // }, 3000 );
    return state;
}