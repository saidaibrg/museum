// Handles unmatched URLs for the application. UI for the 404 error.
 
export default function NotFound() {
  return (
    <div>
      <h2 className="text-lg font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}