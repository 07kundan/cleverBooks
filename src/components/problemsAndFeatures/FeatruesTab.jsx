import React from "react";

function FeatruesTab() {
  return (
    <section className="text-center space-y-8 py-8 lg:space-y-16 lg:py-4 bg-amber-900">
      {/* heading */}
      <h2>
        Discover CleverBook: The Ultimate Online Bookstore for Every Reader
      </h2>

      {/* main  */}
      <div className="min-h-screen flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
        {/* left-section */}
        <div className="px-5 space-y-4 lg:w-1/2 lg:px-12 lg:py-2 lg:pt-10 bg-blue-300">
          <div className="text-left">
            <h3>Extensive Genre Collection</h3>
            <span>
              <p>
                CleverBook provides a vast and diverse collection of books,
                manga, magazines, articles, and newspapers, ensuring that users
                can find content that matches their interests. Whether you're a
                fan of fantasy novels, scientific journals, or daily news,
                CleverBook has something for everyone.
              </p>
              <button>Learn more &#8594;</button>
            </span>
          </div>
          <hr />

          <div className="text-left">
            <h3>Personalized Recommendations</h3>
            <span>
              <p>
                {" "}
                Using advanced algorithms, CleverBook offers personalized
                reading suggestions based on user preferences, reading history,
                and ratings. This feature helps users discover new books and
                articles that match their tastes, ensuring a customized and
                enjoyable reading experience.
              </p>
              <button>Learn more &#8594;</button>
            </span>
          </div>
          <hr />

          <div className="text-left">
            <h3>User-Friendly Interface with Advanced Search</h3>
            <span>
              {" "}
              <p>
                {" "}
                CleverBook features a clean, user-friendly interface that makes
                it easy to navigate and find specific reading materials. The
                advanced search function allows users to filter by genre,
                author, publication date, popularity, and more, making it
                effortless to locate desired content quickly.
              </p>
              <button>Learn more &#8594;</button>
            </span>
          </div>
          <hr />

          <div className="text-left">
            <h3> Integrated Reading Experience</h3>
            <span>
              <p>
                CleverBook includes an integrated e-reader that allows users to
                read their purchased materials directly on the platform. The
                e-reader offers customizable settings such as font size,
                background color, and reading mode (day/night), enhancing
                readability and comfort.
              </p>
              <button>Learn more &#8594;</button>
            </span>
          </div>
          <hr />

          <div className="text-left">
            <h3>Community and Social Features</h3>
            <span>
              <p>
                CleverBook fosters a sense of community among readers by
                providing discussion forums where users can share reviews,
                discuss books, and connect with like-minded individuals.
                Additionally, social sharing features allow users to share their
                favorite reads and recommendations on social media platforms,
                creating a vibrant and interactive community.
              </p>
              <button>Learn more &#8594;</button>
            </span>
          </div>
          <hr />
        </div>

        {/* right-section */}
        <div className="lg:w-1/2 rounded-s-3xl bg-lime-900">hsf</div>
      </div>
      {/* -------- */}

      {/* button */}
      <button className="text-sm bg-gradient-to-t from-blue-500 to-blue-900 ml-5 px-4 py-2 rounded-full">
        View all features
      </button>
    </section>
  );
}

export default FeatruesTab;
