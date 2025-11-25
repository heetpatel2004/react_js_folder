import React from "react";

const Holder = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
      </div>
      <div className="flex flex-row justify-around gap-20 p-7">
        <div className="w-1/2">
          <img
            className="h-[150px] w-[150px] rounded-full"
            src="https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="mt-8">
          <p className="text-1xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            facere molestias distinctio sapiente provident, tempore repudiandae
            illo reprehenderit eos! Aliquid, dolore, enim pariatur libero
            assumenda eveniet non consectetur magnam qui repellendus ducimus
            accusamus nisi suscipit ab illo quibusdam deleniti molestiae.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-around gap-20 p-7">
        <div className="mt-8">
          <p className="text-1xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            facere molestias distinctio sapiente provident, tempore repudiandae
            illo reprehenderit eos! Aliquid, dolore, enim pariatur libero
            assumenda eveniet non consectetur magnam qui repellendus ducimus
            accusamus nisi suscipit ab illo quibusdam deleniti molestiae.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="h-[150px] w-[150px] rounded-full"
            src="https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Holder;
