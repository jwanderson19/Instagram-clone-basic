import React, {useEffect, useState} from 'react'
import './styles.css'
import api from "../../services/api"

const Publications = ()=> {

    const [url, setUrl] = useState()
    const [userID, setUserId] = useState(0)
    const [count, setCount] = useState([])

    useEffect(() => {
        loadPhotos()
    }, [userID])

    const loadPhotos = async ()=>{
        const response =  await api.get("/")  
        setUrl(response.data)    
    }

    if(url){
        // Pega somente 10 objetos dos 5000
        const pics = url.filter(res =>{
            return res.id <= 10
        })

        return(
            <div className="publications-container">
                <div className="publication-img">
                   {pics.map(res => (<img  key={res.id} src={res.url}/>))}
                </div>
            </div>
        )

    }else{

        return(
            <div className="publications-container">
                <div className="publication-img">
                    <span>Carregando..</span>
                </div>
            </div>
        )
    }

}

export default Publications