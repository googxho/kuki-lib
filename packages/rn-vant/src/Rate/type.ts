import type { StyleProp, ViewStyle } from 'react-native';
import type { IconNames } from '@kuki-lib/rn-vant-icons';

export interface RateProps {
  /**
   * 图标大小，默认单位为px
   * @default 20
   */
  size?: number;
  /**
   * 选中时的颜色
   * @default 'f44336'
   */
  color?: string;
  /**
   * 图标间距，默认单位为px
   * @default 4
   */
  gutter?: number;
  /**
   * 是否为只读状态，只读状态下无法修改评分
   */
  readonly?: boolean;
  /** 是否禁用评分	 */
  disabled?: boolean;
  /** 是否允许半选	 */
  allowHalf?: boolean;
  /** 未选中时的颜色	 */
  voidColor?: string;
  /**
   * 是否可以通过滑动手势选择评分
   * @default true
   */
  touchable?: boolean;
  /** 禁用时的颜色	 */
  disabledColor?: string;
  /** 当前分值 */
  value?: number;
  /** 默认分值 */
  defaultValue?: number;
  /** 当前分值变化时触发的事件	 */
  onChange?: (v: number) => void;
  /**
   * 选中时的图标名称或图片链接
   * @default 'star'
   */
  icon?: IconNames;
  /**
   * 未选中时的图标名称或图片链接
   * @default 'star-o'
   */
  voidIcon?: IconNames;
  /**
   * 图标总数
   * @default 5
   */
  count?: number;
  style?: StyleProp<ViewStyle>;
}
