

function bullshitTalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  taskSelect = task[options.target]
  return randomSelectArray(taskSelect) + randomSelectArray(phrase)

}

function randomSelectArray(array) {
  const randomindex = Math.floor(Math.random() * array.length)
  return array[randomindex]
}


//export 
module.exports = bullshitTalk