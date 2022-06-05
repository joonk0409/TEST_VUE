package com.example.test_vue.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Log4j2
public class HelloController {

    @RequestMapping("/")
    public ModelAndView hello() {
        log.info("<><><><><><><><>  APPLICATION START !!!!  <><><><><><><><>");
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }

}
