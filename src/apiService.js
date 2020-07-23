import axios from "axios";
export default class API {
    static loginUser(body) {
        var res = axios.create({baseURL: "https://perfectplanb.herokuapp.com/"})
            .post("auth/", {
                username: body['username'],
                password: body['password']
            })
        return res
    }
    static checkToken(body) {
        var res = axios.create({baseURL: "https://perfectplanb.herokuapp.com/"})
            .post("perfect/checkToken/get/", {
                user: body['user'],
                key: body['token']
            })
        return res
    }
    static registerUser(body){
        var res = axios.create({baseURL: "https://perfectplanb.herokuapp.com/"})
      .post("perfect/user/", {
          first_name:body['name'],
          email:body['Email'],
          username:body['Email'],
          password:body['Password'],
            mobile:body['Mobile'],
            course:body['Course']},)
         return  res
    }
    static SocialAccount(body){
        var res = axios.create({baseURL: "https://perfectplanb.herokuapp.com/"})
      .post("perfect/social/", {
          name:body['name'],
          email:body['email'],
          token:body['token'],
          platform:body['platform']})
         return  res
    }

}
