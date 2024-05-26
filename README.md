# ScratchSploit
ScratchSploit is a powerful tool to hack scratch games! Use this tool on your **OWN RISK**! Because you might get banned by scratch! (although very unlikely)
Scripts in [scripts](https://github.com/nostopgmaming17/scratchSploit/tree/main/scripts) folder work only with the extension installed, here is a quick guide on installing the extension.

# Installing extension:
1. Download this repo in zip.
2. Unpack the zip into one folder.
3. Go to chrome://extensions and enable Developer mode.
4. Load the folder as an unpacked extension.

# Developer Documentation:

## Renderer:
window.renderer:
```
  canvas <HTML canvas element> -> canvas used to render over scratch  
  defaultWidth <number> -> default canvas width  
  defaultHeight <number> -> default canvas height  
  canvasWidth <number> -> current canvas width  
  canvasHeight <number> -> current canvas height

  addDrawCallback(callback : function) -> returns the id of the callback
                                       -> adds the given callback to the callback list which is then called every frame
                                       -> callbacks are called in the order they are in in the callback list

  removeDrawCallback(id : number) -> returns nothing
                                  -> removes the callback with the given id from the callback list

  frame <number> -> the current frame number (+1 every frame)

  scratchToScreenPosition(x : number, y : number) -> converts a position in scratch to a position inside the canvas which is returned as an array

  ctx <canvas context object> -> the return value of canvas.getContext("2d")
```

-----

# hook

## Arguments
```
(
  Object Container, | Example: vm.runtime._primitives
  Object Name,       | Example: "operator_lt"
  Hook Function      | Example: See below
)
```

## Return Value
```js
null
```

## Hook Function Example
```js
function(old) {
    return function(data, sequencer) {
        return old.apply(data, sequencer)
    }
}
```

-----

# hookp

## Arguments
```
(
    Object Container, | Example: vm.runtime._primitives
    Object Name,       | Example: "operator_lt"
    Hook Object      | Example: See below
)
```

## Return Value
```js
null
```

## Hook Object Example
```js
{
    apply(old, thisArg, args) {
        if (args[0].VALUE == 50) {
            return null
        }

        return Reflect.apply(old, thisArg, args)
    }
}
```

-----------------------------------------

# How to use scripts:
1. Press Ctrl + Shift + I or F12.
2. Press on "Console".
3. Paste in your code.
4. If you did all right then it should work.

# Script controls:

## TimMcCool's Amongus:
f - Toggle run.
t - Turn alive.
y - Die.

## Griffpatch's Bomberman:
f - Toggle noclip.
q - Win.

## Griffpatch's MMO Minecraft:
g - Toggle superspeed.
h - Toggle noclip-fly.

## Griffpatch's MMO Platformer:
Mouse click - Fly.
f - Change fly speed.

## Griffpatch's Slither and Slither 2:
w - Super speed.
f - Die.
r - Kick player.

## Griffpatch's Taco Burp:
f - Taco BOOM.


# Other:
That's all for now:) Have fun ruining other people's fun!






This README was updated by justablock and might not have controls for all games.
