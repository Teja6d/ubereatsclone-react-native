let defaultState = {
    selectedItems  : {items:[],restaurantName:''}
}

let cartReducer = (state = defaultState,action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
        //console.log("called")
        let newState = {...state};
        if(action.payload.checkboxValue){
            newState.selectedItems = {
                items:[...newState.selectedItems.items,action.payload],
                restaurantName:action.payload.restaurantName,
                //checkboxValue:action.payload.checkboxValue 
            };
        }
        else{
            console.log('Removed');
            newState.selectedItems={
                items:[...newState.selectedItems.items.filter((item)=> 
                    item.title != action.payload.title),
                ],
                restaurantName:action.payload.restaurantName
            }
        }
        console.log(newState);
        return newState;
    }
        case "DELETE_TO_CART":{
            let newState = {...state};
            newState.selectedItems ={
                items:[...newState.selectedItems.items,action.payload],
                restaurantName:action.payload.restaurantName
            }
        }
        default:
            return state;
    }
};

export default cartReducer;