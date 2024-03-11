// Mendapatkan elemen button dan result dari DOM
const button = document.getElementById("calculate-btn");
const result = document.getElementById("result")

// Menambahkan event listener untuk menangani klik pada button
button.addEventListener("click", () => {
    // Mengambil nilai tinggi dan berat badan dari input dan mengubahnya menjadi integer
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    let height_status = false,
        weight_status = false;

    // Validasi input tinggi badan
    if(height === "" || isNaN(height) || (height <= 0)){
        document.getElementById("height-error").innerHTML = "Please provide height"
    }else{
        document.getElementById("height-error").innerHTML = "";
        height_status = true;
    }

    // Validasi input berat badan
    if(weight=== "" || isNaN(weight) || (weight <= 0)){
        document.getElementById("weight-error").innerHTML = "Please provide weight"
    }else{
        document.getElementById("weight-error").innerHTML = "";
        weight_status = true;
    }

    // Jika kedua input valid, hitung dan tampilkan BMI
    if(height_status && weight_status) {
        // Rumus perhitungan BMI
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // Menentukan status berat badan berdasarkan nilai BMI dan menampilkannya
        if (bmi < 18.6) {
            result.innerHTML = "Underweight : " + bmi;    
        }else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = "Normal : " + bmi;
        }else{
            result.innerHTML = "Overweight : " + bmi;
        }
    }else{
        // Jika input tidak valid, kosongkan hasil
        result.innerHTML = "";
    }
});
