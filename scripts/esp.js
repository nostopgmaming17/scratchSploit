// esp using renderer by Eyoko1
// draws using sprite boundary boxes
const clamp = function(num, min, max) {
  return Math.max(Math.min(num, max), min)
}

var startFrame = renderer.frame

var renderer = window.renderer
renderer.addDrawCallback(function() {
    var frame = renderer.frame
    var canvasWidth = renderer.canvasWidth
    var canvasHeight = renderer.canvasHeight
    var defaultWidth = renderer.defaultWidth
    var defaultHeight = renderer.defaultHeight
    var ctx = renderer.ctx || renderer.canvas.getContext("2d")
  
    if (frame - startFrame < 500) {
        ctx.globalAlpha = 1 - ((frame - startFrame) / 500)
        ctx.font = "15px Arial"
        ctx.fillText("esp loaded | by Eyoko1", 5, canvasHeight - 5)
        ctx.globalAlpha = 1
    }

    vm.runtime.targets.forEach(function(target) {
        if (target.id == vm.runtime.getTargetForStage().id) {
            return
        }
        var bounds = target.getBounds()
        var scratchX = target.x
        var scratchY = target.y
            
        var [x, y] = renderer.scratchToScreenPosition(scratchX, scratchY)
        var w = (bounds.top - bounds.bottom) * 1.5
        var h = (bounds.left - bounds.right) * 1.75
    
        w *= canvasWidth / defaultWidth
        h *= canvasHeight / defaultHeight
    
        var drawX = x - (w * 0.5)
        var drawY = y - (h * 0.5)
        
        ctx.globalAlpha = 0.2
        ctx.fillRect(drawX, drawY, w, h)
        ctx.globalAlpha = 1
        ctx.strokeRect(drawX, drawY, w, h)
        var textSize = clamp(w / 3, 3, 15)
        ctx.font = `${textSize}px Arial`
        ctx.fillText(target.sprite.name, drawX, drawY + h - 5)
    })
})
