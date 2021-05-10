/*
 * @Author: dalou
 * @Date: 2021-05-10 18:20:49
 * @LastEditTime: 2021-05-10 18:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jike-study/thirdWeek/render.js
 */
const images = require("images")
function render(viewport,element){
    if(element.style){
        var img = images(element.style.width,element.style.height);
        if(element.style["background-color"]){
            let color = element.style["background-color"] || "rgb(0,0,0)";
            color.match(/rgb\((\d+),(\d+),(\d+)\)/);
            img.fill(Number(RegExp.$1),Number(RegExp.$2),Number(RegExp.$3),Number(RegExp.$4));
            viewport.draw(img,element.style.left||0,element.style.top||0);
        }
    }

    if(element.children){
        for(var child of element.children){
            render(viewport,child);
        }
    }
}
module.exports = render;
