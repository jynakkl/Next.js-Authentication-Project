import { SignIn } from "@clerk/nextjs"

function page() {
  return (
    <div className="flex items-center justify-center p-3 h-screen">
      <SignIn/>
    </div>
  )
}

export default page