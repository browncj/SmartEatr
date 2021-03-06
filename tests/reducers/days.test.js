import expect from 'expect';
import daysReducer from '../../reducers/days';

describe('days reducer', ()=>{
  it('should exist', () => {
    expect(daysReducer).toExist();
  });

  describe('NEXT_DAY action type handler', () => {
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

  describe('ADD_FOOD action type handler', () => {
    it('add a food to the front when there is only one day', () => {
      const name = 'Protein powder';
      const fat = 1;
      const carbs = 2;
      const protein = 21;
      const id = 2921;

      const action = {
        type: 'ADD_FOOD',
        id,
        name,
        fat,
        carbs,
        protein
      };

      const initialState = [{id: 0, foods:[]}];
      const resultedState = daysReducer(initialState, action);

      const expectedState = [
        {
          id: 0,
          foods: [
            {
              id,
              name,
              carbs,
              protein,
              fat
            }
          ]
        }
      ];

      expect(resultedState).toEqual(expectedState);

      const name2 = 'Strawberries';
      const fat2 = 1;
      const carbs2 = 23;
      const protein2 = 2;
      const id2 = 32183;

      const action2 = {
        type: 'ADD_FOOD',
        name: name2,
        carbs: carbs2,
        protein: protein2,
        fat: fat2,
        id: id2
      };

      const secondResultedState = daysReducer(resultedState, action2);

      const expectedState2 =
      [
        {
          id: 0,
          foods: [
            {
              id: id2,
              name: name2,
              carbs: carbs2,
              protein: protein2,
              fat: fat2
            },
            {
              id,
              name,
              carbs,
              protein,
              fat
            }
          ]
        }
      ];

      expect(secondResultedState).toEqual(expectedState2);
    });

    it('should add a food to the front of the first day when there are multiple days', () => {
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

      const name = 'Protein powder';
      const fat = 1;
      const carbs = 2;
      const protein = 21;
      const id = 2921;

      const action = {
        type: 'ADD_FOOD',
        id,
        name,
        fat,
        carbs,
        protein
      };

      const resultedState = daysReducer(initialState, action);

      const expectedState = [
        {
          id: 1,
          foods: [
            {
              id,
              name,
              carbs,
              protein,
              fat
            },
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

  describe('SET_DAYS action type handler', () => {
    it('should correctly set the days array when action has one', () => {
      const daysRetrieved = [
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

      const action = {
        type: 'SET_DAYS',
        days: daysRetrieved
      };

      const initialState = [{id: 0, foods:[]}];
      const resultedState = daysReducer(initialState, action);

      expect(resultedState).toEqual(daysRetrieved);
    });

    it('should not change the state when days array contains nothing', () => {
      const daysRetrieved = undefined;

      const action = {
        type: 'SET_DAYS',
        days: daysRetrieved
      };

      const initialState = [{id: 0, foods:[]}];
      const resultedState = daysReducer(initialState, action);

      expect(resultedState).toEqual(initialState);
    });
  });
});
