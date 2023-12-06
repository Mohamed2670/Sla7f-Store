const cart = []

const handleCart = (state=cart, action) =>{
    const product = action.payload
    switch(action.type){
        case "ADDITEM":
            // Check if product already in cart
            var exist = state.find((item) => item.id === product.id)
            if(exist){
                // Increase the quantity
                return state.map((item)=>item.id ===product.id?{...item, qty: item.qty+1}:item)
            }
            else{
                return [...state, {...product, qty:1}]
            }
            break;
        case "DELITEM":
            var exist = state.find((item) => item.id === product.id)
            if(exist.qty === 1){
                return state.filter((item)=>item.id!==exist.id)
            }
            else{
                return state.map((item)=> item.id===product.id?{...item, qty:item.qty-1}:item)
            }
            break;

        default:
            return state
            break;
    }
}

export default handleCart