// @ts-ignore
import * as json from './widget.json'
import {widget} from "./widget";

class widgetclass{

    public getWidget(){
        let parsedWidget : widget = json
        console.log(parsedWidget["web-app"].taglib["taglib-uri"])
        console.log(parsedWidget["web-app"]["servlet-mapping"].fileServlet)
    }
}

let obj = new widgetclass();
obj.getWidget()