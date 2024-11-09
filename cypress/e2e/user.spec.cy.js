import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js'
import DashBoardPage from '../pages/dashBoard.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const menuPage = new MenuPage()
const dashBoard = new DashBoardPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Testes', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoard.checkDashBoardPage()
    menuPage.accessMyInfo()
    myInfoPage.nameData()
    myInfoPage.idData()
    myInfoPage.statusData()
    myInfoPage.chekSubmitButton()
  })
})