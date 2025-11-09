import React from "react"
import propreitorimg from '../../assets/propreitor.png'




const MFP=()=>{
    return(
        <section className="w-full bg-green-100 py-16 flex flex-col items-center">
      {/* Header: Image + Title */}
      <div className="flex flex-col items-center gap-4 mb-10 px-6">
        <img
          src={propreitorimg}
          alt="Propreitor"
          className="w-36 h-36 object-cover rounded-full shadow-lg"
        />
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Message from the Proprietor
        </h2>
      </div>

      {/* Paragraph */}
      <div className="max-w-3xl px-6 text-justify text-gray-800 leading-relaxed text-base font-medium">
        <p>
          Dear Customers, Patrons, Well-Wishers, and Dedicated Employees of Sonali Accessories
          Co.,
        </p>
        <p className="mt-4">
          I want to express my heartfelt gratitude for your continuous support, loyalty, and
          dedicated services. Building strong relationships with our valued customers is crucial
          for our ongoing growth and success in today’s competitive and tech-driven world.
        </p>
        <p className="mt-4">
          At Sonali Accessories Co., we prioritize delivering exceptional quality, swift
          responsiveness, and timely delivery while addressing the challenges of relationship
          management. Our accomplishments, both financially and strategically, highlight our
          resilience and potential.
        </p>
        <p className="mt-4">
          We are fortunate to have a highly skilled and efficient management team dedicated to
          creating a corporate culture that prioritizes personalized services and customer
          satisfaction. Looking ahead, we remain committed to continuous product development
          and improving quality, responsiveness, and punctuality in delivery.
        </p>
        <p className="mt-4">
          On behalf of our organization, I reaffirm our commitment to delivering the highest
          standards of quality and timely delivery. We eagerly look forward to being an integral
          part of your supply chain management.
        </p>
        <p className="mt-4">
          Proud of our past achievements and excited about the future, I anticipate continued
          growth and improvement.
        </p>
        <p className="mt-6 font-semibold">
          Sincerely,<br />
          Md Abu Kauser Bhuiyan<br />
          Managing Director<br />
          M/S. Sonali Accessories Co.<br />
          M/S. S.K PRINTERS
        </p>
      </div>
    </section>
    )
}


export default MFP;