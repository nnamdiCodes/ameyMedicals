import React from 'react'
import teddyBear from '../images/teddyBear.PNG'
import { GrDocumentPerformance } from 'react-icons/gr'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { MdOutlineHighQuality } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'

const About = () => {
  return (
    <main className="About">
      <section className="firstSection">
        <article>
          <h2>ABOUT US</h2>
          <p>
            Amey Medicals is a one-stop online shop for all your medical, surgical and laboratory supplies. We ensure access to all your medical and surgical supplies at you fingertip. Offering a wide range of products from industry leading manufacturers at most affordable rates, coupled with the ease of online ordering. At Amey Medicals, each shipment undergoes stringent quality control at every level from order receipt to dispatch. Easy tracking of your shipments assisted by our customer care helpline make your purchases safe and reliable from order placement to completion of delivery. 
          </p>
        </article>

        <article className='imageContainer'>
          <figure>
            <img src={teddyBear} alt="ameyMedicalsImg" />
          </figure>
        </article>
      </section>

      <section className="secondSection">
        <article>
          <h2>Core Values</h2>
          <div className='coreValue-listItems'>

              <div className='coreValue-item'>
                <div className='aboutIconCircle'>
                  <MdOutlineHighQuality className='aboutIcon'/>
                </div>
                <div className='writeUp'>
                  <h3>Quality</h3>
                  <p>Amey medicals provide high quality product, we pride ourselves in giving the best to ensure customer satisfaction.</p>
                </div>
              </div>

              <div className='coreValue-item'>
                <div className='aboutIconCircle'>
                 <FaRegHandshake className='aboutIcon'/>
                </div>
                <div className='writeUp'>
                  <h3>Commitment</h3>
                  <p>
                    We adhere to the best products and other initiatives that benefit both internal and external organization
                  </p>
                </div>
              </div>

              <div className='coreValue-item'>
                <div className='aboutIconCircle'>
                  <GrDocumentPerformance className='aboutIcon'/>
                </div>
                <div className='writeUp'>
                  <h3>Performance</h3>
                  <p>
                    Creating a pathway to success by developing plans that ensures better results and strives for development.
                  </p>
                </div>
              </div>

              <div className='coreValue-item'>
                <div className='aboutIconCircle'>
                  <MdOutlineHealthAndSafety className='aboutIcon'/>
                </div>
                <div className='writeUp'>
                  <h3>Safety</h3>
                  <p>
                    Ensuring safety on top of all by adopting the measures needed for safe environmental policies and distributing standard product.
                  </p>
                </div>
              </div>
          </div>
        </article>

        <article>
          <p>
            Sub-standard medical equipment in medical practice can have severe negative effects, including ineffective treatments, misdiagnosis, increased risk of complications, patient harm, loss of public trust in healthcare providers, and potentiate outbreaks of infectious diseases. <span className="author">- World Health Organization(WHO)</span>
          </p>
        </article>
      </section>

      <section className="thirdSection">
        <article className='vision'>
          <h2 className='left'>VISION</h2>
          <div className='vision-statement'>
            <p>
              Offering solutions and products that are varifiably effective is our vision. It's our guiding principle on all levels, Whether in strategic decision making within the management teams or in the daily operative work of each of our employees. Our vision always pushes us to develop and offer high quality solutions and products which can be proven to be effective and effitient in their application.
            </p>
          </div>
        </article>

        <article className='mission'>
          <h2 className='right'>MISSION</h2>
          <div className='mission-statement'>
            <p>
              Our mission is to always improve the quality of life and the quality of work for all our clients. Safety and success of therapies are always our focus. For us, just as for every other business, economical success is the basic foundation fulfilling our mission. This we can only achieve together with the people we work for. Therefore they are at the center of our thinking and doing.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default About