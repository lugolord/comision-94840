// import styles from '../styles/Button.module.css'

// ESTILOS EN LINEA

// function Button ({ label, padding }) { // PascalCase
//   return (
//     <button 
//       style={{ padding: padding, backgroundColor: 'blue', color: 'white'}}
//     >
//       {label}
//     </button>
//   )
// }

// ESTILOS GLOBALES

// function Button ({ label }) { // PascalCase
//   return (
//     <button 
//       className='btn'
//     >
//       {label}
//     </button>
//   )
// }

// CSS MODULES
// function Button ({ label }) { // PascalCase
//   return (
//     <button 
//       className={styles.buttonDark}
//     >
//       {label}
//     </button>
//   )
// }

function Button ({ label, styles }) { // PascalCase
  return (
    <button 
      className={styles}
    >
      {label}
    </button>
  )
}

export default Button
