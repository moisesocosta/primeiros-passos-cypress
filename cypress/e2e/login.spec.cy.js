import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/users/userData.json'
import DashBoardPage from '../pages/dashBoard.js'

const loginPage = new LoginPage()
const dashBoard = new DashBoardPage()

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoard.checkDashBoardPage()
  })