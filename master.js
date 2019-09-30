var xinwen = ["崇尚英雄争做英雄 接续奋斗继往开来","今年是中华人民共和国成立70周年。9月30日是国家设立的烈士纪念日","今天受表彰的国家勋章和国家荣誉称号获得者，是千千万万为党和人民事业作出贡献的杰出人士的代表","“新中国70年何等辉煌！”国庆盛典，即将启幕！这是属于每一个中国人的光荣时刻！"];
var xinwen2 = ["大兴机场线将启用电子计次票 车票激活当月有效","来北京参加70周年庆典的香港警队部分代表与环球时报总编辑胡锡进、环球时报-环球网记者付国豪会面。","未达脱欧协议也不辞职！约翰逊：必须在10月31日脱欧"];
function search(){
    var word = prompt("请输入需要查找的信息：");
    for (var i in xinwen) {
        var message = xinwen[i].toString();
        var k = message.indexOf(word);
        if(k!=-1)
        {
            i++;
            document.write("此条信息中含有你需要的信息：" + i + "、" + xinwen[i-1] + "<br>");
            i--;
        }
    }
};
function zengjia(){
    var message = prompt("请输入需要加入的数据：");
    xinwen.push(message);
};
function shanchu(){
    var k = prompt("请输入需要删除的新闻的序号：");
    k = parseInt(k);
    if(k<=xinwen.length)
    {
        k--;
        var messageout = xinwen.slice(k, 1);
        k++;
        document.write("第" + k + "条新闻：" + messageout + " " + "已被删除！");
    }
    else{
        alert("输入序号不对！请重新输入 ：");
        shanchu();
    }
}