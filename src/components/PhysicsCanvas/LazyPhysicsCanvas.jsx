import { Suspense, lazy } from 'react'

const PhysicsCanvas = lazy(() => import('./PhysicsCanvas'))

export default function LazyPhysicsCanvas(props) {
  return (
    <Suspense fallback={<p>Loading scene...</p>}>
      <PhysicsCanvas {...props} />
    </Suspense>
  )
}
