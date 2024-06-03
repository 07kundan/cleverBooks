import React from "react";

function KeyProblems() {
  return (
    <section className="py-6 px-4 space-y-7  lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-20">
      <h2 className="text-center lg:text-3xl font-bold tracking-tight">
        Some key issues that CleverBook, aims to target and solve
      </h2>

      <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-6">
        <div className="p-4 space-y-2 bg-red-600/50 rounded-3xl lg:min-h-[53vh] lg:w-[22%] ">
          <h3 className="font-semibold text-lg lg:text-2xl lg:tracking-tight">
            Access to Diverse Resources
          </h3>
          <p className="text-sm leading-5 tracking-wide lg:text-lg lg:leading-relaxed lg:tracking-wide">
            CleverBook aggregates diverse resources from various disciplines,
            providing users with comprehensive access to books, articles,
            Magazine all in one place.
          </p>
        </div>
        <div className="p-4 space-y-2 bg-red-600/50 rounded-3xl lg:min-h-[53vh] lg:w-[22%] ">
          <h3 className="font-semibold text-lg lg:text-2xl lg:tracking-tight">
            Costs of Books
          </h3>
          <p className="text-sm leading-5 tracking-wide lg:text-lg lg:leading-relaxed lg:tracking-wide">
            {" "}
            CleverBook offers affordable access to a wide range of educational
            materials, and in some cases, provides free resources to support
            learning for all users.
          </p>
        </div>
        <div className="p-4 space-y-2 bg-red-600/50 rounded-3xl lg:min-h-[53vh] lg:w-[22%] ">
          <h3 className="font-semibold text-lg lg:text-2xl lg:tracking-tight">
            Isolation in Online Learning
          </h3>
          <p className="text-sm leading-5 tracking-wide lg:text-lg lg:leading-relaxed lg:tracking-wide">
            {" "}
            CleverBook fosters a sense of community by incorporating social
            features, such as discussion forums, group projects, and
            peer-to-peer learning opportunities, encouraging collaboration and
            interaction among users.
          </p>
        </div>
        <div className="p-4 space-y-2 bg-red-600/50 rounded-3xl lg:min-h-[53vh] lg:w-[22%] ">
          <h3 className="font-semibold text-lg lg:text-2xl lg:tracking-tight">
            Lack of Personalized Learning
          </h3>
          <p className="text-sm leading-5 tracking-wide lg:text-lg lg:leading-relaxed lg:tracking-wide">
            CleverBook uses AI and machine learning algorithms to personalize
            the learning experience, adapting to the user’s learning style,
            pace, and progress to provide customized content and
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default KeyProblems;
