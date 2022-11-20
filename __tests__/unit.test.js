// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// four tests for isPhoneNumber

test('Phone # "310-703-4310" is valid', () => {
    expect(functions.isPhoneNumber('310-703-4310')).toBe(true);
  });
  

test('Phone # "(+1) 916-038-2038"', () => {
   expect(functions.isPhoneNumber('(+1) 916-038-2038')).toBe(true);
 });

test('Phone # "3409" is invalid', () => {
    expect(functions.isPhoneNumber('3409')).toBe(false);
});

test('Phone # "a82y" is invalid', () => {
    expect(functions.isPhoneNumber('a82y')).toBe(false);
});

// four tests for isEmail

test('Email "adamsandler34@gmail.com" is valid', () => {
    expect(functions.isEmail('adamsandler34@gmail.com')).toBe(true);
});

test('Email "metsfan@hotmail.com" is valid', () => {
    expect(functions.isEmail('metsfan@hotmail.com')).toBe(true);
});

test('Email "123" is invalid', () => {
    expect(functions.isEmail('123')).toBe(false);
});

test('Email "$$$$$$" is invalid', () => {
    expect(functions.isEmail('$$$$$$')).toBe(false);
});

// four tests for isStrongPassword


test('Password is "f***"', () => {
    expect(functions.isStrongPassword()).toBe(true);
});

  test('Password is "u019sj_"', () => {
    expect(functions.isStrongPassword()).toBe(true);
  });

  test('Password "a" is not strong', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
  });

  test('Password "this is weak" is not strong', () => {
    expect(functions.isStrongPassword('this is weak')).toBe(false);
  });

// four tests for isDate

test('Date "11/20/2022" is valid', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
  });

  test('Date "4/23/1977" is valid', () => {
    expect(functions.isDate('4/23/1977')).toBe(true);
  });

  test('Date "c:" is invalid', () => {
    expect(functions.isDate('c:')).toBe(false);
  });

  test('Date "782/840/29334" is invalid', () => {
    expect(functions.isDate('782/840/29334')).toBe(false);
  });
  

// four tests for isHexColor*/

test('Hex Code "#093" is valid', () => {
    expect(functions.isHexColor('#093')).toBe(true);
  });

  test('Hex Code "#fff093" is valid', () => {
    expect(functions.isHexColor('#fff093')).toBe(true);
  });
  
  test('Hex Code "goodkidmaadcity" is invalid', () => {
    expect(functions.isHexColor('goodkidmaadcity')).toBe(false);
  });

  test('Hex Code "-_-" is invalid', () => {
    expect(functions.isHexColor('-_-')).toBe(false);
  });