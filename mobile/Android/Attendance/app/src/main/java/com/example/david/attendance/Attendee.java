package com.example.david.attendance;

import android.support.annotation.NonNull;

class Attendee implements Comparable<Attendee> {
    private String name;
    private boolean attendeeToday = false;


    public Attendee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Attendee attendee = (Attendee) o;
        return name.equals(attendee.name);
    }


    @Override
    public int compareTo(@NonNull Attendee attendee) {
        return name.compareTo(attendee.name);
    }
    public boolean isAttendeeToday() {
        return attendeeToday;
    }

    public void setAttendeeToday(boolean attendeeToday) {
        this.attendeeToday = attendeeToday;
    }

    @Override
    public String toString() {
        return "Attendee{" +
                "name='" + name + '\'' +
                ", attendeeToday=" + attendeeToday +
                '}';
    }
}
