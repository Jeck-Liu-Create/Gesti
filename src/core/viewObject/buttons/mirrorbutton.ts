import { ButtonLocation, FuncButtonTrigger } from "../../enums";

import BaseButton from "../../abstract/baseButton";
import Painter from "../../lib/painter";
import Rect from "../../lib/rect";
import Vector from "../../lib/vector";
import Widgets from "../../../static/widgets";
import ViewObject from "../../abstract/view-object";
import GestiConfig from "../../../config/gestiConfig";
import MirrorIcon, { Icon } from "@/core/lib/icon";

class MirrorButton extends BaseButton {
  protected buttonLocation: ButtonLocation = ButtonLocation.LB;
  constructor(location?: ButtonLocation) {
    super(location);
  }
  private icon:Icon=new MirrorIcon({
    size:10,
    color:'red',
  });
  trigger: FuncButtonTrigger = FuncButtonTrigger.click;
  radius: number = 10;
  /**
   * @description 相对坐标为以父对象为原点的定位
   * 绝对坐标是以canvas为原点的定位
   * 相对坐标用于渲染
   * 绝对坐标用于事件捕获
   * 相对坐标一般会直接以父对象为原点进行设置数据
   * 绝对坐标一般需要参考父对象进行设置数据  绝对坐标等于 = 父.绝对+ 相对
   * 绝对.x=父绝对+cos(θ+初始定位θ)*父半径
   * @param vector
   */
  updatePosition(vector: Vector): void {
    this.updateRelativePosition();
    this.setAbsolutePosition(vector);
  }
  setMaster(master: ViewObject): void {
    this.master = master;
  }
  effect(): void {
    this.master.mirror();
  }
  draw(paint: Painter): void {
    this.drawButton(
      this.relativeRect.position,
      this.master.rect.size,
      this.radius,
      paint
    );
  }
  drawButton(
    position: Vector,
    size: Size,
    radius: number,
    paint: Painter
  ): void {
    this.icon.render(paint,position);
    // this.icon.setSize(20);
    // const { width, height } = size;
    // const x = position.x,
    //   y = position.y;
    // paint.beginPath();
    // paint.fillStyle = GestiConfig.theme.buttonsBgColor;
    // paint.arc(x, y, this.radius, 0, Math.PI * 2);
    // paint.closePath();
    // paint.fill();
    // Widgets.drawMirror(paint, {
    //     offsetX: x,
    //     offsetY: y,
    // });
  }
  render(paint: Painter): void {
    this.draw(paint);
  }
  onSelected(): void {}
}

export default MirrorButton;
