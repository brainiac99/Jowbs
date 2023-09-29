import formButtonStyles from './FormButton.module.css'

function FormButton({children}) {
  return (
    <button type="submit" className={formButtonStyles.formButton} >{children}</button>
  )
}

export default FormButton
