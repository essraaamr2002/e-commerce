
import { All_Cat_Reducer } from './type'
const initial={loading: false,
                category:[]}
const AllCatReducers = (state=initial,action) => {
                switch(action.type) {
                case All_Cat_Reducer:
                    return{
                        ...state,
                        category:action.payload,
                        loading:false
                    }
                    default:return state
                }
            
}


export default AllCatReducers
