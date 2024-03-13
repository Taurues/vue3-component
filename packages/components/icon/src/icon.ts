// 组件相关属性 & ts类型
import { ExtractPropTypes, PropType } from "vue";


export const iconProps = {
    color: String,
    size: [String, Number] as PropType<string | number>,
} as const;

type iconProps =  ExtractPropTypes<typeof iconProps>


