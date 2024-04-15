// src/app/pages/_middleware.js

export function middleware(request, event) {
    // Set the Access-Control-Allow-Origin header to allow all origins
    event.respondWith(
        new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    );
}
