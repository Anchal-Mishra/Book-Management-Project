function Contact() {
    return (
      <div className="p-10 text-center max-w-3xl h-screen mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg leading-relaxed">
          We’d love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out to us.
        </p>
        <div className="mt-6">
          <p className="text-lg font-semibold">Email:</p>
          <p><a href="mailto:support@myebooks.com" className="text-blue-600">support@myebooks.com</a></p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Phone:</p>
          <p className="text-gray-700">+1 (123) 456-7890</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-gray-700">123 Book Street, Library City, BK 45678</p>
        </div>
      </div>
    );
  }
  export default Contact;