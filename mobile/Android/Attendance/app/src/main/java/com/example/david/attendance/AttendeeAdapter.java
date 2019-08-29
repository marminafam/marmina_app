package com.example.david.attendance;


import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


public class AttendeeAdapter extends ArrayAdapter<Attendee> implements Filterable {

    private static final String TAG = AttendeeFilter.class.getSimpleName();
    private AttendeeFilter attendeeFilter = null;
    private List<Attendee> attendees = null;
    private List<Attendee> filteredAttendees = null;
    private Context context;

    public AttendeeAdapter(@NonNull Context context, int resource, @NonNull List<Attendee> objects) {
        super(context, resource, objects);
        attendees = objects;
        filteredAttendees = objects;
        this.context = context;
    }


    public void setAttendees(List<Attendee> attendees) {
        this.attendees = attendees;
        filteredAttendees = attendees;
        notifyDataSetChanged();

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
        if(attendee.isAttendeeToday()){
            convertView.setBackgroundColor(context.getResources().getColor(R.color.color_item_selected));
        }
        else {
            convertView.setBackgroundColor(Color.TRANSPARENT);

        }


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

    @Override
    public int getCount() {
        return filteredAttendees.size();
    }

    @Override
    public void addAll(@NonNull Collection<? extends Attendee> collection) {
        attendees.addAll(collection);
        Collections.sort(attendees);
        notifyDataSetChanged();
    }

    @Nullable
    @Override
    public Attendee getItem(int position) {
        return filteredAttendees.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public Filter getFilter() {
        if (attendeeFilter == null) {
            attendeeFilter = new AttendeeFilter();
        }

        return attendeeFilter;
    }

    public List<Attendee> getAttendeesList() {
        return attendees;
    }

    private class AttendeeFilter extends Filter {

        @Override
        protected FilterResults performFiltering(CharSequence constraint) {
            FilterResults filterResults = new FilterResults();
            Log.d(TAG,"perfomFiltering with constraint:"+constraint);
            if (constraint != null && constraint.length() > 0) {
                ArrayList<Attendee> tempList = new ArrayList<>();

                // search content in friend list
                for (Attendee attendee : attendees) {
                    if (attendee.getName().toLowerCase().contains(constraint.toString().toLowerCase())) {
                        tempList.add(attendee);
                    }
                }

                filterResults.count = tempList.size();
                filterResults.values = tempList;
            } else {
                filterResults.count = attendees.size();
                filterResults.values = attendees;
            }

            return filterResults;
        }

        @Override
        protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
            filteredAttendees = (ArrayList<Attendee>) filterResults.values;
            notifyDataSetChanged();

        }
    }
}