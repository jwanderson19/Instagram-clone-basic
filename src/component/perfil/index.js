import React from 'react'
import perfilPicture from '../../img/perfil.jpg'
import './style.css'

const Perfil = ()=>{

    const user = {
        userNome: "JWanderson19",
        followers: 2,
        following: 5,
        fullName: "Wanderon soares",
        publications: [
            { id: 1, img: "imagem", comments : ["Comentario 1", "Comentario2","Comentario3"]}
        ],
        bio: "lorem aksndpln asdmnlm nakosd basdnkn oibsnad kmnaks dnkn noaskdmk oibhansd",
        storye : [
            { name : "Hitory" , img : 'img'},
            { name : "festa" , img : 'img'},
            { name : "passeio" , img : 'img'}
        ]
    }

    return(
        <section>
            <div className="perfil-container">
                <div className="perfil-pic">
                    <img src={perfilPicture}  alt="Perfil"/>
                </div>
                <div className="perfil-info">
                    <ul>
                        <li id="nick">{user.userNome}</li>
                        <li><a id="btn-edit" href="#" type="buttom"><strong>Editar perfil</strong></a></li>
                        <li><a  href="#"><i className="fas fa-dharmachakra" ></i></a></li>
                        <li><strong>{user.publications.length}</strong> Publicações</li>
                        <li><strong>{user.followers}</strong> Seguidore</li>
                        <li>A seguir <strong>{user.following}</strong></li>
                        <li><strong>{user.fullName}</strong></li>
                        <li><p>{user.bio}</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Perfil