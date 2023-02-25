import Cookies from 'js-cookie'
// import {FaGoogle} from 'react-icons/fa'
import Navbar from '../Navbar'
import Footer from '../Footer'
import UserContext from '../../context/UserContext'
import './index.css'

const Account = props => (
  <UserContext.Consumer>
    {value => {
      const {username, password} = value
      console.log(username, password)

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        Cookies.remove('user_details')
        history.replace('/login')
      }

      return (
        <div className="account-main-bg-container">
          <Navbar />
          <div className="account-details-section">
            <h1 className="account-details-heading">Account</h1>
            <hr className="account-details-separatorline" />
            <div className="account-details-section-1">
              <p className="account-details-key-text">Member ship</p>
              <div>
                <p className="user-email">{username}@gmail.com</p>
                <p className="user-password">
                  Password : {'*'.repeat(password.length)}
                </p>
              </div>
            </div>
            <hr className="account-details-separatorline" />
            <div className="account-details-section-1">
              <p className="account-details-key-text">Plan details</p>
              <div>
                <p className="user-email">Premium</p>
                <p className="ultra-hd-text">Ultra HD</p>
              </div>
            </div>
            <hr className="account-details-separatorline" />
            <div className="logout-btn-container">
              <button type="button" className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>

          <Footer />
        </div>
      )
    }}
  </UserContext.Consumer>
)

export default Account
