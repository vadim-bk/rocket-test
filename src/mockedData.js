import { getTestByIdPromise, getFirstTestPromise, getNextTestPromise } from './utils';

const data = () => {
  return [
    {
      id: 1,
      question: 'What is this framework?',
      image: 'https://ru.react.js.org/logo-og.png',
      rightAnswerId: 2,
      answers: [
        { id: 1, text: 'Angular' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Vue' },
      ],
    },

    {
      id: 2,
      question: 'What is this car?',
      image:
        'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2019/April/24/tesla-model-x.jpg',
      rightAnswerId: 1,
      answers: [
        { id: 1, text: 'Tesla' },
        { id: 2, text: 'Audi' },
        { id: 3, text: 'BMW' },
        { id: 4, text: 'Mercedes' },
      ],
    },

    {
      id: 3,
      question: 'Which country is this flag?',
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/usa-flag-poster-template-design-5e65ed643c0147d770861e141ae30ee7_screen.jpg?ts=1587407044',
      rightAnswerId: 4,
      answers: [
        { id: 1, text: 'Ukraine' },
        { id: 2, text: 'Great Britain' },
        { id: 3, text: 'Germany' },
        { id: 4, text: 'USA' },
      ],
    },
  ];
};

const TestService = {
  async getTestById(id) {
    return getTestByIdPromise(id, data);
  },
  async getFirstTest() {
    return getFirstTestPromise(data);
  },
  async getNextTest(currentTestId) {
    return getNextTestPromise(currentTestId, data);
  },

};

export default TestService;
