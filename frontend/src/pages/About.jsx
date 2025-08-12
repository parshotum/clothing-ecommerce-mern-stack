import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewletterBox from "../components/NewletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            asperiores a, quod tempore, sunt voluptate blanditiis tenetur
            reiciendis doloremque quas dolore aspernatur voluptates in quidem
            placeat consectetur quia illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, incidunt vitae pariatur, dignissimos, nam voluptas modi
            distinctio tempore laboriosam excepturi blanditiis nesciunt
            recusandae reprehenderit non molestias laudantium quasi esse autem.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tempora cupiditate debitis vero dignissimos nobis consequuntur distinctio, aliquam voluptatum, unde assumenda nihil ullam architecto odit accusantium at nostrum possimus nemo.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 text-gray-300 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-black">Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe obcaecati, doloremque, ex odio quod ratione corrupti quo, quidem in illum! Porro.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-black">Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, pariatur et quasi ad hic ea eum molestias </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className="text-black">Exceptional Customer Survice:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, pariatur et quasi ad hic ea eum molestias impedit accusantium nobis</p>
        </div>
      </div>
      <NewletterBox/>
    </div>
  );
};

export default About;
