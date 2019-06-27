/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-27 15:46:59
 * @Last Modified by:   流年的樱花逝
 * @Last Modified time: 2019-06-27 15:46:59
 */
interface Config {
  //  这里也可以使用iconFont
  icon?: string
  iconFont?: string
  describe: string
}

const profileConfigs: Config[] = [
  {
    iconFont: 'icon-gangweitubiao',
    describe: '前端工程师'
  },
  {
    iconFont: 'icon-zuzhijiagou',
    describe: '前端工程师打造'
  },
  {
    iconFont: 'icon-didian',
    describe: '前端工程师打造'
  },
  {
    icon: 'github',
    describe: 'https://github.com/shmmly/chery-admin'
  }
]

export default profileConfigs
