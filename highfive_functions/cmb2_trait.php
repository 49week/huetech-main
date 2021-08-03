<?php
Trait CMB2Trait {
    private function convertCheckbox($value){
        if ($value == 'on') {
            return 1;
        } else {
            return 0;
        }
    }

    private function getThemeOptions($field = '',$group = 'general_group'){
        global $wpdb;
        $theme_options = $wpdb->get_row("SELECT option_value FROM {$wpdb->options} WHERE option_name = 'cm-options'",ARRAY_A);
        if ($theme_options && isset($theme_options['option_value'])) {
            $theme_options = unserialize($theme_options['option_value']);
        }
        if ($field == '') {
            if (isset($theme_options[$group]) && isset($theme_options[$group][0])) {
                return $theme_options[$group][0];
            } else {
                return null;
            }
        }
        if (isset($theme_options[$group]) && isset($theme_options[$group][0][$field])) {
            return $theme_options[$group][0][$field];
        } else {
            return null;
        }
    }
}