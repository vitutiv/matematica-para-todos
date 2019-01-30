package br.edu.ifba.jacobina.matematica;
import android.app.ActivityManager;
import android.content.res.Resources;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.widget.Toast;
import java.util.Objects;
public abstract class CommonMethods extends AppCompatActivity{
    void showToast(String message) {
        Toast toast = Toast.makeText(this, message, Toast.LENGTH_LONG);
        toast.show();
    }
    //Verifica se o dispositivo possui a tecla de hardware
    boolean hasHardwareBackKey(){
        return KeyCharacterMap.deviceHasKey(KeyEvent.KEYCODE_BACK);
    }
    // Um método que retorna a altura da status bar
    protected int getStatusBarHeight() {
        int statusBarHeight = 0;
        int resourceId = getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            statusBarHeight = getResources().getDimensionPixelSize(resourceId);
        }
        return statusBarHeight;
    }
    protected int getNavBarHeight() {
        int navBarHeight = 0;
        int resourceId = getResources().getIdentifier("navigation_bar_height", "dimen", "android");
        if (resourceId > 0) {
            navBarHeight = getResources().getDimensionPixelSize(resourceId);
        }
        return navBarHeight;
    }

    public boolean hasNavBar (Resources resources)
    {
        int id = resources.getIdentifier("config_showNavigationBar", "bool", "android");
        return id > 0 && resources.getBoolean(id);
    }

    void setToolBarSize(Toolbar toolbar){
        if (toolbar != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            toolbar.setPadding(0, getStatusBarHeight(), 0, 0);
        }
    }

    void setColorAndTitle(WebView view){
        if  (view.getTitle().isEmpty()){
            setTitle(R.string.app_name);
        }else{
            setTitle(view.getTitle());
        }
        String url = view.getUrl().toLowerCase();
        if (url.contains("numbers")) {
            setColor(R.color.numbersColorPrimary, R.color.numbersPrimaryDark);
        } else if (url.contains("operations")) {
            setColor(R.color.numericOperationsColorPrimary, R.color.numericOperationsPrimaryDark);
        } else if (url.contains("geometry")) {
            setColor(R.color.geometryColorPrimary, R.color.geometryColorPrimaryDark);
        }else if (url.contains("scales")) {
            setColor(R.color.scalesColorPrimary, R.color.scalesColorPrimaryDark);
        } else if (url.contains("graphs")) {
            setColor(R.color.infoTreatmentColorPrimary, R.color.infoTreatmentColorPrimaryDark);
        } else {
            setColor(R.color.colorPrimary, R.color.colorPrimaryDark);
        }
    }
    void setColor (int colorPrimary, int colorPrimaryDark) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Objects.requireNonNull(getSupportActionBar()).setBackgroundDrawable(new ColorDrawable(ContextCompat.getColor(this, colorPrimaryDark)));
            ActivityManager.TaskDescription taskDescription = new ActivityManager.TaskDescription(null,null , ContextCompat.getColor(this, colorPrimaryDark));
            this.setTaskDescription(taskDescription);
        }
        if (getSupportActionBar() != null) {
            getSupportActionBar().setBackgroundDrawable(new ColorDrawable(ContextCompat.getColor(this, colorPrimary)));
        }
    }
}