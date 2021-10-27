export const formattedString = (str: string): string =>
	str.toLowerCase().replaceAll(' ', '').replaceAll('the', '').trim();
