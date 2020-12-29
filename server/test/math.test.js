const d = require('../math');

test('should calculate total tip', () => {
	const total = d.math(10, 0.3);
	if (total !== 13) {
		throw new Error(`Total should be 13 but got ${total}`);
	}
	// expect(total).toBe(13);
});

// for total tip with default percent
test('should calculate total tip with default percent', () => {
	const total = d.math(10);
	expect(total).toBe(12);
});

// async test
test('should test async', async () => {
	const res = await d.sum(10, 2);
	expect(res).toBe(12);
});
