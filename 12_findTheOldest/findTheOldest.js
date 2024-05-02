const findTheOldest = function(people) {
    people.sort((first, next) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        if(first["yearOfDeath"] === undefined){
            first["yearOfDeath"] = currentYear;
        };
        if(next["yearOfDeath"] === undefined){
            next["yearOfDeath"] = currentYear;

        };

        const ageOfFirst = first["yearOfDeath"] - first["yearOfBirth"];
        const ageOfNext = next["yearOfDeath"] - next["yearOfBirth"];

        return ageOfFirst < ageOfNext ? 1 : -1;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
