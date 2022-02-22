const initialState = "";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ENG":
            return "Hello world!";
        case "RU":
            return "Привет мир!";
        default:
            return state;
    }
};