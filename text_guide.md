Every 'second', the following needs to happen:
    - if completed line:
        - clear line+ all lines above it, move all shapes down one block space
    
    - if current shape is not on top of another shape or the ground:
        - erase current shape, move shape down one block space
    

Store a list of:
    - each shape
        - position
        - type


Shape(type, color):
    function to draw shape

    store type
    store all edges
