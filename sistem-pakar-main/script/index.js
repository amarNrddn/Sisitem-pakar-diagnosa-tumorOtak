import { questions } from "./data/questions.js";
import { questionItem } from "./components/questionItem.js";
import { diagnose } from "./diagnose.js";

const cfPakar = [0.6, 0.2, 0.6, 0.4, 0.4, 0.2, 0.2, 0.8];
const cfUser = [0, 0, 0, 0, 0, 0, 0, 0];

const questionsContainer = document.querySelector(".questions-container");

questions.forEach((question, index) => {
  questionsContainer.append(questionItem(question, index));
});

const pertanyaan = document.querySelectorAll('input[type="radio"]');

for (const jawab of pertanyaan) {
  jawab.addEventListener("input", () => {
    switch (jawab.name) {
      case "question-0":
        cfUser[0] = parseFloat(jawab.value);
        break;
      case "question-1":
        cfUser[1] = parseFloat(jawab.value);
        break;
      case "question-2":
        cfUser[2] = parseFloat(jawab.value);
        break;
      case "question-3":
        cfUser[3] = parseFloat(jawab.value);
        break;
      case "question-4":
        cfUser[4] = parseFloat(jawab.value);
        break;
      case "question-5":
        cfUser[5] = parseFloat(jawab.value);
        break;
      case "question-6":
        cfUser[6] = parseFloat(jawab.value);
        break;
      case "question-7":
        cfUser[7] = parseFloat(jawab.value);
        break;

      default:
        break;
    }
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  diagnose(cfUser, cfPakar);
});
