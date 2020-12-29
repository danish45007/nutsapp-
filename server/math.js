module.exports = {
	math: (total, tipPrecent = 0.2) => {
		const tip = total * tipPrecent;

		return total + tip;
	},
	sum: (a, b) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (a < 0 || b < 0) {
					reject(new Error('Number should not be negative'));
				}
				resolve(a + b);
			}, 2000);
		});
	},
};
