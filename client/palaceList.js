const PalaceListAPI = {
  palaces: [
    { 
      id: 1, 
      name: "Beach",
      description: "Presidents",
      image: "beachHouse.jpeg",
    },
    { id: 2,
      name: "Office",
      description: "14 Superfoods",
      image: "office1.jpeg" 
    },
    { id: 3,
      name: "Childhood Home",
      description: "Family Birthdays",
      image: "bedroom1.jpeg" },
    { id: 4, 
      name: "Codesmith", 
      description: "Cohort 18",
      image: "bedroom1.jpeg" }
    
  ],
  all: function(){
    console.log('in "all" - this.palaces: ', this.palaces)
    return this.palaces;
  },
  get: function(name){
    console.log('in "get" - name: ', name)
    const isPalace = (p) => {
      console.log('in "get isPalace" - p.name: ', p.name)
      p.name === name
    }
    return this.palaces.find(isPalace)
  }
}
export default PalaceListAPI;
