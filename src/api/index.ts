import request from "@/utils/axios";

// 运行告警及当日告警 (弃用)
export async function getArticleDetail(options?: { [key: string]: any },){
    return request<API.ArticleDetail>({
        method:'POST',
        url:'/app/getArticleDetail',
        ...(options || {}),
    })
};










// 优维临时接口(弃用)
export async function getsearchAll(options?: { [key: string]: any },){
  return request<any>({
      method:'GET',
      url:'/operation/searchAll',
      ...(options || {}),
  })
};


