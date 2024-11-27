export const Card = ({ className = '', children }) => (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ className = '', children }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
  
  export const CardTitle = ({ className = '', children }) => (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  );
  
  export const CardContent = ({ className = '', children }) => (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );