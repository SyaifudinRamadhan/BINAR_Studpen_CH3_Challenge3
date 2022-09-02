function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  

  // Clone resultay untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  
  console.log(result);
  // Tulis code-mu disini
  // ================== Menggunakan Algoritma BUbble Sort ==========================
  // result.forEach((value, i) => {
  //   for (let j = 0; j < result.length-i-1; j++) {
  //     if(result[j].year > result[j+1].year){
  //       let temp = result[j];
  //       result[j] = result[j + 1];
  //       result[j+1] = temp;
  //     }
  //   }
  // })

  // =================== Menggunakan Algoritma Isertion Sort =======================
  result.forEach((val, i) => {
		let tempKey = result[i];
		let j = i - 1;
		while (j >= 0 && result[j].year > tempKey.year)
		{
			result[j + 1] = result[j];
			j = j - 1;
		}
		result[j + 1] = tempKey;
	});
	

  console.table(result);

  // Rubah code ini dengan resultay hasil sorting secara ascending
  return result;
}
