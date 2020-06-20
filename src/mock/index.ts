const Mock = require('mockjs');


Mock.mock('api/getFlowChartData', 'get', () => ({
  activities: [
    {
      id: 'aaa',
      points: {
        targets: [],
        sources: ['source1', 'source2', 'source10'],
      },
      position: {
        left: 300,
        top: 100,
      },
      data: {
        value: '数据源1',
        icon: 'el-icon-coin',
      },
    },
    {
      id: 'bbb',
      points: {
        targets: ['target1', 'target2', 'target3'],
        sources: ['source3'],
      },
      position: {
        left: 300,
        top: 300,
      },
      data: {
        value: '数据预处理1',
        icon: 'el-icon-magic-stick',
      },
    },
    {
      id: 'ccc',
      points: {
        targets: ['ccc111', 'ccc222'],
        sources: ['ccc333'],
      },
      position: {
        left: 400,
        top: 500,
      },
      data: {
        value: '深度学习1111',
        icon: 'el-icon-coin',
      },
    },
    {
      id: 'ddd',
      points: {
        targets: ['ddd111'],
        sources: ['ddd333', 'ddd222'],
      },
      position: {
        left: 650,
        top: 300,
      },
      data: {
        value: '特征1111',
        icon: 'el-icon-star-off',
        nodeState: 'warning',
      },
    },
  ],
  endpoints: [
    {
      id: 'target1',
      data: {
        value: '输入',
      },
    },
    {
      id: 'target2',
      data: {
        value: '输入1',
      },
    },
    {
      id: 'source1',
      data: {
        value: '输出表1',
      },
    },
    {
      id: 'source2',
      data: {
        value: '输出表2',
      },
    },
    {
      id: 'source3',
      data: {
        value: '输出表',
      },
    },
    {
      id: 'ccc111',
      data: {
        value: '输入c1',
      },
    },
    {
      id: 'ccc222',
      data: {
        value: '输入c2',
      },
    },
    {
      id: 'ccc333',
      data: {
        value: '输出表',
      },
    },
    {
      id: 'source10',
      data: {
        value: '输出表3',
      },
    },
    {
      id: 'target3',
      data: {
        value: '输入3',
      },
    },
    {
      id: 'ddd111',
      data: {
        value: '输入',
      },
    },
    {
      id: 'ddd222',
      data: {
        value: '输出DDD',
      },
    },
    {
      id: 'ddd333',
      data: {
        value: '输出E',
      },
    },
  ],
  edges: ['source1&&target1', 'source2&&target2', 'source3&&ccc111', 'source3&&ccc222'], // 边的对应关系(sourceId -> targetId)
  head: 'aaa',
}));


Mock.mock('api/getMenuData', 'get', () => ([
  {
    label: '常用',
    id: 'source',
    children: [{
      label: '写数据表',
      id: 'source1',
      icon: 'el-icon-coin',
    }, {
      label: '读取文件数据',
      id: 'source2',
      icon: 'el-icon-coin',
    }, {
      label: '读数据表',
      id: 'source3',
      icon: 'el-icon-coin',
    }, {
      label: 'OSS数据同步',
      id: 'source4',
      icon: 'el-icon-coin',
    }, {
      label: 'Mysql数据同步',
      id: 'source5',
      icon: 'el-icon-coin',
    }],
  }, {
    label: '数据预处理',
    id: 'preHandle',
    children: [{
      label: '采样与过滤',
      id: 'preHandle1',
      icon: 'el-icon-magic-stick',
      children: [{
        label: '随机采样',
        id: 'preHandle11',
        icon: 'el-icon-magic-stick',
      }, {
        label: '加权采样',
        id: 'preHandle12',
        icon: 'el-icon-magic-stick',
      }, {
        label: '过滤与映射',
        id: 'preHandle13',
        icon: 'el-icon-magic-stick',
      }, {
        label: '分层采样',
        id: 'preHandle14',
        icon: 'el-icon-magic-stick',
      }],
    }, {
      label: '数据合并',
      id: 'preHandle2',
      children: [
        {
          label: '合并列',
          id: 'preHandle21',
          icon: 'el-icon-magic-stick',
        }, {
          label: '合并行',
          id: 'preHandle22',
          icon: 'el-icon-magic-stick',
        }, {
          label: 'JOIN',
          id: 'preHandle23',
          icon: 'el-icon-magic-stick',
        },
      ],
    }, {
      label: '类型转换',
      id: 'preHandle3',
      icon: 'el-icon-magic-stick',
    }, {
      label: '增加序列号',
      id: 'preHandle4',
      icon: 'el-icon-magic-stick',
    }],
  }]
));
