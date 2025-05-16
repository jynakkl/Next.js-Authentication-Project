import { SignUp } from "@clerk/nextjs"


function page() {
  return (
    <div className="flex items-center justify-center p-3 h-screen">
        <SignUp/>
    </div>
  )
}

export default page