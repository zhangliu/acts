// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    nickName: '刘star',
    title: '93年女寻1985年后未婚男士',
    publicTime: '2022-05-01 12:00:32',
    sex: 'girl',
    birthday: '1993',
    property: '家庭条件优，市区和泰国际一套房，当涂县城一套房',
    edu: '全日制大专',
    work: '',
    detail: '帮我家亲戚发的，独女，马鞍山本地人，1993年，身高165，全日制大专，父母做生意，家庭条件优，市区和泰国际一套房，当涂县城一套房。寻1985年后未婚男士，身高175以上，大专以上学历，有正式工作（劳务派遣的不行），有意请私聊我。',
  },
  {
    id: 2,
    nickName: '冠珠～刘',
    title: '93女觅研究生及以上学历，89-93男生',
    publicTime: '2022-05-01 12:00:32',
    sex: 'girl',
    birthday: '1993',
    property: '',
    edu: '',
    work: '',
    detail: '我家93剩女一枚[捂脸]；觅研究生及以上学历，89-93男生',
  },
  {
    id: 3,
    nickName: '知足常乐',
    title: '91年男建筑造价师',
    publicTime: '2022-05-01 12:00:32',
    sex: 'boy',
    birthday: '1991',
    property: '现定居：马鞍山信达城（贷款）；是否有车：有车（十来万）；年薪20万；',
    edu: '',
    work: '建筑造价师',
    detail: `性别：男；
年龄：1991年；
婚否：未婚；
身高：184cm；
体重：82kg；
户籍：芜湖市芜湖县下面一农村；
现定居：马鞍山信达城（贷款）；
是否有车：有车（十来万）；
是否独生子：有个姐姐，已婚；
职业：建筑造价；
工作地点：当涂；
工资：年薪20万；
父母是否有退休金：无。`,
  },
  {
    id: 4,
    nickName: '94男土木狗',
    title: '94男土木行业 183 大高个',
    publicTime: '2022-05-01 12:00:32',
    sex: 'boy',
    birthday: '1994',
    property: '现定居：马鞍山信达城（贷款）；是否有车：有车（十来万）；年薪20万；',
    edu: '',
    work: '建筑造价师',
    detail: `性别 男
    年龄 1994
    未婚
    身高 183
    体重 160
    独生子女
    职业 监理工程师 有注册证
    贷款房全款车
    父母马钢退休`,
  },
  {
    id: 5,
    nickName: '陈大器',
    title: '91男南京工作建筑行业',
    publicTime: '2022-05-02 19:54:00',
    sex: 'boy',
    birthday: '1991',
    property: '目前南京工作 15-20W',
    edu: '',
    work: '建筑行业',
    detail: `91男
    172 65
    房车有 在马鞍山 无贷款
    目前南京工作 15-20W
    有个姐姐 父母退休 无负担`,
  },
  {
    id: 6,
    nickName: '',
    title: '91年1.68女征男',
    publicTime: '2022-05-04 14:35:00',
    sex: 'girl',
    birthday: '1991',
    property: '',
    edu: '大专',
    work: '私企管理',
    from: '恒缘婚介',
    detail: `1991年，1.68米，大专，私企管理，父母退休，独女，寻1986～1994年，1.75米左右，大专或以上，稳定收入帅气阳光，有责任心的男士`,
  },
].sort((a, b) => {
  const time1 = new Date(a.publicTime)
  const time2 = new Date(b.publicTime)

  return time2.getTime() - time1.getTime()
})