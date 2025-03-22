import React from 'react'
import map from '../images/map.JPG'
import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = ({
  handleChange, name, email, phone, message, handleSubmit, errors, nameRef, emailRef, phoneRef, messageRef
}) => {
  return (
    <main className="Contact">
      <h2>CONTACT US</h2>
      <section>
        <article>
          <h3>Do well to reach out to us through any of the platform below</h3>
          <div className='contactOuterDiv'>
            <h4>PHONE</h4>
            <div className='contactInnerDiv'>
              <figure>
                <FiPhoneCall />
              </figure>
              <p>+234-9068532308</p>
            </div>
          </div>

          <div className='contactOuterDiv'>
            <h4>Whatsapp</h4>
            <div className='contactInnerDiv'>
              <figure>
                <FaWhatsapp />
              </figure>
              <p>+234-9068532308</p>
            </div>
          </div>

          <div className='contactOuterDiv'>
            <h4>Email</h4>
            <div className='contactInnerDiv'>
              <figure>
                <MdEmail />
              </figure>
              <p>amebookpalace@gmail.com</p>
            </div>
          </div>
        </article>
        
        <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="contactForm"
            >
            <h4>Send Us a Message</h4>
            <input type="hidden" name="form-name" value="contact" className="hidden"/>

            <div>
                <label htmlFor="name" className='offscreen'>Name *</label>
                <input type="text" 
                    id='name' 
                    placeholder='Name*'
                    name='name' 
                    value={name} 
                    onChange={handleChange}
                    ref={nameRef} 
                    className= {errors.name ? 'input-error' : 'input-normal'}
                />
                {errors.name && <p className='errMsg'>{errors.name}</p>}
            </div>
    
            <div>
                <label htmlFor="email" className='offscreen'>Email *</label>
                <input type="email" 
                    id='email' 
                    placeholder='Email*'
                    name='email' 
                    value={email} 
                    onChange={handleChange}
                    ref={emailRef} 
                    className= {errors.email ? 'input-error' : 'input-normal'}
                />
                {errors.email && <p className='errMsg'>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="phone" className='offscreen'>Phone *</label>
                <input type="phone" 
                    id='phone' 
                    placeholder='phone*'
                    name='phone' 
                    value={phone} 
                    onChange={handleChange}
                    ref={phoneRef} 
                    className= {errors.phone ? 'input-error' : 'input-normal'}
                />
                {errors.phone && <p className='errMsg'>{errors.phone}</p>}
            </div>
    
            <div>
                <label htmlFor="message" className='offscreen'>Message *</label>
                <textarea 
                    id="message" 
                    placeholder='Message*'
                    name="message" 
                    value={message}
                    onChange={handleChange}
                    ref={messageRef} 
                    className= {errors.message ? 'input-error' : 'input-normal'}
                />
                {errors.message && <p className='errMsg'>{errors.message}</p>}
            </div>
    
            <button type='submit'>SEND MESSAGE</button>
        </form>
      </section>
      <figure className='map'>
        <img src={map} alt="mapImg" className='mapImg'/>
      </figure>
    </main>
  )
}

export default Contact