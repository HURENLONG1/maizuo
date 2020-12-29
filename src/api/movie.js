import request from './request'
export function getHotingMovie() {
    let url = '/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=124043';
    return request.get(url)
}

// export function getComingMovie() {
//     let url = '/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=4074720';
//     return request.get(url)
// }