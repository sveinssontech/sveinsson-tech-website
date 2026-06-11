import { Suspense, lazy } from 'react'

const Scene3D = lazy(() => import('./Scene3D'))

export default function LazyScene3D(props) {
  return (
    <Suspense fallback={<p>Loading scene...</p>}>
      <Scene3D {...props} />
    </Suspense>
  )
}
