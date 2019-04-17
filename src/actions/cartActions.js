export const ADD_TO_CART = 'ADD_TO_CART'   //添加到购物车的action
export const UPDATE_CART = 'UPDATE_CART'   //更新购物车的action
export const DELETE_FROM_CART = 'DELETE_FROM_CART'      //删除购物车项的action

export function addToCart(product, quantity, unitCost) {       //创建Action 添加至购物车
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function updateCart(product, quantity, unitCost) {
    return {
        type: UPDATE_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function deleteFromCart(product) {
    return {
        type: DELETE_FROM_CART,
        payload: {
            product
        }
    }
}

