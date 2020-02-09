import React from 'react'
import { CookiesProvider, useCookies, withCookies } from "react-cookie"
import './Fukiso.css'

const COOKIE_NAME_FUKISO = "fukiso"

const Fukiso = ({cookies}) => {
  const [_, setCookie] = useCookies([COOKIE_NAME_FUKISO])

  const onClick = () => {
    setCookie(COOKIE_NAME_FUKISO, "yes", { path: "/" })
  }

  if (cookies.get(COOKIE_NAME_FUKISO) === "yes") {
    return <React.Fragment />
  }

  return (
    <div className="Fukiso">
      <p className="Fukiso-text">
        このウェブサイトのスクリプトは、あなたの意図に反する動作を指令をあなたのコンピュータへ命令する可能性があります。
        <br />
        「了解」ボタンをクリックするか、了解せずに引き続き当サイトを利用する場合は上記に同意したとします。
      </p>
      <div className="Fukiso-button" role="button" onClick={onClick}>
        了解
      </div>
    </div>
  )
}

const FukisoWithCookies = withCookies(Fukiso)

const FukisoWithCookieProvider = () => (
  <CookiesProvider>
    <FukisoWithCookies />
  </CookiesProvider>
)

export default FukisoWithCookieProvider
