export function createCube(pos: Vector3,rot: Quaternion,size: Vector3) {
    let cube = new Entity()
    cube.addComponent(
      new Transform({
        position: pos,
        rotation: rot,
        scale: size
      })
    )
    cube.addComponent(new BoxShape())
  
    engine.addEntity(cube)
  
    return cube
  };

  