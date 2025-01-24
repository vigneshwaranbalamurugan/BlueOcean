import Image from "next/image";
import homeCard4 from "@images/homecard4.png";
import homeCard1 from "@images/homecard1.png";
import homeCard2 from "@images/homecard2.png";
import homeCard3 from "@images/homecard3.png";
import homestyles from "@styles/home.module.css";

export default function Home() {
  return (
  <div className={homestyles.home}>

    <div className={homestyles.rectangle}><Image src={homeCard2} width={250} height={250}   alt="Youtube Homecard"/></div>
    <div className={homestyles.rectangle}><Image src={homeCard3} width={250} height={250}   alt="Youtube Homecard"/></div>

      <h1>
          <div className={homestyles.row}>
              <p>Manage Your</p>
              <Image src={homeCard4} width={100} height={100} alt="Youtube Homecard" />
              <h2>Youtube</h2>
          </div>
          <div className={`${homestyles.row} ${homestyles.highlight}`}>
              <Image src={homeCard1} width={200} height={200} alt="Youtube Homecard" />
              <p>and Permissions</p>
          </div>
      </h1>
      <h5 className={homestyles.define}>
          Effortlessly link your YouTube uploads, organize your videos in the cloud, and control access with ease.
      </h5>
      <button><p className={homestyles.circle}></p>Try Out</button>
    </div>
  );
}
