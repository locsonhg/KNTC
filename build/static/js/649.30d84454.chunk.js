"use strict";(self.webpackChunkkkts=self.webpackChunkkkts||[]).push([[649],{44858:function(n,e,t){t.d(e,{c:function(){return u},Z:function(){return s}});var a,r=t(32014),i=t(17186),c=t(63463),o=t(15550),h=function(n){return(0,c.ZP)(n)(a||(a=(0,i.Z)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),(0,o.palette)("text",1),(0,o.palette)("primary",0),(0,o.palette)("primary",0),(0,o.palette)("primary",0),(0,o.palette)("primary",0))}(r.Z),u=r.Z.Group,s=h},71285:function(n,e,t){t.d(e,{Z:function(){return s}});t(72791);var a,r=t(17186),i=t(63463),c=t(17192),o=i.ZP.div(a||(a=(0,r.Z)(["\n    text-align: right;\n    display: inline-block;\n    flex: 1;\n    padding: 0 3px 0 0;\n    @media only screen and (max-width: 1336px) {\n        text-align: left;\n        display: block;\n        flex: none;\n        width: 100%;\n        padding: 0 0 10px 0;\n    }\n    button {\n        margin-right: 0px;\n        margin-left: 10px;\n        @media only screen and (max-width: 1336px) {\n            margin-left: 0px;\n            margin-right: 10px;\n        }\n    }\n"]))),h=(0,c.Z)(o),u=t(80184),s=function(n){return(0,u.jsx)(h,{children:n.children})}},41145:function(n,e,t){t.d(e,{z:function(){return i}});var a=t(50678),r=t(72791);function i(n){var e=(0,r.useState)(0),t=(0,a.Z)(e,2),i=t[0],c=t[1];return[i,function(){c(i+1)}]}},49649:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a=t(18489),r=t(50678),i=t(57652),c=t(77027),o=t(71810),h=t(51208),u=t(72791),s=t(47375),l=t(52591),d=t(35667),Z=t(71285),g=t(7111),f=t(66914),x=t(36043),p=t(70297),P=t(55454),T=t(41145),m=t(4245),k=t(49255),b=(t(72426),t(33032)),v=t(84322),j=t.n(v),y=t(65331),S=t(10916),C=t(64422),K=t(66023),Q=t(80184),w=S.Z.Item,M=S.Z.useForm,I=function(n){var e=M(),t=(0,r.Z)(e,1)[0],i=(0,u.useState)(!0),c=(0,r.Z)(i,2),o=c[0],h=c[1],s=n.dataEdit,l=n.loading,d=n.visible,Z=n.action,g=(0,u.useState)(),f=(0,r.Z)(g,2),x=f[0],P=f[1];(0,u.useEffect)((function(){console.log(s),s&&s.PhanTichKQID&&t&&t.setFieldsValue((0,a.Z)({},s))}),[]);var T=function(){var e=(0,b.Z)(j().mark((function e(r){var i;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t.validateFields();case 3:i=e.sent,"edit"===Z&&n.onCreate((0,a.Z)((0,a.Z)({},i),{},{TrangThai:x||i.TrangThai})),"add"===Z&&n.onCreate((0,a.Z)((0,a.Z)({},i),{},{TrangThai:void 0===x||x}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var n=(0,b.Z)(j().mark((function n(e,a){var r,i,c,o,u;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getFieldsValue();case 2:r=n.sent,i=r.MaPhanTichKQ,c=r.TenPhanTichKQ,o=r.TrangThai,u=r.GhiChu,i&&c&&(i!==s.MaPhanTichKQ||c!==s.TenPhanTichKQ||o!==s.TrangThai||u!==s.GhiChu)?h(!1):h(!0);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,Q.jsx)(p.u_,{title:"".concat("edit"===Z?"S\u1eeda":"Th\xeam"," th\xf4ng tin ph\xe2n t\xedch k\u1ebft qu\u1ea3"),width:450,visible:d,onCancel:n.onCancel,footer:[(0,Q.jsx)(p.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,Q.jsx)(p.zx,{htmlType:"submit",type:"primary",form:"formmonhoc",loading:l,onClick:T,disabled:o,children:"L\u01b0u"},"submit")],children:(0,Q.jsxs)(S.Z,{form:t,name:"formmonhoc",onChange:m,children:["edit"===Z?(0,Q.jsx)(w,{name:"PhanTichKQID",hidden:!0}):"",(0,Q.jsx)(w,(0,a.Z)((0,a.Z)({label:"M\xe3 ph\xe2n t\xedch KQ",name:"MaPhanTichKQ"},y.ITEM_LAYOUT),{},{rules:[y.REQUIRED],children:(0,Q.jsx)(p.PQ,{})})),(0,Q.jsx)(w,(0,a.Z)((0,a.Z)({label:"T\xean ph\xe2n t\xedch KQ",name:"TenPhanTichKQ"},y.ITEM_LAYOUT),{},{rules:[y.REQUIRED],children:(0,Q.jsx)(p.II,{})})),(0,Q.jsx)(w,(0,a.Z)((0,a.Z)({label:"Ghi ch\xfa",name:"GhiChu"},y.ITEM_LAYOUT),{},{children:(0,Q.jsx)(K.Z,{})})),(0,Q.jsx)(w,(0,a.Z)((0,a.Z)({label:"\u0110ang s\u1eed d\u1ee5ng",name:"TrangThai"},y.ITEM_LAYOUT),{},{children:(0,Q.jsxs)(C.ZP.Group,{onChange:function(n){P(n.target.value)},value:x,defaultValue:!0,children:[(0,Q.jsx)(C.ZP,{value:!0,children:"C\xf3"}),(0,Q.jsx)(C.ZP,{value:!1,children:"Kh\xf4ng"})]})}))]})})},D=t(31752),z=t(82622),E=t(79286),L=t(44858);var N=(0,s.$j)((function(n){return(0,a.Z)((0,a.Z)({},n.DanhMucPhanTichKQ),{},{role:(0,P.Ry)(n.Auth.role,"quan-ly-nam-hoc")})}),h.Z)((function(n){document.title="Danh M\u1ee5c Ph\xe2n T\xedch K\u1ebft Qu\u1ea3";var e=(0,u.useState)(m.parse(n.location.search)),t=(0,r.Z)(e,2),h=t[0],s=t[1],b=(0,u.useState)({}),v=(0,r.Z)(b,2),j=v[0],y=v[1],S=(0,u.useState)(!1),C=(0,r.Z)(S,2),K=C[0],w=C[1],M=(0,u.useState)(""),N=(0,r.Z)(M,2),G=N[0],q=N[1],O=(0,T.z)(),R=(0,r.Z)(O,2),U=R[0],V=R[1],A=(0,u.useState)([]),_=(0,r.Z)(A,2),F=(_[0],_[1]),Y=(0,u.useState)(!1),B=(0,r.Z)(Y,2),X=B[0],H=B[1];(0,u.useEffect)((function(){(0,P.ZZ)(h),n.getList(h)}),[h]),(0,u.useEffect)((function(){n.getList(h)}),[]);var $=function(n,e){var t=h,a={value:n,property:e},r=(0,P.mB)(t,a,null);s(r),F([])},J=function(){F([]),y({}),w(!1)},W=function(e){return(0,Q.jsxs)("div",{className:"action-btn",children:[(0,Q.jsx)(o.Z,{title:"S\u1eeda",children:(0,Q.jsx)(D.Z,{onClick:function(){return function(n){var e=n;q("edit"),k.Z.ChiTietPhanTichKQ({PhanTichKQID:e}).then((function(n){console.log(n),n.data.Status>0?(y(n.data.Data),V(),w(!0)):(c.ZP.destroy(),c.ZP.error(n.data.Message))})).catch((function(n){c.ZP.destroy(),c.ZP.error(n.toString())}))}(e.PhanTichKQID)}})}),(0,Q.jsx)(o.Z,{title:"X\xf3a",children:(0,Q.jsx)(z.Z,{onClick:function(){return t=e.PhanTichKQID,void i.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a k\u1ebft qu\u1ea3 n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){H(!0),k.Z.XoaPhanTichKQ(t).then((function(e){e.data.Status>0?(H(!1),n.getList((0,a.Z)((0,a.Z)({},h),{},{PageNumber:Math.ceil((en-1)/h.PageSize)<h.PageNumber?Math.ceil((en-1)/h.PageSize):h.PageNumber})),c.ZP.destroy(),c.ZP.success(e.data.Message),s((0,a.Z)((0,a.Z)({},h),{},{PageNumber:Math.ceil((en-1)/h.PageSize)<h.PageNumber?Math.ceil((en-1)/h.PageSize):h.PageNumber}))):(c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){c.ZP.destroy(),c.ZP.error(n.toString())}))}});var t}})})]})},nn=n.DanhSachPhanTichKQ,en=n.TotalRow,tn=(n.role,h.PageNumber?parseInt(h.PageNumber):1),an=h.PageSize?parseInt(h.PageSize):(0,P.hL)(),rn=[{title:"STT",width:"5%",align:"center",render:function(n,e,t){return(0,Q.jsx)("span",{children:(tn-1)*an+(t+1)})}},{title:"M\xe3 ph\xe2n t\xedch k\u1ebft qu\u1ea3",dataIndex:"MaPhanTichKQ",align:"left",width:"15%"},{title:"T\xean ph\xe2n t\xedch k\u1ebft qu\u1ea3",dataIndex:"TenPhanTichKQ",align:"left",width:"25%"},{title:"Ghi ch\xfa",dataIndex:"GhiChu",align:"left",width:"35%"},{title:"\u0110ang s\u1eed d\u1ee5ng",align:"center",width:"10%",render:function(n,e){return function(n){return(0,Q.jsx)(L.Z,{checked:n.TrangThai})}(e)}},{title:"Thao t\xe1c",width:"10%",align:"center",render:function(n,e){return W(e)}}];return(0,Q.jsxs)(l.Z,{children:[(0,Q.jsx)(d.Z,{children:"Danh M\u1ee5c Ph\xe2n T\xedch K\u1ebft Qu\u1ea3"}),(0,Q.jsx)(Z.Z,{children:(0,Q.jsxs)(p.zx,{type:"primary",onClick:function(){q("add"),y({}),V(),w(!0)},children:[(0,Q.jsx)(E.Z,{}),"Th\xeam M\u1edbi"]})}),(0,Q.jsxs)(g.Z,{children:[(0,Q.jsxs)(f.Z,{children:[(0,Q.jsxs)(p.Ph,{style:{width:"200px"},defaultValue:h.Status?"true"===h.Status?"\u0110ang s\u1eed d\u1ee5ng":"Kh\xf4ng s\u1eed d\u1ee5ng":void 0,placeholder:"Ch\u1ecdn tr\u1ea1ng th\xe1i",allowClear:!0,onChange:function(n){return $(n,"Status")},children:[(0,Q.jsx)(Option,{value:!0,children:"\u0110ang s\u1eed d\u1ee5ng"}),(0,Q.jsx)(Option,{value:!1,children:"Kh\xf4ng s\u1eed d\u1ee5ng"})]}),(0,Q.jsx)(p.Vr,{defaultValue:h.Keyword,placeholder:"Nh\u1eadp m\xe3 ho\u1eb7c t\xean ph\xe2n t\xedch k\u1ebft qu\u1ea3",style:{width:300},onSearch:function(n){return $(n,"keyword")},allowClear:!0})]}),(0,Q.jsx)(x.ZP,{columns:rn,dataSource:nn,onChange:function(n,e,t){var a=h,r={pagination:n,filters:e,sorter:t},i=(0,P.mB)(a,null,r);s(i),F([])},pagination:{showSizeChanger:!0,showTotal:function(n,e){return"T\u1eeb ".concat(e[0]," \u0111\u1ebfn ").concat(e[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:en,current:tn,pageSize:an}})]}),(0,Q.jsx)(I,{visible:K,dataEdit:j,action:G,loading:X,onCreate:function(e){H(!0),"add"===G&&k.Z.ThemPhanTichKQ(e).then((function(e){H(!1),e.data.Status>0?(c.ZP.destroy(),c.ZP.success(e.data.Message),J(),n.getList(h)):(H(!1),c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){H(!1),c.ZP.destroy(),c.ZP.error(n.toString())})),"edit"===G&&k.Z.CapNhatPhanTichKQ(e).then((function(e){e.data.Status>0?(H(!1),c.ZP.destroy(),c.ZP.success(e.data.Message),J(),n.getList(h)):(H(!1),c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){H(!1),c.ZP.destroy(),c.ZP.error(n.toString())}))},onCancel:J,DanhSachPhanTichKQ:nn},U)]})}))}}]);
//# sourceMappingURL=649.30d84454.chunk.js.map