import axios from "axios";
const base=" https://perfectplanb.herokuapp.com/"
// const base=" http://127.0.0.1:8000/"
export default class API {
    static courseFetch(body){
        var res =axios.create({baseURL: base})
            .get("perfect/course/", {params: {course: body.course}})
        return res
    }

    static loginUser(body) {
        var res = axios.create({baseURL: base  })
            .post("auth/", {
                username: body['username'],
                password: body['password']
            })
        return res
    }
    static checkToken(body) {
        var res = axios.create({baseURL: base})
            .post("perfect/checkToken/get/", {
                user: body['user'],
                key: body['token']
            })
        return res
    }
    static registerUser(body){
        var res = axios.create({baseURL: base})
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
        var res = axios.create({baseURL: base})
      .post("perfect/social/", {
          name:body['name'],
          email:body['email'],
          token:body['token'],
          platform:body['platform']})
         return  res
    }

}