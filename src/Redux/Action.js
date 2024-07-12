import { Add_to_Cart, Add_to_Wishlist, Remove_From_Cart, Remove_From_Wishlist } from "./Constant"

export function addToCart(item) {
    return {
        type: Add_to_Cart,
        data: item
    }
}
export function removefromcart(item) {
    return {
        type: Remove_From_Cart,
        data: item
    }
}
export function addtowishlist(item) {
    return {
        type: Add_to_Wishlist,
        data: item
    }
}
export function removefromwishlist(item) {
    return {
        type: Remove_From_Wishlist,
        data: item
    }
}