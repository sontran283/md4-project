package com.ra.controller.admin;

import com.ra.model.entity.Category;
import com.ra.model.service.Category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/category/index")
    public String index(Model model){
        List<Category>categoryList=categoryService.findAll();
        model.addAttribute("categoryList",categoryList);
        return "admin/category/index";
    }

    @GetMapping("/add-category")
    public String add(Model model){
        Category category=new Category();
        model.addAttribute("category",category);
        return "admin/category/add";
    }

    @PostMapping("/add-category")
    public String create(@ModelAttribute("category") Category category){
        categoryService.saveOrUpDate(category);
        return "redirect:/admin/category";
    }

    @GetMapping("/category-edit/{id}")
    public String edit(@PathVariable("id") Integer id,Model model){
        Category category= categoryService.findById(id);
        model.addAttribute("category",category);
        return "/admin/category/edit";
    }
    @PostMapping("/update-category")
    public String update(@ModelAttribute("category") Category category){
        categoryService.saveOrUpDate(category);
        return "redirect:/admin/category";
    }

    @GetMapping("/category-change/{id}")
    public String changeStatus(@PathVariable("id") Integer id){
        categoryService.delete(id);
        return "redirect:/admin/category";
    }
}
