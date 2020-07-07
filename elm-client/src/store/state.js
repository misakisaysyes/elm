export default {
  test: 1,
  tool: {
    showPopUp: false,
    foodId: 0,
    choose: {},
    totalCount: 0,
    totalPrice: 0
  },
  userInfo: {
    avatar: '',
    // avatar: 'https://pic1.zhimg.com/80/v2-09976e6bbc36c03ff19805e242bcaf58_720w.jpg',
    order: []
  },
  shopOrder: [],
  shopInfo: {
    // shopOne: {
    //   name: 'shopOne',
    //   src: 'static/FoodShops/shop1.PNG',
    //   rate: '5.0',
    //   sellCount: '100',
    //   startFee: 10,
    //   sendFee: 1.5,
    //   time: 30,
    //   dist: 3,
    //   stars: 3,
    //   popUp: false,
    //   commentTag: ['“很好，辣度刚好”', '“大写的好吃”'],
    //   vipTag: [
    //     {k: 'shopvip', v: '￥6 无门槛'},
    //     {k: 'shopvip', v: '领取'}
    //   ],
    //   tags: [
    //     {k: 'firstorder', v: '首单减', des: '满60减30, 首单减, 满减上不封顶'},
    //     {k: 'discount', v: '21减17', des: '满59减29, 首单减, 满减上不封顶'},
    //     {k: 'discount', v: '30减24', des: '满60减30, 首单减, 满减上不封顶'},
    //     {k: 'allowance', v: '津贴1元', des: '满60减30, 首单减, 满减上不封顶'},
    //     {k: 'member', v: '会员减6元', des: '满6减3, 首单减, 满减上不封顶'},
    //     {k: 'discount', v: '满27减12', des: '满60减3, 首单减, 满减上不封顶'},
    //     {k: 'attr', v: '可自取', des: '满60减30, 首单减, 满减上不封顶'}
    //   ],
    //   categories: [
    //     '买过',
    //     '热销',
    //     '优惠',
    //     '收藏有惊喜',
    //     '套餐',
    //     '酷夏搭配',
    //     '荤菜',
    //     '素菜',
    //     '调料',
    //     '特色',
    //     '火锅米线',
    //     '滋养甜粥'
    //   ],
    //   foods: [
    //     {
    //       id: 0,
    //       name: 'foodOne',
    //       des: '主要原料：鸡肉，水，米饭。',
    //       sellcount: '9',
    //       rating: '90%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 10,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 1,
    //       name: 'foodTwo',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '10',
    //       rating: '88%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 12,
    //       options: {
    //         '辣度': [
    //           {text: '不辣', choose: false},
    //           {text: '微辣', choose: false},
    //           {text: '中辣', choose: false},
    //           {text: '重辣', choose: false}],
    //         '调料': [
    //           {text: '不要葱', choose: false},
    //           {text: '不要蒜', choose: false}],
    //         '饮料': [
    //           {text: '例汤', choose: false},
    //           {text: '果汁', choose: false}]
    //       }
    //     },
    //     {
    //       id: 2,
    //       name: 'foodThree',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '12',
    //       rating: '79%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 13,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 3,
    //       name: 'foodFour',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 4,
    //       name: 'foodFive',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 5,
    //       name: 'foodSix',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 6,
    //       name: 'foodSeven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 7,
    //       name: 'foodEight',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 8,
    //       name: 'foodNine',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 9,
    //       name: 'foodTen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 10,
    //       name: 'foodEleven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 11,
    //       name: 'foodTwelve',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 12,
    //       name: 'foodThird',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 13,
    //       name: 'foodFourteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 14,
    //       name: 'foodFifteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 15,
    //       name: 'foodSixteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     }
    //   ],
    //   tool: {
    //     stars: 1,
    //     popUp: false,
    //     dislike: false,
    //     hideTag: true
    //   }
    // },
    // shopTwo: {
    //   name: 'shopTwo',
    //   src: 'static/FoodShops/shop2.PNG',
    //   rate: '4.5',
    //   sellCount: '23',
    //   startFee: 15,
    //   sendFee: 1.5,
    //   time: 30,
    //   dist: 2,
    //   stars: 3,
    //   popUp: false,
    //   commentTag: ['“很好，辣度刚好”', '“大写的好吃”'],
    //   vipTag: [
    //     {k: 'shopvip', v: '￥6 无门槛'},
    //     {k: 'shopvip', v: '领取'}
    //   ],
    //   tags: [
    //     {k: 'firstorder', v: '首单减', des: '满60减30'},
    //     {k: 'discount', v: '21减17', des: '满59减29'},
    //     {k: 'discount', v: '30减24', des: '满60减30'},
    //     {k: 'allowance', v: '津贴1元', des: '满60减30'},
    //     {k: 'member', v: '会员减6元', des: '满6减3'},
    //     {k: 'discount', v: '赠', des: '满60减3'},
    //     {k: 'discount', v: '满27减12', des: '满60减3'},
    //     {k: 'attr', v: '可自取', des: '满60减30'},
    //     {k: 'attr', v: '极速退', des: '满90减30'}
    //   ],
    //   categories: [
    //     '买过',
    //     '热销',
    //     '优惠',
    //     '收藏有惊喜',
    //     '套餐',
    //     '酷夏搭配',
    //     '荤菜',
    //     '素菜',
    //     '调料',
    //     '特色',
    //     '火锅米线',
    //     '滋养甜粥'
    //   ],
    //   foods: [
    //     {
    //       id: 0,
    //       name: 'foodOne',
    //       des: '主要原料：鸡肉，水，米饭。',
    //       sellcount: '9',
    //       rating: '90%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 10,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 1,
    //       name: 'foodTwo',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '10',
    //       rating: '88%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 12,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 2,
    //       name: 'foodThree',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '12',
    //       rating: '79%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 13,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 3,
    //       name: 'foodFour',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 4,
    //       name: 'foodFive',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 5,
    //       name: 'foodSix',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 6,
    //       name: 'foodSeven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 7,
    //       name: 'foodEight',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 8,
    //       name: 'foodNine',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 9,
    //       name: 'foodTen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 10,
    //       name: 'foodEleven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 11,
    //       name: 'foodTwelve',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 12,
    //       name: 'foodThird',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 13,
    //       name: 'foodFourteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 14,
    //       name: 'foodFifteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 15,
    //       name: 'foodSixteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     }
    //   ],
    //   tool: {
    //     stars: 1,
    //     popUp: false,
    //     dislike: false,
    //     hideTag: true
    //   }
    // },
    // shopThree: {
    //   name: 'shopThree',
    //   src: 'static/FoodShops/shop3.PNG',
    //   rate: '4.5',
    //   sellCount: '23',
    //   startFee: 15,
    //   sendFee: 1.5,
    //   time: 30,
    //   dist: 2,
    //   stars: 3,
    //   popUp: false,
    //   commentTag: ['“很好，辣度刚好”', '“大写的好吃”'],
    //   vipTag: [
    //     {k: 'shopvip', v: '￥6 无门槛'},
    //     {k: 'shopvip', v: '领取'}
    //   ],
    //   tags: [
    //     {k: 'firstorder', v: '首单减', des: '满60减30'},
    //     {k: 'discount', v: '21减17', des: '满59减29'},
    //     {k: 'discount', v: '30减24', des: '满60减30'},
    //     {k: 'allowance', v: '津贴1元', des: '满60减30'},
    //     {k: 'member', v: '会员减6元', des: '满6减3'},
    //     {k: 'discount', v: '赠', des: '满60减3'},
    //     {k: 'discount', v: '满27减12', des: '满60减3'},
    //     {k: 'attr', v: '可自取', des: '满60减30'},
    //     {k: 'attr', v: '极速退', des: '满90减30'}
    //   ],
    //   categories: [
    //     '买过',
    //     '热销',
    //     '优惠',
    //     '收藏有惊喜',
    //     '套餐',
    //     '酷夏搭配',
    //     '荤菜',
    //     '素菜',
    //     '调料',
    //     '特色',
    //     '火锅米线',
    //     '滋养甜粥'
    //   ],
    //   foods: [
    //     {
    //       id: 0,
    //       name: 'foodOne',
    //       des: '主要原料：鸡肉，水，米饭。',
    //       sellcount: '9',
    //       rating: '90%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 10,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 1,
    //       name: 'foodTwo',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '10',
    //       rating: '88%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 12,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 2,
    //       name: 'foodThree',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '12',
    //       rating: '79%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 13,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 3,
    //       name: 'foodFour',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 4,
    //       name: 'foodFive',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 5,
    //       name: 'foodSix',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 6,
    //       name: 'foodSeven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 7,
    //       name: 'foodEight',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 8,
    //       name: 'foodNine',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 9,
    //       name: 'foodTen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 10,
    //       name: 'foodEleven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 11,
    //       name: 'foodTwelve',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 12,
    //       name: 'foodThird',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 13,
    //       name: 'foodFourteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 14,
    //       name: 'foodFifteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 15,
    //       name: 'foodSixteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     }
    //   ],
    //   tool: {
    //     stars: 1,
    //     popUp: false,
    //     dislike: false,
    //     hideTag: true
    //   }
    // },
    // shopFour: {
    //   name: 'shopFour',
    //   src: 'static/FoodShops/shop4.PNG',
    //   rate: '4.5',
    //   sellCount: '23',
    //   startFee: 15,
    //   sendFee: 1.5,
    //   time: 30,
    //   dist: 2,
    //   stars: 3,
    //   popUp: false,
    //   commentTag: ['“很好，辣度刚好”', '“大写的好吃”'],
    //   vipTag: [
    //     {k: 'shopvip', v: '￥6 无门槛'},
    //     {k: 'shopvip', v: '领取'}
    //   ],
    //   tags: [
    //     {k: 'firstorder', v: '首单减', des: '满60减30'},
    //     {k: 'discount', v: '21减17', des: '满59减29'},
    //     {k: 'discount', v: '30减24', des: '满60减30'},
    //     {k: 'allowance', v: '津贴1元', des: '满60减30'},
    //     {k: 'member', v: '会员减6元', des: '满6减3'},
    //     {k: 'discount', v: '赠', des: '满60减3'},
    //     {k: 'discount', v: '满27减12', des: '满60减3'},
    //     {k: 'attr', v: '可自取', des: '满60减30'},
    //     {k: 'attr', v: '极速退', des: '满90减30'}
    //   ],
    //   categories: [
    //     '买过',
    //     '热销',
    //     '优惠',
    //     '收藏有惊喜',
    //     '套餐',
    //     '酷夏搭配',
    //     '荤菜',
    //     '素菜',
    //     '调料',
    //     '特色',
    //     '火锅米线',
    //     '滋养甜粥'
    //   ],
    //   foods: [
    //     {
    //       id: 0,
    //       name: 'foodOne',
    //       des: '主要原料：鸡肉，水，米饭。',
    //       sellcount: '9',
    //       rating: '90%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 10,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 1,
    //       name: 'foodTwo',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '10',
    //       rating: '88%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 12,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 2,
    //       name: 'foodThree',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '12',
    //       rating: '79%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 13,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 3,
    //       name: 'foodFour',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 4,
    //       name: 'foodFive',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 5,
    //       name: 'foodSix',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 6,
    //       name: 'foodSeven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 7,
    //       name: 'foodEight',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 8,
    //       name: 'foodNine',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 0,
    //       img: 'static/FoodShops/shop1.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 9,
    //       name: 'foodTen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 10,
    //       name: 'foodEleven',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 11,
    //       name: 'foodTwelve',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 12,
    //       name: 'foodThird',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 13,
    //       name: 'foodFourteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 14,
    //       name: 'foodFifteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     },
    //     {
    //       id: 15,
    //       name: 'foodSixteen',
    //       des: '主要原料：辣椒，牛肉，米饭',
    //       sellcount: '20',
    //       rating: '82%',
    //       cid: 1,
    //       img: 'static/FoodShops/shop2.PNG',
    //       price: 15,
    //       options: [
    //         {
    //           type: '辣度',
    //           choose: -1,
    //           opt: ['不辣', '微辣', '中辣', '重辣']
    //         },
    //         {
    //           type: '调料',
    //           choose: -1,
    //           opt: ['不要蒜', '不要葱']
    //         },
    //         {
    //           type: '饮料',
    //           choose: -1,
    //           opt: ['果汁', '例汤']
    //         }
    //       ]
    //     }
    //   ],
    //   tool: {
    //     stars: 1,
    //     popUp: false,
    //     dislike: false,
    //     hideTag: true
    //   }
    // }
  }
}
