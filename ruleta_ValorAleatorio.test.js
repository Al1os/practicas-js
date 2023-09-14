//Arrange

//Act
vueltas = Math.floor(Math.random() * (11 * 37 - 5 * 37) + 5 * 37);

//Assert
test('valor aleatorio mayor o igual a cant minima', () => {
  expect(vueltas).toBeGreaterThanOrEqual(37*5);
});

test('valor aleatorio menor o igual a cant maxima', () => {
expect(vueltas).toBeLessThanOrEqual(37*10);
});