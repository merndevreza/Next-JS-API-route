import { headers,cookies } from "next/headers";

export async function GET(request){
//vanilla JS method 
const requestHeaders=new Headers(request.headers);
console.log(requestHeaders.get("Authorization"));

// Next JS method
const headerLists=request.headers;
console.log(headerLists.get("Authorization"));

//=====set cookie when a user first time request here=====
// Next JS method 
cookies().set("cart","productsArray")

console.log(cookies().get("cart"));

// vanilla JS method 
console.log(request.cookies.get("theme")); 

return new Response("Profiles",{
   headers:{
      "Set-Cookie":"theme=dark"
   }
})
}