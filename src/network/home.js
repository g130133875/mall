import {request1, request2} from './request';

export function getHomeMultidata() {
  return request1({
    url: 'home/multidata'
  })
}

export function getHomeData(type, page) {
  return request2 ({
    url: `home/data?type=${type}&page=${page}`
  })
}