// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000050101010101010101010101060000000402020202020207010402020700000004020202020b020704040202070000000402020202020b0704040b02070000000402020202020207040402020900000004020501060402070404020202000000040204020204020704030802020000000402040202030806080808040600000004020402070202020202020209000000040203080902020202020207000000000b02020202020202020b0207000000000308080808080a08080808090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . 2 2 2 . . . 2 . . . 2 
. . 2 . . 2 2 2 . . 2 2 . . . 2 
. . 2 . . 2 2 2 . . . 2 2 2 . . 
. . 2 . . 2 2 2 2 2 . 2 . . . . 
2 . 2 . . 2 2 2 . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.builtin.forestTiles0,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
