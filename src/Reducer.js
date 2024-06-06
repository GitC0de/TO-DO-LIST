export const initialState = {
    list: [],
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {
               ...state,
                list: [...state.list, action.item],
            };

        case 'REMOVE_FROM_LIST':
            const removeIndex = state.list.findIndex(
                (ListItem) => ListItem.title === action.title
            );

            let removeNewList = [...state.list];
            
            removeNewList.splice(removeIndex, 1);

            return {
                ...state,
                 list: removeNewList
             };
            

        case 'REVISE_LIST':
            const reviseIndex = state.list.findIndex(
                (ListItem) => ListItem.title === action.beforeTitle
            );  

            let reviseNewList = [...state.list];

            console.log(action.beforeTitle);

            reviseNewList.splice(reviseIndex, 1, action.item);
            
            return {
                ...state,
                 list: reviseNewList
             };    


        
            default: return state;
        }
        
    }

export default reducer;