// Learning Catching in Next.js 

// Next.js by default cache all get request's data like below. But we can stop this caching when we need. Next.js Caching only works in production build.

// to stop catching this page 
export const dynamic="force-dynamic" // Default settings- dynamic="auto"
export async function GET(){
   return new Response(new Date().toLocaleTimeString())
}

/**
 * GET() route handlers are cached.
 * 
 * How to stop caching?
 * 1. By adding dynamic mode,  export const dynamic="force-dynamic" 
 * 2. Dynamic route handler GET() will not cache, [id] is a dynamic route, so it's GET() will not cached
 * 3. Using header() and cookies(), because these are dynamic, so next.js will not cache these files. 
 * 4. using POST, PUT(), PATCH(), DELETE(), these request's will not cached. 

*/