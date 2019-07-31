package com.example.david.attendance;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();
    private ListView mAttendeesListView;
    private AttendeeAdapter mAttendeeAdapter;
    private String[] mDemoAttendees = {"ديفيد ابراهيم", "حاتم حمدي", "مينا حشمت", "امير اميل", "بيشوي سمير ويليم",
            "دينا مجدي", "ماريهام ماهر", "ماجد مجدي", "فادي خلف", "ميرال فيليب", "نادر نبير", "اندرو فيليب"};
    private static boolean TESTING = true;
    private int mNumberOfAttendees = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final TextView textViewNumberOfAttendees = findViewById(R.id.text_number_of_attendees);
        mAttendeesListView = (ListView) findViewById(R.id.list_view_attendees);
        List<Attendee> attendeeArrayList = new ArrayList<>();
        if (TESTING) {
            for (String mDemoAttendee : mDemoAttendees) {
                attendeeArrayList.add(new Attendee(mDemoAttendee));
            }
        }
        mAttendeeAdapter = new AttendeeAdapter(this, R.layout.item_attendee, attendeeArrayList);
        mAttendeesListView.setAdapter(mAttendeeAdapter);
        mAttendeesListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Attendee attendee = (Attendee) adapterView.getItemAtPosition(i);
                if (!attendee.isAttendeeToday()) {
                    view.setBackgroundColor(getResources().getColor(R.color.color_item_selected));
                    mNumberOfAttendees ++;
                    attendee.setAttendeeToday(true);
                    textViewNumberOfAttendees.setText(String.valueOf(mNumberOfAttendees));

                }
                else {
                    view.setBackgroundColor(Color.TRANSPARENT);
                    mNumberOfAttendees --;
                    attendee.setAttendeeToday(false);
                    textViewNumberOfAttendees.setText(String.valueOf(mNumberOfAttendees));


                }
            }
        });
    }
}
