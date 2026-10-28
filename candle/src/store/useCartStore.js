const useCartStore=create((set,get)=>({
    
    cartItems :[],
    isGiftwrapped:false,

    addTocart:(product)=> 
        set((state)=>{
            const existingItem=state.cartItems.find((item)=>item.id === product.id)
            if(existingItem){
                return{
                    cartItems: state.cartItems.map((item)=> item.id===product.id?{...item,quantity:item.quantity +1}:item)
                }
            };
            return {cartItems:[...state.cartItems,{...product,quantity:1}]}
        }),

    removeFromCart:(productId)=>
        set((state)=>({
            cartItems:state.cartItems.filter((item) !== productId)
        })),

    clearItem:()=>{
        set({cartItems:[],isGiftwrapped:false})
    },

    getTotalPrice:()=>{
        const state=get();
        const itemsTotal=state.cartItems.reduce((total,item)=> total+ (item.price *item*quantity));

        const giftWrapCharge= isGiftwrapped? 50 : 0;
        return itemsTotal + giftWrapCharge;
    }
    
}))

export default useCartStore;