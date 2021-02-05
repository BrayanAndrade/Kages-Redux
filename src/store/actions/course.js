export function toggleLesson(module, lesson) {
    return {
      type: "TOGGLE_LESSON",
      module,
      lesson,
    };
  }

  export function adicionarCarrinho(roupas){
    return{
      type: "ADICIONAR_CARRINHO",
      roupas,
    }
  }