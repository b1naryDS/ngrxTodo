export const initialState = {
    loaded: false,
    loading: false,
    data: [ {label: 'eat pizza',complete: false} ]
};


export function reducer(
    state = initialState, 
    action: {type: string, payload: any})
{
    switch(action.type){
        case 'ADD_TODO':{
            // add the todo
            const todo = action.payload;
            const data = [...state.data, todo]
            return {
                ...state,
                data: data
            };
        }
    }
    return state;
}