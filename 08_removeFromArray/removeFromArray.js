const removeFromArray = function(list, ...args) {
let newArray = [];
list.forEach((item) =>  {
    if(!args.includes(item)){
        newArray.push(item)
    }
});
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
