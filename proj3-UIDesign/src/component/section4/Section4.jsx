import React from "react";

const Section4 = () => {
  return (<>
    <div className=" h-[55vh] mt-85 text-center p-2 flex flex-col items-center">
      <h1 className="text-2xl font-black">Contact us form</h1>
      <div className="mt-5  flex flex-col justify-center items-center  border-2 rounded-2xl w-[50%]   ">
        <form action="#" className="flex flex-col p-6">
            <label htmlFor="name" className="font-bold">Full Name:</label>
            <input className="ml-3 border-1" type="text" name="name" placeholder="enter your name here" />

            <label htmlFor="mobile-no" className="font-bold">Mobile number:</label>
            <input className="ml-3 border-1" type="number" name="mobile-no" placeholder="enter your number here" />

            <label htmlFor="email" className="font-bold">E-mail:</label>
            <input className="ml-3 border-1" type="text" name="email" placeholder="enter your email-id here" />

            <label htmlFor="queries" className="font-bold">Query:</label>
            <input className="ml-3 border-1" type="text" name="queries" placeholder="enter your query here" />
        </form>

        <button className="border-1 p-3 w-20 h-5 mb-3 flex justify-center items-center">submit</button>
      </div>
    </div>
    <div className="mt-10 text-center font-medium bg-black text-white p-3">
    <footer>
        @copyright reserved Shreeji Infotech Pvt. Ltd
    </footer></div>

    </>
  );
};

export default Section4;
