import request from './request.js'
export function getHomes() {
    let url = '/gateway?cityId=440100&ticketFlag=1&k=2262248';
    return request({
        url,
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16048932421303221926625281","bc":"440100"}',
            'X-Host': 'mall.film-ticket.cinema.list',
        }
    });
}