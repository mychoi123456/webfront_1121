import { motion, AnimatePresence } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <h1>About Page!</h1>
      {/* // 배경 색상 전환(애니메이션) 효과가 안 된 이유는, 
      // 색상 이름을 작성해서 그렇네요.
      // 색상 코드(Hex)로 작성해야 애니메이션 효과가 적용됩니다. */}
      <motion.div
        initial={{ width: '100px', backgroundColor: '#F00' }}
        animate={{ width: '200px', backgroundColor: '#0F0' }}
        transition={{ duration: 1, delay: 1 }}>
        <div
          style={{ height: '100px' }}
          className="show"></div>
      </motion.div>
    </>
  )
}
