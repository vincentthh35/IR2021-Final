import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import GridCard from '../components/GridCard';

import { useFormStyles } from '../styles';

const PoemBrowser = ({ setInputValue }) => {
  const classes = useFormStyles();

  const poemList = [
    {
      title: '慟車',
      id: 1941,
      author: '子衿',
      content: `簷下幾棵芒草，
                含羞地燒起來。

                沿途數百萬元新房，
                被鍍上不同層次，城之光
                盈起了一褶長裙，
                點綴橋上漫天亂飛的霧點。

                因夜之故，
                橋下新鳥
                幻想頂上的雲，此刻
                鋼鐵如鏡，
                月明如晝，
                抬頭一瞥逝陽。

                光暈照於千衢田野，
                動車墳
                涔冷，
                領導的劉海，
                也含羞地燃燒，
                像沫微笑。

                因夜之故，
                又一隻鳥歸去。`,
    },
    {
      title: '浪潮',
      id: 1940,
      author: '蒹葭',
      content: `我看見一排排的頭顱
                在麥田裡閃爍著微光
                喘息聲此起彼落
                身子糾結在一起
                在它們腳下
                一種韻律
                從高原上從天而降
                而鋪滿著麥桿的豐腴黃土
                既遠且長，在黑暗彼此靠近，
                在震動中相濡以沬
                萬物靜好
                人們跳舞
                人們肅立
                然後月光－－
                慢慢從心上
                溢出多餘的夢境`,
    },
    {
      title: '短訊',
      id: 1939,
      author: '蒹葭',
      content: `「這一天遠方又寄來了短訊
                那雁在我的肋骨裡低聲鳴叫」

                提筆不需要多少時間
                但黑死病又來了
                而且窗外鬼雨連綿
                紙屑沾滿了墨酒，進入酣睡
                燈光如罌粟花般盛放
                沒有甚麼不對勁，只有
                魚在魚缸裡寂寞至死
                就算如此
                那也只是一場意外

                留白已至尾聲
                我還是沒有找到回覆的理由
                所謂理由
                是隨著季節更迭的東西吧
                可我們寧願留在春夏
                享受一種永恆的味道

                話又說回來
                你討厭矯情確實是個缺陷
                至少魚死了不全是我的錯
                就算如此
                那也只是一場意外
                月亮也從來沒有哭過`,
    },
    {
      title: '十月',
      id: 1938,
      author: '陳德錦',
      content: `秋日的郊道上，木麻黃
                以瘦硬的枝幹素描天空，
                像年少時用炭筆描畫
                樹林和山脈，伏案完成
                厚厚的作業，汗水和衣袖
                把桌面的木紋磨滑。
                秋日的圖畫在手邊悄悄溜走，
                恰似在煩憂的年月上溜走的，
                無法牽制的風。
                重回南方這城市，
                想念一幅褪色的畫，
                畫裡有一條小路，
                蹉跎成今古，
                像髮叢中一莖灰絲，隱蔽起來，
                一頭繫住已逝的青春，
                一頭垂向荒涼的土地。`
    }
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paperRoot}>
          <Grid container spacing={3} className={classes.cardGridRoot}>
            <Grid item xs={12}>
              <Typography variant='h6'>
                範例詩集
              </Typography>
            </Grid>
            {poemList.map((e, i) =>
              <GridCard
                title={e.title}
                content={e.content.trim().split('\n').map((e) => e.trim()).join('\n')}
                author={e.author}
                setInputValue={setInputValue}
                id={`grid-card-${i}`}
                key={`grid-card-${i}`}
              />
            )}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PoemBrowser;
