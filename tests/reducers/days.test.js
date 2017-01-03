import expect from 'expect';
import daysReducer from '../../reducers/days';

describe('days reducer', ()=>{
  it('should exist', () => {
    expect(daysReducer).toExist();
  });

  it('should add another day to the front when only one day present', () => {
    const action = {
      type: 'NEXT_DAY',
      id: 23
    };

    const initialState = [{id: 0, foods:[]}];
    const resultedState = daysReducer(initialState, action);

    const expectedState = [
      {
        id: 23,
        foods: []
      },
      {
        id: 0,
        foods: []
      }
    ];

    expect(resultedState).toEqual(expectedState);
  });

  it('should add another day to the front when multiple days already present', ()=>{
    const initialState = [
      {
        id: 1,
        foods: [
          {
            id: 1,
            name: 'Chocolate Pie',
            carbs: 24,
            protein: 1,
            fat: 23
          },
          {
            id: 2,
            name: 'Crisps',
            carbs: 24,
            protein: 1,
            fat: 23
          }
        ]
      },
      {
        id: 2,
        foods: [
          {
            id: 5,
            name: 'Tuna sandwich',
            carbs: 1,
            protein: 42,
            fat: 0
          },
          {
            id: 6,
            name: 'Chicken sandwich',
            carbs: 1,
            protein: 4,
            fat: 10
          },
          {
            id: 432,
            name: 'Candy bar',
            carbs: 3,
            protein: 1,
            fat: 23
          }
        ]
      },
      {
        id: 3,
        foods: [
          {
            id: 5,
            name: 'Light salad',
            carbs: 12,
            protein: 0,
            fat: 0
          },
          {
            id: 6,
            name: 'Chicken sandwich',
            carbs: 1,
            protein: 4,
            fat: 1
          }
        ]
      },
    ];

    const id = 97;

    const action = {
      type: 'NEXT_DAY',
      id,
    }

    const resultedState = daysReducer(initialState, action);

    const expectedState = [
      {
        id: 97,
        foods: []
      },
      {
        id: 1,
        foods: [
          {
            id: 1,
            name: 'Chocolate Pie',
            carbs: 24,
            protein: 1,
            fat: 23
          },
          {
            id: 2,
            name: 'Crisps',
            carbs: 24,
            protein: 1,
            fat: 23
          }
        ]
      },
      {
        id: 2,
        foods: [
          {
            id: 5,
            name: 'Tuna sandwich',
            carbs: 1,
            protein: 42,
            fat: 0
          },
          {
            id: 6,
            name: 'Chicken sandwich',
            carbs: 1,
            protein: 4,
            fat: 10
          },
          {
            id: 432,
            name: 'Candy bar',
            carbs: 3,
            protein: 1,
            fat: 23
          }
        ]
      },
      {
        id: 3,
        foods: [
          {
            id: 5,
            name: 'Light salad',
            carbs: 12,
            protein: 0,
            fat: 0
          },
          {
            id: 6,
            name: 'Chicken sandwich',
            carbs: 1,
            protein: 4,
            fat: 1
          }
        ]
      },
    ];

    expect(resultedState).toEqual(expectedState);
  });
});
