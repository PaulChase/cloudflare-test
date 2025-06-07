export async function GET(request, { params }) {
	const randomQuotes = [
		"Life is what happens when you're busy making other plans.",
		"Get busy living or get busy dying.",
		"The purpose of our lives is to be happy.",
		"You only live once, but if you do it right, once is enough.",
		"In the end, we only regret the chances we didn't take.",
		"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		"Life is either a daring adventure or nothing at all.",
		"The way to get started is to quit talking and begin doing.",
		"Your time is limited, don't waste it living someone else's life.",
		"The future belongs to those who believe in the beauty of their dreams.",
	];

	const slogan = process.env.APP_SLOGAN || "Your daily dose of inspiration";

	return Response.json({ quotes: randomQuotes, slogan });
}
