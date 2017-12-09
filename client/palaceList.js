const PalaceListAPI = {
  palaces: [
    { id: 1, name: "Beach", image: "beachHouse.jpeg" },
    { id: 2, name: "Office", image: "office1.jpeg" },
    { id: 3, name: "Home", image: "bedroom1.jpeg" }
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
