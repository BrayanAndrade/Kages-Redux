import React from "react";
import {connect} from "react-redux"
import{bindActionCreators} from "redux"
import * as CarrinhoAction from "../../store/actions/course"

const Feed=({roupas, adicionarCarrinho}) =>{
    return(
        <section>
            <h1>KAGES</h1>          
            {roupas.map(item=>(
                <div key={item.id}>
                    <button onClick={() => adicionarCarrinho(item)}>{item.nome}</button>
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