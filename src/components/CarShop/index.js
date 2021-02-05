import React from "react";
import {connect} from "react-redux"

const CarShop=({roupa}) =>{
    return(
        <div>
            <h1>Informações</h1>
            <strong>{roupa.descricao} </strong>
        </div>
    );
};


export default connect((state) =>({
    roupa: state.roupas.roupa
})) (CarShop);