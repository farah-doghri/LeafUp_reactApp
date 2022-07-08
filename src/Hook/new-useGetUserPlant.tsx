import { useEffect, useState} from 'react';
import axios from 'axios';

import { Plante } from '../interfaces/Plante';

const newuseGetUserPlant = (user_id:number) => {
    const [plante,setPlante] = useState<Plante>();
    const [loading_plante, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/userplants/'+user_id+'/');
            setPlante(response);
            console.log("In newuseGetUserPlant");
            console.log(response);
            console.log(plante);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        plante,
        loading_plante,
    };
};

export default newuseGetUserPlant;