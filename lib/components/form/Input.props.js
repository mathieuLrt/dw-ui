export default {
  /**
   * Name of the form control
   */
  name: {
    type: String,
    required: true
  },
  /**
   * Boolean. A value is required or must be check for the form to be submittable
   */
  required: {
    type: Boolean,
    default: false
  },
  /**
   * Short hint that describes the expected value of an input field
   */
  placeholder: {
    type: [String, Boolean],
    default: null
  },
  /**
   * Leading icon to display
   */
  leading: {
    type: String,
    default: null
  },
  /**
   * Trailing icon to display
   */
  trailing: {
    type: String,
    default: null
  },
  /**
   * Current checked value of element
   */
  checked: {
    type: Boolean,
    default: null
  },
  /**
   * When present, it specifies that an input field is read-only.
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * Whether the form control is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * Append help tooltip
   */
  helpTooltip: {
    type: String,
    default: null
  },
  autocomplete: {
    type: String,
    default: undefined
  },
  /**
   * Limit maximum characters
   */
  maxlength: {
    type: Number,
    default: undefined
  }
}
