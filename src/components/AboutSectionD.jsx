/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import SourceA from './rsc/sourceA.webp';
import SourceB from './rsc/SOURCEB.jpg';

const AboutSectionD = () => (
  <div className="container mx-auto flex flex-col gap-10 w-5/6 mb-5">
    <div className="flex lg:flex-row flex-col justify-center gap-10">
      <div className="lg:w-1/2 w-full">
        <img src={SourceA} alt="sOURCE A" className="w-full rounded-md" />
      </div>
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-2 font-bold text-[30px]">ETHICALLY SOURCED</h2>
        <p className="mb-2 lg:w-5/6 w-full italic text-lg">At our core, we are passionate about delivering a coffee experience that transcends the ordinary. We take pride in our commitment to quality, sustainability, and ethical sourcing</p>
        <p className="lg:w-5/6 w-full italic text-lg">Our quest for excellence begins with the meticulous selection of 100% traceable, seasonally produced Arabica coffee beans, sourced to meet the highest standards set forth by the Specialty Coffee Association (SCA). This means that every cup of our coffee embodies the pinnacle of taste and quality.</p>
      </div>

    </div>
    <div className="flex lg:flex-row flex-col justify-center gap-10">
      <div className="lg:w-1/2 w-full">
        <img src="https://wigmoretrading.com/wp-content/uploads/2021/12/Coffee_2_1200x675.jpeg" alt="sOURCE A" className="w-full rounded-md" />
      </div>
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-2 font-bold text-[30px]">OUR COFFEE TASTE</h2>
        <p className="mb-2 lg:w-5/6 w-full italic text-lg">With our coffee, we pride ourselves on curating a dynamic coffee experience that evolves with the seasons. Our coffee menu is a vibrant reflection of the coffee harvest calendar, offering a diverse range of origin options expertly roasted to perfection, catering to both filter and espresso enthusiasts.</p>
        <p className="lg:w-5/6 w-full italic text-lg">Our dedicated team is not just passionate about coffee; we're here to make your coffee journey exceptional. Whether you're a seasoned coffee connoisseur or just starting your exploration, our knowledgeable staff is always eager to assist. Have questions about our coffee offerings or seeking advice on brewing the perfect cup at home? We're here to share our expertise and elevate your coffee experience.</p>
      </div>
    </div>
  </div>
);
export default AboutSectionD;
