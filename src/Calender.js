import { Button, Datepicker, Page, setOptions } from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';
import React from 'react';
setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function Calendar() {
  const [openPicker, setOpenPicker] = useState(false);

  const handleClose = useCallback(() => {
    setOpenPicker(false);
  }, []);

  const handleClick = useCallback(() => {
    setOpenPicker(true);
  }, []);

  const inputProps = useMemo(
    () => ({
      className: 'md-mobile-picker-input',
      placeholder: 'Please Select...',
    }),
    [],
  );

  const boxInputProps = useMemo(
    () => ({
      className: 'md-mobile-picker-box-label',
      inputStyle: 'box',
      placeholder: 'Please Select...',
    }),
    [],
  );

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div>
              <Datepicker inputComponent="input" inputProps={inputProps} />
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">
              Disable <code>onClick/onFocus</code> and only show on button
            </div>
            <div className="mbsc-col-8">
              <Datepicker
                inputComponent="input"
                inputProps={inputProps}
                showOnClick={false}
                showOnFocus={false}
                isOpen={openPicker}
                onClose={handleClose}
              />
            </div>
            <div className="mbsc-col-4">
              <Button variant="outline" color="primary" className="md-mobile-picker-button" onClick={handleClick}>
                Show picker
              </Button>
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
              <Datepicker inputProps={boxInputProps} />
            </div>
          </div>
        </div>
        <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
      </div>
      <div className="md-mobile-picker-inline">
        <Datepicker display="inline" />
      </div>
    </Page>
  );
}

export default Calendar;