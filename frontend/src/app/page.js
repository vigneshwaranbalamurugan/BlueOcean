import Image from "next/image";
import homeCard4 from "@images/homecard4.png";
import homeCard1 from "@images/homecard1.png";
import homeCard2 from "@images/homecard2.png";
import homeCard3 from "@images/homecard3.png";
import feature1 from "@images/features1.svg";
import feature2 from "@images/features2.svg"
import feature3 from "@images/features3.svg"

import homestyles from "@styles/home.module.css";
import featurestyles from "@styles/features.module.css";

export default function Home() {
  return (
  <>
  <div className={homestyles.home}>

    <div className={homestyles.rectangle}><Image src={homeCard2} width={250} height={250}   alt="Youtube Homecard"/></div>
    <div className={homestyles.rectangle}><Image src={homeCard3} width={250} height={250}   alt="Youtube Homecard"/></div>

      <h1>
          <div className={homestyles.row}>
              <p>Manage Your</p>
              <Image src={homeCard4} width={150} height={150} alt="Youtube Homecard" />
              <h2>Youtube</h2>
          </div>
          <div className={`${homestyles.row} ${homestyles.highlight}`}>
              <Image src={homeCard1} width={300} height={300} alt="Youtube Homecard" />
              <p>and Permissions</p>
          </div>
      </h1>
      <h5 className={homestyles.define}>
          Effortlessly link your YouTube uploads, organize your videos in the cloud, and control access with ease.
      </h5>
      <button><p className={homestyles.circle}></p>Try Out</button>
    </div>

    <div className={featurestyles.feature}>
            <h5><p className={featurestyles.circle}></p>Features</h5>
            <p className={featurestyles.description}>The features Both familiar and new.</p>

            <div className={featurestyles.features}>  
                <div>
                  <h1><p className={featurestyles.circle}></p>Youtube Integration</h1>
                  <p>Connect your channel and manage uploads directly.</p>
                  <Image src={feature1} className={featurestyles.image} alt="Feature Image"/>
                </div>
                <div>
                  <h1><p className={featurestyles.circle}></p>Cloud Storage</h1>
                  <p>Organize and secure your videos with scalable storage.</p>
                  <Image src={feature2} className={featurestyles.image} alt="Feature Image"/>
                </div>
                <div>
                  <h1><p className={featurestyles.circle}></p>Permission Control</h1>
                  <p>Set custom access levels for collaborators and viewers.</p>
                  <Image src={feature3} className={featurestyles.image} alt="Feature Image"/>
                </div>
            </div>
    </div>
    </>
  );
}
