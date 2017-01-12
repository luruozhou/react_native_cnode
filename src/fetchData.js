import * as config from "./config";

/**
 * 获取帖子列表
 * @returns {*|Promise.<TResult>}
 */
export function getArticles(pageNo, pageSize) {
    let REQUEST_URL = config.cnodeHost.host + '/topics?page=' + pageNo + '&tab=ask&limit=' + pageSize;
    return fetch(REQUEST_URL, {
        method: "get"
    })
        .then((response) => response.json())
        .then((res) => {

            if (res && res.success !== true) {
                return []
            }

            return res.data;
        })
        .catch(error => {
            console.log(error);
            return [];
        })
}
