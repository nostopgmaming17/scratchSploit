var pattern = ["control_start_as_clone", "*", "control_create_clone_of", "*", "control_delete_this_clone"]

vm.runtime.targets.forEach(function(sprite) {
    var crasher = patternscan(sprite, pattern)

    if (crasher.length > 0) {
        crasher[0][0].next = null
    }
})

vm.runtime.requestBlocksUpdate()
