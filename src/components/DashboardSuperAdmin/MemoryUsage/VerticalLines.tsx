import { Column } from '@ant-design/plots';

export const DemoVerticalLines = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const config:any = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.6,
    xAxis: {
      label: null, // remove x-axis labels
    },
    yAxis: {
      label: null, // remove y-axis labels
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    color: '#6FBDF8',
  };
  return <Column {...config} style={{height:"100px"}} />;
};
