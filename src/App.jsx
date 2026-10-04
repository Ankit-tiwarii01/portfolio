import { useEffect, useRef, useState } from 'react'

const GH = 'https://github.com/Ankit-tiwarii01'
const EMAIL = 'ankittiwari100804@gmail.com'
const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'React.js Builder', 'Java Programmer']

const projects = [
  { t: 'Real-Time Group Chat', d: 'Instant messaging and one-to-one chat. Express and Node.js APIs store messages in MongoDB, and the React front end works on every device.', s: ['MongoDB', 'Express', 'React', 'Node.js'], links: [['Live demo', 'https://ankit-realtime-groupchat.netlify.app/']], big: true },
  { t: 'GenUI (Prompt2UI)', d: 'Describe an interface in plain words and get production-ready code. Pick a framework and check the result in a live preview.', s: ['React', 'AI APIs', 'JavaScript'], links: [['Live demo', 'https://prompt2ui.netlify.app/']], big: true },
  { t: 'College Community Hub', d: 'Student mentorship, announcements and job sharing, with role-based access control and admin verification.', s: ['React', 'Tailwind', 'Python', 'MySQL'], links: [] },
  { t: 'Notes App', d: 'Add, edit and organise your notes in one place.', s: ['JavaScript'], links: [['Source code', GH + '/Notes-App-Project']] },
  { t: 'Express Task Manager', d: 'A task manager API built with Express to create and track tasks.', s: ['Express', 'Node.js'], links: [['Source code', GH + '/express-task-manager']] },
  { t: 'CRUD User App', d: 'User management covering create, read, update and delete.', s: ['CRUD', 'JavaScript'], links: [['Source code', GH + '/CRUD-User-App']] },
]

const skills = [
  ['Languages', ['JavaScript', 'Java', 'C', 'C++', 'SQL', 'HTML5', 'CSS3']],
  ['Frontend', ['React.js', 'Tailwind CSS', 'Bootstrap']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'Mongoose']],
  ['Databases', ['MongoDB', 'MySQL', 'SQL Server']],
  ['Core CS', ['OOP', 'Data Structures', 'Algorithms', 'DBMS', 'Operating Systems']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify']],
]

const timeline = [
  { when: 'May – Jun 2026', t: 'Web Developer Intern', o: 'Primeor Solutions · Remote', pts: ['Built responsive components with HTML, CSS, JavaScript and React.js.', 'Pushed code to GitHub and tested features across browsers.', 'Earned an Internship Completion Certificate and a Letter of Recommendation.'] },
  { when: '2025 – 2027', t: 'MCA', o: 'C-DAC, GGSIPU · CGPA 8.93', pts: [] },
  { when: '2022 – 2025', t: 'BCA', o: 'J.B Knowledge Institute, MDU Faridabad · CGPA 7.01', pts: [] },
  { when: '2020 – 2022', t: 'Class XII (CBSE)', o: 'Government Boys Senior Secondary School · 69.8%', pts: [] },
]

function useTyping(words) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const id = setTimeout(() => {
      if (!del) {
        setTxt(w.slice(0, txt.length + 1))
        if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1300)
      } else {
        setTxt(w.slice(0, txt.length - 1))
        if (txt.length - 1 === 0) { setDel(false); setI((i + 1) % words.length) }
      }
    }, del ? 35 : 75)
    return () => clearTimeout(id)
  }, [txt, del, i, words])
  return txt
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect() } }, { threshold: 0.12 })
    o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}

export default function App() {
  const role = useTyping(roles)
  return (
    <>
      <div className="glow g1" /><div className="glow g2" />
      <header className="nav">
        <div className="wrap navin">
          <a className="logo" href="#top">Ankit<span>.</span></a>
          <nav>
            <a href="#projects">Projects</a><a href="#skills">Skills</a>
            <a href="#journey">Journey</a><a className="pill" href="#contact">Hire me</a>
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <section className="hero">
          <div>
            <p className="hi">Hi, I'm</p>
            <h1>Ankit Tiwari</h1>
            <p className="role">I'm a <b>{role}</b><i className="caret" /></p>
            <p className="lead">I build fast, responsive web apps and the APIs behind them with the MERN stack and Java. Currently doing my MCA at C-DAC, GGSIPU.</p>
            <div className="btns">
              <a className="btn pri" href="#projects">View projects</a>
              <a className="btn" href="/Ankit_Tiwari_Resume.pdf" download="Ankit_Tiwari_Resume.pdf">Download Resume ↓</a>
              <a className="btn" href={GH} target="_blank" rel="noopener">GitHub</a>
              <a className="btn" href="https://linkedin.com/in/ankit-tiwari-0099283ba" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <div className="stats">
              <div><b>8.93</b><span>MCA CGPA</span></div>
              <div><b>6</b><span>Projects</span></div>
              <div><b>MERN</b><span>Main stack</span></div>
            </div>
          </div>
          <div className="avatar">
            <div className="ring" />
            <img src="/photo.jpg" alt="Portrait of Ankit Tiwari" />
          </div>
        </section>

        <section id="projects">
          <Reveal><h2>Things I've built</h2></Reveal>
          <div className="grid">
            {projects.map((p) => (
              <Reveal key={p.t} className={p.big ? 'big' : ''}>
                <article className="card">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                  <div className="chips">{p.s.map((x) => <span key={x}>{x}</span>)}</div>
                  {p.links.map(([n, u]) => (
                    <a key={u} className="link" href={u} target="_blank" rel="noopener">{n} ↗</a>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills">
          <Reveal><h2>Tools I work with</h2></Reveal>
          <div className="skgrid">
            {skills.map(([g, list]) => (
              <Reveal key={g}>
                <div className="card sk"><h3>{g}</h3><div className="chips">{list.map((x) => <span key={x}>{x}</span>)}</div></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="journey">
          <Reveal><h2>Experience and education</h2></Reveal>
          <div className="tl">
            {timeline.map((e) => (
              <Reveal key={e.t}>
                <div className="tli">
                  <span className="dot" />
                  <small>{e.when}</small>
                  <h3>{e.t}</h3>
                  <p className="org">{e.o}</p>
                  {e.pts.length > 0 && <ul>{e.pts.map((x) => <li key={x}>{x}</li>)}</ul>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact">
          <Reveal>
            <div className="cta">
              <h2>Let's build something together</h2>
              <p>Open to internships and full-time roles. Based in New Delhi, India.</p>
              <div className="btns c">
                <a className="btn pri" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a className="btn" href="tel:+919625211997">+91 96252 11997</a>
                <a className="btn" href="/Ankit_Tiwari_Resume.pdf" download="Ankit_Tiwari_Resume.pdf">Download Resume ↓</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="wrap foot">© 2026 Ankit Tiwari</footer>
    </>
  )
}