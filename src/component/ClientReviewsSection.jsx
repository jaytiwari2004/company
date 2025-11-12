import React from "react";

const reviews = [
  {
    name: "Niranjana Sharma",
    image: "https://static.wixstatic.com/media/5ef7f2_1.png",
    role: "Local Guide • 2 months ago",
    review:
      "Team TaxBuddy came to the rescue in crunch time. They were prompt, courteous and professional. Superlative service at a super competitive price. Couldn't be more satisfied. Strongly recommended for every taxpayer in India who wants accurate returns and peace of mind.",
    rating: "4.7",
  },
  {
    name: "Rohan Baruah",
    image: "https://static.wixstatic.com/media/5ef7f2_2.png",
    role: "3 months ago",
    review:
      "Positive : Professionalism, Responsiveness. Rajkumar was very responsive and prompt throughout the return filing process. Even though it was taking some time on the govt portal, I knew that the work...",
    rating: "5.0",
  },
  {
    name: "Rahul Patil",
    image: "https://static.wixstatic.com/media/5ef7f2_3.png",
    role: "Local Guide • 2 months ago",
    review:
      "Positive : Quality. Right from the start the process was very smooth. The tax buddy assigned (Mr Gaurishankar) was extremely helpful, proactive, patient and answered all questions. Not only did I avail the service, because of the great experience, made my spouse use the service as well...",
    rating: "4.7",
  },
  {
    name: "Subham Saurabh",
    image: "https://static.wixstatic.com/media/5ef7f2_4.png",
    role: "1 month ago",
    review:
      "TaxBuddy was a breeze to work with. It's a straightforward procedure that's easy to follow. All you have to do is fill out the form with the relevant information and submit necessary documents as requested by them.",
    rating: "4.9",
  },
  {
    name: "Aahan Shetty",
    image: "https://static.wixstatic.com/media/5ef7f2_5.png",
    role: "1 month ago",
    review:
      "TaxBuddy has been a real buddy for me throughout my e–filing process. As a high–income professional, I have always struggled with high tax bills and refund concerns. Thankfully, now I have a partner I can trust to guide me for maximum savings.",
    rating: "5.0",
  },
];

const ClientReviewsSection = () => {
  return (
    <section className="bg-[#DCF2E9] py-20 px-6 sm:px-10 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#000000] mb-14">
        What Our Clients Say About ComplianceBro
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm hover:shadow-xl transition"
          >
            {/* User Info */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-[#000000]">{review.name} ✅</h3>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
              {review.review}
            </p>

            {/* Google Review */}
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
                alt="Google Logo"
                className="w-5 h-5"
              />
              <p className="text-sm font-medium text-[#000000]">
                Google Reviews
              </p>
              <p className="text-sm text-[#F9A825] font-semibold">
                {review.rating} ★★★★★
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviewsSection;
