import { useRef, useEffect } from 'react';
import _isEqualWith from 'lodash/isEqualWith';

export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    const isEqual = _isEqualWith(ref.current, value);
    // 為了保留前一個value
    if (!isEqual) {
      ref.current = value;
    }
  }, [JSON.stringify(value)]);
  return ref.current;
}
