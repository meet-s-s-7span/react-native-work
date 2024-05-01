package com.reactexample
import android.util.Log
import com.facebook.react.bridge.*

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "Meet the Calendar"
    }

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
    }

    @ReactMethod
    fun getModuleName(callback: Callback) {
        callback.invoke(getName())
    }   
}
