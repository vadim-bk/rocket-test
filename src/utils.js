export const getFirstTestPromise = (dataToReturn) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataToReturn) {
        const firstTest = dataToReturn()[0];
        if (firstTest) {
          resolve({ data: firstTest });
        }
      } else {
        reject(new Error('something bad happened'));
      }
    }, 500);
  });

export const getTestByIdPromise = (id, dataToReturn) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataToReturn) {
        const testById = dataToReturn()?.find((test) => test?.id === id);
        if (testById) {
          resolve(testById);
        }
      } else {
        reject(new Error('something bad happened'));
      }
    }, 500);
  });

export const getNextTestPromise = (currentTestId, dataToReturn) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataToReturn) {
        const currentTestIndex = dataToReturn().findIndex(({ id }) => id === currentTestId);
        const currentTest = dataToReturn()[currentTestIndex + 1];
        if (currentTest) {
          resolve(currentTest);
        } else {
          resolve(null);
        }
      } else {
        reject(new Error('something bad happened'));
      }
    }, 500);
  });
