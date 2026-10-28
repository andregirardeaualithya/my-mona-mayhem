import type { APIRoute } from 'astro';

export const prerender = false;

const USERNAME_PATTERN = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
const UPSTREAM_TIMEOUT_MS = 8_000;

const errorResponse = (message: string, status: number): Response =>
	Response.json(
		{ error: message },
		{
			status,
			headers: { 'Cache-Control': 'no-store' },
		},
	);

export const GET: APIRoute = async ({ params }) => {
	const username = params.username;

	if (!username || !USERNAME_PATTERN.test(username)) {
		return errorResponse('Invalid GitHub username', 400);
	}

	let upstream: Response;
	try {
		upstream = await fetch(
			`https://github.com/${encodeURIComponent(username)}.contribs`,
			{
				headers: { Accept: 'application/json' },
				signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
			},
		);
	} catch (error) {
		if (
			error instanceof Error &&
			(error.name === 'TimeoutError' || error.name === 'AbortError')
		) {
			return errorResponse('GitHub request timed out', 504);
		}

		return errorResponse('Unable to fetch GitHub contributions', 502);
	}

	if (upstream.status === 404) {
		return errorResponse('GitHub user not found', 404);
	}

	if (!upstream.ok) {
		return errorResponse('GitHub returned an unsuccessful response', 502);
	}

	let data: unknown;
	try {
		data = await upstream.json();
	} catch {
		return errorResponse('GitHub returned invalid JSON', 502);
	}

	return Response.json(data, {
		headers: {
			'Cache-Control':
				'public, max-age=60, s-maxage=300, stale-while-revalidate=3600',
		},
	});
};
