import comments from "@/app/data/comments";
import { redirect } from "next/navigation";
//get
export async function GET(_request, { params }) {
  const commentId = params.id;
  // if the comment id is not found,redirect to all comments
const isAvailable=comments.some(comment=>comment.id===parseInt(commentId))
  if (!isAvailable) {
   redirect("/api/comments")
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return Response.json(comment);
}
//update
export async function PATCH(request, { params }) {
  const comment = await request.json();
  const commentId = params.id;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments[commentIndex].text = comment.text;
  return Response.json(comments[commentIndex]);
}
//delete
export async function DELETE(_request,{params}){
   const commentId = params.id;
   const commentIndex = comments.findIndex(
     (comment) => comment.id === parseInt(commentId)
   );
   const commentToDelete=comments[commentIndex]
   comments.splice(commentIndex,1)
   return Response.json(commentToDelete)
}