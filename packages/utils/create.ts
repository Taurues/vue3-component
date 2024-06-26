/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:10:27
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-18 15:27:54
 * @FilePath: /vue3-component/packages/utils/create.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// BEM 规范 ： 避免命名冲突，规范命名
/**
 * B: block 代码块 z-botton
 * E：element 元素 z-botton__element
 * M：modifier 装饰 z-botton__element--disabled
 * S: status is-checked
*/
const _bem = (prefixName: string, block: string, element: string, modifier: string) => {
    if (block) {
        prefixName = prefixName + `-${block}`
    }
    if (element) {
        prefixName = prefixName + `__${element}`
    }
    if (modifier) {
        prefixName = prefixName + `--${modifier}`
    }
    return prefixName
}

function createBEM (prefixName: string) {
     
    // const b = (block: string) => _bem(prefixName, block, '', '')
    const b = () => _bem(prefixName, '', '', '')
    const e = (element: string) => element ? _bem(prefixName, '', element, '') : ''
    const m = (modifier: string) => modifier ? _bem(prefixName, '', '', modifier) : ''
    const be= (block: string, element: string) => ( block && element) ? _bem(prefixName, block, element, '') : ''
    const bm = (block: string, modifier: string) => (block && modifier) ? _bem(prefixName, block, '', modifier) : ''
    const em = (element: string, modifier: string) => (element && modifier) ?  _bem(prefixName, '', element, modifier) : ''
    const bem = (block: string, element: string, modifier: string) => (block && element && modifier) ?  _bem(prefixName, block, element, modifier) : ''
    const is = (name:string, status: any) => status ? `is-${name}` : ''
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is
    }
}


export function createNamespace (name: string) {
    const prefixName = `z-${name}`
    return createBEM(prefixName)
}


// const bem = createNamespace('button')
// console.log(bem.b())
