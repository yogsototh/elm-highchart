import Graphics.Element (Element,container, middle,widthOf,heightOf)
import Signal
import Mouse
import Time (fps)
import Html (..)

htmlToElement w h el = container w h middle (toElement w h el)

main : Signal Element
main = Signal.map view (Signal.foldp (+) 0 (fps 10))

view t = htmlToElement 100 100 <| text ("coucou " ++ toString t)

port xpos : Signal Int
port xpos = Signal.map fst Mouse.position
