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
    <div className="container mx-auto p-16">
      <h2 className="text-3xl font-semibold mb-6">Blog</h2>
      <h3 className="text-[46px] mr-12 text-[#172B4D] font-medium mt-8">
      Luchi and Cholar Dal: A Bengali Navratri Duo with a History of Celebration
        </h3>
        <div className="flex items-center space-x-2 mt-12 mb-14">
            {/* Article Image */}
            <img src={author} alt="Sample Image" className="w-10 h-10" />
            {/* Article Text Content */}
            <div className="flex flex-col justify-center">
                <p className="text-xs font-normal text-[#172B4D]">By Richa Tripathi | Published on November 14, 2022 | 2 min read</p>
            </div>
          </div>
      <img src={blogmain} alt="Sample" className="w-full h-auto mb-6" />

      <div className="flex justify-between">
  {/* left section */}
  <article className="w-8/12 text-[22px]">
    <p className="">
      In the heart of Bengal, food and festivals go hand in hand, and Navratri is no exception. While each region in India has its unique way of celebrating the festival, Bengal’s take on Navratri is a culinary celebration steeped in history and tradition. One of the most beloved pairings during this time is Luchi and Cholar Dal. Together, they form a divine duo that’s both rich in flavor and cultural significance, making it a must-have during the festive season.
    </p>
    <p className="">
      Let’s dive into the origins of Luchi and Cholar Dal, their significance in Bengali cuisine, and how this timeless combination has become a go-to dish for Navratri celebrations.
    </p>
    <p className="">
      The Origins of Luchi: Bengal’s Fluffy Flatbread
    </p>
    <p className="">
      Luchi, a deep-fried flatbread made from maida (refined flour), is a staple in Bengali households, especially during festive occasions. This golden, puffy bread is similar to its North Indian cousin, the puri, but with one key difference—luchi is made with maida, which gives it a softer, more delicate texture.
    </p>
    <p className="">
      The origin of luchi can be traced back to ancient Bengal, where it was often served during religious and festive occasions as a symbol of prosperity and abundance. In Bengali households, luchi is more than just a bread; it’s a celebration on a plate. The light, fluffy texture of luchi makes it the perfect companion for a wide range of dishes, but it’s the combination with Cholar Dal that truly stands out during Navratri.
    </p>
    <p className="">
      Cholar Dal: The Festive Lentil Dish with Royal Roots
    </p>
    <p className="">
      Cholar Dal is a dish made from chana dal (Bengal gram lentils), cooked with a rich blend of spices like cumin, turmeric, and ginger, along with a hint of sweetness from raisins or coconut. The dal is further elevated with the addition of aromatic whole spices such as bay leaves, cinnamon, and cardamom, which give it a royal and festive flavor.
    </p>
    <p className="mb-4">
      The history of Cholar Dal dates back to the time of Bengal’s royal courts, where this mildly spiced, slightly sweet dish was often served during religious feasts and festivals. Unlike other dal preparations in India, Cholar Dal is considered a special dish, typically reserved for grand occasions, including weddings and religious festivals like Durga Puja and Navratri.
    </p>
    <p className="">
      Why You Should Try Luchi and Cholar Dal This Navratri
    </p>
    <p className="">
      If you’ve never tried this divine Bengali duo, now is the perfect time to give it a go. The crispiness of the luchi combined with the rich, slightly sweet flavor of the cholar dal creates a meal that’s truly unforgettable. It’s a dish that offers the perfect balance of comfort and celebration, making it an ideal choice for your Navratri menu.
    </p>
    <p className="">
      So, this Navratri, treat yourself to the flavors of Bengal with Luchi and Cholar Dal. Whether you’re fasting or feasting, this traditional meal will bring a touch of festive joy to your table.
    </p>
    <h3 className="text-[32px] mr-12 text-[#172B4D] font-normal mt-4">
      Order your Luchi and Cholar Dal recipe kit from AnyFeast today and experience the rich history and flavors of Bengali cuisine in your own home!
    </h3> 
  </article>

  {/* right section */}
  <div className="w-3/12 mt-20">
    {/* Section Heading */}
    <h4 className="text-sm font-normal text-[#42526E] mb-10">Popular Posts</h4>

    {/* Grid Container for Articles */}
    <div className="grid grid-cols-1 gap-6">
      {/* Article 1 */}
      <div className="flex items-center space-x-4">
        {/* Article Image */}
        <img src={image1} alt="Sample Image" className="w-20 h-20" />
        {/* Article Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-normal text-[#42526E]">PRODUCT</p>
          <p className="text-[19px] font-normal mt-4 mb-4 text-[#172B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <hr className="border-t-[3px] border-[#172B4D] border-solid" />

      {/* Article 2 */}
      <div className="flex items-center space-x-4">
        {/* Article Image */}
        <img src={image2} alt="Sample Image" className="w-20 h-20" />
        {/* Article Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-normal text-[#42526E]">PRODUCT | ENTERPRISE</p>
          <p className="text-[19px] font-normal mt-4 mb-4 text-[#172B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <hr className="border-t-[3px] border-[#172B4D] border-solid" />

      {/* Article 3 */}
      <div className="flex items-center space-x-4">
        {/* Article Image */}
        <img src={image3} alt="Sample Image" className="w-20 h-20" />
        {/* Article Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-normal text-[#42526E]">PRODUCTIVITY</p>
          <p className="text-[19px] font-normal mt-4 mb-4 text-[#172B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <hr className="border-t-[3px] border-[#172B4D] border-solid" />

      {/* Article 4 */}
      <div className="flex items-center space-x-4">
        {/* Article Image */}
        <img src={image4} alt="Sample Image" className="w-20 h-20" />
        {/* Article Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-normal text-[#42526E]">PRODUCTIVITY</p>
          <p className="text-[19px] font-normal mt-4 mb-4 text-[#172B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="mt-20">
          {/* Section Heading */}
          <h4 className="text-xs text-[#42526E] mb-10">HERE ARE SOME RELATED ARTICLES YOU MAY FIND INTERESTING:</h4>

          {/* Grid Container for Articles */}
          <div className="grid grid-cols-1 gap-6 mr-96">
              
              {/* Article 1 */}
              <div className="flex items-center space-x-4 mr-40">
              {/* Article Image */}
              <img src={blog1} alt="Sample Image" className="w-80 h-52" />
              {/* Article Text Content */}
              <div className="flex flex-col justify-center">
                  <p className="text-xs font-normal text-[#42526E]">PRODUCT - 4 MINUTE READ</p>
                  <p className="text-2xl mt-4 mb-4 text-[#172B4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
              </div>
              </div>

              {/* Article 2 */}
              <div className="flex items-center space-x-4  mr-40">
              {/* Article Image */}
              <img src={blog2} alt="Sample Image" className="w-80 h-52" />
              {/* Article Text Content */}
              <div className="flex flex-col justify-center">
                  <p className="text-xs font-normal text-[#42526E]">PRODUCT - 4 MINUTE READ</p>
                  <p className="text-2xl mt-4 mb-4 text-[#172B4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,</p>
              </div>
              </div>

              {/* Article 3 */}
              <div className="flex items-center space-x-4  mr-40">
              {/* Article Image */}
              <img src={blog3} alt="Sample Image" className="w-80 h-52" />
              {/* Article Text Content */}
              <div className="flex flex-col justify-center">
                  <p className="text-xs font-normal text-[#42526E]">PRODUCT - 4 MINUTE READ</p>
                  <p className="text-2xl mt-4 mb-4 text-[#172B4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-base text- text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem</p>
              </div>
              </div>

              {/* Article 4 */}
              <div className="flex items-center space-x-4  mr-40">
              {/* Article Image */}
              <img src={blog4} alt="Sample Image" className="w-80 h-52" />
              {/* Article Text Content */}
              <div className="flex flex-col justify-center">
                  <p className="text-xs font-normal text-[#42526E]">PRODUCT - 4 MINUTE READ</p>
                  <p className="text-2xl mt-4 mb-4 text-[#172B4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-base text-[#172B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus</p>
              </div>
              </div>
      
    </div>
</div>

    </div>
  );
};

export default Blog;
