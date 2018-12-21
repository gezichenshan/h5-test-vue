import axios from 'axios'
import md5 from 'md5'

let username = '13825662216'
let password = '654321'
let timestamp = new Date().getTime() //'1517753310782'
let key = '9048a3dbab43c51098460b31fc14753f'
const passwordMd5 = md5(password)

let formedString = `password=${passwordMd5}&timestamp=${timestamp}&username=${username}&key=${key}`
const sign = md5(formedString).toUpperCase()

export default function fetchData() {
  var instance = axios.create({
    baseURL: 'http://ready-go.cn:9090',
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  })
  const config = {
    url: '/osp/statistics/yearEndstatis.dc',
    method: 'post',
    responseType: 'json',
    //x-www-form-urlencoded way
    params: {
      password: passwordMd5,
      username,
      timestamp,
      sign,
    },
  }
  return instance.request(config)
}
