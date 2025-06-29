import { useParams, useSearchParams } from "react-router-dom";

const DonationSuccess = () => {
  const { transactionId } = useParams();
  const [searchParams] = useSearchParams();

  const amount = searchParams.get("amount");
  const method = searchParams.get("method");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Donation Successful!
        </h1>
        <p className="text-gray-700 mb-2">
          <strong>Transaction ID:</strong> {transactionId}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Amount:</strong> {amount} ৳
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Payment Method:</strong> {method}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DonationSuccess;
