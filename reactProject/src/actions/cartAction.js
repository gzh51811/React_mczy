//  编写常量，用于规范type
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_TO_CART = 'REMOVE_TO_CART'
export const CHANGE_QTY = 'CHANGE_QTY'

//添加商品
export function add(goods){
    // console.log(goods)
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

//删除商品
export function removecart(id){
    // console.log(id)
    // console.log(goods)
    return {
        type:REMOVE_TO_CART,
        payload:id
    }
}
//添加商品数量
export function changeqty(id,qty){
    return {
        type:CHANGE_QTY,
        payload:{id,qty}
    }
}


export default {add,removecart,changeqty}