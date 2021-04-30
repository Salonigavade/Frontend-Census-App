import axios from "axios";

const BASE_URL = "http://localhost:8080/springfox/api/";

class MemberService {
    addMember(userId,member){
        return axios.post(BASE_URL+ 'member/add-member/'+userId,member);

    }

 
}

export default new MemberService();
