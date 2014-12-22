import Graphics.Element (Element,container, middle,widthOf,heightOf)
import Signal
import Mouse
import Window
import Time (fps,timestamp,Time)
import Html (..)
import Html.Attributes (..)

htmlToElement w h el = container w h middle (toElement w h el)

main : Signal Element
main = Signal.map2 view Window.dimensions
                        (Signal.foldp (+) 0 (fps 10))

view dim t = htmlToElement ((fst dim) - 50) ((snd dim) - 50) <|
                div [class "chart"] [text ("Loading... " ++ toString t)]

port xpos : Signal Int
port xpos = Signal.map fst Mouse.position

port point : Signal (Time,(Int,Int))
port point = timestamp Mouse.position
