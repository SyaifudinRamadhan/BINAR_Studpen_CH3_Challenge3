function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // ============ Metode looping dengan for each + arrow function + ternary operator if - else =================
  cars.forEach(item => item.available ? result.push(item) : '');

  // ================ Metode for looping konvensional ==================================
  // for (let index = 0; index < cars.length; index++) {
  //   // ----- If statement konvensional -----------
  //   // if(cars[index].available){
  //   //  result.push(cars[index])
  //   // }
    
  //   //------ ternary operator if else -----------
  //   cars[index].available ? result.push(cars[index]) : ''
  // }

  // NB : Cara praktis dengan filter() dilarang digunakan oleh pembuat soal
  console.table(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
