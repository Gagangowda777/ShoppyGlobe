import { Link } from 'react-router-dom';

// this page displays if the url does not exist 
function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black">404</h1>
        <p className="text-3xl font-bold text-gray-800 tracking-tight sm:text-5xl mt-4">
          Page not found
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-2xl border px-5 py-3 text-sm font-semibold hover:text-white shadow-md hover:bg-black ">
            Home
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ErrorPage