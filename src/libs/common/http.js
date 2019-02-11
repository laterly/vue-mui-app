import mui from "../../../static/js/mui";
var baseUrl = "https://www.v2ex.com";
var timeout = 5;
function get(url, data, opts) {
  opts = opts || {};
  return new Promise((resolve, reject) => {
    if (!url.startsWith("/")) url = "/" + url;
    let func = () => {
      let qs = "";
      for (let key in data) {
        if (!qs) {
          qs += "?";
        } else {
          qs += "&";
        }
        qs += key + "=" + data[key];
      }
    mui.ajax({
      url: baseUrl + url + qs,
      data: data,
      async: true,
      dataType: opts.dataType || "json",
      type: "get",
      timeout: timeout,
      success: function(data) {
        resolve(data);
      },
      error: function(xhr, type, errorThrown) {
        // 请求失败
        reject(errorThrown);  
      }
    });      
    };
      func();
  });
}
function getJson(url) {
  return new Promise((resolve, reject) => {
    if (url.substring(0, 1) != "/") url = "/" + url;
    let func = () => {
       mui.ajax({
         url: baseUrl + url,
           type: "GET",
         processData:false,
         dataType: "json",
         crossDomain: true,
         timeout: 10000, //超时时间设置为10秒；
         headers: { "Content-Type": "application/json" },
         success: function(data) {
           resolve(data);
         },
         error: function(xhr, type, errorThrown) {
           // 请求失败
           reject(errorThrown);
         }
       });   
    };
    func();
  });
}
function post(url, data, opts) {
  opts = opts || {};
  return new Promise((resolve, reject) => {
    if (!url.startsWith("/")) url = "/" + url;
      let func = () => {
          mui.ajax({
              url: baseUrl + url,
              data: data,
              async: true,
              dataType: opts.dataType || "json",
              type: "post",
              timeout: timeout,
              success: function (data) {
                  resolve(data);
              },
              error: function (xhr, type, errorThrown) {
                  // 请求失败
                  reject(errorThrown);
              }
          });
      }
      func();
  });
}

// function error(err) {
//   console.log(JSON.stringify(err));
//   if (err.body) {
//     alert("未知故障，请联系管理员" );
//   } else {
//     alert("未知故障");
//   }
// }
export default {
  post: post,
  get: get,
  getJson: getJson,
//   error: error
};
