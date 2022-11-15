import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Central-container'>
        <header>
          <div className='Top-green-box'>
            <select name='language'>
              <option value='lt'>Lietuviškai</option>
              <option value='en'>English</option>
            </select>
          </div>
          <div className='Name-position-block'>
            <h1>Monika Suroviatkinaite</h1>
            <h2>JUNIOR FRONTEND DEVELOPER</h2>
          </div>
        </header>
        <section className='Flex-container'>
          <div className='Flex-item'>
            <div className='Section-header-container'>
              <h2>Links</h2>
              <div className='Green-box-seperator'>
                <hr />
                <div className='Green-box'></div>
              </div>
            </div>
            <div className='Link-container'>
              <div className='Linkedin-logo'></div>
              <a
                className='Clean-link'
                href='https://www.linkedin.com/in/monika-suroviatkinaite-465722197/'
              >
                LINKEDIN/monika-suroviatkinaite
              </a>
            </div>

            <div className='Link-container'>
              <div className='Github-logo'></div>
              <a className='Clean-link' href='https://github.com/suromonika'>
                GITHUB/suromonika
              </a>
            </div>
          </div>
          <div className='Flex-item Flex-item--large'>
            <div className='Section-header-container'>
              <h2>About me</h2>
              <div className='Green-box-seperator'>
                <hr />
                <div className='Green-box'></div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis ut ullam illo sequi voluptates quas necessitatibus vel
              odit. Quam nemo voluptatum quos numquam unde eaque blanditiis
              voluptates. Voluptates incidunt, excepturi inventore at distinctio
              veniam sit nihil odit modi sed officia fugiat autem quo accusamus
              neque tenetur. Minus eum tenetur quisquam?
            </p>
          </div>
        </section>
        <section className='Flex-container'>
          <div className='Flex-item'>
            <div className='Section-header-container'>
              <h2>Education</h2>
              <div className='Green-box-seperator'>
                <hr />
                <div className='Green-box'></div>
              </div>
            </div>
            <ul className='Education-list'>
              <li>ALEKSANDRO STULGINSKIO UNIVERSITETAS</li>
              <li>2014 - 2018</li>
              <li>Land Use Planning Bachelor's degree</li>
            </ul>

            <hr className='Short-seperator' />

            <ul className='Education-list'>
              <li>CODEACADEMY</li>
              <li>2022 - 2023</li>
              <li>Frontend Developer Courses</li>
              <li>Beginner and Advanced</li>
            </ul>
          </div>
          <div className='Flex-item'>
            <div className='Section-header-container'>
              <h2>Personall Skills</h2>
              <div className='Green-box-seperator'>
                <hr />
                <div className='Green-box'></div>
              </div>
            </div>
            <ul className='Badge-list'>
              <li>
                <span className='Very-good'>Teamwork</span>
              </li>
              <li>
                <span className='Very-good'>Attention To Detail</span>
              </li>
              <li>
                <span className='Good'>Communication</span>
              </li>
            </ul>
          </div>
          <div className='Flex-item'>
            <div className='Section-header-container'>
              <h2>Technical Skills</h2>
              <div className='Green-box-seperator'>
                <hr />
                <div className='Green-box'></div>
              </div>
            </div>
            <ul className='Badge-list'>
              <li>
                <span className='Very-good'>HTML</span>
              </li>
              <li>
                <span className='Very-good'>CSS</span>
              </li>
              <li>
                <span className='Good'>Javascript</span>
              </li>
              <li>
                <span className='Basic'>React</span>
              </li>
              <li>
                <span className='Basic'>NodeJs</span>
              </li>
            </ul>
          </div>
        </section>
        <div className='Section-header-container'>
          <h2>Work Experience</h2>
          <div className='Green-box-seperator'>
            <hr />
            <div className='Green-box'></div>
          </div>
        </div>
        <section className='Flex-container'>
          <div className='Flex-item Right-border'>
            <ul className='No-decoration-central-list'>
              <li>DATA ANALYST (INTERNSHIP)</li>
              <li>Nacionalinis GIS Centras</li>
              <li>2017</li>
            </ul>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reiciendis natus! Officia perspiciatis perferendis accusantium,
              ipsa libero pariatur quaerat autem!
            </p>
            <ul className='List-padding-left'>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div className='Flex-item Right-border'>
            <ul className='No-decoration-central-list'>
              <li>CREDIT BALANCE SPECIALIST</li>
              <li>R1</li>
              <li>2018-2020</li>
            </ul>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reiciendis natus! Officia perspiciatis perferendis accusantium,
              ipsa libero pariatur quaerat autem!
            </p>
            <ul className='List-padding-left'>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className='Flex-item'>
            <ul className='No-decoration-central-list'>
              <li>ASSISTANT/ACCOUNTANT</li>
              <li>IPCom</li>
              <li>2020-2023</li>
            </ul>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reiciendis natus! Officia perspiciatis perferendis accusantium,
              ipsa libero pariatur quaerat autem!
            </p>
            <ul className='List-padding-left'>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </section>
        <hr />
        <footer className='Flex-container'>
          <div className='Flex-item'>
            <h2>Location</h2>
            <ul className='No-decoration-central-list'>
              <li>Munich, Germany</li>
            </ul>
          </div>
          <div className='Flex-item'>
            <h2>Contact</h2>
            <ul className='No-decoration-central-list'>
              <li>
                <a className='Clean-link Green-hover' href='tel:+49343434343'>
                  +49343434343
                </a>
              </li>
              <li>
                <a
                  className='Clean-link Green-hover'
                  href='mailto: suro.monika@gmail.com'
                >
                  suro.monika@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className='Flex-item'>
            <h2>Social</h2>
            <ul className='No-decoration-central-list'>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='Clean-link Green-hover'
                  href='https://www.linkedin.com/in/monika-suroviatkinaite-465722197/'
                >
                  LINKEDIN/monika-suroviatkinaite
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
