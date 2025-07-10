const findTheOldest = function(name) {
    const sortedPeople = name.toSorted((prev, curr) => getAge(curr)-getAge(prev));
    const oldest = sortedPeople[0];
    return oldest;
};
const getAge = function(name){
    if(!name.yearOfDeath){
        name.yearOfDeath = new Date().getFullYear();
    }
    return name.yearOfDeath - name.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
