(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{oBpt:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u52a8\u6001\u7f13\u5b58"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u52a8\u6001\u7f13\u5b58"},l.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u7f13\u5b58"),l.a.createElement("h2",{id:"\u4ee3\u7406\u7f13\u5b58"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7406\u7f13\u5b58"},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7406\u7f13\u5b58"),l.a.createElement(r.a,{code:'upstream imooc {\n    server 116.62.103.228:8001;\n    server 116.62.103.228:8002;\n    server 116.62.103.228:8003;\n}\n\nproxy_cache_path /opt/app/cache levels=1:2 keys_zone=imooc_cache:10m max_size=10g inactive=10m use_temp_path=off;\n\nserver {\n    listen 80;\n    server_name localhost jeson.t.imooc.io;\n\n    access_log /var/log/nginx/test_proxy.access.log main;\n\n    location / {\n        # \u4ee3\u7406\u7f13\u5b58\u5f00\u5173\n        proxy_cache             imooc_cache;\n        proxy_pass              http://imooc;\n        # \u4ee3\u7406\u7f13\u5b58\u8fc7\u671f\u5468\u671f\n        proxy_cache_valid       200 304 12h;\n        proxy_cache_valid       any 10m;\n        # \u7f13\u5b58\u7684\u7ef4\u5ea6\n        proxy_cache_key         $host$uri$is_args$args;\n        add_header              Nginx-Cache "$upstream_cache_status";\n\n        proxy_next_upstream     error timeout invalid_header http_500 http_502 http_503 http_504;\n        include proxy_params;\n    }\n}\n',lang:"nginx"}),l.a.createElement("h2",{id:"\u52a8\u6001\u5339\u914d"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u52a8\u6001\u5339\u914d"},l.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u5339\u914d"),l.a.createElement("p",null,"\u52a8\u6001\u5339\u914d\uff08\u8bf7\u6c42\u8fc7\u6ee4\uff09"),l.a.createElement("p",null,"\u901a\u5e38\u5728\u5f00\u53d1\u73af\u5883\u6216\u8005\u6d4b\u8bd5\u73af\u5883\u7684\u65f6\u5019\u5462\u6211\u4eec\u4fee\u6539\u4e86\u4ee3\u7801\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u53ef\u80fd\u4e0d\u4f1a\u751f\u6548\uff0c\u9700\u8981\u624b\u52a8\u6e05\u9664\u7f13\u5b58\uff0c\u624d\u80fd\u770b\u5230\u4fee\u6539\u540e\u7684\u6548\u679c\uff0c\u8fd9\u91cc\u6211\u4eec\u505a\u4e00\u4e2a\u914d\u7f6e\u8ba9\u6d4f\u89c8\u5668\u4e0d\u7f13\u5b58\u76f8\u5173\u7684\u8d44\u6e90\u3002"),l.a.createElement(r.a,{code:"location ~* \\.(js|css|png|jpg|gif)$ {\n    add_header Cache-Control no-store;\n}\n",lang:"nginx"}),l.a.createElement("p",null,l.a.createElement("code",null,"~* \\.(js|css|png|jpg|gif)$")," \u662f\u5339\u914d\u4ee5\u76f8\u5173\u6587\u4ef6\u7c7b\u578b\u7136\u540e\u5355\u72ec\u5904\u7406\u3002",l.a.createElement("code",null,"add_header")," \u662f\u7ed9\u8bf7\u6c42\u7684\u54cd\u5e94\u52a0\u4e0a\u4e00\u4e2a\u5934\u4fe1\u606f ",l.a.createElement("code",null,"Cache-Control: no-store"),"\uff0c\u544a\u77e5\u6d4f\u89c8\u5668\u7981\u7528\u7f13\u5b58\uff0c\u6bcf\u6b21\u90fd\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u3002"),l.a.createElement("p",null,"\u901a\u5e38\u52a8\u6001\u5339\u914d\u7684\u89c4\u5219\u5f62\u5f0f\u5982\u4e0b\uff1a"),l.a.createElement(r.a,{code:"# \u7cbe\u51c6\u5339\u914d\nlocation = / {\n    # Configuration\n}\n\n# \u901a\u7528\u5339\u914d\nlocation / {\n    # Configuration\n}\n\n# \u8def\u5f84\u5339\u914d\nlocation /documents/ {\n    # Configuration\n}\n\n# \u6700\u4f73\u5339\u914d\nlocation ^~ /images/ {\n    # Configuration\n}\n\n# \u6b63\u5219\u5339\u914d\nlocation ~* \\.(gif|jpg|jpeg)$ {\n    # Configuration\n}\n",lang:"nginx"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"="),"\uff1a\u8868\u793a\u7cbe\u786e\u5339\u914d\uff0c\u53ea\u6709\u8bf7\u6c42\u7684 URL \u8def\u5f84\u4e0e\u540e\u9762\u7684\u5b57\u7b26\u4e32\u5b8c\u5168\u76f8\u7b49\u65f6\uff0c\u624d\u4f1a\u547d\u4e2d\uff08\u4f18\u5148\u7ea7\u6700\u9ad8\uff09"),l.a.createElement("li",null,l.a.createElement("code",null,"^~"),"\uff1a\u8868\u793a\u5982\u679c\u8be5\u7b26\u53f7\u540e\u9762\u7684\u5b57\u7b26\u662f\u6700\u4f73\u5339\u914d\uff0c\u91c7\u7528\u8be5\u89c4\u5219\uff0c\u4e0d\u518d\u8fdb\u884c\u540e\u7eed\u7684\u67e5\u627e"),l.a.createElement("li",null,l.a.createElement("code",null,"~"),"\uff1a\u8868\u793a\u8be5\u89c4\u5219\u662f\u4f7f\u7528\u6b63\u5219\u5b9a\u4e49\u7684\uff0c\u533a\u5206\u5927\u5c0f\u5199"),l.a.createElement("li",null,l.a.createElement("code",null,"~*"),"\uff1a\u8868\u793a\u8be5\u89c4\u5219\u662f\u4f7f\u7528\u6b63\u5219\u5b9a\u4e49\u7684\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199")),l.a.createElement("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u72b6\u6001\u7801\u6765\u8fc7\u6ee4\u8bf7\u6c42\uff1a"),l.a.createElement(r.a,{code:"# \u901a\u8fc7\u72b6\u6001\u7801\uff0c\u8fd4\u56de\u6307\u5b9a\u7684\u9519\u8bef\u9875\u9762\nerror_page 500 502 503 504 /50x.html;\n\nlocation = /50x.html {\n    root /source/error_page;\n}\n",lang:"nginx"})))}}}]);