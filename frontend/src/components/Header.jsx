import { Link } from "react-router-dom"
import React from 'react'
import GoogleAuthButton from "./GoogleAuthButton"

const Header = () => {
  return (
    <>
      <div className="navbar bg-primary sticky" >
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white"><Link to={`/`}>ダメージ計算</Link></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li tabIndex={0}>
              <a>
                育成論
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-primary">
                <li><Link to={`/posts`}>育成論一覧</Link></li>
                <li><Link to={`/posts/new/`}>育成論投稿</Link></li>
              </ul>
            </li>
            <li><label htmlFor="signup-modal">ログイン</label></li>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="signup-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="signup-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <GoogleAuthButton />
        </div>
      </div>
    </>
  )
}

export default Header