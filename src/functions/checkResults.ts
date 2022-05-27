import { Console } from "console";

const checkResults = (
  answers: any,
  correctAnswers: any[]
) => {
  let results = 0;
  const answersNotOrdered: any = Object.entries({ ...answers });
  answersNotOrdered.sort();
  const arrayToVerify = [];
  for (let i = 0; i < correctAnswers.length; i++) {
    answersNotOrdered[i]!==undefined? arrayToVerify.push(answersNotOrdered[i][1]):arrayToVerify.push({});
  } 
  for (let i = 0; i < correctAnswers.length; i++) 
   if(arrayToVerify[i] === correctAnswers[i]) {results += 0.75}
  return results
};

export default checkResults;
