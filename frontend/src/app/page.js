import Image from "next/image";
import homeCard4 from "@images/homecard4.png";
import homeCard1 from "@images/homecard1.png";
import homeCard2 from "@images/homecard2.png";
import homeCard3 from "@images/homecard3.png";
import feature1 from "@images/features1.svg";
import feature2 from "@images/features2.svg";
import feature3 from "@images/features3.svg";
import homestep1 from "@images/homestep1.svg";
import homestep2 from "@images/homestep2.svg";
import homestep3 from "@images/homestep3.svg";
import choosecloud from "@images/choosecloud.png";
import homestyles from "@styles/home.module.css";
import featurestyles from "@styles/features.module.css";
import stepstyles from "@styles/steps.module.css";

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

    <div className={stepstyles.step}>
          <h5><p className={stepstyles.circle}></p>Steps</h5>
          <h5 className={stepstyles.title}>How It Works</h5>
          <p className={stepstyles.description}>Easily link your YouTube account with our platform. Our cloud integration ensures your channel data stays safe.</p>

          <div className={`${stepstyles.step1} ${stepstyles.steps} ${stepstyles['step-content']}`}>
            <div>
  
            <div className={stepstyles.stepleft}>
            <h1><p className={stepstyles.stepcircle}></p>Connect YouTube</h1>
            </div>
            <div>
            <p className={stepstyles.borderp}>Upload Videos, and add permission. With Teamwork everything is in one 
            central location.</p>
            </div>
            <ul>
              <li>Schedule your content.</li>
              <li>Extra features for complex security.</li>
            </ul>
            </div>
            <div>
                <Image src={homestep1} width={500} height={500} className={stepstyles.stepimages} alt="Youtube Homestep"/>
            </div>
          </div>
          <div className={`${stepstyles.step2} ${stepstyles.steps} ${stepstyles['step-content']}`}>
          <div>
            <h1><p className={stepstyles.stepcircle}></p>Organize Content with ease</h1>
            <p className={stepstyles.borderp}>Use BlueOcean to see how your content is  uploaded and what’s left to do.</p>
            <ul>
              <li>Keep everyone accountable.</li>
              <li>Set custom access levels.</li>
            </ul>
            </div>
            <div>
            <Image src={homestep2} width={480} height={600} className={stepstyles.stepimages}  alt="Youtube Homestep"/>
            </div>
          </div>
          <div className={`${stepstyles.step3} ${stepstyles.steps} ${stepstyles['step-content']}`}>
            <div>
            <h1><p className={stepstyles.stepcircle}></p>Permission Control</h1>
            <p className={stepstyles.borderp}>Connect BluOcean  with all the favorite tools you’ve already use.</p>
            <h5> <p className={stepstyles.stepcircle}></p> Manage Permission </h5>
            
            </div>
            <div>
            <Image src={homestep3} width={500} height={500} className={stepstyles.stepimages} alt="Youtube Homestep"/>

            </div>
          </div>

         {/* <Image src={choosecloud} width={350} height={250} style={{margin:'8vh 0'}}alt="Choose Cloud"/> */}
         
            
          <div className={stepstyles.cloudcontainer}>
            <p>Choose your Cloud Storage</p>
            <div className={stepstyles.cloudtoggle}>
              <div className={stepstyles.cloudoption}>On 1TB</div>
              <div className={`${stepstyles.cloudoption} ${stepstyles.cloudactive}`}>
                More than One TB
                <span className={stepstyles.cloudbadge}>Most Recommended</span>
              </div>
            </div>
          </div>
    </div>
    </>
  );
}
