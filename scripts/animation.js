export class Animation {
    constructor(frames, fps) {
        this.frames = frames.map(frame => new Image(frame));
        this.fps = 1000000 / fps;
        this.timer = Timer.new();
        this.frame = 0;
    }

    draw(x, y, flipHorizontal = false) {
        if (Timer.getTime(this.timer) >= this.fps) {
            this.frame = (this.frame + 1) % this.frames.length;
            Timer.setTime(this.timer, 0);
        }

        const currentImage = this.frames[this.frame];

        if (flipHorizontal) {
            currentImage.startx = currentImage.width;
            currentImage.endx = 0;
        } else {
            currentImage.startx = 0;
            currentImage.endx = currentImage.width;
        }

        currentImage.draw(x, y);
    }
}
