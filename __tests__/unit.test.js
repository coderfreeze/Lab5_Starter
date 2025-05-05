// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Checks valid phone number', () => {
  // TODO
  expect(isPhoneNumber('703-482-3929')).toBe(true);
});

test('Checks valid phone number', () => {
  // TODO
  expect(isPhoneNumber('703-331-3479')).toBe(true);
});

test('Checks invalid phone number', () => {
  // TODO
  expect(isPhoneNumber('72-29-991')).toBe(false);
});

test('Checks invalid phone number', () => {
  // TODO
  expect(isPhoneNumber('921-3')).toBe(false);
});

test('Checks valid email', () => {
  // TODO
  expect(isEmail('vijay@gmail.com')).toBe(true);
});

test('Checks valid email', () => {
  // TODO
  expect(isEmail('email@email.com')).toBe(true);
});

test('Checks invalid email', () => {
  // TODO
  expect(isEmail('notanemailgmail.com')).toBe(false);
});

test('Checks invalid email', () => {
  // TODO
  expect(isEmail('email@gmail')).toBe(false);
});

test('Checks strong password', () => {
  // TODO
  expect(isStrongPassword('password102_')).toBe(true);
});

test('Checks strong password', () => {
  // TODO
  expect(isStrongPassword('strongpass3099')).toBe(true);
});

test('Checks weak password', () => {
  // TODO
  expect(isStrongPassword('1pass')).toBe(false);
});

test('Checks weak password', () => {
  // TODO
  expect(isStrongPassword('password@')).toBe(false);
});

test('Checks valid date', () => {
  // TODO
  expect(isDate('02/09/1999')).toBe(true);
});

test('Checks valid date', () => {
  // TODO
  expect(isDate('07/12/2025')).toBe(true);
});

test('Checks invalid date', () => {
  // TODO
  expect(isDate('9/8/7')).toBe(false);
});

test('Checks invalid date', () => {
  // TODO
  expect(isDate('/7/2019')).toBe(false);
});

test('Checks valid hex color', () => {
  // TODO
  expect(isHexColor('#0000ff')).toBe(true);
});

test('Checks valid hex color', () => {
  // TODO
  expect(isHexColor('FF00FF')).toBe(true);
});

test('Checks invalid hex color', () => {
  // TODO
  expect(isHexColor('G$GJEO31')).toBe(false);
});

test('Checks invalid hex color', () => {
  // TODO
  expect(isHexColor('HEXHEX')).toBe(false);
});
