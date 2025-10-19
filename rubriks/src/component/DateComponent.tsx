import { useDismiss, useFloating, useInteractions } from "@floating-ui/react";
import { useState } from "react";
import { createPortal } from "react-dom";

export const DateComponent = ({
  eventOnDay,
  dayIndex,
  dayString,
  active,
  setActive,
  onEventAdd,
  onEventDelete,
  events,
}: {
  eventOnDay: string[] | null;
  dayIndex: number;
  dayString: string;
  active: boolean;
  setActive: (active: string | null) => void;
  onEventAdd: (e: string) => void;
  onEventDelete: (e: string) => void;
  events: string[];
}) => {
  const { refs, floatingStyles, context } = useFloating({
    open: active,
    onOpenChange: (open) => {
      if (open) {
        setActive(dayString);
      } else {
        setActive(null);
      }
    },
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const [eventString, setEventString] = useState("");

  return (
    <>
      <button
        type="button"
        className="w-22 h-22 border text-left flex justify-start bg-blue-50/80 flex-col p-1 overflow-hidden"
        onClick={() => {
          setActive(dayString);
        }}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <div className="overflow-y-auto overflow-x-hidden  scroll-hidden">
          {dayIndex + 1}
        </div>
        {eventOnDay?.length ? (
          <div className="flex flex-col flex-1 space-y-0.5 overflow-x-hidden">
            <div className="w-full overflow-x-hidden scroll-hidden space-y-0.5 ">
              {eventOnDay.map((event: any) => {
                return (
                  <div className="text-xs text-nowrap overflow-x-auto scroll-hidden border rounded-sm p-[2px] bg-yellow-400">
                    {event}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </button>
      {active &&
        createPortal(
          <div
            className="flex flex-col px-3 py-4 bg-white border-1 space-y-2"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {events?.length ? (
              <div className="flex flex-col space-y-1 w-full overflow-hidden">
                {events.map((eventItem: any) => {
                  return (
                    <div className="w-full overflow-hidden flex space-x-4 border rounded-sm p-1">
                      <div className="flex-1 overflow-x-auto w-56 text-nowrap">
                        {eventItem}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onEventDelete(eventItem);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div className=" flex flex-col space-y-2">
              <label className="block">Event</label>
              <input
                className="p-2 border-1"
                type="text"
                value={eventString}
                onChange={(event) => {
                  setEventString(event.target.value);
                }}
              />
              <button
                className="bg-blue-800 p-2 rounded-md border text-white"
                onClick={() => {
                  if (eventString) {
                    onEventAdd(eventString);
                    setEventString("");
                  }
                }}
              >
                add
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
