function Help() {
    return (
      <div className="p-10 text-center max-w-3xl mx-auto h-full">
        <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
        <p className="text-lg leading-relaxed">
          Need assistance? We’re here to help! Below are some common questions and solutions to guide you.
        </p>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4">
            <p className="font-semibold">Q: How do I search for a book?</p>
            <p className="text-gray-700">A: Use the search bar on the homepage to find books by title or author.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Q: Can I save books for later?</p>
            <p className="text-gray-700">A: Yes, you can add books to your favorites list to revisit them later.</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Q: Who can I contact for further help?</p>
            <p className="text-gray-700">A: Reach out to our support team via email at <a href="mailto:support@myebooks.com" className="text-blue-600">support@myebooks.com</a>.</p>
          </div>
        </div>
      </div>
    );
  }
  export default Help;
  