import React from "react";
import {connect} from "react-redux"
import{bindActionCreators} from "redux"
import * as CarrinhoAction from "../../store/actions/course"
import { Button } from 'reactstrap';
import { ButtonToggle } from "reactstrap";

const Feed=({roupas, adicionarCarrinho}) =>{
    return(
        <section className="container">
            <h1>KAGES</h1>          
            {roupas.map(item=>(
                <div key={item.id}>
                   <p></p> <ButtonToggle color="danger" onClick={() => adicionarCarrinho(item)}>{item.nome}</ButtonToggle>
                </div>               
            ))}
            
        </section>
    );
};


const mapStateToProps = state => ({
    roupas: state.roupas.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (Feed);