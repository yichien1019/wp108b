const Shop = {
    name: '博士命理',
    address: '苗栗縣頭份市銀河三街20號',
    tel: '037-683605',
    items: {'八字論命': 2000,'姓名學': 2000,'測事': 1000 ,'擇日': 2000,'財運圖': 3600,},
    //addons: {},
    orderCount: 0,
  }
  
  Shop.html = `
  <div>
    <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  </div>
  `
  
  Shop.start = function () {
    Shop.init()
    Shop.name = localStorage.getItem('Shop.name') || Shop.name
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Ui.id('menuShopName').innerHTML = Shop.name
    const itemsJson = localStorage.getItem('Shop.items')
    //const addonsJson = localStorage.getItem('shop.addons')
    if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
    //if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
    Ui.show(Shop.html)
  }
  
  Shop.init = function () {
    Shop.orderCount = localStorage.getItem('Pos.Order.count')
    if (Shop.orderCount == null) {
      Shop.orderCount = 0
      localStorage.setItem('Pos.Order.count', Shop.orderCount)
    }
  }
  
  Shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
    localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
  }
  
  Shop.saveOrder = function (Order) {
    localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
  }
  
  Shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('Pos.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }