const removeFromArray = function(list, target) {
let targetIndex = list.indexOf(target);    
if (target !== -1){
let newArray = list.splice(targetIndex, 1);
return newArray;
}   
return list;
};

// Do not edit below this line
module.exports = removeFromArray;
