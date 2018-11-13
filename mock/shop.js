import Mock from 'mockjs';

const getShopList = Mock.mock({
  'list|1-100':[{
      "id|+1":1,
      "name": '@cname',
      "img|+1": ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542080252038&di=1a0e20750236425d680b0ca7bb978331&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a4ca567dffbe6ac725ad90f602ff.jpg%401280w_1l_2o_100sh.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542080252038&di=70a03dd585b3ca0129e98e22d8cbb02e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fdc54564e9258d109194c6c9fda58ccbf6c814d74.jpg'],
      "address|+1": '@city',
      "info|1": ['1','2'],
      "count": '@natural(10, 100)',
      "city": '@city',
      "status|1": [1,2,3],
      "income": '@natural(10, 10000)'
  }]
})

export default {
  'GET /api/shop/list': getShopList
};