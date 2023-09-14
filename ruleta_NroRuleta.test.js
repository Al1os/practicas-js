//Arrange

//Act
vueltas = Math.floor(Math.random() * (11 - 5) + 5);
nro = Math.floor(Math.random() * (37 - 0) + 0);
total = vueltas * 37 + nro;
num = total % 37;

//Assert
test('nro ruleta mayor o igual a 0', () => {
  expect(num).toBeGreaterThanOrEqual(0);
});

test('nro ruleta menor o igual a 36', () => {
expect(num).toBeLessThanOrEqual(36);
});