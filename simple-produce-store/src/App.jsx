import List from "./components/List"
import Cart from "./components/Cart"
import { useState } from "react"

function App() {
  const [list, setList] = useState([
    {name: "Banana",
      price: 0.50,
      count: 0
    },
    {name: "Zucchini",
      price: 2.99,
      count: 0
    },
    {name: "Red Bell Pepper",
      price: 2.69,
      count: 0
    },
    {name: "Broccoli",
      price: 2.99,
      count: 0
    },
    {name: "Blueberries",
      price: 4.49,
      count: 0
    },
    {name: "Lime",
      price: 0.50,
      count: 0
    },
    {name: "Strawberries",
      price: 3.59,
      count: 0
    },
    {name: "Tomatoes",
      price: 2.24,
      count: 0
    },
    {name: "Onion",
      price: 1.69,
      count: 0
    },
    {name: "Avocado",
      price: 1.49,
      count: 0
    },
    {name: "Fennel",
      price: 2.49,
      count: 0
    },
    {name: "Mango",
      price: 1.99,
      count: 0
    },
    {name: "Corn",
      price: 1.99,
      count: 0
    },
    {name: "Apple",
      price: 1.52,
      count: 0
    },
    {name: "Lemon",
      price: 0.89,
      count: 0
    },
    {name: "Asparagus",
      price: 3.49,
      count: 0
    },
    {name: "Ginger",
      price: 3.99,
      count: 0
    },
    {name: "Garlic",
      price: 3.99,
      count: 0
    },
    {name: "Potato",
      price: 0.99,
      count: 0
    },
    {name: "Kiwi",
      price: 0.99,
      count: 0
    }
  ])
  return (
    <>
      <List list={list} setList={setList}/>
      <Cart list={list} setList={setList}/>
    </>
  )
}

export default App
