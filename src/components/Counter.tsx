import { signal } from '@preact/signals'
import './Counter.css'

const count = signal(0)

export default function Counter () {
  return(
    <div class="counter">
        <p>{count}</p>
        <button onClick={() => count.value++}>+1</button>
        <button onClick={() => count.value--}>-1</button>
    </div>
  )
}