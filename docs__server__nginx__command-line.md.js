(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{DClg:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u547d\u4ee4\u884c\u6307\u4ee4"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u547d\u4ee4\u884c\u6307\u4ee4"},t.a.createElement("span",{className:"icon icon-link"})),"\u547d\u4ee4\u884c\u6307\u4ee4"),t.a.createElement("h2",{id:"\u5b89\u88c5\u6559\u7a0b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b89\u88c5\u6559\u7a0b"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u6559\u7a0b"),t.a.createElement("h3",{id:"\u56db\u9879\u786e\u8ba4"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u56db\u9879\u786e\u8ba4"},t.a.createElement("span",{className:"icon icon-link"})),"\u56db\u9879\u786e\u8ba4"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u786e\u8ba4\u7cfb\u7edf\u7f51\u7edc\uff08",t.a.createElement("code",null,"ping"),"\uff09"),t.a.createElement("li",null,"\u786e\u8ba4 ",t.a.createElement("code",null,"yum")," \u53ef\u7528\uff08",t.a.createElement("code",null,"yum list | grep gcc"),"\uff09"),t.a.createElement("li",null,"\u786e\u5b9a\u5173\u95ed ",t.a.createElement("code",null,"iptables"),"\uff08",t.a.createElement("code",null,"iptables -F"),"\uff09"),t.a.createElement("li",null,"\u786e\u8ba4\u505c\u7528 ",t.a.createElement("code",null,"selinux"))),t.a.createElement("h3",{id:"\u4e24\u9879\u5b89\u88c5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4e24\u9879\u5b89\u88c5"},t.a.createElement("span",{className:"icon icon-link"})),"\u4e24\u9879\u5b89\u88c5"),t.a.createElement(r.a,{code:"yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake\nyum -y install wget httpd-tools vim\n",lang:"bash"}),t.a.createElement("h3",{id:"\u5b89\u88c5\u6e90"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b89\u88c5\u6e90"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u6e90"),t.a.createElement(r.a,{code:"cd /etc/yum.repos.d\nvim nginx.repo\n\n# \u6dfb\u52a0\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1\n",lang:"bash"}),t.a.createElement("h3",{id:"\u5b89\u88c5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b89\u88c5"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),t.a.createElement(r.a,{code:"yum list | grep nginx\nyum install nginx\n",lang:"bash"}),t.a.createElement("h2",{id:"\u67e5\u770b\u7248\u672c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u7248\u672c"},t.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u7248\u672c"),t.a.createElement("p",null,"\u67e5\u770b\u7248\u672c"),t.a.createElement(r.a,{code:"nginx -v\n",lang:"bash"}),t.a.createElement("h2",{id:"\u542f\u52a8"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u542f\u52a8"},t.a.createElement("span",{className:"icon icon-link"})),"\u542f\u52a8"),t.a.createElement("p",null,"\u8981\u542f\u52a8 Nginx\uff0c\u8bf7\u8fd0\u884c\u53ef\u6267\u884c\u6587\u4ef6\u3002\u4e00\u65e6\u542f\u52a8 Nginx\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",t.a.createElement("code",null,"-s")," \u53c2\u6570\u8c03\u7528\u53ef\u6267\u884c\u6587\u4ef6\u6765\u5bf9\u5176\u8fdb\u884c\u63a7\u5236\u3002"),t.a.createElement("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\uff1a"),t.a.createElement(r.a,{code:"nginx -s <signal>\n",lang:"unknown"}),t.a.createElement("p",null,t.a.createElement("code",null,"-s")," \u7684\u610f\u601d\u662f\u5411\u4e3b\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\uff0c",t.a.createElement("code",null,"signal")," \u53ef\u4ee5\u662f\u4ee5\u4e0b\u4fe1\u53f7\u4e4b\u4e00\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"stop"),"\uff1a\u5feb\u901f\u5173\u95ed"),t.a.createElement("li",null,t.a.createElement("code",null,"quit"),"\uff1a\u6b63\u5e38\u5173\u95ed"),t.a.createElement("li",null,t.a.createElement("code",null,"reload"),"\uff1a\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6"),t.a.createElement("li",null,t.a.createElement("code",null,"reopen"),"\uff1a\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6")),t.a.createElement(r.a,{code:"# \u542f\u52a8\nnginx -c /etc/nginx/nginx.conf\n\n# \u53d1\u9001\u4fe1\u53f7\nnginx -s\n\n# \u7acb\u5373\u505c\u6b62\u670d\u52a1\nnginx -s stop\n\n# \u4f18\u96c5\u5730\u505c\u6b62\u670d\u52a1\nnginx -s quit\n\n# \u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\nnginx -s reload\n\n# \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\nnginx -s reload -c /etc/nginx/nginx.conf\n\n# \u91cd\u65b0\u5f00\u59cb\u8bb0\u5f55\u65e5\u5fd7\u6587\u4ef6\nnginx -s reopen\n",lang:"bash"}),t.a.createElement("p",null,"\u5f53\u8fd0\u884c ",t.a.createElement("code",null,"nginx -s quit")," \u65f6\uff0cNginx \u4f1a\u7b49\u5f85\u5de5\u4f5c\u8fdb\u7a0b\u5904\u7406\u5b8c\u6210\u5f53\u524d\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u5176\u5173\u95ed\u3002\u5f53\u4f60\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u5e76\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u800c\u662f\u7b49\u5f85\u91cd\u542f\u6216\u8005\u6536\u5230 ",t.a.createElement("code",null,"nginx -s reload")," \u4fe1\u53f7\u3002"),t.a.createElement("p",null,"\u5f53 Nginx \u6536\u5230 ",t.a.createElement("code",null,"nginx -s reload")," \u4fe1\u53f7\u540e\uff0c\u9996\u5148\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u7684\u8bed\u6cd5\u3002\u8bed\u6cd5\u6b63\u786e\u540e\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u5f00\u542f\u65b0\u7684\u5de5\u4f5c\u7ebf\u7a0b\u5e76\u5411\u65e7\u7684\u5de5\u4f5c\u7ebf\u7a0b\u53d1\u9001\u5173\u95ed\u4fe1\u53f7\uff0c\u5982\u679c\u8bed\u6cd5\u4e0d\u6b63\u786e\uff0c\u5219\u4e3b\u7ebf\u7a0b\u56de\u6eda\u53d8\u5316\u5e76\u7ee7\u7eed\u4f7f\u7528\u65e7\u7684\u914d\u7f6e\u3002\u5f53\u5de5\u4f5c\u8fdb\u7a0b\u6536\u5230\u4e3b\u8fdb\u7a0b\u7684\u5173\u95ed\u4fe1\u53f7\u540e\uff0c\u4f1a\u5728\u5904\u7406\u5b8c\u5f53\u524d\u8bf7\u6c42\u4e4b\u540e\u9000\u51fa\u3002"),t.a.createElement("h2",{id:"\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"},t.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"),t.a.createElement("p",null,"\u5217\u51fa\u670d\u52a1\u7684\u5b89\u88c5\u76ee\u5f55\uff1a"),t.a.createElement(r.a,{code:"rpm -ql nginx\n",lang:"bash"}),t.a.createElement("h2",{id:"\u7f16\u8bd1\u53c2\u6570"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7f16\u8bd1\u53c2\u6570"},t.a.createElement("span",{className:"icon icon-link"})),"\u7f16\u8bd1\u53c2\u6570"),t.a.createElement("p",null,"\u5217\u51fa\u7f16\u8bd1\u53c2\u6570\u7684\u547d\u4ee4\uff1a"),t.a.createElement(r.a,{code:"nginx -V\n\n# \u5e6b\u52a9\nnginx -h\n\n# \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\nnginx -c\n\n# \u6307\u5b9a\u914d\u7f6e\u6307\u4ee4\nnginx -g\n\n# \u6307\u5b9a\u8fd0\u884c\u76ee\u5f55\nnginx -p\n\n# \u7248\u672c\u4fe1\u606f\nnginx -v\n\n# \u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6709\u8bed\u6cd5\u9519\u8bef\n# \u540c\u65f6\u663e\u793a\u4e3b\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nnginx -t\n\n# \u68c0\u67e5\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\nnginx -t -c /etc/nginx/nginx.conf\n\n# \u91cd\u542f Nginx \u670d\u52a1\nsystemctl restart nginx.service\n",lang:"bash"})))}}}]);