function checkAnswers() {
    // Jawaban benar
    const answers = {
        q1: "b",
        q2: "b",
        q3: "b"
    };

    // Mengambil jawaban pengguna
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
        q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null,
        q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : null
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    // Menghitung skor
    for (let question in answers) {
        if (answers[question] === userAnswers[question]) {
            score++;
        }
    }

    // Menampilkan hasil
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Skor Kamu: ${score} dari ${totalQuestions}`;

    if (score === totalQuestions) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML += "<br>Selamat! Kamu menjawab semua dengan benar!";
    } else if (score > 0) {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML += "<br>Bagus, tetapi masih bisa lebih baik.";
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML += "<br>Coba lagi!";
    }
}
