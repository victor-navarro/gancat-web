const filelist = [
  'class00_img0000.png',
  'class00_img0001.png',
  'class00_img0002.png',
  'class00_img0003.png',
  'class00_img0004.png',
  'class00_img0005.png',
  'class00_img0006.png',
  'class00_img0007.png',
  'class00_img0008.png',
  'class00_img0009.png',
  'class00_img0010.png',
  'class00_img0011.png',
  'class00_img0012.png',
  'class00_img0013.png',
  'class00_img0014.png',
  'class00_img0015.png',
  'class00_img0016.png',
  'class00_img0017.png',
  'class00_img0018.png',
  'class00_img0019.png',
  'class00_img0020.png',
  'class00_img0021.png',
  'class00_img0022.png',
  'class00_img0023.png',
  'class00_img0024.png',
];

function getSample() {
  return "images/cancer_samples/"+filelist[Math.floor(Math.random() * filelist.length)];
}
