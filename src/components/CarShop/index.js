import React from "react";
import {connect} from "react-redux"

const CarShop=({roupa}) =>{
    return(
        <div className="container">
            <h1 className="text-white">Informações</h1>
            <p className="text-white">{roupa.descricao} </p>
        </div>
    );
};


export default connect((state) =>({
    roupa: state.roupas.roupa
})) (CarShop);