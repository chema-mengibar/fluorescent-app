var namecase = require('./namecase');

describe('dash-case function', () => {

  it('should convert Uppercase to dash', () => {
    const mockStr = 'exerciseInfo';
    const expectedStr = 'exercise-info';

    const dashedStr = namecase.dashCase( mockStr );

    expect(dashedStr).toBe(expectedStr)
  })

  it('should convert number to dash', () => {
    const mockStr = 'exercise1';
    const expectedStr = 'exercise-1';

    const dashedStr = namecase.dashCase( mockStr );

    expect(dashedStr).toBe(expectedStr)
  })

  
  it('should convert point to dash', () => {
    const mockStr = 'exercise.partial';
    const expectedStr = 'exercise-partial';

    const dashedStr = namecase.dashCase( mockStr );

    expect(dashedStr).toBe(expectedStr)
  })
  
  it('should convert underscore to dash', () => {
    const mockStr = 'exercise_partial';
    const expectedStr = 'exercise-partial';

    const dashedStr = namecase.dashCase( mockStr );

    expect(dashedStr).toBe(expectedStr)
  })
  
  it('should convert complex name to dash', () => {
    const mockStr = 'exerciseInfo-text-description';
    const expectedStr = 'exercise-info-text-description';

    const dashedStr = namecase.dashCase( mockStr );

    expect(dashedStr).toBe(expectedStr)
  })

})

describe('camelCase function', () => {

  it('should convert - to Uppercase', () => {
    const mockStr = 'exercise-partial';
    const expectedStr = 'exercisePartial';

    const convertedStr = namecase.camelCase( mockStr );

    expect(convertedStr).toBe(expectedStr)
  })

})

describe('PascalCase function', () => {

  it('should convert first letter to Uppercase', () => {
    const mockStr = 'exercise-partial';
    const expectedStr = 'ExercisePartial';

    const convertedStr = namecase.pascalCase( mockStr );

    expect(convertedStr).toBe(expectedStr)
  })

})

describe('File name function', () => {

  it('should convert a string to a valid file name', () => {
    const mockStr = 'exercise-partial';
    const expectedStr = 'exercise-partial';

    const convertedStr = namecase.fileName( mockStr );

    expect(convertedStr).toBe(expectedStr)
  })

  it('should replace invalid "\\" from the file name', () => {
    const mockStr = 'exercise\\partial';
    const expectedStr = 'exercise-partial';

    const convertedStr = namecase.fileName( mockStr );

    expect(convertedStr).toBe(expectedStr)
  })

})

