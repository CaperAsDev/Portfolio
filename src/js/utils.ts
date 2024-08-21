interface CurrentPageParameters {
  anchors: NodeListOf<HTMLAnchorElement>
}
export function currentPage({anchors}:CurrentPageParameters) {
  const currentHash = location.hash;
  
  const selection = currentHash.split('#')[1]
  anchors.forEach((a)=>{
    if(a.href.includes(selection)){
      a.ariaCurrent = 'page'
    } else {
      a.ariaCurrent = ""
    }
  })
}