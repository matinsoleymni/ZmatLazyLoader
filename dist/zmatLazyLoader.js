/**
 * ! ZmatLazyLoader
 * ? https://github.com/matinsoleymni/ZmatLazyLoader
 *  MIT License
 * @author MatinSoleymani - Zmat24
 */

/**
 * 
 * @param {Number | String} id 
 * @param {Boolean} group 
 * @returns String
 */
export function isLoaded(id , group){
    if(document.querySelectorAll(`#${id}`).length > 0){
        if(!group){
            console.warn("Element was Loaded")
        }
        return "Loaded";
    }
}

/**
 * 
 * @param {Element} element 
 * @param {Object} elementAttrs 
 * @returns Void
 */
export function addAttr(element , elementAttrs){
    if(elementAttrs){
        Object.keys(elementAttrs).forEach(attr => {
            element.setAttribute(attr , elementAttrs[attr])
        })
    }
}

/**
 * 
 * @param {URL | String | File} url 
 * @param {Object} options 
 * @param {Boolean} group 
 * @returns Void
 */
export function load(url , options , group = 0){
    if(isLoaded(options.id ?? "zmatLoader" , group) == "Loaded" && !group){
        return;
    }
    let myElem = document.createElement(options.type ?? "h1")
    myElem.src = url
    myElem.id = options.id ?? "zmatLoader"
    myElem.setAttribute("class" , options.class ?? "")
    addAttr(myElem , options.attr)
    document.querySelector(`#${options.parent ?? "body"}`).appendChild(myElem)
    console.group("Loaded")
    console.info(myElem);
    console.groupEnd()
}

/**
 * 
 * @param {Array} group
 * @param {Object} options = {}
 * @return Void
 */
export function groupLoad(group , options={}){
    group.forEach(item => {
        load(item[0] , item[1] , 1)
    })
}
