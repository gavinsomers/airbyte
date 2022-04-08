"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[531],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],p={},i="Deploying Airbyte on a Non-Standard Operating System",l={unversionedId:"archive/faq/deploying-on-other-os",id:"archive/faq/deploying-on-other-os",title:"Deploying Airbyte on a Non-Standard Operating System",description:"CentOS 8",source:"@site/../docs/archive/faq/deploying-on-other-os.md",sourceDirName:"archive/faq",slug:"/archive/faq/deploying-on-other-os",permalink:"/archive/faq/deploying-on-other-os",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/archive/faq/deploying-on-other-os.md",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"CentOS 8",id:"centos-8",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-airbyte-on-a-non-standard-operating-system"},"Deploying Airbyte on a Non-Standard Operating System"),(0,a.kt)("h2",{id:"centos-8"},"CentOS 8"),(0,a.kt)("p",null,"From clean install:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"firewall-cmd --zone=public --add-port=8000/tcp --permanent\nfirewall-cmd --zone=public --add-port=8001/tcp --permanent\nfirewall-cmd --zone=public --add-port=7233/tcp --permanent\nsystemctl restart firewalld\n")),(0,a.kt)("p",null,"OR... if you prefer iptables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"iptables -A INPUT -p tcp -m tcp --dport 8000 -j ACCEPT\niptables -A INPUT -p tcp -m tcp --dport 8001 -j ACCEPT\niptables -A INPUT -p tcp -m tcp --dport 7233 -j ACCEPT\nsystemctl restart iptables\n")),(0,a.kt)("p",null,"Setup the docker repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo`\ndnf install docker-ce --nobest\nsystemctl enable --now docker\nusermod -aG docker $USER\n")),(0,a.kt)("p",null,"You'll need to get docker-compose separately."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dnf install wget git curl\ncurl -L https://github.com/docker/compose/releases/download/1.25.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n")),(0,a.kt)("p",null,"Now we can install Airbyte. In this example, we will install it under ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /opt\ngit clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\ndocker-compose ps\n")))}m.isMDXComponent=!0}}]);