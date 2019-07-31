package com.example.david.attendance;


import android.app.Activity;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;


public class AttendeeAdapter extends ArrayAdapter<Attendee> {


    public AttendeeAdapter(@NonNull Context context, int resource, @NonNull List<Attendee> objects) {
        super(context, resource, objects);
        Collections.sort(objects);
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        if (convertView == null) {
            convertView = ((Activity) getContext()).getLayoutInflater().inflate(R.layout.item_attendee, parent, false);
        }
        TextView nameTextView = (TextView) convertView.findViewById(R.id.student_item_name);
        Attendee attendee = getItem(position);
        nameTextView.setText(attendee.getName());


        return convertView;
    }

    @Override
    public void add(@Nullable Attendee object) {
        super.add(object);

        //Todo find another way for sorting
        super.sort(new Comparator<Attendee>() {
            @Override
            public int compare(Attendee student, Attendee t1) {
                return student.getName().compareTo(t1.getName());
            }
        });
    }
}