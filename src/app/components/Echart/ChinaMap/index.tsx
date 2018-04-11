import * as React from 'react';
import echarts from 'echarts';

interface IChinaMapVal {
  name: string|number;
  value: number|string;
}

interface IChinaMap {
  vaules: (IChinaMapVal)[];
}

class ChinaMap extends React.Component<IChinaMap, IChinaMap> {
  constructor (props: IChinaMap, state: IChinaMap) {
    super(props, state);
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps (nextProps: IChinaMap) {
    this.setState(nextProps, () => {
      this.initChart()
    })
  }
  componentDidMount() {
    this.initChart()
  }
  initChart() {
    let chart = echarts.init(document.getElementById('chinaMap'), 'macarons');
    // var geoCoordMap = {
    //   'Amsterdam': [4.895168, 52.370216],
    //   'Athens': [-83.357567, 33.951935],
    //   'Auckland': [174.763332, -36.84846],
    //   'Bangkok': [100.501765, 13.756331],
    //   'Barcelona': [2.173403, 41.385064],
    //   'Beijing': [116.407395, 39.904211],
    //   'Berlin': [13.404954, 52.520007],
    //   'Bogotá': [-74.072092, 4.710989],
    //   'Bratislava': [17.107748, 48.148596],
    //   'Brussels': [4.35171, 50.85034],
    //   'Budapest': [19.040235, 47.497912],
    //   'Buenos Aires': [-58.381559, -34.603684],
    //   'Bucharest': [26.102538, 44.426767],
    //   'Caracas': [-66.903606, 10.480594],
    //   'Chicago': [-87.629798, 41.878114],
    //   'Delhi': [77.209021, 28.613939],
    //   'Doha': [51.53104, 25.285447],
    //   'Dubai': [55.270783, 25.204849],
    //   'Dublin': [-6.26031, 53.349805],
    //   'Frankfurt': [8.682127, 50.110922],
    //   'Geneva': [6.143158, 46.204391],
    //   'Helsinki': [24.938379, 60.169856],
    //   'Hong Kong': [114.109497, 22.396428],
    //   'Istanbul': [28.978359, 41.008238],
    //   'Jakarta': [106.845599, -6.208763],
    //   'Johannesburg': [28.047305, -26.204103],
    //   'Cairo': [31.235712, 30.04442],
    //   'Kiev': [30.5234, 50.4501],
    //   'Copenhagen': [12.568337, 55.676097],
    //   'Kuala Lumpur': [101.686855, 3.139003],
    //   'Lima': [-77.042793, -12.046374],
    //   'Lisbon': [-9.139337, 38.722252],
    //   'Ljubljana': [14.505751, 46.056947],
    //   'London': [-0.127758, 51.507351],
    //   'Los Angeles': [-118.243685, 34.052234],
    //   'Luxembourg': [6.129583, 49.815273],
    //   'Lyon': [4.835659, 45.764043],
    //   'Madrid': [-3.70379, 40.416775],
    //   'Milan': [9.185924, 45.465422],
    //   'Manama': [50.58605, 26.228516],
    //   'Manila': [120.984219, 14.599512],
    //   'Mexico City': [-99.133208, 19.432608],
    //   'Miami': [-80.19179, 25.76168],
    //   'Montreal': [-73.567256, 45.501689],
    //   'Moscow': [37.6173, 55.755826],
    //   'Mumbai': [72.877656, 19.075984],
    //   'Munich': [11.581981, 48.135125],
    //   'Nairobi': [36.821946, -1.292066],
    //   'New York': [-74.005941, 40.712784],
    //   'Nicosia': [33.382276, 35.185566],
    //   'Oslo': [10.752245, 59.913869],
    //   'Paris': [2.352222, 48.856614],
    //   'Prague': [14.4378, 50.075538],
    //   'Riga': [24.105186, 56.949649],
    //   'Rio de Janeiro': [-43.172896, -22.906847],
    //   'Rome': [12.496366, 41.902783],
    //   'Santiago de Chile': [-70.669265, -33.44889],
    //   'São Paulo': [-46.633309, -23.55052],
    //   'Seoul': [126.977969, 37.566535],
    //   'Shanghai': [121.473701, 31.230416],
    //   'Singapore': [103.819836, 1.352083],
    //   'Sofia': [23.321868, 42.697708],
    //   'Stockholm': [18.068581, 59.329323],
    //   'Sydney': [151.209296, -33.86882],
    //   'Taipei': [121.565418, 25.032969],
    //   'Tallinn': [24.753575, 59.436961],
    //   'Tel Aviv': [34.781768, 32.0853],
    //   'Tokyo': [139.691706, 35.689487],
    //   'Toronto': [-79.383184, 43.653226],
    //   'Vilnius': [25.279651, 54.687156],
    //   'Warsaw': [21.012229, 52.229676],
    //   'Vienna': [16.373819, 48.208174],
    //   'Zurich': [8.541694, 47.376887]
    // };

    // var rawData = [
    //   ['Amsterdam', 101.6, 90.1, 77.1, 69.1, 78.3, 69.4, 1755, 24, 15, 7, 9, 44, 720, 1.651, 1.59, 2.205, 0.974, 0.93, 2.477, 67.4, 364, 690, 1113, 4960, 3.19, 30.05, 16.34, 24000, 689, 1.8, 50, 200, 390, 690, 1040, 2331, 1580, 17.5, 25.5, 30, 48400, 39200, 26300, 30200, 55400, 39800, 104400, 58700, 64600, 49200, 40300, 31100, 40300, 27700, 66700, 66700],
    //   ['Athens', 62.6, 60.5, 66.2, 58.2, 41.4, 40, 1822, 22, 29, 13, 25, 86, 590, 3.314, 2.991, 4.236, 1.349, 4.701, 3.1, 56.8, 390, 580, 880, 4620, 1.81, 13.81, 5.5, 24900, 389, 2.02, 54, 100, 210, 630, 1110, 1489, 647, 10.1, 13.5, 24, 26200, 23300, 18500, 17100, 24500, 24200, 57200, 44000, 34100, 30700, 21000, 17700, 15400, 16300, 34400, 34400],
    //   ['Auckland', 77.9, 82.9, 76.7, 67.8, 59.8, 63.5, 1852, 20, 15, 16, 7, 51, 580, 3.362, 2.377, 3.959, 2.116, 2.303, 4.027, 66.1, 496, 630, 1023, 4450, 2.57, 40.86, 13.62, 23900, 226, 1.33, 45, 190, 280, 560, 670, 1644, 1333, 16, 19.5, 17, 35700, 31500, 36500, 28500, 41800, 31100, 61300, 55000, 56300, 37300, 33400, 26900, 27200, 27500, 64900, 64900],
    //   ['Bangkok', 26.4, 31.4, 55.4, 48.2, 14.6, 17.4, 2312, 7, 36, 25, 20, 165, 550, 4.637, 2.242, 5.468, -0.845, 3.272, 3.807, 47, 422, 440, 414, 4370, 0.75, 3.47, 2.47, 29600, 103, 1, 56, 90, 320, 400, 600, 1463, 932, 4.4, 4.8, 5, 8300, 8400, 11100, 3000, 10900, 10900, 32200, 22400, 24600, 14500, 7800, 6000, 5800, 6500, 19400, 19400],
    //   ['Barcelona', 79.7, 78.6, 74.7, 65.6, 59.6, 58.7, 1760, 29, 18, 11, 6, 52, 740, 3.563, 2.844, 4.13, -0.238, 2.043, 3.052, 64, 393, 750, 984, 5000, 2.59, 41.96, 10.36, 26900, 177, 1.77, 51, 170, 330, 580, 1110, 1269, 1087, 14.8, 19.4, 23, 41300, 34100, 29100, 29800, 31500, 32100, 40800, 67000, 43100, 38900, 28900, 25500, 25000, 28000, 58300, 58300],
    //   ['Beijing', 28.2, 29.9, 60.3, 51.8, 17, 18, 1979, 9, 34, 27, 16, 184, 730, 1.467, 4.767, 5.852, -0.683, 3.325, 5.417, 50.6, 463, 420, 310, 4370, 0.26, 14.25, 3.64, 23800, 67, 1.24, 41, 160, 400, 660, 700, 1554, 660, 4.5, 5.6, 17, 11400, 7000, 8500, 7600, 6200, 11900, 13300, 11700, 10700, 18300, 17100, 8900, 5400, 7600, 19800, 19800],
    //   ['Berlin', 109.7, 97.1, 72.2, 64.1, 79.2, 70.1, 1742, 28, 16, 11, 9, 56, 720, 1.784, 2.276, 2.754, 0.234, 1.15, 2.483, 62.5, 389, 530, 841, 4670, 2.98, 80.3, 10.79, 35600, 246, 2.1, 34, 120, 230, 570, 710, 2395, 1178, 17.7, 25.8, 30, 56900, 38600, 35500, 28500, 47400, 57600, 84200, 74500, 72100, 51700, 38100, 28200, 32000, 28100, 81700, 81700],
    //   ['Bogotá', 41.4, 40.7, 53.1, 47, 22.3, 22, 1981, 15, 52, 34, 17, 142, 540, 4.296, 5.544, 6.998, 4.202, 2.27, 3.416, 45.8, 363, 410, 634, 4170, 0.84, null, 2.81, 20200, 303, 1.24, 25, 140, 300, 310, 440, 1554, 841, 5.5, 7.3, 12, 11100, 7600, 8400, 7000, 7300, 11900, 27600, 65800, 19700, 14600, 12300, 7400, 4100, 5300, 31900, 31900],
    //   ['Bratislava', 51.3, 50.7, 53.9, 47.1, 27.7, 27.3, 1884, 23, 31, 20, 19, 126, 490, 4.264, 1.89, 3.935, 0.925, 0.697, 4.079, 45.9, 344, 330, 414, 4740, 1.08, 22.97, 5.61, 26700, 65, 1.93, 28, 120, 230, 250, 340, 1683, 841, 6.9, 9, 22, 11300, 14100, 11300, 10000, 16300, 18900, 20300, 43300, 22800, 15800, 16100, 9600, 12600, 16400, 48300, 48300],
    //   ['Brussels', 107.5, 78.5, 75.8, 68.8, 81.5, 59.5, 1729, 20, 19, 10, 11, 54, 730, 2.337, 1.814, 4.493, -0.009, 2.332, 3.469, 67.1, 433, 690, 1243, 4580, 2.42, 26.03, 15.71, 23200, 500, 1.91, 63, 130, 280, 630, 800, 2538, 1839, 15, 26.5, 42, 44000, 36500, 38200, 34200, 52100, 43600, 97000, 73700, 67100, 56900, 42300, 35200, 33500, 36000, 78200, 78200],
    //   ['Budapest', 35.5, 32, 56.7, 50.4, 20.1, 18.1, 1912, 22, 49, 13, 26, 206, 740, 3.878, 7.934, 6.067, 4.209, 4.85, 3.9, 49.1, 340, 390, 556, 5270, 1.43, 15.96, 7.64, 22600, 76, 1.95, 28, 130, 410, 580, 920, 2123, 1165, 4.6, 6.6, 28, 8900, 11500, 9300, 7000, 10900, 16800, 25600, 21100, 23300, 21400, 11100, 8200, 6500, 8900, 29300, 29300],
    //   ['Buenos Aires', 42.9, 46.2, 55, 47.7, 23.6, 25.4, 1830, 13, 45, 12, 16, 187, 620, 10.898, 8.83, 8.585, 6.27, 10.461, 9.775, 46.5, 310, 380, 401, 5170, 0.28, null, 7.97, 20200, 307, 1.27, 25, 160, 280, 400, 660, 1359, 738, 6.4, 7.7, 16, 8700, 16300, 11900, 10200, 11400, 15800, 34300, 17600, 19200, 17100, 15800, 14600, 7500, 10400, 15400, 15400],
    //   ['Bucharest', 37.1, 34, 39.8, 34.8, 14.8, 13.5, 1836, 26, 57, 21, 26, 230, 370, 6.552, 4.84, 7.848, 5.581, 6.101, 5.812, 33.9, 244, 270, 388, 3830, 0.75, 9.43, 3.17, 11700, 36, 1.9, 25, 100, 190, 180, 300, 984, 530, 3.4, 4.8, 29, 5600, 7500, 9500, 7900, 7400, 14900, 13900, 22000, 11400, 8800, 6000, 8200, 5800, 5300, 13200, 13200],
    //   ['Caracas', 21.9, 25.7, 91.1, 85.4, 20, 23.4, 1878, 17, 80, 59, 13, 272, 830, 13.654, 18.703, 30.37, 27.081, 28.187, 26.09, 83.3, 689, 690, 2098, 8460, 0.35, null, 11.65, 49000, 18, 0.01, 68, 190, 400, 520, 950, 3820, 2784, 5.9, 6.5, 7, 10500, 5400, 10900, 6100, 9700, 25400, 16800, 30600, 22800, 15800, 8400, 9500, 5400, 6700, 12400, 12400],
    //   ['Chicago', 105.3, 101.9, 79.1, 72.9, 83.3, 80.6, 1853, 12, 11, 15, 9, 32, 540, 3.222, 2.86, 3.798, -0.321, 1.641, 3.142, 71.1, 460, 780, 1398, 4270, 2.25, 34.99, 12.5, 22100, 95, 1.11, 38, 200, 270, 740, 1200, 3535, 2214, 20.3, 27.1, 25, 49300, 52100, 44000, 49000, 58500, 48300, 79300, 88500, 88200, 40300, 42600, 23200, 33800, 38700, 103500, 103500],
    //   ['Delhi', 23, 25, 33.2, 29.5, 7.6, 8.3, 2264, 13, 65, 15, 40, 370, 370, 6.177, 6.372, 8.349, 10.882, 11.99, 8.628, 28.8, 208, 210, 466, 4590, 0.25, 10.58, 1.95, 15300, 93, 0.77, 18, 100, 250, 260, 410, 867, 556, 2.1, 2.5, 11, 4500, 2500, 1900, 1300, 4800, 10200, 13500, 11100, 9600, 6700, 5400, 3000, 1800, 4000, 14100, 14100],
    //   ['Doha', 38.8, 50.2, 68.6, 66.9, 26.6, 34.4, 2165, 25, 20, 12, 15, 82, 690, 11.828, 13.764, 15.049, -4.865, -2.433, 2, 65.3, 355, 870, 1735, 3790, 1.14, null, 4.12, 17000, 27, 0.24, 63, 200, 360, 340, 470, 4869, 3004, 8.7, 8.7, 0, 22300, 10400, 9800, 4100, 20600, 13700, 49500, 47000, 32900, 27100, 19800, 10900, 3200, 11500, 23100, 23100],
    //   ['Dubai', 63.5, 82, 78.2, 77.2, 49.6, 64.2, 2095, 24, 11, 10, 14, 46, 1120, 9.272, 11.115, 11.454, 1.56, 0.878, 0.882, 75.3, 484, 790, 2447, 4550, 0.54, null, 8.17, 23100, 94, 1.01, 95, 200, 680, 1270, 1450, 4882, 3483, 16.2, 16.2, 0, 35900, 16300, 14200, 3600, 38300, 58100, 116800, 91400, 64800, 26200, 22900, 13600, 9800, 19600, 80000, 80000],
    //   ['Dublin', 101.9, 103.3, 76.3, 69.7, 77.7, 78.8, 1707, 21, 14, 7, 10, 39, 580, 2.7, 2.873, 3.108, -1.683, -1.557, 1.139, 68, 454, 720, 1554, 5160, 2.74, 34.53, 14.89, 32000, 427, 2.01, 55, 130, 260, 470, 600, 2331, 1592, 19.8, 25.3, 20, 57100, 45500, 38300, 28200, 42600, 42100, 88800, 86100, 54300, 45800, 31700, 25300, 28200, 28800, 85000, 85000],
    //   ['Frankfurt', 102.2, 90.5, 86.3, 77.2, 88.2, 78.1, 1731, 28, 14, 8, 10, 42, 950, 1.784, 2.276, 2.754, 0.234, 1.15, 2.483, 75.3, 439, 710, 1282, 5510, 3.24, 86.77, 16.23, 36800, 78, 1.89, 68, 130, 370, 840, 890, 2370, 1644, 19.7, 28.7, 30, 60900, 33300, 40400, 34100, 48800, 40000, 83300, 77700, 77700, 61600, 50600, 37900, 34100, 29100, 104100, 104100],
    //   ['Geneva', 116, 111.8, 106.6, 96.8, 123.6, 119.2, 1893, 20, 14, 6, 7, 24, 1220, 1.047, 0.732, 2.43, -0.476, 0.685, 0.228, 94.5, 714, 1080, 1567, 5330, 3.67, 58.23, 27.78, 25200, 135, 2.04, 99, 270, 620, 850, 1150, 4701, 2434, 30, 40.2, 24, 89600, 77400, 61900, 58900, 78400, 76500, 105800, 113300, 89400, 110900, 64900, 49200, 55400, 61800, 171100, 171100],
    //   ['Helsinki', 93, 86, 86.5, 82.3, 80.2, 74.2, 1712, 28, 16, 13, 6, 44, 960, 1.279, 1.584, 3.9, 1.635, 1.686, 3.323, 80.3, 497, 840, 1437, 5400, 3.28, 34.83, 12.71, 34600, 152, 1.97, 44, 200, 450, 610, 1200, 8677, 1437, 18.7, 26.1, 27, 48000, 42200, 38200, 38700, 40500, 41200, 89900, 60500, 69200, 44700, 38600, 34600, 33500, 35600, 74500, 74500],
    //   ['Hong Kong', 58.5, 68.1, 73.1, 75.2, 42.8, 49.8, 2295, 11, 9, 23, 9, 53, 970, 2.018, 2.027, 4.285, 0.588, 2.312, 5.281, 73.4, 651, 520, 1800, 4770, 1.33, 20.48, 3.99, 23800, 509, 1.65, 58, 290, 610, 390, 620, 9661, 4222, 12.5, 13.9, 9, 52500, 20100, 20100, 18900, 23100, 40800, 64400, 63700, 44600, 22300, 25100, 22100, 14000, 19000, 62600, 62600],
    //   ['Istanbul', 39, 39.4, 71.5, 65.6, 27.9, 28.2, 2139, 19, 42, 9, 14, 166, 720, 9.597, 8.756, 10.444, 6.251, 8.567, 6.472, 64, 430, 630, 1282, 5490, 0.95, 15.84, 8.94, 34600, 1189, 2.37, 44, 240, 420, 630, 880, 3147, 1476, 7.1, 9.1, 20, 14800, 14600, 13500, 9500, 20300, 51300, 38600, 39100, 34100, 19300, 13500, 9500, 9200, 9300, 33500, 33500],
    //   ['Jakarta', 14.7, 17.2, 53.7, 48.6, 7.9, 9.2, 2111, 11, 62, 100, 27, 348, 500, 13.104, 6.034, 9.777, 4.813, 5.133, 5.357, 47.4, 369, 330, 673, 4460, 0.38, 2.64, 2.93, 47800, 717, 0.76, 19, 160, 320, 190, 390, 2719, 1087, 2.3, 2.6, 7, 2700, 2600, 2200, 1300, 10100, 4400, 17000, 13000, 10700, 5300, 4800, 2700, 1400, 3200, 15800, 15800],
    //   ['Johannesburg', 80.6, 75.5, 52.1, 47.3, 41.5, 38.9, 1886, 15, 26, 9, 10, 94, 490, 4.688, 7.09, 11.504, 7.125, 4.27, 4.999, 46.1, 310, 400, 738, 3800, 1.25, 15.59, 4.07, 35500, 56, 1.45, 28, 100, 320, 310, 400, 2162, 1295, 9.8, 13.5, 21, 17700, 11900, 21000, 7500, 41800, 18000, 51500, 36800, 74900, 11900, 22400, 10500, 15900, 6600, 65900, 65900],
    //   ['Cairo', 26.2, 28.7, 42.4, 36.3, 11, 12.1, 2331, 15, 67, 8, 19, 290, 420, 4.198, 10.952, 11.704, 16.244, 11.703, 11.068, 35.4, 300, 300, 168, 4220, 0.19, 5.24, 1.49, 21500, 50, 0.15, 27, 100, 200, 380, 430, 1113, 492, 3, 3.6, 15, 1600, 1400, 2700, 2600, 6600, 48800, 27700, 20500, 9600, 3200, 6200, 5400, 1900, 3100, 10900, 10900],
    //   ['Kiev', 19.5, 20.9, 53.1, 46.9, 10.5, 11.2, 1850, 24, 45, 18, 29, 266, 930, 9.009, 12.843, 25.201, 15.9, 9.365, 7.958, 45.7, 263, 450, 556, 4140, 0.25, 12.15, 4.56, 24900, null, 1.22, 42, 150, 530, 430, 600, 1631, 854, 2.8, 3.4, 16, 3800, 5300, 6500, 4900, 7000, 10500, 11100, 14100, 6700, 10000, 4900, 4100, 4000, 3900, 13300, 13300],
    //   ['Copenhagen', 122, 92.6, 100.9, 88.8, 123.1, 93.4, 1674, 29, 15, 9, 6, 36, 1060, 1.9, 1.712, 3.399, 1.319, 2.298, 2.757, 86.7, 567, 960, 1100, 5060, 4.88, 59.92, 17.33, 63400, 641, 1.99, 72, 270, 490, 950, 1150, 2616, 1735, 23.5, 40.1, 41, 86500, 56300, 68400, 58500, 68900, 61000, 86400, 94500, 89200, 72900, 61900, 46000, 64800, 42200, 109200, 109200],
    //   ['Kuala Lumpur', 41.1, 42, 52.1, 46.2, 21.5, 22, 1986, 15, 25, 20, 21, 129, 500, 3.609, 2.027, 5.4, 0.6, 1.7, 3.2, 45.1, 346, 400, 777, 4300, 0.68, 7.06, 2.44, 25700, 91, 0.59, 58, 120, 220, 230, 540, 1256, 621, 5.5, 7, 17, 10400, 8300, 10700, 6100, 12800, 17100, 44000, 31200, 23600, 11400, 13200, 7400, 5100, 7100, 22700, 22700],
    //   ['Lima', 43.6, 45.5, 50.8, 44.5, 22.2, 23.1, 2107, 27, 21, 20, 15, 162, 600, 2.004, 1.78, 5.788, 2.936, 1.53, 3.369, 43.4, 303, 410, 492, 4480, 0.47, null, 4.52, 19300, 95, 1.36, 36, 130, 400, 310, 470, 1502, 543, 5.8, 7.2, 15, 6300, 6200, 7600, 5400, 15900, 12200, 37300, 40700, 24300, 10100, 18900, 6700, 7600, 8300, 29400, 29400],
    //   ['Lisbon', 65.3, 63.2, 67.5, 60.2, 44, 42.6, 1695, 22, 22, 13, 8, 96, 720, 3.043, 2.423, 2.646, -0.903, 1.391, 3.558, 58.7, 310, 570, 1100, 5180, 1.83, 27.63, 11.5, 38100, 181, 1.95, 45, 80, 390, 390, 510, 1308, 1178, 10.7, 14.3, 22, 32000, 22500, 19700, 13900, 25900, 33700, 33700, 35200, 36100, 32400, 17500, 15000, 18500, 14900, 63100, 63100],
    //   ['Ljubljana', 57.5, 50.5, 63.3, 55.2, 36.4, 32, 1792, 22, 25, 22, 38, 101, 550, 2.458, 3.611, 5.7, 0.855, 1.834, 1.828, 53.8, 368, 490, 479, 4970, 2.03, 18.49, 7.25, 24600, 140, 1.71, 32, 140, 240, 560, 1000, 1774, 1023, 8.1, 11.9, 30, 29000, 15000, 18100, 13000, 17900, 28000, 56600, 41700, 35000, 23400, 16300, 12800, 12400, 17900, 27800, 27800],
    //   ['London', 91.2, 86.2, 87.2, 83, 79.5, 75.2, 1786, 22, 15, 6, 13, 42, 930, 2.3, 2.346, 3.629, 2.12, 3.339, 4.454, 81, 436, 770, 1981, 4910, 3.7, 81.95, 23.03, 28000, 217, 2.4, 50, 200, 440, 480, 800, 4830, 3263, 19, 25.9, 26, 55700, 44400, 40900, 39100, 51700, 36400, 80300, 75000, 65900, 46600, 40700, 26300, 37600, 27100, 64200, 64200],
    //   ['Los Angeles', 113.8, 106.7, 75.8, 68.7, 86.3, 80.9, 1942, 12, 11, 18, 6, 33, 520, 3.222, 2.86, 3.798, -0.321, 1.641, 3.142, 67, 501, 580, 1204, 3590, 1.5, 34.33, 25.06, 30100, 296, 1.13, 37, 170, 270, 710, 1240, 2564, 1877, 20.4, 28.1, 28, 55700, 60200, 42100, 47000, 62300, 51900, 58500, 69200, 90500, 46100, 44900, 36500, 47300, 45700, 80300, 80300],
    //   ['Luxembourg', 111.6, 116.2, 94.4, 85.5, 105.4, 109.7, 1788, 25, 11, 9, 9, 30, 970, 2.667, 2.313, 3.383, 0.37, 2.274, 3.409, 83.4, 524, 860, 1813, 4660, 1.94, 54.13, 19.43, 31100, 118, 1.6, 81, 140, 380, 960, 1440, 2305, 1839, 27.6, 34.3, 18, 113300, 93900, 38900, 28500, 45300, 35500, 126300, 58300, 66800, 93900, 45700, 28500, 29900, 37200, 89400, 89400],
    //   ['Lyon', 81.8, 82.5, 78.4, 68.8, 64.2, 64.7, 1641, 26, 16, 10, 12, 52, 740, 1.912, 1.607, 3.159, 0.103, 1.735, 2.294, 67.2, 477, 700, 945, 4540, 2.07, 40.02, 13.08, 30400, null, 1.84, 29, 180, 310, 740, 1180, 1554, 1217, 16.3, 20.9, 21, 33900, 30300, 26200, 24000, 29400, 43500, 81500, 70600, 45100, 55200, 26000, 22500, 23800, 24700, 100900, 100900],
    //   ['Madrid', 83.6, 85, 69.7, 61.7, 57, 57.9, 1733, 30, 18, 9, 6, 53, 590, 3.563, 2.844, 4.13, -0.238, 2.043, 3.052, 60.2, 432, 630, 1049, 4940, 1.94, 44.51, 13.27, 21600, 177, 1.76, 53, 170, 240, 580, 910, 1295, 1061, 14.6, 18.5, 19, 29100, 25400, 20500, 23200, 27300, 35900, 39200, 63500, 52700, 53500, 26900, 17500, 19900, 25600, 65100, 65100],
    //   ['Milan', 88.2, 77.2, 79.7, 72.2, 70.3, 61.5, 1753, 23, 17, 14, 15, 55, 770, 2.217, 2.038, 3.5, 0.764, 1.639, 2.903, 70.4, 487, 710, 1256, 4790, 1.94, 34.75, 16.84, 18800, 186, 2.24, 73, 170, 320, 870, 1170, 2862, 1813, 15.5, 22.9, 31, 32800, 36500, 29400, 28900, 36900, 51000, 68000, 60400, 57900, 43500, 32000, 29700, 28800, 23200, 58700, 58700],
    //   ['Manama', 56.4, 71.9, 54, 49.5, 30.5, 38.8, 1989, 22, 19, 5, 9, 72, 530, 2.041, 3.252, 3.533, 2.786, 1.969, 1, 48.3, 278, 510, 906, 3810, 0.8, null, 11.52, 18600, 93, 0.93, 18, 170, 350, 390, 510, 2486, 1282, 9.8, 9.9, 1, 19800, 10900, 9200, 7600, 24000, 11500, 57900, 33700, 34400, 15000, 15300, 19900, 11800, 14400, 27800, 27800],
    //   ['Manila', 19.2, 19.5, 41.5, 35.9, 8, 8.1, 2245, 10, 72, 70, 27, 435, 450, 6.234, 2.8, 9.299, 4.191, 3.793, 4.761, 35, 292, 300, 194, 5630, 0.34, 5.58, 2.88, 17400, 47, 1.02, 18, 160, 300, 140, 270, 1437, 505, 2, 2.6, 19, 3400, 2500, 2700, 2700, 3600, 8900, 10900, 18800, 9800, 3500, 4000, 3100, 2800, 4800, 9700, 9700],
    //   ['Mexico City', 26.8, 29.5, 51.2, 45.7, 13.7, 15.1, 2375, 6, 48, 25, 21, 220, 440, 3.629, 3.967, 5.125, 5.297, 4.155, 3.403, 44.6, 259, 480, 738, 4580, 0.37, null, 3.6, 19400, 28, 0.81, 31, 130, 210, 620, 930, 1398, 984, 3.8, 4.5, 12, 8400, 3800, 3400, 3100, 4800, 19800, 21400, 21200, 13600, 7100, 15500, 4800, 3100, 14600, 28000, 28000],
    //   ['Miami', 106.2, 103.7, 77, 70.7, 81.8, 79.9, 1938, 12, 12, 12, 5, 32, 560, 3.222, 2.86, 3.798, -0.321, 1.641, 3.142, 69, 499, 610, 1515, 3580, 1.83, 27.33, 15.32, 32400, 98, 1.05, 28, 160, 330, 630, 880, 2693, 1929, 20.1, 26.6, 23, 63500, 30600, 40700, 40100, 56500, 46200, 70300, 101500, 95100, 49300, 46800, 30700, 33800, 37700, 71500, 71500],
    //   ['Montreal', 93.1, 80.9, 81.8, 73.7, 76.2, 66.2, 1782, 13, 19, 14, 14, 44, 720, 2.018, 2.123, 2.385, 0.3, 1.776, 2.891, 71.9, 519, 690, 1359, 4610, 2.87, 70.58, 12.98, 21400, 308, 1.33, 51, 210, 310, 630, 1100, 2266, 1735, 16.7, 24.8, 32, 56700, 48700, 43800, 27600, 42500, 44600, 59700, 65100, 61600, 58900, 40800, 25900, 35400, 32000, 56300, 56300],
    //   ['Moscow', 45.1, 50.3, 66.2, 61.3, 30.4, 33.8, 1799, 25, 18, 7, 12, 119, 970, 9.679, 9.007, 14.117, 11.654, 6.854, 8.443, 59.8, 314, 690, 854, 5050, 0.85, 10.56, 13.24, 21200, 73, 0.93, 73, 200, 530, 820, 1040, 3639, 2784, 8.5, 9.9, 14, 11900, 18600, 15800, 13000, 15900, 30300, 28800, 29500, 25500, 19200, 16800, 12200, 11800, 10000, 46100, 46100],
    //   ['Mumbai', 24.9, 27.3, 34.1, 31, 8.5, 9.3, 2251, 19, 56, 29, 30, 338, 400, 6.177, 6.372, 8.349, 10.882, 11.99, 8.628, 30.3, 186, 210, 453, 3610, 0.13, 2.72, 1.76, 11500, 754, 0.91, 24, 160, 280, 320, 540, 1683, 802, 2.3, 2.8, 11, 3800, 3200, 2100, 1300, 3100, 7900, 19800, 21100, 15400, 7500, 3800, 2700, 1400, 4800, 18000, 18000],
    //   ['Munich', 108.3, 89.9, 84.6, 75.1, 91.5, 76, 1755, 25, 14, 11, 11, 42, 800, 1.784, 2.276, 2.754, 0.234, 1.15, 2.483, 73.3, 500, 720, 971, 4770, 3.24, 71.23, 18.04, 38400, 150, 1.86, 53, 170, 340, 830, 1130, 2499, 1813, 19.2, 29.8, 34, 51200, 40000, 37300, 28000, 51700, 55200, 105900, 115500, 79500, 78200, 50100, 40300, 31500, 30200, 105900, 105900],
    //   ['Nairobi', 21.4, 21, 48.6, 43.7, 10.4, 10.2, 2196, 21, 83, 27, 41, 292, 490, 14.455, 9.76, 13.1, 10.552, 4.087, 13.998, 42.7, 291, 370, 479, 4340, 0.54, 35.8, 7.16, 23900, null, 1.29, 22, 170, 220, 220, 280, 2382, 1230, 2.6, 3.4, 24, 4000, 3100, 2600, 2500, 4400, 16200, 11400, 16600, 21000, 7500, 4300, 3400, 2800, 4900, 14200, 14200],
    //   ['New York', 100, 100, 100, 100, 100, 100, 2061, 13, 9, 12, 5, 28, 1180, 3.222, 2.86, 3.798, -0.321, 1.641, 3.142, 97.6, 552, 1000, 3354, 3960, 2.42, 85.98, 8.5, 20500, 100, 1.15, 71, 340, 730, 570, 980, 7239, 4299, 25.2, 32.6, 22, 62900, 57200, 50000, 69300, 79100, 85500, 118200, 119300, 107400, 68400, 54800, 42300, 41300, 41700, 120600, 120600],
    //   ['Nicosia', 95, 107.1, 64, 57, 60.8, 68.5, 1778, 22, 11, 7, 8, 54, 490, 2.245, 2.165, 4.377, 0.174, 2.564, 3.486, 55.6, 370, 490, 919, 5480, 1.45, null, 9.31, 24600, 74, 1.67, 33, 140, 270, 630, 950, 1877, 932, 17.3, 19.8, 11, 47400, 24700, 28600, 24500, 33800, 52700, 62800, 48600, 47700, 45600, 23100, 20200, 21000, 21100, 107000, 107000],
    //   ['Oslo', 102.7, 83.9, 116, 104.5, 119.1, 97.4, 1749, 25, 17, 11, 12, 36, 1000, 2.332, 0.729, 3.766, 2.166, 2.4, 1.301, 102, 599, 1270, 1968, 5190, 5.12, 48.58, 23.22, 42700, 574, 2.37, 98, 220, 410, 840, 1450, 3250, 2214, 24.5, 38.8, 36, 61500, 60000, 78200, 62800, 72900, 59800, 123400, 97400, 79400, 69300, 64900, 49500, 63700, 46500, 144000, 144000],
    //   ['Paris', 94.8, 89.4, 83.9, 77.5, 78.1, 73.6, 1557, 29, 15, 14, 12, 44, 1100, 1.912, 1.607, 3.159, 0.103, 1.735, 2.294, 75.6, 522, 770, 1670, 5030, 2.16, 42.87, 9.39, 33700, 486, 1.89, 64, 210, 600, 1020, 1410, 3250, 2279, 18.5, 25.4, 26, 38700, 32800, 28000, 25900, 32100, 36800, 71000, 71100, 67100, 80700, 34700, 25300, 25400, 25600, 86900, 86900],
    //   ['Prague', 45.1, 46.2, 54.3, 48, 24.5, 25.1, 1829, 20, 34, 13, 16, 132, 740, 2.543, 2.862, 6.339, 1.034, 1.464, 1.929, 46.8, 295, 460, 725, 4900, 1.37, 12.78, 8.05, 27800, 116, 1.88, 58, 120, 350, 250, 530, 1230, 867, 6.3, 8, 20, 13200, 16200, 13600, 9100, 15400, 17100, 24500, 25300, 21000, 20100, 13200, 12200, 9200, 10500, 21900, 21900],
    //   ['Riga', 44.3, 39.2, 54.5, 47.2, 24.2, 21.4, 1806, 23, 33, 22, 22, 168, 580, 6.571, 10.083, 15.252, 3.259, -1.224, 4.223, 46, 316, 410, 466, 4460, 1.3, 9.23, 6.34, 29700, 98, 1.76, 36, 110, 300, 440, 570, 932, 841, 5.4, 7.9, 31, 8400, 13700, 15500, 14600, 15300, 14400, 23300, 30400, 16800, 18900, 13700, 8700, 9300, 13000, 33000, 33000],
    //   ['Rio de Janeiro', 44.4, 45, 61.2, 55.5, 27.2, 27.5, 1895, 30, 45, 33, 11, 160, 710, 4.196, 3.638, 5.672, 4.888, 5.039, 6.636, 54.2, 354, 530, 764, 5400, 1.56, null, 7.29, 16100, 357, 0.88, 23, 180, 440, 230, 350, 3198, 1320, 6.9, 8.9, 15, 13700, 9800, 14200, 8400, 18600, 21200, 62400, 33300, 37600, 10900, 10700, 6600, 6300, 7500, 70300, 70300],
    //   ['Rome', 69.6, 60.9, 79.2, 73.8, 55.1, 48.2, 1898, 22, 23, 17, 19, 70, 650, 2.217, 2.038, 3.5, 0.764, 1.639, 2.903, 72, 497, 690, 1813, 5190, 1.94, 36.69, 9.38, 32400, 389, 2.27, 36, 210, 320, 910, 830, 3237, 2033, 12.1, 17.9, 31, 30600, 33500, 22900, 19600, 31300, 74200, 53100, 65100, 28000, 34300, 34800, 22100, 16200, 13200, 94500, 94500],
    //   ['Santiago de Chile', 42.8, 40.6, 52.9, 47.6, 22.6, 21.5, 2034, 15, 55, 22, 21, 157, 630, 3.392, 4.408, 8.716, 1.485, 1.408, 3.34, 46.5, 348, 460, 673, 4520, 1.17, 6.49, 7.13, 13400, 255, 1.24, 33, 140, 410, 360, 610, 2344, 1023, 5.4, 7.4, 23, 15400, 10000, 11000, 6700, 12200, 12300, 28100, 36700, 32000, 21600, 11300, 8200, 7400, 8500, 30600, 30600],
    //   ['São Paulo', 48.7, 49.4, 61.7, 56.1, 30.1, 30.5, 1809, 30, 39, 27, 7, 106, 770, 4.196, 3.638, 5.672, 4.888, 5.039, 6.636, 54.8, 379, 540, 854, 5010, 1.53, null, 6.83, 23700, 485, 1.28, 42, 310, 470, 300, 600, 2810, 1580, 7.7, 9.8, 16, 10600, 11300, 12600, 6600, 12600, 25500, 61900, 67000, 28200, 14600, 13900, 8700, 7100, 4800, 19900, 19900],
    //   ['Seoul', 80.8, 74, 67.9, 66.3, 54.8, 50.2, 2308, 13, 16, 14, 10, 56, 780, 1.467, 4.767, 5.852, 2.757, 2.938, 4.026, 64.7, 629, 590, 2175, 4790, 0.9, 17.54, 3.4, 26000, 523, 1.56, 60, 240, 510, 220, 300, 3444, 2641, 12.7, 17.9, 23, 65400, 43600, 11700, 13000, 41600, 69800, 65400, 52300, 82900, 34100, 27100, 21800, 10500, 24500, 130800, 130800],
    //   ['Shanghai', 37.2, 38.4, 56.2, 49.7, 20.9, 21.6, 1966, 9, 28, 43, 8, 142, 740, 2.242, 2.535, 4.674, -0.683, 3.325, 5.417, 48.5, 404, 470, 712, 3950, 0.58, 10.4, 3.64, 29400, 76, 1.26, 64, 250, 440, 400, 960, 1424, 919, 5.4, 6.8, 17, 12200, 8500, 9300, 6700, 9200, 23700, 39600, 24700, 15800, 28900, 12300, 7400, 8200, 7600, 53200, 53200],
    //   ['Singapore', 50.8, 53.3, 94.9, 89.2, 48.2, 50.7, 2036, 14, 18, 21, 12, 58, 920, 0.973, 2.096, 6.514, 0.589, 2.824, 5.247, 87.1, 589, 710, 1994, 5120, 1.36, null, 8.65, 124900, 966, 1.25, 88, 180, 410, 530, 840, 4455, 3496, 12.8, 15.7, 18, 41200, 21900, 19600, 15000, 27200, 30400, 82600, 77600, 46800, 27800, 28200, 19000, 14500, 21600, 86800, 86800],
    //   ['Sofia', 32.6, 32.1, 42.4, 36.5, 13.8, 13.6, 1894, 22, 36, 20, 28, 248, 420, 7.417, 7.571, 11.95, 2.473, 3.036, 3.389, 35.6, 265, 290, 336, 3890, 0.66, 6.62, 2, 27700, 119, 1.71, 19, 80, 220, 270, 430, 764, 453, 3.4, 4.5, 23, 4700, 7300, 7500, 5700, 9300, 11100, 18100, 15200, 10400, 10700, 7400, 7400, 5100, 10900, 21900, 21900],
    //   ['Stockholm', 90.2, 84.9, 92, 81.7, 82.9, 78.1, 1795, 26, 17, 18, 11, 45, 810, 1.498, 1.677, 3.298, 1.989, 1.907, 1.366, 79.7, 553, 900, 1178, 4950, 4.52, 41.6, 24.64, 36400, 334, 2.14, 68, 180, 340, 760, 1240, 2525, 1826, 19.7, 27, 26, 46600, 41300, 41300, 43300, 44300, 45800, 88800, 81900, 72500, 48600, 41100, 37400, 37900, 41700, 83400, 83400],
    //   ['Sydney', 112.5, 117.1, 83.7, 77.8, 94.1, 98, 1846, 15, 11, 9, 6, 32, 690, 3.538, 2.332, 4.353, 1.82, 2.845, 3.389, 75.9, 508, 680, 1644, 5210, 3.43, 39.35, 9.75, 22200, 245, 1.5, 45, 220, 350, 580, 820, 4183, 2175, 24.7, 30.6, 18, 57400, 41800, 39400, 39200, 72000, 55900, 111000, 93400, 79000, 52200, 50500, 40400, 50500, 36800, 110300, 110300],
    //   ['Taipei', 52, 61.4, 63.9, 58, 33.3, 39.3, 2115, 11, 15, 9, 11, 79, 650, 0.598, 1.798, 3.527, -0.872, 0.963, 1.422, 56.6, 448, 490, 945, 4290, 0.68, 11.25, 4.37, 22400, 382, 1.1, 63, 120, 350, 980, 1070, 2434, 1696, 9.9, 10.8, 8, 25600, 23200, 16700, 20100, 24700, 41300, 61500, 44400, 29300, 20600, 15500, 12700, 11000, 14800, 36000, 36000],
    //   ['Tallinn', 47.9, 48.6, 58.3, 50.2, 28, 28.3, 1760, 28, 27, 20, 15, 139, 490, 4.43, 6.598, 10.366, -0.085, 2.894, 5.121, 49, 333, 380, 453, 5200, 1.81, 9.79, 5.86, 21200, null, 1.72, 34, 160, 250, 610, 830, 984, 712, 7.1, 9.1, 20, 11400, 17700, 21200, 10600, 17900, 21400, 51000, 16600, 27300, 11800, 14200, 8800, 10600, 13600, 27800, 27800],
    //   ['Tel Aviv', 57, 57.6, 75.4, 68.5, 43, 43.5, 1966, 16, 17, 9, 20, 100, 600, 2.107, 0.516, 4.745, 3.342, 2.686, 3.45, 66.8, 476, 620, 1282, 5740, 1.72, 16.95, 13.57, 33900, 413, 2.14, 40, 180, 360, 440, 580, 2577, 1709, 11, 14, 18, 20700, 26500, 18900, 21000, 25000, 33500, 48700, 56200, 56200, 28900, 18400, 12300, 15200, 19700, 83000, 83000],
    //   ['Tokyo', 84.7, 82.9, 109, 100.1, 92.4, 90.4, 2012, 16, 8, 14, 15, 35, 1190, 0.3, 0, 1.396, -1.347, -0.72, -0.283, 97.7, 927, 940, 1631, 4820, 2.46, 44.72, 21.42, 26300, 495, 1.62, 72, 370, 730, 1220, 1880, 6177, 2486, 22.8, 30.1, 24, 78200, 56300, 54000, 47000, 77700, 70200, 89400, 102100, 77200, 79400, 48800, 35100, 48000, 44700, 144000, 144000],
    //   ['Toronto', 103.4, 92.4, 74.3, 67.2, 76.8, 68.6, 1847, 14, 10, 11, 9, 38, 680, 2.018, 2.123, 2.385, 0.3, 1.776, 2.891, 65.6, 453, 750, 1087, 4520, 3.08, 35.62, 13.31, 15000, 75, 1.25, 71, 150, 340, 310, 840, 2564, 2020, 17.3, 25, 27, 82900, 36700, 33300, 46200, 44300, 53000, 66600, 47300, 84800, 32900, 26300, 28000, 29700, 37400, 74600, 74600],
    //   ['Vilnius', 42.6, 41.6, 50.9, 43.6, 21.7, 21.2, 1789, 24, 32, 19, 33, 168, 410, 3.788, 5.772, 11.138, 4.164, 1.19, 4.124, 42.5, 284, 360, 323, 4770, 0.94, 13.73, 4.63, 23700, null, 1.72, 22, 90, 220, 480, 510, 984, 492, 5.3, 7.1, 23, 10500, 12200, 13900, 9800, 17700, 21900, 23600, 18500, 16600, 20200, 10400, 6500, 8500, 8000, 38500, 38500],
    //   ['Warsaw', 44.3, 40.8, 53.7, 48, 23.8, 21.9, 1792, 23, 35, 13, 24, 141, 650, 1.033, 2.493, 4.215, 3.45, 2.514, 4.268, 46.8, 291, 420, 712, 4410, 0.79, 14.62, 3.15, 25000, 55, 1.76, 31, 110, 280, 580, 950, 1618, 1204, 5.5, 7.7, 28, 11900, 10000, 12600, 9700, 13200, 20500, 20900, 27600, 17900, 11900, 11700, 11000, 8400, 7600, 24900, 24900],
    //   ['Vienna', 100.6, 88.8, 81.3, 72.1, 80.2, 70.8, 1786, 25, 13, 8, 8, 46, 830, 1.686, 2.203, 3.223, 0.401, 1.69, 3.6, 70.3, 503, 680, 945, 5560, 2.59, 42.03, 17.27, 29800, 453, 1.8, 47, 140, 360, 980, 1040, 2486, 1424, 17.8, 26.1, 29, 44700, 42900, 34100, 29500, 56200, 49000, 96100, 82900, 69800, 49100, 49900, 30000, 25400, 32600, 72500, 72500],
    //   ['Zurich', 119.1, 120.3, 110, 102.5, 131.1, 132.4, 1887, 23, 12, 5, 5, 22, 1250, 1.047, 0.732, 2.43, -0.476, 0.685, 0.228, 100, 704, 1130, 2551, 5130, 4.66, 68.47, 28.93, 45200, 426, 2.01, 90, 280, 630, 1100, 1190, 4481, 2499, 33.4, 42.7, 21, 104600, 90700, 68900, 61800, 79800, 69900, 137200, 130000, 115700, 96900, 71100, 61400, 53200, 58900, 140400, 140400]
    // ];

    // function makeMapData (data: any) {
    //   var mapData: any = [];
    //   for (var i = 0; i < data.length; i++) {
    //     var geoCoord = geoCoordMap[data[i][0]];
    //     if (geoCoord) {
    //       mapData.push({
    //         name: data[i][0],
    //         value: geoCoord.concat(data[i].slice(1))
    //       });
    //     }
    //   }
    //   return mapData;
    // }
    chart.setOption ({
      title: {
        text: '用户世界分布地图',
        left: 'center',
        top: 5,
        itemGap: 0,
        textStyle: {
          color: '#000'
        },
        z: 200
      },
      dataRange: {
        min: 0,
        max: 10000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue']
      },
      geo: {
        map: 'world',
        silent: true,
        label: {
          emphasis: {
            show: false,
            areaColor: '#eee'
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 0.2,
            borderColor: '#404a59'
          }
        },
        roam: false
      },
      series: [
        // {
        //   name: 'Prices and Earnings 2012',
        //   type: 'scatter',
        //   coordinateSystem: 'geo',
        //   symbolSize: 8,
        //   data: makeMapData(rawData),
        //   activeOpacity: 1,
        //   label: {
        //     normal: {
        //       formatter: '{b}',
        //       position: 'right',
        //       show: false
        //     },
        //     emphasis: {
        //       show: true
        //     }
        //   },
        //   itemStyle: {
        //     normal: {
        //       borderColor: '#fff',
        //       color: '#577ceb',
        //     }
        //   }
        // },
        {
          name: 'World Population (2010)',
          type: 'map',
          mapType: 'world',
          roam: false,
          mapLocation: {
            y: 60
          },
          itemStyle: {
            emphasis: { label: { show: true } }
          },
          data: this.state.vaules
        }
      ]
    });

  }
  render() {
    return (
      <div id="chinaMap" style={{ display: 'inline-block', width: 1000, height: 500 }} />
    )
  }
}

export default ChinaMap;