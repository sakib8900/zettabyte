export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl md:text-4xl font-bold">Oops! Page Not Found 😢</h1>
      <p className="mt-2 text-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Go Back Home
      </a>
    </div>
  );
}
