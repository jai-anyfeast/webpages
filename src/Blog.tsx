import React from 'react';
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import blog4 from "./images/blog4.png";
import blogmain from "./images/blogmain.png";
import author from "./images/author.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8 lg:p-16">
      <h2 className="text-base sm:text-3xl font-semibold mb-4 sm:mb-6">Blog</h2>
      <h3 className="text-base sm:text-base lg:text-5xl text-[#172B4D] font-medium mt-4 sm:mt-8">
        Luchi and Cholar Dal: A Bengali Navratri Duo with a History of Celebration
      </h3>

      <div className="flex items-center space-x-2 mt-6 sm:mt-12 mb-8 sm:mb-14">
        <img src={author} alt="Author" className="w-8 h-8 sm:w-10 sm:h-10" />
        <div className="flex flex-col justify-center">
  <p className="text-xs sm:text-sm lg:text-base font-normal text-[#172B4D]">
    By Richa Tripathi 
    <span className="block sm:inline"> 
      <span className="hidden sm:inline"> | </span>
      Published on November 14, 2022 | 2 min read
    </span>
  </p>
</div>


      </div>

      <img src={blogmain} alt="Main Blog" className="w-full h-auto mb-6" />

      <div className="lg:flex lg:space-x-8">
        {/* Left Section */}
        <article className="lg:w-8/12 font-normal text-xs sm:text-lg lg:text-[22px] space-y-4 lg:space-y-6">
          <p>
            In the heart of Bengal, food and festivals go hand in hand, and Navratri is no exception. While each region in India has its unique way of celebrating the festival, Bengal’s take on Navratri is a culinary celebration steeped in history and tradition. One of the most beloved pairings during this time is Luchi and Cholar Dal. Together, they form a divine duo that’s both rich in flavor and cultural significance, making it a must-have during the festive season.
          </p>
          <p>
            Let’s dive into the origins of Luchi and Cholar Dal, their significance in Bengali cuisine, and how this timeless combination has become a go-to dish for Navratri celebrations.
          </p>
          <p>
            The Origins of Luchi: Bengal’s Fluffy Flatbread
          </p>
          <p>
            Luchi, a deep-fried flatbread made from maida (refined flour), is a staple in Bengali households, especially during festive occasions. This golden, puffy bread is similar to its North Indian cousin, the puri, but with one key difference—luchi is made with maida, which gives it a softer, more delicate texture.
          </p>
          <p>
            The origin of luchi can be traced back to ancient Bengal, where it was often served during religious and festive occasions as a symbol of prosperity and abundance. In Bengali households, luchi is more than just a bread; it’s a celebration on a plate. The light, fluffy texture of luchi makes it the perfect companion for a wide range of dishes, but it’s the combination with Cholar Dal that truly stands out during Navratri.
          </p>
          <p>
            Cholar Dal: The Festive Lentil Dish with Royal Roots
          </p>
          <p>
            Cholar Dal is a dish made from chana dal (Bengal gram lentils), cooked with a rich blend of spices like cumin, turmeric, and ginger, along with a hint of sweetness from raisins or coconut. The dal is further elevated with the addition of aromatic whole spices such as bay leaves, cinnamon, and cardamom, which give it a royal and festive flavor.
          </p>
          <p>
            The history of Cholar Dal dates back to the time of Bengal’s royal courts, where this mildly spiced, slightly sweet dish was often served during religious feasts and festivals. Unlike other dal preparations in India, Cholar Dal is considered a special dish, typically reserved for grand occasions, including weddings and religious festivals like Durga Puja and Navratri.
          </p>
          <p>
            Why You Should Try Luchi and Cholar Dal This Navratri
          </p>
          <p>
            If you’ve never tried this divine Bengali duo, now is the perfect time to give it a go. The crispiness of the luchi combined with the rich, slightly sweet flavor of the cholar dal creates a meal that’s truly unforgettable. It’s a dish that offers the perfect balance of comfort and celebration, making it an ideal choice for your Navratri menu.
          </p>
          <p>
            So, this Navratri, treat yourself to the flavors of Bengal with Luchi and Cholar Dal. Whether you’re fasting or feasting, this traditional meal will bring a touch of festive joy to your table.
          </p>
          <h3 className="text-base sm:text-3xl lg:text-[32px] text-[#172B4D] font-normal mt-4">
            Order your Luchi and Cholar Dal recipe kit from AnyFeast today and experience the rich history and flavors of Bengali cuisine in your own home!
          </h3>
        </article>

        {/* Right Section */}
        <div className="lg:w-4/12 mt-12 lg:mt-0">
          <h4 className="text-sm font-normal text-[#42526E] mb-4">Popular Posts</h4>

          <div className="space-y-6">
            {/* Article 1 */}
            <div className="flex items-center space-x-4">
              <img src={image1} alt="Post 1" className="w-20 h-20 sm:w-24 sm:h-24" />
              <div>
                <p className="text-xs text-[#42526E]">PRODUCT</p>
                <p className="text-lg sm:text-xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <hr className="border-t-2 border-[#172B4D]" />

            {/* Article 2 */}
            <div className="flex items-center space-x-4">
              <img src={image2} alt="Post 2" className="w-20 h-20 sm:w-24 sm:h-24" />
              <div>
                <p className="text-xs text-[#42526E]">PRODUCT | ENTERPRISE</p>
                <p className="text-lg sm:text-xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <hr className="border-t-2 border-[#172B4D]" />

            {/* Article 3 */}
            <div className="flex items-center space-x-4">
              <img src={image3} alt="Post 3" className="w-20 h-20 sm:w-24 sm:h-24" />
              <div>
                <p className="text-xs text-[#42526E]">PRODUCTIVITY</p>
                <p className="text-lg sm:text-xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <hr className="border-t-2 border-[#172B4D]" />

            {/* Article 4 */}
            <div className="flex items-center space-x-4">
              <img src={image4} alt="Post 4" className="w-20 h-20 sm:w-24 sm:h-24" />
              <div>
                <p className="text-xs text-[#42526E]">PRODUCTIVITY</p>
                <p className="text-lg sm:text-xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <hr className="border-t-2 border-[#172B4D]" />
          </div>
        </div>
      </div>

      <div className="mt-20">
  <h4 className="text-sm text-[#42526E] mb-10">HERE ARE SOME RELATED ARTICLES YOU MAY FIND INTERESTING:</h4>

  <div className="space-y-6 lg:mr-80">
    {/* Article 1 */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:mr-96">
      <img src={blog1} alt="Blog 1" className="w-full lg:w-48 lg:h-48 object-cover" />
      <div>
        <p className="text-xs mt-2 mb-2 text-[#42526E]">PRODUCT - 4 MINUTE READ</p>
        <p className="text-xl mb-2 sm:text-2xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-xs sm:text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
      </div>
    </div>

    {/* Article 2 */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:mr-96">
      <img src={blog2} alt="Blog 2" className="w-full lg:w-48 lg:h-48 object-cover" />
      <div>
        <p className="text-xs mt-2 mb-2 text-[#42526E]">PRODUCT - 6 MINUTE READ</p>
        <p className="text-xl mb-2 sm:text-2xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-xs sm:text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
      </div>
    </div>

    {/* Article 3 */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:mr-96">
      <img src={blog3} alt="Blog 3" className="w-full lg:w-48 lg:h-48 object-cover" />
      <div>
        <p className="text-xs mt-2 mb-2 text-[#42526E]">PRODUCTIVITY - 7 MINUTE READ</p>
        <p className="text-xl mb-2 sm:text-2xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-xs sm:text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
      </div>
    </div>

    {/* Article 4 */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:mr-96">
      <img src={blog4} alt="Blog 4" className="w-full lg:w-48 lg:h-48 object-cover" />
      <div>
        <p className="text-xs mt-2 mb-2 text-[#42526E]">PRODUCTIVITY - 7 MINUTE READ</p>
        <p className="text-xl mb-2 sm:text-2xl text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-xs sm:text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Blog;
