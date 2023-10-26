const skills = [
  {
    id: crypto.randomUUID(),
    name: 'Programação',
    emoji: '👌🏼',
    bgColor: 'bg-lightblue'
  },
  {
    id: crypto.randomUUID(),
    name: 'Futebol',
    emoji: '🤏🏼',
    bgColor: 'bg-yellow'
  },
  {
    id: crypto.randomUUID(),
    name: 'Cozinha',
    emoji: '🤏🏼',
    bgColor: 'bg-red'
  },
  {
    id: crypto.randomUUID(),
    name: 'Bateria',
    emoji: '👌🏼',
    bgColor: 'bg-lightblue'
  }
]

const Avatar = () =>
  <img
    src="https://avatars.githubusercontent.com/u/92958989?v=4"
    alt="Jansen"
    className="avatar"
  />

const Intro = () => (
  <>
    <h1>Jansen</h1>
    <p>
      Desenvolvedor Frontend, tenho 33 anos, sou casado.
      Gosto de tocar bateria, meu esporte favorito é o futebol.
      Gosto de filmes e séries também.
    </p>
  </>
)

const Skill = ({ name, emoji, bgColor }) =>
  <li className={`skill ${bgColor}`}>
    {emoji} {name}
  </li>

const ListOfSkills = () => (
  <ul className="list-of-skills">
    {skills.map(({ id, name, bgColor, emoji }) => (
      <Skill
        key={id}
        name={name}
        bgColor={bgColor}
        emoji={emoji}
      />
    ))}
  </ul>
)

const App = () => (
  <div className="card">
    <Avatar />

    <div className="info">
      <Intro />
      <ListOfSkills />
    </div>
  </div>
)


export { App }
