import * as ui from '@dcl/ui-scene-utils'
import { createCube } from './boardCreators'
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { AliceDialog } from './Dialog'

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c4a799c1-9ef8-4787-914e-4f8c15357881/src/item"
import Script2 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script3 from "../84e3703b-d55b-426a-8078-d673bf306288/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// Alice
export const alice = new NPC(
  {
    position: new Vector3(3.5, 1.6, 13),
    rotation: Quaternion.Euler(0, 130, 0),
  },
  'models/robots/alice.glb',
  () => {
    // animations
    alice.playAnimation('Hello', true, 2)

    let dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        alice.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    alice.addComponentOrReplace(new AudioSource(new AudioClip('sounds/alice.mp3')))
    alice.getComponent(AudioSource).playOnce()

    // dialog UI
    alice.talk(AliceDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/alice.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512,
      },
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    },
  }
)

const ringShape = new GLTFShape('models/robots/rings.glb')

const aliceRings = new Entity()
aliceRings.addComponent(ringShape)
aliceRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.65, 0),
  })
)
aliceRings.setParent(alice)


const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 8.8, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.7, 2, 8.3)
})
woodTile.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
woodTile.addComponentOrReplace(gltfShape2)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(1, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile2.addComponentOrReplace(transform4)
woodTile2.addComponentOrReplace(gltfShape2)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile3.addComponentOrReplace(transform5)
woodTile3.addComponentOrReplace(gltfShape2)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(1, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile4.addComponentOrReplace(transform6)
woodTile4.addComponentOrReplace(gltfShape2)

const woodTile5 = new Entity('woodTile5')
engine.addEntity(woodTile5)
woodTile5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile5.addComponentOrReplace(transform7)
woodTile5.addComponentOrReplace(gltfShape2)

const woodTile9 = new Entity('woodTile9')
engine.addEntity(woodTile9)
woodTile9.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile9.addComponentOrReplace(transform8)
woodTile9.addComponentOrReplace(gltfShape2)

const woodTile10 = new Entity('woodTile10')
engine.addEntity(woodTile10)
woodTile10.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile10.addComponentOrReplace(transform9)
woodTile10.addComponentOrReplace(gltfShape2)

const woodTile11 = new Entity('woodTile11')
engine.addEntity(woodTile11)
woodTile11.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodTile11.addComponentOrReplace(transform10)
woodTile11.addComponentOrReplace(gltfShape2)

const largeStoneWall = new Entity('largeStoneWall')

engine.addEntity(largeStoneWall)
largeStoneWall.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 5, -3.2)
})
largeStoneWall.addComponentOrReplace(transform11)
const gltfShape3 = new GLTFShape("d8586e63-20ac-426d-8602-3c28603e8294/FenceStoneTallLarge_01/FenceStoneTallLarge_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largeStoneWall.addComponentOrReplace(gltfShape3)

const largeStoneWall5 = new Entity('largeStoneWall5')

const bankLabel = new Entity()
bankLabel.addComponent(
    new Transform({
      position: new Vector3(8, 7, 16),
      rotation: Quaternion.Euler(0,180,0)
    })
  )

  const fiText = new TextShape("FiVerse")
  fiText.fontSize = 10
  fiText.hTextAlign = 'center'
  fiText.color = Color3.FromHexString('#000040')
  fiText.shadowOffsetY = -1
  fiText.shadowOffsetX = -1

  bankLabel.addComponent(fiText)
  bankLabel.setParent(largeStoneWall5)
  
  engine.addEntity(bankLabel)

engine.addEntity(largeStoneWall5)
largeStoneWall5.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0, 0, 15.6),
  rotation: new Quaternion(0, 0.7071068286895752, 1.0536712125031045e-7, 0.7071068286895752),
  scale: new Vector3(1.7, 5, -2.6)
})
largeStoneWall5.addComponentOrReplace(transform12)
largeStoneWall5.addComponentOrReplace(gltfShape3)

const largeStoneWall3 = new Entity('largeStoneWall3')
engine.addEntity(largeStoneWall3)
largeStoneWall3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(0, 0, 0.3),
  rotation: new Quaternion(-1.053671461193062e-8, -0.7071068286895752, 9.483041196745035e-8, 0.7071068286895752),
  scale: new Vector3(1.0000008344650269, 5, 3.1)
})
largeStoneWall3.addComponentOrReplace(transform13)
largeStoneWall3.addComponentOrReplace(gltfShape3)

const largeStoneWall8 = new Entity('largeStoneWall8')
engine.addEntity(largeStoneWall8)
largeStoneWall8.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 5, 3.2)
})
largeStoneWall8.addComponentOrReplace(transform14)
largeStoneWall8.addComponentOrReplace(gltfShape3)

const informationTerminal = new Entity('informationTerminal')
engine.addEntity(informationTerminal)
informationTerminal.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(13.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
informationTerminal.addComponentOrReplace(transform15)
const gltfShape4 = new GLTFShape("5e4a922e-50f1-40aa-a1a3-bee660371499/Terminal_01/Terminal_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
informationTerminal.addComponentOrReplace(gltfShape4)

const informationTerminal2 = new Entity('informationTerminal2')
engine.addEntity(informationTerminal2)
informationTerminal2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(14, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
informationTerminal2.addComponentOrReplace(transform16)
informationTerminal2.addComponentOrReplace(gltfShape4)



const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(7.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.8, 1.2, 1)
})

  const imgStrat = new Texture("images/strategy.png")
  let imgMaterialStrat = new Material()
  imgMaterialStrat.albedoTexture = imgStrat

  const imgCandle = new Texture("images/candlestick.png")
  let imgMaterialCandle = new Material()
  imgMaterialCandle.albedoTexture = imgCandle
  
  const imgChart = new Texture("images/candlestick_chart.png")
  let imgMaterialChart = new Material()
  imgMaterialChart.albedoTexture = imgChart

  let cubeMaterials = [imgMaterialStrat,imgMaterialCandle,imgMaterialChart];
  let cubeMatIdx = 0;

  let stratCube = createCube(new Vector3(7.46, 4.6, 0.8),Quaternion.Euler(0,180,0),new Vector3(6.4,2.8,.1));
  stratCube.addComponentOrReplace(imgMaterialStrat)

  stratCube.addComponent(new OnPointerDown(e => {
    cubeMatIdx = (cubeMatIdx+1)%cubeMaterials.length
    stratCube.addComponentOrReplace(cubeMaterials[cubeMatIdx])
  },{ 
    button: ActionButton.POINTER,
    distance: 16
   }),)
   
imageBillboardBlack.addComponentOrReplace(transform17)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(7.5, 0, 5),
  rotation: new Quaternion(0.08644337952136993, 0.4691269099712372, 0.8776745796203613, -0.046204887330532074),
  scale: new Vector3(1.0000007152557373, 1.0000004768371582, 1)
})
scoreboard.addComponentOrReplace(transform18)

let questionCube = createCube(new Vector3(1.75, 3.6, 8.4),Quaternion.Euler(0,90,0),new Vector3(6.4,2.8,.1));

const questionLabel = new Entity()
questionLabel.addComponent(
    new Transform({
      position: new Vector3(0, 0.3, 3),
      rotation: Quaternion.Euler(0,180,0)
    })
  )

  const qText = new TextShape("Should you \n buy the stock?")
  qText.fontSize = 1
  qText.hTextAlign = 'center'
  qText.color = Color3.FromHexString('#000040')
  qText.shadowOffsetY = -1
  qText.shadowOffsetX = -1

  questionLabel.addComponent(qText)
  questionLabel.setParent(questionCube)


  const yesLabel = new Entity()
  yesLabel.addComponent(
    new Transform({
      position: new Vector3(0, -0.15, 3),
      rotation: Quaternion.Euler(0,180,0)
    })
  )

  const yText = new TextShape("Yes    No    Maybe")
  yText.fontSize = 1
  yText.hTextAlign = 'center'
  yText.color = Color3.FromHexString('#000040')
  yText.shadowOffsetY = -1
  yText.shadowOffsetX = -1

  yesLabel.addComponent(yText)
  yesLabel.setParent(questionCube)

  engine.addEntity(yesLabel)

const videoBillboardWhite = new Entity('videoBillboardWhite')
engine.addEntity(videoBillboardWhite)
videoBillboardWhite.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(1.5, 0, 8.5),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
videoBillboardWhite.addComponentOrReplace(transform19)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(imageBillboardBlack, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageBillboardBlack, channelBus))
script2.spawn(scoreboard, {"initialVal":0,"threshold":100,"enabled":true}, createChannel(channelId, scoreboard, channelBus))
script3.spawn(videoBillboardWhite, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoBillboardWhite","actionId":"toggle","values":{}}]}, createChannel(channelId, videoBillboardWhite, channelBus))