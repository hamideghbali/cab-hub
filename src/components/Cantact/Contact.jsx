import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* left text content section */}
          <div className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">
              Best In City
            </h1>
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold uppercase"
            >
              Trusted cab services in toronto
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis neque, dolorum deserunt sed quae iste accusamus non
              alias recusandae, voluptate eveniet porro. Cumque mollitia
              eligendi dolorem illo sequi iusto repellendus!
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </div>
          {/* right sectiom text content section */}
          <div data-aos="fade">
            <div className="w-full md:min-w-[350px] mx-auto">
              <h1 className="uppercase text-2xl text-white bg-black px-5 py-3 ">
                Book a Cab
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-6">
              <input className="inputField" name="" id="" placeholder="Name" />
              <input
                className="inputField"
                type="text"
                name=""
                id=""
                placeholder="Phone"
              />

              <input
                className="inputField"
                type="text"
                name=""
                id=""
                placeholder="Start"
              />
              <input
                className="inputField"
                type="text"
                name=""
                id=""
                placeholder="End"
              />
              <input
                className="inputField col-span-2"
                type="text"
                name=""
                id=""
                placeholder="Choose Vehicle"
              />
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                className="col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
