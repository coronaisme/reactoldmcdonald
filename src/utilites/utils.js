
export const getAnimalsForPen = (animals, pen) => {
    let newArr = []

    pen.animals.forEach(animalId => {
        let foundAnimal = animals.find(animal => {
          return animal.id === animalId
        })
        //using curly brackets because if we spread into found animal 
        //and push we are just pushing k/v pairs not an obj

        newArr.push({ ...foundAnimal })
    })
    return newArr
}
