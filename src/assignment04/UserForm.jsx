import { useFormik } from 'formik';
import { userFormSchema } from './validationSchema';

function UserForm({ onFormSubmit, onResetOutput }) {
  // Utilizing Formik hook with Yup validation schema
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      role: ''
    },
    validationSchema: userFormSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Log submitted data in JSON format to browser console as required
      console.log('Assignment IV Form Submitted (JSON):', JSON.stringify(values, null, 2));

      // Pass values up to parent component to display JSON on web page
      if (onFormSubmit) {
        onFormSubmit(values);
      }

      setSubmitting(false);
    }
  });

  // Demonstrating object destructuring from formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting
  } = formik;

  const handleCustomReset = () => {
    handleReset();
    if (onResetOutput) {
      onResetOutput();
    }
  };

  const getInputStyle = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isSuccess = touched[fieldName] && !errors[fieldName] && values[fieldName];

    return {
      width: '100%',
      padding: '12px 14px',
      fontSize: '15px',
      borderRadius: '6px',
      border: `1.5px solid ${hasError ? '#ef4444' : isSuccess ? '#10b981' : '#cbd5e1'}`,
      backgroundColor: '#ffffff',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s, box-shadow 0.2s'
    };
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '28px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
        <h3 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '20px' }}>
          User Registration Form
        </h3>
        <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
          Please fill out all compulsory fields (<span style={{ color: '#ef4444' }}>*</span>) below.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* First Name Field */}
        <div style={{ marginBottom: '18px' }}>
          <label
            htmlFor="firstName"
            style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#334155'
            }}
          >
            First Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter first name (e.g. Rushikesh)"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle('firstName')}
          />
          {touched.firstName && errors.firstName && (
            <p style={{ color: '#ef4444', fontSize: '13px', margin: '6px 0 0 0', fontWeight: '500' }}>
              ⚠️ {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name Field */}
        <div style={{ marginBottom: '18px' }}>
          <label
            htmlFor="lastName"
            style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#334155'
            }}
          >
            Last Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter last name (e.g. Randive)"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle('lastName')}
          />
          {touched.lastName && errors.lastName && (
            <p style={{ color: '#ef4444', fontSize: '13px', margin: '6px 0 0 0', fontWeight: '500' }}>
              ⚠️ {errors.lastName}
            </p>
          )}
        </div>

        {/* Role Dropdown Field */}
        <div style={{ marginBottom: '24px' }}>
          <label
            htmlFor="role"
            style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#334155'
            }}
          >
            Role <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            style={getInputStyle('role')}
          >
            <option value="">-- Select Role --</option>
            <option value="Owner">Owner</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          {touched.role && errors.role && (
            <p style={{ color: '#ef4444', fontSize: '13px', margin: '6px 0 0 0', fontWeight: '500' }}>
              ⚠️ {errors.role}
            </p>
          )}
        </div>

        {/* Form Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              flex: 1,
              minWidth: '140px',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: '#2563eb',
              border: 'none',
              borderRadius: '6px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'background-color 0.2s'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
          <button
            type="button"
            onClick={handleCustomReset}
            style={{
              padding: '12px 20px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#475569',
              backgroundColor: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

