function sortClick(){
    var list = gridValues.sort(function(a,b){
        return a-b;
    });
     this.init(list);
}

// Array.prototype.sort=function(a,b){
//     return a-b;
// }

const gridValues = [{
      id: 1,
      color: "#6F98A8",
    },
    {
      id: 2,
      color: "#2B8EAD",
    },
    {
      id: 3,
      color: "#2F454E",
    },
    {
      id: 4,
      color: "#2B8EAD",
    },
    {
      id: 5,
      color: "#2F454E",
    },
    {
      id: 6,
      color: "#BFBFBF",
    },
    {
      id: 7,
      color: "#BFBFBF",
    },
    {
      id: 8,
      color: "#6F98A8",
    },
    {
      id: 9,
      color: "#2F454E",
    },
  ];
  
function init(gridItems){
    let items = gridItems ? gridItems : gridValues;
    var app = document.querySelector("#grid");
    app.innerHTML =getListItems(items);
}

const getListItems= (items)=>{
    let gridItems="";
    gridItems = items.map(function (item) {
        return `<li class='gridItem' style=background-color:${item.color};border-color:${item.color}> ${item.id}</li>`;
      }).join('')
    gridItems="<ul class='listGrid'>" + gridItems + "</ul>";
    return gridItems;
}

function shuffleClick() {
    const sourceArray = [...gridValues];
    
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
      this.init(sourceArray);
}