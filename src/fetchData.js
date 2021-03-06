import * as config from "./config";

/**
 * 获取帖子列表
 * @param pageNo
 * @param pageSize
 * @returns {*|Promise.<TResult>}
 */
export function getArticles(sKey, pageNo, pageSize) {
    let REQUEST_URL = config.cnodeHost.host + '/topics?page=' + pageNo + '&limit=' + pageSize;
    if (sKey != 'all') {
        REQUEST_URL += '&tab=' + sKey;
    }
    return fetch(REQUEST_URL, {
        method: "get"
    })
        .then((response) => response.json())
        .then((res) => {

            if (res && res.success !== true) {
                return [];
            }

            return res.data;
        })
        .catch(error => {
            console.log(error);
            return [];
        })
}

/**
 * 获取帖子详情
 * @param tid
 * @returns {*|Promise.<TResult>}
 */
export function getArticleInfoById(tid) {
    let REQUEST_URL = config.cnodeHost.host + '/topic/' + tid;
    return fetch(REQUEST_URL, {
        method: "get"
    })
        .then((response) => response.json())
        .then((res) => {

            if (res && res.success !== true) {
                return {};
            }

            return res.data;
        })
        .catch(error => {
            console.log(error);
            return {};
        })
}
