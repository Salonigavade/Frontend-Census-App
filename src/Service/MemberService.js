import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/springfox/api/member/";
class MemberService {
  addMember(userId, member) {
    return axios.post(BASE_URL + "add-member/" + userId, member);
  }
  updateMember(memberId, member) {
    return axios.put(BASE_URL + "update/" + memberId, member);
  }
  getMembersByUserId(userId) {
    return axios.get(BASE_URL + "memberByUserId/" + userId);
  }

  getMembersByMemberId(memberId) {
    return axios.get(BASE_URL + "searchById/" + memberId);
  }

  getMembersByAdharCard(adharCardNo) {
    return axios.get(BASE_URL + "searchByAdharCard/" + adharCardNo);
  }
  getMembersByGender(gender) {
    return axios.get(BASE_URL + "searchByGender/" + gender);
  }
  getMembersByCity(city) {
    return axios.get(BASE_URL + "searchByCity/" + city);
  }
  getMembersByDistrict(district) {
    return axios.get(BASE_URL + "searchByDistrict/" + district);
  }
  getMembersByState(state) {
    return axios.get(BASE_URL + "searchByState/" + state);
  }
  getMembersByPincode(pincode) {
    return axios.get(BASE_URL + "searchByPincode/" + pincode);
  }
  getAllMembers() {
    return axios.get(BASE_URL + "memberInfo");
  }
  getMembersBetAges(start, end) {
    return axios.get(BASE_URL + "searchBetweenAges/" + start + "/" + end);
  }
  deleteMember(memberId) {
    return axios.delete(BASE_URL + "delete/" + memberId);
  }
}

export default new MemberService();
