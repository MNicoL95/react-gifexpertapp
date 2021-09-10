import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState(

        {
            data: [],
            loading: true
        }
    );
    useEffect(() => {
        
        getGifs(category)
            .then ( imgs => {

                setTimeout(() => {
                    setState
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