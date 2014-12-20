import Graphics.Element (Element,container, midTop)
import Html (..)
main : Element
main = container 100 100 midTop (toElement 100 100 (text "coucou"))
