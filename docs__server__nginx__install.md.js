(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[114],{GQcD:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("ZpkN");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5b89\u88c5\u6559\u7a0b"},l.a.createElement(c["AnchorLink"],{to:"#\u5b89\u88c5\u6559\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5b89\u88c5\u6559\u7a0b"),l.a.createElement("h2",{id:"\u56db\u9879\u786e\u8ba4"},l.a.createElement(c["AnchorLink"],{to:"#\u56db\u9879\u786e\u8ba4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u56db\u9879\u786e\u8ba4"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u786e\u8ba4\u7cfb\u7edf\u7f51\u7edc\uff08",l.a.createElement("code",null,"ping"),"\uff09"),l.a.createElement("li",null,"\u786e\u8ba4 ",l.a.createElement("code",null,"yum")," \u53ef\u7528\uff08",l.a.createElement("code",null,"yum list | grep gcc"),"\uff09"),l.a.createElement("li",null,"\u786e\u5b9a\u5173\u95ed ",l.a.createElement("code",null,"iptables"),"\uff08",l.a.createElement("code",null,"iptables -F"),"\uff09"),l.a.createElement("li",null,"\u786e\u8ba4\u505c\u7528 ",l.a.createElement("code",null,"selinux"))),l.a.createElement("h2",{id:"\u4e24\u9879\u5b89\u88c5"},l.a.createElement(c["AnchorLink"],{to:"#\u4e24\u9879\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u4e24\u9879\u5b89\u88c5"),l.a.createElement(r["a"],{code:"yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake\nyum -y install wget httpd-tools vim\n",lang:"bash"}),l.a.createElement("h2",{id:"\u5b89\u88c5\u6e90"},l.a.createElement(c["AnchorLink"],{to:"#\u5b89\u88c5\u6e90","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5b89\u88c5\u6e90"),l.a.createElement(r["a"],{code:"cd /etc/yum.repos.d\nvim nginx.repo\n\n# \u6dfb\u52a0\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1\n",lang:"bash"}),l.a.createElement("h2",{id:"\u8fdb\u884c\u5b89\u88c5"},l.a.createElement(c["AnchorLink"],{to:"#\u8fdb\u884c\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u8fdb\u884c\u5b89\u88c5"),l.a.createElement(r["a"],{code:"yum list | grep nginx\nyum install nginx\n",lang:"bash"}),l.a.createElement("h2",{id:"\u67e5\u770b\u7248\u672c"},l.a.createElement(c["AnchorLink"],{to:"#\u67e5\u770b\u7248\u672c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u67e5\u770b\u7248\u672c"),l.a.createElement("p",null,"\u67e5\u770b\u7248\u672c"),l.a.createElement(r["a"],{code:"nginx -v\n",lang:"bash"})))}}}]);