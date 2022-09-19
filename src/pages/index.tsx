import classes from '@/styles/index.module.css'

const Index: React.FC = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.header_face}>
          <h1 className={classes.logo}>FUNCLUB</h1>
          <p>самое лучшее сообщество во Вселенной*</p>
          <p>* по нашему скромному мнению</p>
          <div
            onClick={() => {
              location.href = 'https://discord.com/invite/bNrAW37'
            }}
            className={classes.button}
          >
            <img
              style={{ width: '50px' }}
              src="https://cdn.discordapp.com/emojis/469071728681680897.webp?size=128&quality=lossless"
              alt=""
            />
            <div className={classes.button_text}>
              <p>FUNCLUB</p>
              <p>14к участников</p>
              <p>Вступить</p>
            </div>
          </div>
        </div>
        <div className={classes.button_menu}>
          <ul className={classes.list}>
            <li>
              <a
                target="_black"
                href="https://docs.google.com/document/d/1UXNTbQmOncB2Cd-X0ld6mjF4iSySNWAEmm9rtTFW5Qk/edit"
              >
                Донаты
              </a>
            </li>
            <li>
              <a target="_black" href="https://discord.com/invite/bNrAW37">
                SCP:SL
              </a>
            </li>
            <li>
              <a target="_black" href="https://funclub.pro/scpsl/">
                SS13
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Index
