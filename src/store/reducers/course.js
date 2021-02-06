const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Simbolo",
      lessons: [
        { id: 1, title: "Vila Oculta da Folha ", img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Simbolo_konoha.svg" },
        { id: 2, title: "Vila Oculta da Areia ", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Sunagakure_Symbol.svg"},
        { id: 2, title: "Vila Oculta da Névoa ", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Kirigakure_Symbol.svg" },
        { id: 2, title: "Vila Oculta da Nuvem ", img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Kumogakure_Pays_de_la_Foudre.svg" },
        { id: 2, title: "Vila Oculta da Pedra ", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Iwagakure_Pays_de_la_Terre.svg"},
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
