class Town {
        constructor(name,buildYear) {
        this.name = name;
        this.buildYear = buildYear;
}
}
class Park extends Town{
    constructor (name,buildYear,area,numberOfTrees) {
        super(name,buildYear);
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }
    calculateTreeDensity() {
        const treeDensity = this.numberOfTrees/this.area;
            console.log(`Park ${this.name} has a tree density
            ${treeDensity} per square km`);
    }
    

}

class Street extends Town{
    constructor(name,buildYear,streetLength,size=3) {
        super(name,buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    streetType() {
        const strType = new Map();
        strType.set(1,'tiny');
        strType.set(2,'small');
        strType.set(3,'normal');
        strType.set(4,'big');
        strType.set(5,'huge');
        console.log(`${this.name} is ${strType.get(this.size)}`)
    }
}

const arrPark = [new Park("Angringon",1990,300,60),
                 new Park("Jarry",1975,400,30),
                 new Park("Rapid",1985,200,50)]

console.log(arrPark);

const arrStreet = [new Street("Franko",1950,2.5,1),
                   new Street("Dumas",1955,3.5),
                   new Street("Trinitaites",1975,3,4),
                   new Street("Hurteau",1970,2)
]

function calculateTotal(arr) {
      let sum = 0;
      arr.forEach(el=> 
          sum+=el);
          return [sum, sum/arr.length];
      }
      
function reportParks(p) {
    console.log("--PARK REPORT--")
    // Tree density
    p.forEach(el => el.calculateTreeDensity()     
    );
    // Average age
    const ages = p.map(el=>2020-el.buildYear);
    const[totalAge,avgAge] = calculateTotal(ages); 
    
    console.log(`All ${p.length} parks have a total age
                 ${totalAge} years and an average age ${avgAge} years. `);

    // The park with more than 300 trees 
    p.forEach(el => {
        if (el.numberOfTrees>=45){
            console.log(`${el.name} has more than 45 trees`)};
        }); 
}

function reportStreets(s) {
    console.log("--STREET REPORT--")
   //   Total and average
        const strLength = s.map(el =>el.streetLength);
        const [totLength,avgLength] = calculateTotal(strLength);
        console.log(`Total length of town's streets is ${totLength},
         average length of all streets is ${avgLength}`);
    // Size classification 
        s.forEach(el=> el.streetType()); 
}

reportParks(arrPark);
reportStreets(arrStreet);
