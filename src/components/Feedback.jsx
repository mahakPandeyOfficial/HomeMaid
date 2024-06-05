import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { name, email, feedback, rating });
    alert('Thank you for your feedback!');
    setName('');
    setEmail('');
    setFeedback('');
    setRating(5);
  };

  // Sample customer reviews
  const reviews = [
    {
      name: 'John Doe',
      feedback: 'Excellent service! Highly recommend.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      feedback: 'Very professional and reliable.',
      rating: 4,
    },
    {
      name: 'Alice Johnson',
      feedback: 'Good service, but room for improvement.',
      rating: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#DBB5B5] p-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-8">Feedback</h1>
      <div className="w-full max-w-4xl flex flex-col lg:flex-row">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full lg:w-2/3 mb-8 lg:mb-0">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-lg font-semibold mb-2">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-lg font-semibold mb-2">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Terrible</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
            Submit Feedback
          </button>
        </form>
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/3 lg:ml-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-gray-600">{review.feedback}</p>
              <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            </div>
          ))}
        </div>
      </div>S
    </div>
  );
};

export default Feedback;
