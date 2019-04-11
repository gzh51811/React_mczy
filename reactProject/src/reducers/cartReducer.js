import {ADD_TO_CART,REMOVE_TO_CART,CHANGE_QTY} from '../actions/cartAction'

// console.log(props)
// console.log(ADD_TO_CART)
let defaultState={
    goods:[
        {
            "id" : "1",
            "username" : "欧普OPPLE 雅莘风扇灯MT-HY03T-103",
            "color" : "白色  HY03T-103",
            "cima" : "120x120x407(mm)",
            "price" : 2,
            "num" : 2.0
    },
    {
            "id" : "2",
            "username" : " 雅莘风扇灯MT-HY03T-103",
            "color" : "白色  HY03T-103",
            "cima" : "120x120x407(mm)",
            "price" : "9/件",
            "num" : 1.0
}
]
};
let reducer=(state=defaultState,{type,payload})=>{
    switch(type){
        case ADD_TO_CART:
        return {
            ...state,
            goods:[...state.goods,payload]
        }

        case REMOVE_TO_CART:
        return {
            ...state,
            goods:state.goods.filter(item=>item.goods_id!=payload)
        }
          // 修改购物车商品数量
          case CHANGE_QTY:
        //   console.log(payload)
          return {
              ...state,
              goods:state.goods.map(item=>{
                //   console.log(item.id)
                  if(item.id === payload.id){
                    //   console.log(payload.qty+1)

                      item.num = payload.qty
                      // console.log(item.num)
                  }
                  // console.log(item)
                  return item;
              })
          }
        default:
        return defaultState;

    }
}
export default reducer;