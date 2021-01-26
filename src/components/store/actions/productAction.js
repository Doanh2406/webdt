import {firestore} from '../../../firebase'

export const loadProducts = (onSuccess, onError) =>{
    return (dispatch, getState)=>{
        firestore
        .collection("CATEGORIES")
        .collection('acce')
        .orderBy('index')
        .get()
        .then((querySnapshot)=>{
            let pagedata = [];
            if(!querySnapshot.empty){
                querySnapshot.forEach((doc)=>{
                   pagedata.push({id : doc.id,...doc.data()});
                });
            }
            dispatch({type:"LOAD_PRODUCTS", payload: pagedata});
            onSuccess();
        }).catch((error) =>{
           console.log(error);
             onError();
        });
    };
}