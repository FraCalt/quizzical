const correctAnswersArray = (questionsObject: any) => {
  const finalArray: any[] = [];
  questionsObject.map((item: any) => {
    finalArray.push(item.correct_answer);
  });
  return finalArray;
};
export default correctAnswersArray;
