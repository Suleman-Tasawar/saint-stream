import { FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role="alert"
      className="bg-black poppins-bold text-white font-bold p-6 rounded-md shadow-lg flex flex-col items-center justify-center min-h-[300px] h-[100vh]"
    >
      <p className="text-2xl mb-4">🚨 Something went wrong</p>
      <pre className="text-red-400 text-sm mb-4 whitespace-pre-wrap text-center">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-white text-black cursor-pointer font-semibold rounded hover:bg-gray-200 transition"
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorFallback;
