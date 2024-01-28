// Hàm kiểm tra độ tuổi của chó
const checkDogs = function(dogsJulia, dogsKate) {
    // Xóa tuổi mèo trong dữ liệu của Julia
    const juliaCorrected = dogsJulia.slice();
    juliaCorrected.splice(0, 1);
    juliaCorrected.splice(-2);
  
    // Tạo một mảng mới chứa dữ liệu của cả Julia và Kate
    const dogs = [...juliaCorrected, ...dogsKate];
  
    // Kiểm tra xem mỗi chó là trưởng thành hay chó con
    dogs.forEach((dog, i) => {
      const message = dog >= 3 ? `Chó số ${i + 1} là người lớn, ${dog * 4} tuổi` : `Chó số ${i + 1} là chó con, ${dog * 2} tuổi`;
      console.log(message);
    });
  };
  
  // Hàm tính tuổi trung bình của các chó theo tuổi của con người
  const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    const adultDogs = humanAges.filter(age => age >= 18);
    const average = adultDogs.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
  };
  
  // Thử nghiệm với dữ liệu mẫu
  const juliaDogs = [3, 5, 2, 12, 7];
  const kateDogs = [4, 1, 15, 8, 3];
  
  checkDogs(juliaDogs, kateDogs);
  console.log(calcAverageHumanAge(juliaDogs));
  console.log(calcAverageHumanAge(kateDogs));
  