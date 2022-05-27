const setArrayOptionsShuffled = (array: any, setFunction: Function) => {
    for (let i = 0; i < array.length; i++) {
      const allPossibleOptions = array[i].incorrect_answers;
      allPossibleOptions.push(array[i].correct_answer);
      allPossibleOptions.sort(() => Math.random() - 0.5)
      setFunction((prevState: any) => [...prevState, allPossibleOptions]);
    }
  };
export default setArrayOptionsShuffled;
