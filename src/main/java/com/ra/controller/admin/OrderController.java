package com.ra.controller.admin;

import com.ra.model.entity.*;
import com.ra.model.service.Order.OrderService;
import com.ra.model.service.OrderDetail.OrderDetailService;
import com.ra.model.service.User.UserService;
import com.sun.org.apache.xpath.internal.operations.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderDetailService orderDetailService;
    @Autowired
    private UserService userService;

    @GetMapping("/order/{id}")
    public String index(@PathVariable("id") Integer id, Model model) {
        List<Order> orderList = orderService.paginater(id);
        model.addAttribute("totalPage", orderService.getTotalPage());
        model.addAttribute("orderList", orderList);
        return "admin/order/index";
    }

    @GetMapping("/add-order")
    public String add(Model model) {
        Order order = new Order();
        model.addAttribute("order", order);
        return "admin/order/add-order";
    }

    @PostMapping("/add-order")
    public String create(@ModelAttribute("order") Order order) {
        orderService.saveOrUpDate(order);
        return "redirect:/admin/order/1";
    }

    @GetMapping("/view-order/{id}")
    public String orderview(@PathVariable("id") Integer id, Model model) {
        List<OrderDetail> orderDetail = orderDetailService.findByOrderId(id);
        model.addAttribute("orderDetail", orderDetail);
        double totalPrice = 0;
        for (OrderDetail detail : orderDetail) {
            totalPrice = totalPrice + detail.getPrice() * detail.getQuantity();
        }
        model.addAttribute("totalPrice", totalPrice);
        return "/admin/order/view-order";
    }

    @GetMapping("/order-edit/{id}")
    public String edit(@PathVariable("id") Integer id, Model model) {
        Order order = orderService.findById(id);
        model.addAttribute("order", order);
        return "/admin/order/view-order";
    }

    @PostMapping("/order-edit")
    public String update(@ModelAttribute("user") Order order) {
        orderService.saveOrUpDate(order);
        return "redirect:/admin/order/1";
    }

    @GetMapping("/order-change/{id}")
    public String changeStatus(@PathVariable("id") Integer id) {
        orderService.delete(id);
        return "redirect:/admin/order/1";
    }

    @GetMapping("/sort-order")
    public String sortOrder(Model model) {
        List<Order> sortedOrderList = orderService.sortByName();
        List<Order> orders = orderService.findAll();
        model.addAttribute("orderList", sortedOrderList);
        model.addAttribute("totalPage", (int) Math.ceil(orders.size() / 4.f));
        return "/admin/order/index";
    }

    @GetMapping("/search-order")
    public String searchOrder(@RequestParam String searchTerm, Model model) {
        List<Order> searchResult = orderService.findByName(searchTerm);
        List<Order> orders = orderService.findAll();
        model.addAttribute("orderList", searchResult);
        model.addAttribute("totalPage", (int) Math.ceil(orders.size() / 4.f));
        return "/admin/order/index";
    }

    @GetMapping("/confirm/{id}")
    public String waiting(@PathVariable("id") Integer id) {
        Order order = orderService.findById(id);
        if (order.getOrderStatus() == 1) {
            orderService.changeStatus(id, 2);
        }
        return "redirect:/admin/order/1";
    }

    @GetMapping("/cancel/{id}")
    public String cancel(@PathVariable("id") Integer id) {
        Order order = orderService.findById(id);
        if (order.getOrderStatus() == 1) {
            orderService.changeStatus(id, 0);
        }
        return "redirect:/admin/order/1";
    }
}
