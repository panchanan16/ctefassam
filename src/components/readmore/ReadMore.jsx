"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

function ReadMore() {
    const [isReadMore, setIsReadMore] = useState(false)
  return (
    <>
      <div className={`${isReadMore ? '' : 'hidden'}`}>
        <p className="text-gray-600 mb-8 leading-relaxed">
          CTEF is registered under the Societies Registration Act, 1860 (XXI of
          1860) with Registration No. Nagpur/0000403/2019. The Foundation is
          guided by an eminent leadership team, including Prof. R. G. Kothari
          (Chief Adviser, Gujarat), Dr. K. M. Bhandarkar (National President,
          Maharashtra), Prof. Nilima Bhagabati (International Secretary General,
          Assam), Dr. Ushosi Guha (Secretary, Legal Affairs, Maharashtra), Dr.
          Jasvir K. Chahal (Secretary, Media & Communication, Punjab), and Dr.
          Jignesh B. Patel (Assistant Secretary General, Gujarat). The
          organization is further strengthened by Zonal Vice Presidents—Dr.
          Satinder Dhillon (North Zone), Dr. V. M. Sasi Kumar (South Zone), Dr.
          Sanjeev Sonwane (West Zone), and Dr. Irom Gambhir Singh (East Zone).
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The CTEF Assam Chapter was launched in 2001 in Guwahati, the capital
          city of Assam. Currently, Prof. Nilima Bhagabati serves as Chairperson
          of the Assam Chapter, supported by Dr. Satya Brata Baruah (Treasurer)
          and Sri Sasanka Hazarika (Secretary).
        </p>
      </div>
      <button onClick={()=> setIsReadMore(!isReadMore)} className="flex items-center gap-2 text-emerald-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition">
        Read {isReadMore ? 'Less' : 'More'} <ArrowRight size={18} />
      </button>
    </>
  );
}

export default ReadMore;
