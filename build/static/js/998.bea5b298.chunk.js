"use strict";(self.webpackChunkkkts=self.webpackChunkkkts||[]).push([[998,286],{44858:function(n,e,t){t.d(e,{c:function(){return l},Z:function(){return s}});var a,i=t(32014),r=t(17186),c=t(63463),o=t(15550),u=function(n){return(0,c.ZP)(n)(a||(a=(0,r.Z)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),(0,o.palette)("text",1),(0,o.palette)("primary",0),(0,o.palette)("primary",0),(0,o.palette)("primary",0),(0,o.palette)("primary",0))}(i.Z),l=i.Z.Group,s=u},71285:function(n,e,t){t.d(e,{Z:function(){return s}});t(72791);var a,i=t(17186),r=t(63463),c=t(17192),o=r.ZP.div(a||(a=(0,i.Z)(["\n    text-align: right;\n    display: inline-block;\n    flex: 1;\n    padding: 0 3px 0 0;\n    @media only screen and (max-width: 1336px) {\n        text-align: left;\n        display: block;\n        flex: none;\n        width: 100%;\n        padding: 0 0 10px 0;\n    }\n    button {\n        margin-right: 0px;\n        margin-left: 10px;\n        @media only screen and (max-width: 1336px) {\n            margin-left: 0px;\n            margin-right: 10px;\n        }\n    }\n"]))),u=(0,c.Z)(o),l=t(80184),s=function(n){return(0,l.jsx)(u,{children:n.children})}},41145:function(n,e,t){t.d(e,{z:function(){return r}});var a=t(50678),i=t(72791);function r(n){var e=(0,i.useState)(0),t=(0,a.Z)(e,2),r=t[0],c=t[1];return[r,function(){c(r+1)}]}},30998:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var a=t(18489),i=t(50678),r=t(57652),c=t(77027),o=t(71810),u=t(88348),l=t(72791),s=t(47375),d=t(52591),h=t(35667),g=t(71285),f=t(7111),Z=t(66914),x=t(36043),p=t(44858),m=t(35057),y=t(70297),v=t(55454),P=t(41145),b=t(4245),T=t(62443),j=(t(72426),t(33032)),k=t(84322),S=t.n(k),w=t(65331),M=t(10916),C=t(64422),H=t(80184),G=M.Z.Item,Q=M.Z.useForm,z=function(n){var e=Q(),t=(0,i.Z)(e,1)[0],r=(0,l.useState)(!0),c=(0,i.Z)(r,2),o=c[0],u=c[1],s=n.dataEdit,d=n.loading,h=n.visible,g=n.action;(0,l.useEffect)((function(){s&&s.HuongGiaiQuyetID&&t&&t.setFieldsValue((0,a.Z)((0,a.Z)({},s),{},{TrangThai:s.TrangThai?1:0}))}),[]);var f=function(){var e=(0,j.Z)(S().mark((function e(i){var r;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),e.next=3,t.validateFields();case 3:r=e.sent,console.log(r),n.onCreate((0,a.Z)((0,a.Z)({},r),{},{TrangThai:Boolean(r.TrangThai)}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var n=(0,j.Z)(S().mark((function n(e,a){var i,r,c;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getFieldsValue();case 2:i=n.sent,r=i.MaHuongGiaiQuyet,c=i.TenHuongGiaiQuyet,u(!r||!c);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,H.jsx)(y.u_,{title:"".concat("edit"===g?"S\u1eeda":"Th\xeam"," th\xf4ng tin h\u01b0\u1edbng gi\u1ea3i quy\u1ebft"),width:450,visible:h,onCancel:n.onCancel,footer:[(0,H.jsx)(y.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,H.jsx)(y.zx,{htmlType:"submit",type:"primary",form:"formhuonggiaiquyet",loading:d,onClick:f,disabled:o,children:"L\u01b0u"},"submit")],children:(0,H.jsxs)(M.Z,{form:t,name:"formhuonggiaiquyet",initialValues:{TrangThai:1},onChange:Z,children:["edit"===g?(0,H.jsx)(G,{name:"HuongGiaiQuyetID",hidden:!0}):"",(0,H.jsx)(G,(0,a.Z)((0,a.Z)({label:"M\xe3 h\u01b0\u1edbng gi\u1ea3i quy\u1ebft",name:"MaHuongGiaiQuyet"},w.ITEM_LAYOUT3),{},{rules:[w.REQUIRED],children:(0,H.jsx)(y.PQ,{})})),(0,H.jsx)(G,(0,a.Z)((0,a.Z)({label:"T\xean h\u01b0\u1edbng gi\u1ea3i quy\u1ebft",name:"TenHuongGiaiQuyet"},w.ITEM_LAYOUT3),{},{rules:[w.REQUIRED],children:(0,H.jsx)(y.II,{})})),(0,H.jsx)(G,(0,a.Z)((0,a.Z)({label:"Ghi Ch\xfa",name:"GhiChu"},w.ITEM_LAYOUT3),{},{children:(0,H.jsx)(y.gx,{})})),(0,H.jsx)(G,(0,a.Z)((0,a.Z)({label:"S\u1eed d\u1ee5ng",name:"TrangThai"},w.ITEM_LAYOUT3),{},{children:(0,H.jsxs)(C.ZP.Group,{name:"radiogroup",onChange:function(n){console.log("radio = ".concat(n.target.value))},children:[(0,H.jsx)(C.ZP,{value:1,children:"C\xf3"}),(0,H.jsx)(C.ZP,{value:0,children:"Kh\xf4ng"})]})}))]})})},I=t(31752),q=t(82622),D=t(79286);var E=(0,s.$j)((function(n){return(0,a.Z)((0,a.Z)({},n.DanhMucHGQ),{},{role:(0,v.Ry)(n.Auth.role,"quan-ly-nam-hoc")})}),u.Z)((function(n){document.title="Danh M\u1ee5c H\u01b0\u1edbng Gi\u1ea3i Quy\u1ebft";var e=(0,l.useState)(b.parse(n.location.search)),t=(0,i.Z)(e,2),u=t[0],s=t[1],j=(0,l.useState)({}),k=(0,i.Z)(j,2),S=k[0],w=k[1],M=(0,l.useState)(!1),C=(0,i.Z)(M,2),G=C[0],Q=C[1],E=(0,l.useState)(""),L=(0,i.Z)(E,2),N=L[0],O=L[1],R=(0,P.z)(),B=(0,i.Z)(R,2),V=B[0],U=B[1],A=(0,l.useState)([]),K=(0,i.Z)(A,2),_=(K[0],K[1]),F=(0,l.useState)(!1),Y=(0,i.Z)(F,2),X=Y[0],$=Y[1];(0,l.useEffect)((function(){(0,v.ZZ)(u),n.getList(u)}),[u]),(0,l.useEffect)((function(){n.getList(u)}),[]);var J=function(n,e){var t=u,a={value:n,property:e},i=(0,v.mB)(t,a,null);s(i),_([])},W=function(){_([]),w({}),Q(!1)},nn=function(e){return(0,H.jsxs)("div",{className:"action-btn",children:[(0,H.jsx)(o.Z,{title:"S\u1eeda",children:(0,H.jsx)(I.Z,{onClick:function(){return function(n){var e=n;O("edit"),T.Z.ChiTietHuongGiaiQuyet({HuongGiaiQuyetID:e}).then((function(n){n.data.Status>0?(w(n.data.Data),U(),Q(!0)):(c.ZP.destroy(),c.ZP.error(n.data.Message))})).catch((function(n){c.ZP.destroy(),c.ZP.error(n.toString())}))}(e.HuongGiaiQuyetID)}})}),(0,H.jsx)(o.Z,{title:"X\xf3a",children:(0,H.jsx)(q.Z,{onClick:function(){return t=e.HuongGiaiQuyetID,void r.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a h\u01b0\u1edbng gi\u1ea3i quy\u1ebft n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){$(!0),T.Z.XoaHuongGiaiQuyet({HuongGiaiQuyetID:t}).then((function(e){e.data.Status>0?($(!1),n.getList((0,a.Z)((0,a.Z)({},u),{},{PageNumber:Math.ceil((tn-1)/u.PageSize)<u.PageNumber?Math.ceil((tn-1)/u.PageSize):u.PageNumber})),c.ZP.destroy(),c.ZP.success(e.data.Message),s((0,a.Z)((0,a.Z)({},u),{},{PageNumber:Math.ceil((tn-1)/u.PageSize)<u.PageNumber?Math.ceil((tn-1)/u.PageSize):u.PageNumber}))):(c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){c.ZP.destroy(),c.ZP.error(n.toString())}))}});var t}})})]})},en=n.DanhSachHuongGiaiQuyet,tn=n.TotalRow,an=(n.role,u.PageNumber?parseInt(u.PageNumber):1),rn=u.PageSize?parseInt(u.PageSize):(0,v.hL)(),cn=[{title:"STT",width:"5%",align:"center",render:function(n,e,t){return(0,H.jsx)("span",{children:(an-1)*rn+(t+1)})}},{title:"M\xe3 h\u01b0\u1edbng gi\u1ea3i quy\u1ebft",dataIndex:"MaHuongGiaiQuyet",align:"left",width:"15%"},{title:"T\xean h\u01b0\u1edbng gi\u1ea3i quy\u1ebft",dataIndex:"TenHuongGiaiQuyet",align:"left",width:"25%"},{title:"Ghi ch\xfa",dataIndex:"GhiChu",align:"left",width:"35%"},{title:"\u0110ang s\u1eed d\u1ee5ng",dataIndex:"TrangThai",align:"center",width:"10%",render:function(n,e){return(0,H.jsx)(p.Z,{checked:e.TrangThai})}},{title:"Thao t\xe1c",width:"10%",align:"center",render:function(n,e){return nn(e)}}];return(0,H.jsxs)(d.Z,{children:[(0,H.jsx)(h.Z,{children:"Danh M\u1ee5c H\u01b0\u1edbng Gi\u1ea3i Quy\u1ebft"}),(0,H.jsx)(g.Z,{children:(0,H.jsxs)(y.zx,{type:"primary",onClick:function(){O("add"),w({}),U(),Q(!0)},children:[(0,H.jsx)(D.Z,{}),"Th\xeam m\u1edbi"]})}),(0,H.jsxs)(f.Z,{children:[(0,H.jsxs)(Z.Z,{children:[(0,H.jsxs)(m.ZP,{style:{width:"200px"},defaultValue:u.Status?"true"===u.Status?"\u0110ang s\u1eed d\u1ee5ng":"Kh\xf4ng s\u1eed d\u1ee5ng":void 0,placeholder:"Ch\u1ecdn tr\u1ea1ng th\xe1i",allowClear:!0,onChange:function(n){return J(n,"Status")},children:[(0,H.jsx)(Option,{value:!0,children:"\u0110ang s\u1eed d\u1ee5ng"}),(0,H.jsx)(Option,{value:!1,children:"Kh\xf4ng s\u1eed d\u1ee5ng"})]}),(0,H.jsx)(y.Vr,{allowClear:!0,defaultValue:u.Keyword,placeholder:"Nh\u1eadp m\xe3 ho\u1eb7c t\xean h\u01b0\u1edbng gi\u1ea3i quy\u1ebft",style:{width:300},onSearch:function(n){return J(n,"keyword")}})]}),(0,H.jsx)(x.ZP,{columns:cn,dataSource:en,onChange:function(n,e,t){var a=u,i={pagination:n,filters:e,sorter:t},r=(0,v.mB)(a,null,i);s(r),_([])},pagination:{showSizeChanger:!0,showTotal:function(n,e){return"T\u1eeb ".concat(e[0]," \u0111\u1ebfn ").concat(e[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:tn,current:an,pageSize:rn}})]}),(0,H.jsx)(z,{visible:G,dataEdit:S,action:N,loading:X,onCreate:function(e){$(!0),"add"===N&&T.Z.ThemHuongGiaiQuyet(e).then((function(e){$(!1),e.data.Status>0?(c.ZP.destroy(),c.ZP.success(e.data.Message),W(),n.getList(u)):($(!1),c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){$(!1),c.ZP.destroy(),c.ZP.error(n.toString())})),"edit"===N&&T.Z.CapNhapHuongGiaiQuyet(e).then((function(e){e.data.Status>0?($(!1),c.ZP.destroy(),c.ZP.success(e.data.Message),W(),n.getList(u)):($(!1),c.ZP.destroy(),c.ZP.error(e.data.Message))})).catch((function(n){$(!1),c.ZP.destroy(),c.ZP.error(n.toString())}))},onCancel:W,DanhSachHuongGiaiQuyet:en},V)]})}))},82622:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(88428),i=t(72791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=t(54963),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="DeleteOutlined";var u=i.forwardRef(o)},31752:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(88428),i=t(72791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=t(54963),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="EditOutlined";var u=i.forwardRef(o)},79286:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(88428),i=t(72791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=t(54963),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="PlusOutlined";var u=i.forwardRef(o)}}]);
//# sourceMappingURL=998.bea5b298.chunk.js.map