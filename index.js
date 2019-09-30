
new Vue({
    el:"#Vue-app",
    data:{
        xinwen:["崇尚英雄争做英雄 接续奋斗继往开来","今年是中华人民共和国成立70周年。9月30日是国家设立的烈士纪念日","今天受表彰的国家勋章和国家荣誉称号获得者，是千千万万为党和人民事业作出贡献的杰出人士的代表","“新中国70年何等辉煌！”国庆盛典，即将启幕！这是属于每一个中国人的光荣时刻！"],
        xinwen2:["大兴机场线将启用电子计次票 车票激活当月有效","来北京参加70周年庆典的香港警队部分代表与环球时报总编辑胡锡进、环球时报-环球网记者付国豪会面。","未达脱欧协议也不辞职！约翰逊：必须在10月31日脱欧"],
        zhuangtai:0
    },
    methods: {
        denglu:function(){
            var name = prompt("请输入账号：");
            var mima  = prompt("请输入密码：");
            name = parseInt(name);
            mima = parseInt(mima);
            if(name == 15186478704 && mima == 15186478704)
            {
                alert("Welcom！");
                window.location.href='master.html';
            }
        },
       
        
    },

    

});