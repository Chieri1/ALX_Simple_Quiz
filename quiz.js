// Define the checkAnswer function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswer) {
        // Get the value of the selected answer
        const selectedAnswer = userAnswer.value;

        // Compare the user's answer with the correct answer
        if (selectedAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Inform the user that they need to select an answer
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

