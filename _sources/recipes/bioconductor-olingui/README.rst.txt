.. title:: Package Recipe 'bioconductor-olingui'
.. highlight: bash


bioconductor-olingui
====================

.. conda:recipe:: bioconductor-olingui
   :replaces_section_title:

   Graphical user interface for the OLIN package

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OLINgui.html
   :license: GPL-2
   :recipe: /`bioconductor-olingui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olingui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olingui/meta.yaml>`_

   


.. conda:package:: bioconductor-olingui

   |downloads_bioconductor-olingui| |docker_bioconductor-olingui|

   :versions: 1.56.0

   :depends: :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`bioconductor-olin` >=1.60.0,<1.61.0 :conda:package:`bioconductor-tkwidgets` >=1.60.0,<1.61.0 :conda:package:`bioconductor-widgettools` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-olingui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-olingui

   and update with::

      conda update bioconductor-olingui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-olingui


.. |required_by_bioconductor-olingui| conda:required_by:: bioconductor-olingui
.. |downloads_bioconductor-olingui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-olingui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-olingui| image:: https://quay.io/repository/biocontainers/bioconductor-olingui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-olingui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-olingui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-olingui/README.html

