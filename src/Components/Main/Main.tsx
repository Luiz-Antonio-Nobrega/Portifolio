import './Main.css'

const frontStacks = ["TypeScript", 'JavaScript', 'Python/Jinja', 'React', 'Redux', 'Bootstrap'];
const backStacks = [
  "TypeScript",
  'JavaScript',
  'Node.js',
  'MySQL/Sequelize',
  'Python',
  'MongoDB',
  'Django',
  'DRF',
  'Requests',
  'Beautifulsoup'
];

export default function Main() {
    return (
      <>
      <br />
        <main id='resume' className='resume'>
        <h1>Resume</h1>
        <section id='about-me' className='about-me'>
          <img src="./imgs/selfie.jpeg" alt="uma foto minha" />
          <p className='resume-p'>Olá! Sou um desenvolvedor Fullstack recém-formado pela Trybe.
            Durante minha formação, aprendi não só hardskills, mas também
            diversas habilidades de resolução de problemas e cooperação que me garantiram
            um diferencial na minha área.</p>
          <p></p>
        </section>
        <section className='stacks-section'>
          <h1>Competências</h1>
          <div className='stacks-container'>
            <div>
              <h2>Front-End</h2>
                <ul>
                  {frontStacks.map((stack: string, index) => (
                    <li key={index}>
                      {stack}
                    </li>
                    ))}
                </ul>
            </div>
            <div>
              <h2>Back-End</h2>
                <ul>
                  {backStacks.map((stack: string, index) => (
                    <li key={index}>
                      {stack}
                    </li>
                    ))}
                </ul>
            </div>
          </div>
        </section>
        </main>
      </>
    )
}