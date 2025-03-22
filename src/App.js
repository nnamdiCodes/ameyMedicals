import { useState, useEffect, useRef } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import physiologyTextbookImg from '../src/images/mb-physio.WEBP'
import biochemTextbookImg from '../src/images/mb-biochem.JPG'
import clinicalSurgeryManual from '../src/images/mb-surgery.JPG'
import hutchisonClinicalMethod from '../src/images/mb-med.JPG'
import theGuideSurgery from '../src/images/mb-theGuideSurg.JPG'
import theGuideMedicine from '../src/images/mb-theGuideMed.JPG'
import theGuideObsndGynae from '../src/images/mb-theGuideO&G.JPG'
import theGuidePaediatric from '../src/images/mb-theGuidePaed.JPG'
import labCoatImg from '../src/images/mw-labcoat.JPG'
import medicalScrub from '../src/images/mw-scrub.JPG'
import labHairCover1 from '../src/images/mw-cap1.JPG'
import labHairCover2 from '../src/images/mw-cap2.JPG'
import labHairCover3 from '../src/images/mw-cap3.JPG'
import digitalProbeThermometer from '../src/images/md-digit-probe.JPG'
import digitalTemporalThermometer from '../src/images/md-temporal-themo.JPG'
import digitalEarThermometer from '../src/images/md-ear-thermo.JPG'
import stethoscope from '../src/images/md-stetho.JPG'
import aneriodSphygomanometer from '../src/images/md-aneriod-bp.JPG'
import mercurySphygomanometer from '../src/images/md-mecury-bp.JPG'
import digitalSphygomanometer from '../src/images/md-digital-bp.JPG'
import pulseOximeter from '../src/images/md-pulse.JPG'
import glucometer from '../src/images/md-glucometer.JPG'
import penTouch from '../src/images/md-pentouch.JPG'
import otoscope from '../src/images/dt-otoscope.JPG'
import ophthalmoscope from '../src/images/dt-opthalmoscope.JPG'
import reflexHammer from '../src/images/dt-hammer.JPG'
import microscope from '../src/images/dt-microscope.JPG'
import bandage from '../src/images/fa-bandage.JPG'
import gauze from '../src/images/fa-gauze.JPG'
import antiseptic from '../src/images/fa-antiseptic.JPG'
import gloves from '../src/images/fa-gloves.JPG'
import faceMask from '../src/images/fa-mask.JPG'
import syringe from '../src/images/fa-syringe.JPG'
import basicFirstAidKits from '../src/images/fa-fa-kits.JPG'
import walkers from '../src/images/ra-walker.JPG'
import underarmCrutches from '../src/images/ra-underarm-crutches.PNG'
import forearmCrutches from '../src/images/ra-forearm-crutches.PNG'
import massageChair1 from '../src/images/ra-relax-massage-chair.JPG'
import massageChair2 from '../src/images/ra-relax-massage-chair2.JPG'
import bedpan from '../src/images/hce-bedpan.JPG'
import commode from '../src/images/hce-commode.JPG'
import wheelchair from '../src/images/hce-wheelchair.JPG'
import bedRail from '../src/images/hce-bedrail.JPG'
import testTube from '../src/images/ls-tubes.JPG'
import beaker from '../src/images/ls-beaker.JPG'
import disposablePipette from '../src/images/ls-pipette.JPG'
import adjustableVolumePipette from '../src/images/ls-pipette2.JPG'
import bunsenBurner from '../src/images/ls-bunsenburner.JPG'
import autoclave from '../src/images/ls-autoclave.JPG'
import skeleton from '../src/images/et-humanskeleton.JPG'
import humanskull from '../src/images/et-cranium.JPG'
import humanRibs from '../src/images/et-ribs.JPG'
import kneeJointModel from '../src/images/et-knee-joint.JPG'
import legBone from '../src/images/et-leg.JPG'
import humanFace from '../src/images/et-face.JPG'
import brainModel from '../src/images/et-brain.JPG'
import teethModel from '../src/images/et-teeth.JPG'
import toothModel from '../src/images/et-tooth.JPG'
import humanLungs from '../src/images/et-lungs.JPG'
import heartModel from '../src/images/et-heart.JPG'
import abdthoracicModel from '../src/images/et-abd-organ.JPG'
import footModel from '../src/images/et-foot.JPG'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')) || window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [openIndex, setOpenIndex] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(1)
  const [medicalBooksIndex, setMedicalBooksIndex] = useState(0)
  const [medicalWearsIndex, setMedicalWearsIndex] = useState(0)
  const [medicalDevicesIndex, setMedicalDevicesIndex] = useState(0)
  const [diagnosticToolsIndex, setDiagnosticToolsIndex] = useState(0)
  const [firstAidSuppliesIndex, setFirstAidSuppliesIndex] = useState(0)
  const [rehabilitationAidsIndex, setRehabilitationAidsIndex] = useState(0)
  const [homeCareEssentialsIndex, setHomeCareEssentialsIndex] = useState(0)
  const [labSuppliesIndex, setLabSuppliesIndex] = useState(0)
  const [educationalToolsIndex, setEducationalToolsIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  useEffect(() => {
    document.body.className = isDarkMode ? 'darkMode' : 'lightMode';
    
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode)); 
  }, [isDarkMode]);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 992) {
        setItemsToShow(4)
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3)
      } else if (window.innerWidth >= 576) {
        setItemsToShow(2)
      } else {
        setItemsToShow(1)
      }
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)

    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  const [properties, setProperties] = useState({
    medicalBooks: [
      {
        description: "Medical Books",
        image: physiologyTextbookImg,
        title: "Essential of Medical Physiology, K. Sembulingam and Prema Sembulingam"
      },
      {
        description: "Medical Books",
        image: biochemTextbookImg,
        title: "Biochemistry Textbook, U. Satyanarayana and U. Chakrapani"
      },
      {
        description: "Medical Books",
        image: clinicalSurgeryManual,
        title: "Clinical Surgery Manual, O. E. Udefiagbon"
      },
      {
        description: "Medical Books",
        image: hutchisonClinicalMethod,
        title: "Hutchison's Clinical Method, Michael Glynn and William M. Drake"
      },
      {
        description: "Medical Books",
        image: theGuideSurgery,
        title: "The Guide Surgery"
      },
      {
        description: "Medical Books",
        image: theGuideMedicine,
        title: "The Guide Medicine"
      },
      {
        description: "Medical Books",
        image: theGuideObsndGynae,
        title: "The Guide O&G"
      },
      {
        description: "Medical Books",
        image: theGuidePaediatric,
        title: "The Guide Paediatric"
      }
    ],
      medicalWears: [
        {
          description: "Medical Wears",
          image: labCoatImg,
          title: "Laboratory Coat"
        },
        {
          description: "Medical Wears",
          image: medicalScrub,
          title: "Medical Scrub"
        },
        {
          description: "Medical Wears",
          image: labHairCover1,
          title: "Theatre Scrub Hat"
        },
        {
          description: "Medical Wears",
          image: labHairCover2,
          title: "Theatre Scrub Hat"
        },
        {
          description: "Medical Wears",
          image: labHairCover3,
          title: "Theatre Scrub Hat"
        },
      ],
      medicalDevices: [
        {
          description: "Medical Devices",
          image: digitalProbeThermometer,
          title: "Digital Probe Thermometer"
        },
        {
          description: "Medical Devices",
          image: digitalTemporalThermometer,
          title: "Digital Temporal Thermometer"
        },
        {
          description: "Medical Devices",
          image: digitalEarThermometer,
          title: "Digital Ear Thermometer"
        },
        {
          description: "Medical Devices",
          image: stethoscope,
          title: "Stethoscope"
        },
        {
          description: "Medical Devices",
          image: aneriodSphygomanometer,
          title: "Aneriod Sphygomanometer"
        },
        {
          description: "Medical Devices",
          image: mercurySphygomanometer,
          title: "Mercury Sphygomanometer"
        },
        {
          description: "Medical Devices",
          image: digitalSphygomanometer,
          title: "Digital Sphygomanometer"
        },
        {
          description: "Medical Devices",
          image: pulseOximeter,
          title: "Pulse Oximeter"
        },
        {
          description: "Medical Devices",
          image: glucometer,
          title: "Glucometer"
        },
        {
          description: "Medical Devices",
          image: penTouch,
          title: "Pen Touch"
        }
      ],
      diagnosticTools: [
        {
          description: "Diagnostic Tools",
          image: otoscope,
          title: "Otoscope"
        },
        {
          description: "Diagnostic Tools",
          image: ophthalmoscope,
          title: "Ophthalmoscope"
        },
        {
          description: "Diagnostic Tools",
          image: reflexHammer,
          title: "Reflex Hammer"
        },
        {
          description: "Diagnostic Tools",
          image: microscope,
          title: "Microscope"
        }
      ],
      firstAidSupplies: [
        {
          description: "First-aid Supplies",
          image: bandage,
          title: "Bandage"
        },
        {
          description: "First-aid Supplies",
          image: gauze,
          title: "Gauze"
        },
        {
          description: "First-aid Supplies",
          image: antiseptic,
          title: "Antiseptic"
        },
        {
          description: "First-aid Supplies",
          image: gloves,
          title: "Gloves"
        },
        {
          description: "First-aid Supplies",
          image: faceMask,
          title: "Face-Mask"
        },
        {
          description: "First-aid Supplies",
          image: syringe,
          title: "Syringe"
        },
        {
          description: "First-aid Supplies",
          image: basicFirstAidKits,
          title: "Basic First-aid Kits"
        }
      ],
      rehabilitationAids: [
        {
          description: "Rehabilitation Aids",
          image: walkers,
          title: "Walkers"
        },
        {
          description: "Rehabilitation Aids",
          image: underarmCrutches,
          title: "Under-arm Crutches"
        },
        {
          description: "Rehabilitation Aids",
          image: forearmCrutches,
          title: "Fore-arm Crutches"
        },
        {
          description: "Rehabilitation Aids",
          image: massageChair1,
          title: "Relaxation massage Chair"
        },
        {
          description: "Rehabilitation Aids",
          image: massageChair2,
          title: "Relaxation massage Chair"
        }
      ],
      homeCareEssentials: [
        {
          description: "Home Care Essentials",
          image: bedpan,
          title: "Bedpan"
        },
        {
          description: "Home Care Essentials",
          image: commode,
          title: "Commode"
        },
        {
          description: "Home Care Essentials",
          image: wheelchair,
          title: "Wheelchair"
        },
        {
          description: "Home Care Essentials",
          image: bedRail,
          title: "Bed Rail"
        }
      ],
      labSupplies: [
        {
          description: "Lab supplies",
          image: testTube,
          title: "Test Tube"
        },
        {
          description: "Lab supplies",
          image: beaker,
          title: "Beaker"
        },
        {
          description: "Lab supplies",
          image: disposablePipette,
          title: "Disposable Pipette"
        },
        {
          description: "Lab supplies",
          image: adjustableVolumePipette,
          title: "Adjustable Volume Pipette"
        },
        {
          description: "Lab supplies",
          image: bunsenBurner,
          title: "Bunsen Burner"
        },
        {
          description: "Lab supplies",
          image: autoclave,
          title: "Autoclave"
        }
      ],
      educationalTools: [
        {
          description: "Educational Tools",
          image: skeleton,
          title: "Skeleton"
        },
        {
          description: "Educational Tools",
          image: humanskull,
          title: "Human Skull"
        },
        {
          description: "Educational Tools",
          image: humanRibs,
          title: "Human Ribs"
        },
        {
          description: "Educational Tools",
          image: kneeJointModel,
          title: "Knee Joint Model"
        },
        {
          description: "Educational Tools",
          image: legBone,
          title: "Leg Bone"
        },
        {
          description: "Educational Tools",
          image: humanFace,
          title: "human Face"
        },
        {
          description: "Educational Tools",
          image: brainModel,
          title: "Brain Model"
        },
        {
          description: "Educational Tools",
          image: teethModel,
          title: "Teeth Model"
        },
        {
          description: "Educational Tools",
          image: toothModel,
          title: "Tooth Model"
        },
        {
          description: "Educational Tools",
          image: humanLungs,
          title: "Human Lungs"
        },
        {
          description: "Educational Tools",
          image: heartModel,
          title: "Heart Model"
        },
        {
          description: "Educational Tools",
          image: abdthoracicModel,
          title: "AbdOMINAL-thoracic Model"
        },
        {
          description: "Educational Tools",
          image: footModel,
          title: "Foot Model"
        }
      ]
  })

  const [faqs, setFaqs] = useState([
    {
      question: "Are you a manufacturer or a trader?",
      answer: "We are actually traders of wide range of medical supplies. We do have an assembly section for many items as per customer requirements."
    }, 
    {
      question: "Tell me something about your company's history and objectives?",
      answer: "We started few years back with the sole purpose of providing both students and medical practitioners quality products to ease their training."
    },
    {
      question: "Do you have any Quality certification?",
      answer: "Yes we have multiple quality certifications for our products."
    },
    {
      question: "What is the minimum order that we can place?",
      answer: "Our minimum order quantity varies by product. Please contact us for more details."
    },
    {
      question: "Do you provide dealership?",
      answer: "We do provide dealership and would be happy to work along side wholesalers. please contact us for more details"
    },
    {
      question: "How do you transport your product? & what is the transport time?",
      answer: "We colaborate with dispatch riders and the time it would take for you to get our product depends on your location."
    }, {
      question: "What type of product do you sell?",
      answer: "We sell different type of products among which are top quality medical supplies."
    },
    {
      question: "Other Questions / Queries",
      answer: "Please if you do have any other question regarding our products or our mode of operation, Do well to contact us. Thank you"
    }
  ])

  const nextBooks = () => {
    setMedicalBooksIndex((prev) => prev + 1 >= properties.medicalBooks.length ? 0 : prev + 1)
  }

  const prevBooks = () => {
    setMedicalBooksIndex((prev) => prev - 1 < 0 ? properties.medicalBooks.length - 1 : prev - 1)
  }

  const nextDevices = () => {
    setMedicalDevicesIndex((prev) => prev + 1 >= properties.medicalDevices.length ? 0 : prev + 1)
  }

  const prevDevices = () => {
    setMedicalDevicesIndex((prev) => prev - 1 < 0 ? properties.medicalDevices.length - 1 : prev - 1)
  }

  const nextWears = () => {
    setMedicalWearsIndex((prev) => prev + 1 >= properties.medicalWears.length ? 0 : prev + 1)
  }

  const prevWears = () => {
    setMedicalWearsIndex((prev) => prev - 1 < 0 ? properties.medicalWears.length - 1 : prev - 1)
  }

  const nextDiagnosticTools = () => {
    setDiagnosticToolsIndex((prev) => prev + 1 >= properties.diagnosticTools.length ? 0 : prev + 1)
  }

  const prevDiagnosticTools = () => {
    setDiagnosticToolsIndex((prev) => prev - 1 < 0 ? properties.diagnosticTools.length - 1 : prev - 1)
  }

  const nextFirstAid = () => {
    setFirstAidSuppliesIndex((prev) => prev + 1 >= properties.firstAidSupplies.length ? 0 : prev + 1)
  }

  const prevFirstAid = () => {
    setFirstAidSuppliesIndex((prev) => prev - 1 < 0 ? properties.firstAidSupplies.length - 1 : prev - 1)
  }

  const nextRehabAids = () => {
    setRehabilitationAidsIndex((prev) => prev + 1 >= properties.rehabilitationAids.length ? 0 : prev + 1)
  }

  const prevRehabAids = () => {
    setRehabilitationAidsIndex((prev) => prev - 1 < 0 ? properties.rehabilitationAids.length - 1 : prev - 1)
  }

  const nextHomeCareEssentials = () => {
    setHomeCareEssentialsIndex((prev) => prev + 1 >= properties.homeCareEssentials.length ? 0 : prev + 1)
  }

  const prevHomeCareEssentials = () => {
    setHomeCareEssentialsIndex((prev) => prev - 1 < 0 ? properties.homeCareEssentials.length - 1 : prev - 1)
  }

  const nextLabSupplies = () => {
    setLabSuppliesIndex((prev) => prev + 1 >= properties.labSupplies.length ? 0 : prev + 1)
  }

  const prevLabSupplies = () => {
    setLabSuppliesIndex((prev) => prev - 1 < 0 ? properties.labSupplies.length - 1 : prev - 1)
  }

const nextEduTools = () => {
  setEducationalToolsIndex(
    (prev) => prev + 1 >= properties.educationalTools.length ? 0 : prev + 1
  );
};

const prevEduTools = () => {
  setEducationalToolsIndex((prev) => prev - 1 < 0 ? properties.educationalTools.length - 1 : prev - 1
  );
};

const validateForm = () => {
  let isValid = true
  const newErrors = {}

  if (!formData.name) {
    newErrors.name = 'This field is required'
     nameRef.current.focus()
      isValid = false
  }

  if (!formData.email) {
    newErrors.email = 'This field is required'
    if (isValid) emailRef.current.focus()
      isValid = false
  }

  if (!formData.phone) {
    newErrors.phone = 'This field is required'
    if (isValid) phoneRef.current.focus()
      isValid = false
  }

  if (!formData.message) {
    newErrors.message = 'This field is required'
    if (isValid) messageRef.current.focus()
      isValid = false
  }

  setErrors(newErrors)
  return isValid
}

const showToast = (messageToast) => {
  alert(messageToast)
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (validateForm()) {
    showToast('Message submitted successfully')
  }
};

  const handleChange = (event) => {
  const {name, type, checked, value} = event.target
  setFormData(prevContact => {
    return (
      {...prevContact, [name]: type === "checkbox" ? checked : value}
    )
  })
  }

  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleMenu = () => {
    setIsActive(prevMenu => !prevMenu)
  }

  return (
    <Routes>
      <Route path='/' element={ <Layout 
                                  isActive={isActive}
                                  toggleMenu={toggleMenu}
                                  isDarkMode={isDarkMode}
                                  handleClick={handleClick}
                                /> }>
        <Route index element={ <Home 
                                  properties={properties}
                                  setProperties={setProperties}
                                  itemsToShow={itemsToShow}
                                  medicalBooksIndex={medicalBooksIndex}
                                  medicalWearsIndex={medicalWearsIndex}
                                  medicalDevicesIndex={medicalDevicesIndex}
                                  diagnosticToolsIndex={diagnosticToolsIndex}
                                  firstAidSuppliesIndex={firstAidSuppliesIndex}
                                  rehabilitationAidsIndex={rehabilitationAidsIndex}
                                  homeCareEssentialsIndex={homeCareEssentialsIndex}
                                  labSuppliesIndex={labSuppliesIndex}
                                  educationalToolsIndex={educationalToolsIndex}
                                  nextBooks={nextBooks}
                                  prevBooks={prevBooks}
                                  nextDevices={nextDevices}
                                  prevDevices={prevDevices}
                                  nextWears={nextWears}
                                  prevWears={prevWears}
                                  nextDiagnosticTools={nextDiagnosticTools}
                                  prevDiagnosticTools={prevDiagnosticTools}
                                  nextFirstAid={nextFirstAid}
                                  prevFirstAid={prevFirstAid}
                                  nextRehabAids={nextRehabAids}
                                  prevRehabAids={prevRehabAids}
                                  nextHomeCareEssentials={nextHomeCareEssentials}
                                  prevHomeCareEssentials={prevHomeCareEssentials}
                                  nextLabSupplies={nextLabSupplies}
                                  prevLabSupplies={prevLabSupplies}
                                  nextEduTools={nextEduTools}
                                  prevEduTools={prevEduTools}
                                  faqs={faqs}
                                  setFaqs={setFaqs}
                                  openIndex={openIndex}
                                  toggleFaq={toggleFaq}
                              /> } />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact 
                                          handleChange={handleChange}
                                          name={formData.name}
                                          email={formData.email}
                                          phone={formData.phone}
                                          message={formData.message}
                                          handleSubmit={handleSubmit}
                                          errors={errors}
                                          nameRef={nameRef}
                                          emailRef={emailRef}
                                          phoneRef={phoneRef}
                                          messageRef={messageRef}
                                        /> } />
      </Route>
    </Routes>
  );
}

export default App;
