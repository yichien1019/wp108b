const menu = {}

menu.html = `
<table id="t01">
  <tr>
    <th>服務項目</th>
    <th>價錢</th> 
  </tr>
  <tr>
    <td>八字論命</td>
    <td>姓名學</td> 
    <td>測事</td>
    <td>擇日</td>
    <td>財運圖</td>
  </tr>
  <tr>
    <td>2000</td>
    <td>2000</td> 
    <td>1000</td>
    <td>2000</td>
    <td>3600</td>
  </tr>
</table>
<div>
<button class="big" onclick="POS.start()">新增訂單</button><br/><br/>
</div>
  `

  menu.start = function () {
    Ui.show(menu.html)
  }