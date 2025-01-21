const Button: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-primary-200 hover:bg-primary-100 font-semibold py-2 px-4 border-b-4 border-primary-400 hover:border-primary-200 transition-all shadow-md rounded bg-gradient-to-r from-primary-100 to-primary-600 hover:border-b-primary-200 hover:scale-105 hover:text-primary-300 text-primary-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
