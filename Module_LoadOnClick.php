<?php
namespace GDO\LoadOnClick;

use GDO\Core\GDO_Module;

/**
 * Adds loading spinner if an internal link or a button is clicked.
 * 
 * @author gizmore
 * @version 6.10.1
 * @since 6.10.0
 */
final class Module_LoadOnClick extends GDO_Module
{
    public function onIncludeScripts()
    {
        $this->addJavascript('js/load-on-click.js');
        $this->addCSS('css/gdo6-load-on-click.css');
    }
    
}
