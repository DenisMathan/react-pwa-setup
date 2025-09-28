
interface touchPos {
    clientX: number,
    clientY: number,
    timeStamp: number
}

// Use a union type instead of enum for erasableSyntaxOnly compatibility
export type SwipeDirection = "noSwipe" | "swipeLeft" | "swipeRight" | "swipeUp" | "swipeDown";

const getPosFromEvent = (e:TouchEvent):touchPos => {
    const touch = (e as any).touches ? (e as any).touches[0] : (e as any);
    return {
        clientX: touch.clientX,
        clientY: touch.clientY,
        timeStamp: e.timeStamp
    };
  }
const checkSwiping = (startPos: touchPos, endPos: touchPos):SwipeDirection => {
    const timeToCountAsSwipe = 400;
    const distanceToCountAsSwipe = 50;
    if(!endPos) {
        return "noSwipe"
    }
    
    const xmove = startPos.clientX - endPos.clientX;
    const _xmove = Math.abs(xmove);
    
    const ymove = startPos.clientY - endPos.clientY;
    const _ymove = Math.abs(ymove);

    const tDelta = endPos.timeStamp -startPos.timeStamp;
    if (tDelta > timeToCountAsSwipe) {
      return "noSwipe"
    }
    
    if(_xmove > _ymove + distanceToCountAsSwipe) {
      //horizontal
      if(xmove < 0) {
        return "swipeRight"
      } else {
        return "swipeLeft"
      }
    } else if (_xmove + distanceToCountAsSwipe < _ymove) {
      // vertical
      if(ymove < 0) {
        return "swipeDown"
      } else {
        return "swipeUp"
      } 
    }
    return "noSwipe"
  }
export class SwipeListener {
    touchStartPos: touchPos | undefined;
    touchEndPos: touchPos | undefined;
    node: HTMLElement;
    callback: Function;
    constructor(node: HTMLElement, callback: Function) {
        this.node = node;
        this.callback = callback
        this.attach();
    }
    public destroy() {
        this.detach();
    }
    private attach() {
        this.node.addEventListener('touchstart', this.touchStart);
        this.node.addEventListener('touchmove', this.touchMove);
        this.node.addEventListener('touchend', this.touchEnd);
    }

    private touchStart = (e:TouchEvent) => {
        this.touchStartPos = getPosFromEvent(e);
    }
    private touchMove = (e:TouchEvent) => {
        this.touchEndPos = getPosFromEvent(e);
    }
    private touchEnd = () => {
        const res = checkSwiping((this.touchStartPos as touchPos), (this.touchEndPos as touchPos))
        this.callback(res)
        this.touchStartPos = undefined;
        this.touchEndPos = undefined
  }
    private detach() {
        this.node.removeEventListener('touchstart', this.touchStart);
        this.node.removeEventListener('touchmove', this.touchMove);
        this.node.removeEventListener('touchend', this.touchEnd); 
    }
}

  