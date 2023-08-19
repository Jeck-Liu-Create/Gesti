import {
  CloseButton,
  DragButton,
  MirrorButton,
  RotateButton,
  LockButton,
  UnLockButton,
  VerticalButton,
  HorizonButton,
} from "./buttons";
import { ViewObjectFamily } from "./enums";
import Gesti from "./gesti";

import {
  createGesti /**创建Gesti实例 */,
  onSelected /*监听选中Hook */,
  useController /*获取Gesti控制器 */,
  onHover /*鼠标悬浮到可操作对象上方时 */,
  onLeave /**鼠标离开可操作对象时 */,
  onCancel /*取消选中时 */,
  onHide /*隐藏可操作对象时 */,
  onUpdate /*刷新画布时 */,
  onLoad /**载入新的对象到画布内时 */,
  addVerticalLine /**新增预设垂直线到画布内 */,
  addHorizonLine /**新增预设水平线到画布内 */,
  addRect /**新增预设矩形到画布内 */,
  addCircle /**新增预设圆形到画布内 */,
  useTextHandler /**得到一个可操控文字对象控制器 */,
  createTextBox /**创建文字对象 */,
  loadToGesti /**加载某个可操作对象到画布内 */,
  createXImage /**创建一个XImage对象 */,
  createImageBox /**创建一个ImageBox对象 */,
  useGraffitiRect /**使用涂鸦 矩形 */,
  useGraffitiCircle /**使用涂鸦 圆形*/,
  useGraffitiLine /**使用涂鸦 线 */,
  useGraffitiWrite /**使用涂鸦 书写 */,
  useCloseGraffiti /**关闭涂鸦输入 */,
  importAll,
  exportAll,
  createDragButton,
  createHorizonButton,
  createVerticalButton,
  createRotateButton,
  createLockButton,
  createUnlockButton,
  createCloseButton,
  createMirrorButton,
  installButton /**安装按钮*/,
  unInstallButton /**卸载按钮 */,
  doSelect,
  doRotate,
  doLayerLower,
  doLayerBottom,
  doLayerTop,
  doLayerRise,
  doLock,
  doUnLock,
  doUpward,
  doDownward,
  doLeftward,
  doRightward,
  doCenter,
  doUpdate,
  useReader,
  currentViewObject,
  doCancel,
  driveMove,
  driveUp,
  driveDown,
  driveWheel,
  doCancelEvent,
  doCancelAll,
  removeListener,
  onDestroy,
  onBeforeDestroy,
  doDestroyGesti,
} from "./hooks/index";
import { inToPx, mmToIn, ptToPx } from "./utils";
import ImageBox from "./viewObject/image";
import TextBox from "./viewObject/text";
import WriteViewObj from "./viewObject/write";
import XImage from "./ximage";
//按钮
export {
  CloseButton,
  DragButton,
  MirrorButton,
  RotateButton,
  LockButton,
  UnLockButton,
  VerticalButton,
  HorizonButton,
};
export { ImageBox, XImage, TextBox,WriteViewObj };
//枚举
export { ViewObjectFamily };
//Hooks
export {
  createGesti /**创建Gesti实例 */,
  onSelected /*监听选中Hook */,
  useController /*获取Gesti控制器 */,
  onHover /*鼠标悬浮到可操作对象上方时 */,
  onLeave /**鼠标离开可操作对象时 */,
  onCancel /*取消选中时 */,
  onHide /*隐藏可操作对象时 */,
  onUpdate /*刷新画布时 */,
  onDestroy,/*销毁实例回调 */
  onBeforeDestroy,/*销毁实例前回调 */
  doDestroyGesti,/*销毁实例 */
  onLoad /**载入新的对象到画布内时 */,
  addVerticalLine /**新增预设垂直线到画布内 */,
  addHorizonLine /**新增预设水平线到画布内 */,
  addRect /**新增预设矩形到画布内 */,
  addCircle /**新增预设圆形到画布内 */,
  createTextBox /**创建文字对象 */,
  createXImage /**创建一个XImage对象 */,
  createImageBox /**创建一个ImageBox对象 */,
  useGraffitiRect /**使用涂鸦 矩形 */,
  useGraffitiCircle /**使用涂鸦 圆形*/,
  useGraffitiLine /**使用涂鸦 线 */,
  useGraffitiWrite /**使用涂鸦 书写 */,
  useCloseGraffiti /**关闭涂鸦输入 */,
  useTextHandler /**得到一个可操控文字对象控制器 */,
  loadToGesti /**加载某个可操作对象到画布内 */,
  importAll,
  exportAll,
  createDragButton,
  createHorizonButton,
  createVerticalButton,
  createCloseButton,
  createRotateButton,
  createLockButton,
  createUnlockButton,
  createMirrorButton,
  installButton /**安装按钮*/,
  unInstallButton /**卸载按钮 */,
  doSelect,
  doRotate,
  doLayerLower,
  doLayerBottom,
  doLayerTop,
  doLayerRise,
  doLock,
  doUnLock,
  doUpward,
  doDownward,
  doLeftward,
  doRightward,
  doCenter,
  doUpdate,
  doCancelEvent,
  doCancelAll,
  useReader,
  currentViewObject,
  doCancel,
  driveMove,
  driveUp,
  driveDown,
  driveWheel,
  removeListener,
  inToPx,
  mmToIn,
  ptToPx,
};
export default Gesti;


const canvas: HTMLCanvasElement = document.querySelector("canvas");

const img: HTMLImageElement = document.querySelector("#dog");
canvas.width = 400;
canvas.height =  600;
const gesti = createGesti({
  dashedLine: true,
});
gesti.init(canvas);
// gesti.addImage(gesti.createImage(img,{
//     scale:.1,
// }))

const controller = useController();

// controller.addImage(controller.createImage(img,{
//     scale:.5,
//     width:90,
//     height:90,
// }))
// onLoad((res) => {
//   doUpdate();
// });
const ximage = createXImage({
  data: img,
  width:img.width,
  height:img.height,
  scale: .2,
});

const imageBox = createImageBox(ximage);
const lockButton=new LockButton(imageBox);
const unLockButton=new UnLockButton(imageBox);
installButton(imageBox,[
  lockButton,
  unLockButton,
  createDragButton(imageBox),
]);
doCenter(null, imageBox);
loadToGesti(imageBox);
setTimeout(()=>{
  const ximage2=new XImage({
    data: img,
    width:img.width,
    height:img.height,
    scale: .3,
  });
  imageBox.setDecoration(ximage2);
  doUpdate()
},3000);

addHorizonLine().then((res:WriteViewObj)=>{
  res.setDecoration({
    lineWidth:1,
    color:"red",
  })
  loadToGesti(res);
})


const text=createTextBox("新建文本文档",{
  line:true,
  lineWidth:1,
   maxFontSize:20,
  resetFontSizeWithRect:true,
});
text.installButton(createDragButton(text));
text.installButton(createUnlockButton(text));
doLock(text);
// setInterval(()=>{
//   text.updateText(text.value+Math.random());
// },2000);

loadToGesti(text);

// onDestroy(()=>{
//   console.log("销毁")
// });
// onBeforeDestroy(()=>{
//   console.log("销毁前");
// })
// setTimeout(()=>{
//   doDestroyGesti();
//   console.log(gesti);
//   const gesti1 = createGesti({
//     dashedLine: true,
//   });
//   gesti1.init(canvas);
//   const ximage = createXImage({
//     data: img,
//     width:img.width,
//     height:img.height,
//     scale: .2,
//   });
//   const imageBox = createImageBox(ximage);
//   doCenter(null, imageBox);
//   loadToGesti(imageBox);
// },3000)

