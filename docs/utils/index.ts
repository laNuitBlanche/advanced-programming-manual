import fs from 'fs';
import path from 'path'
import { DefaultTheme } from 'vitepress';

const rootDirPath = path.dirname(__dirname)
const excludesFiles = ['.DS_Store']
const fileTypeReg = new RegExp(/\.md$/);
const sortDirReg = new RegExp(/[0-9]+、/)

export function getSideBarPages(dirPath: string): DefaultTheme.SideBarItem[] {
  let pages: DefaultTheme.SideBarItem[] = []
  const fileList = fs.readdirSync(rootDirPath + dirPath)
  fileList.forEach(item => {
    if (excludesFiles.includes(item)) return;
    const fullPath = `${dirPath}/${item}`
    const sideBar = getSideBarItem(item, fullPath)
    if(!sideBar) return
    pages.push(sideBar)
  })
  pages = dealSortDir(pages)
  return pages
}


/**
 * @example '1、简单难度' -> '简单难度'
 * @description 处理文件夹排序前缀，文件夹名称可以通过'1、' 或'2、'前缀来决定文件读取顺序（即页面显示顺序），但实际页面显示时需要将此前缀删掉
 */
export function dealSortDir(pages: DefaultTheme.SideBarItem[]): DefaultTheme.SideBarItem[] {
  if (!Array.isArray(pages)) return pages;
  return pages.map(item => {
    if ( !Array.isArray((item as DefaultTheme.SideBarGroup).children)) return item;
    const isSortDir = sortDirReg.exec(item.text)
    if (isSortDir && isSortDir.length) {
      const sortNum = isSortDir[0]
      item.text = item.text.replace(sortNum, '')
    }
    return item
  })
}

export function getSideBarItem(item: string, fullPath: string): DefaultTheme.SideBarItem {
  const fileInfo = fs.statSync(rootDirPath + fullPath)
  if (fileInfo.isFile()) {
    if (!fileTypeReg.test(item)) return
    if (item === 'index.md') {
      return
    }
    item = item.replace('.md', '')
    let link = fullPath
    if(fullPath.endsWith('.md')){
      link = link.slice(0, -3)
    }
    return { text: item, link }
  } else if (fileInfo.isDirectory()) {
    return { text: item, link: `${fullPath}/index`, children: getSideBarPages(fullPath) }
  }
}