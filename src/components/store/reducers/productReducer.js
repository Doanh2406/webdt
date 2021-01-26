const intialstate = null;

const  productReducer = (state= intialstate, action) =>{
    switch(action.type){
        case "LOAD_PRODUCTS":
            state= action.payload;
            break;
        default:
            break;
    }
    return state;
}
export default productReducer;

