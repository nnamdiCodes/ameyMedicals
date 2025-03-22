import React from 'react'
import Faq from './Faq'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import heroImg from '../images/hero img.JPG'
import medicalBooks from '../images/medical books.JPG'
import firstAidSupplies from '../images/first-aid supplies.JPG'
import labSupplies from '../images/lab supplies.JPG'
import others from '../images/others.JPG'

const Home = (
  {
    faqs, openIndex, toggleFaq, properties, itemsToShow, medicalBooksIndex, nextBooks, prevBooks, medicalWearsIndex, medicalDevicesIndex, diagnosticToolsIndex, firstAidSuppliesIndex, rehabilitationAidsIndex, homeCareEssentialsIndex, labSuppliesIndex, educationalToolsIndex, nextDevices, prevDevices, nextWears, prevWears, nextDiagnosticTools, prevDiagnosticTools, nextFirstAid, prevFirstAid, nextRehabAids, prevRehabAids, nextHomeCareEssentials, prevHomeCareEssentials, nextLabSupplies, prevLabSupplies, nextEduTools, prevEduTools
  }
) => {
  return (
    <main className="Home">

      <section className="Hero">
        <div className="outerDiv1">
          <figure>
            <img src={heroImg} alt="Hero img" />
          </figure>
        </div>

        <div className="outerDiv2">
          <figure>
            <img src={medicalBooks} alt="Medical Books" />
          </figure>
          <figure>
            <img src={firstAidSupplies} alt="First-aid Supplies" />
          </figure>
          <figure>
            <img src={labSupplies} alt="Lab Supplies" />
          </figure>
          <figure>
            <img src={others} alt="Other img" />
          </figure>
        </div>
        <div className="overlay"></div>
      </section>

      <section className='medSupplies'>

        <article className="medicalBooks">
          <h2>Medical Books</h2>
          <div className="medOuterDiv">
            {
              properties.medicalBooks.slice(medicalBooksIndex, medicalBooksIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
              ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevBooks} 
                className="arrowBackward"
                disabled={medicalBooksIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(medicalBooksIndex + itemsToShow).padStart(2, '0')} of {properties.medicalBooks.length}
              </span>
              <button 
                onClick={nextBooks} 
                className="arrowForward"
                disabled={medicalBooksIndex + itemsToShow >= properties.medicalBooks.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
            </div>
        </article>

        <article className="medicalWears">
          <h2>Medical Wears</h2>
          <div className="medOuterDiv">
            {
              properties.medicalWears.slice(medicalWearsIndex, medicalWearsIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
              ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevWears} 
                className="arrowBackward"
                disabled={medicalWearsIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(medicalWearsIndex + itemsToShow).padStart(2, '0')} of {properties.medicalWears.length}
              </span>
              <button 
                onClick={nextWears} 
                className="arrowForward"
                disabled={medicalWearsIndex + itemsToShow >= properties.medicalWears.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
          </div>
        </article>

        <article className="medicalDevices">
          <h2>Medical Devices</h2>
          <div className="medOuterDiv">
            {
              properties.medicalDevices.slice(medicalDevicesIndex, medicalDevicesIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
              ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevDevices} 
                className="arrowBackward"
                disabled={medicalDevicesIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(medicalDevicesIndex + itemsToShow).padStart(2, '0')} of {properties.medicalDevices.length}
              </span>
              <button 
                onClick={nextDevices} 
                className="arrowForward"
                disabled={medicalDevicesIndex + itemsToShow >= properties.medicalDevices.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
          </div>
        </article>

        <article className="diagnosticTools">
          <h2>Diagnostic Tools</h2>
          <div className="medOuterDiv">
           {
            properties.diagnosticTools.slice(diagnosticToolsIndex, diagnosticToolsIndex + itemsToShow).map((property, index) => (
              <div key={index} className="medinnerDiv">
                <figure>
                  <img src={property.image} alt={property.title} />
                </figure>
                <p>{property.title}</p>
              </div>
              ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevDiagnosticTools} 
                className="arrowBackward"
                disabled={diagnosticToolsIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(diagnosticToolsIndex + itemsToShow).padStart(2, '0')} of {properties.diagnosticTools.length}
              </span>
              <button 
                onClick={nextDiagnosticTools}
                className="arrowForward"
                disabled={diagnosticToolsIndex + itemsToShow >= properties.diagnosticTools.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
          </div>
        </article>

        <article className="firstAidSupplies">
          <h2>First-aid Supplies</h2>
          <div className="medOuterDiv">
            {
              properties.firstAidSupplies.slice(firstAidSuppliesIndex, firstAidSuppliesIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
              ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevFirstAid} 
                className="arrowBackward"
                disabled={firstAidSuppliesIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(firstAidSuppliesIndex + itemsToShow).padStart(2, '0')} of {properties.firstAidSupplies.length}
              </span>
              <button 
                onClick={nextFirstAid} 
                className="arrowForward"
                disabled={firstAidSuppliesIndex + itemsToShow >= properties.firstAidSupplies.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
          </div>
        </article>

        <article className="rehabilitationAids">
          <h2>Rehabilitation Aids</h2>
          <div className="medOuterDiv">
          {
              properties.rehabilitationAids.slice(rehabilitationAidsIndex, rehabilitationAidsIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
             ))
            }
          </div>
          <div className="navigation">
              <button 
                onClick={prevRehabAids} 
                className="arrowBackward"
                disabled={rehabilitationAidsIndex === 0}
              >
                <FaRegArrowAltCircleLeft />
              </button>
              <span className="counter">
                {String(rehabilitationAidsIndex + itemsToShow).padStart(2, '0')} of {properties.rehabilitationAids.length}
              </span>
              <button 
                onClick={nextRehabAids} 
                className="arrowForward"
                disabled={rehabilitationAidsIndex + itemsToShow >= properties.rehabilitationAids.length}
              >
                <FaRegArrowAltCircleRight />
              </button>
          </div>
        </article>

        <article className="homeCareEssentials">
          <h2>Home-care Essentials</h2>
          <div className="medOuterDiv">
            {
              properties.homeCareEssentials.slice(homeCareEssentialsIndex, homeCareEssentialsIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
             ))
            }
          </div>
          <div className="navigation">
            <button 
              onClick={prevHomeCareEssentials} 
              className="arrowBackward"
              disabled={homeCareEssentialsIndex === 0}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <span className="counter">
              {String(homeCareEssentialsIndex + itemsToShow).padStart(2, '0')} of {properties.homeCareEssentials.length}
            </span>
            <button 
              onClick={nextHomeCareEssentials} 
              className="arrowForward"
              disabled={homeCareEssentialsIndex + itemsToShow >= properties.homeCareEssentials.length}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </article>

        <article className="labsupplies">
          <h2>Lab supplies</h2>
          <div className="medOuterDiv">
            {
              properties.labSupplies.slice(labSuppliesIndex, labSuppliesIndex + itemsToShow).map((property, index) => (
                  <div key={index} className="medinnerDiv">
                    <figure>
                      <img src={property.image} alt={property.title} />
                    </figure>
                    <p>{property.title}</p>
                  </div>
                ))
            }
          </div>
          <div className="navigation">
            <button 
              onClick={prevLabSupplies} 
              className="arrowBackward"
              disabled={labSuppliesIndex === 0}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <span className="counter">
              {String(labSuppliesIndex + itemsToShow).padStart(2, '0')} of {properties.labSupplies.length}
            </span>
            <button 
              onClick={nextLabSupplies} 
              className="arrowForward"
              disabled={labSuppliesIndex + itemsToShow >= properties.labSupplies.length}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </article>

        <article className="educationalTools">
          <h2>Educational Tools</h2>
          <div className="medOuterDiv">
            {properties.educationalTools.slice(educationalToolsIndex, educationalToolsIndex + itemsToShow).map((property, index) => (
                <div key={index} className="medinnerDiv">
                  <figure>
                    <img src={property.image} alt={property.title} />
                  </figure>
                  <p>{property.title}</p>
                </div>
              ))
            }
          </div>
          <div className="navigation">
            <button 
              onClick={prevEduTools} 
              className="arrowBackward"
              disabled={educationalToolsIndex === 0}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <span className="counter">
              {String(educationalToolsIndex + itemsToShow).padStart(2, '0')} of {properties.educationalTools.length}
            </span>
            <button 
              onClick={nextEduTools} 
              className="arrowForward"
              disabled={educationalToolsIndex + itemsToShow >= properties.educationalTools.length}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </article>
      </section>

      <section className="faq">
        <h2>FAQ'S</h2>
        <Faq 
          faqs={faqs}
          openIndex={openIndex}
          toggleFaq={toggleFaq}
        />
      </section>
    </main>
  )
}

export default Home