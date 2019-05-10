:orphan:  .. only available via index, not via toctree

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

   :versions: 1.58.0-0, 1.56.0-0
   
   :depends bioconductor-marray: >=1.62.0,<1.63.0
   :depends bioconductor-olin: >=1.62.0,<1.63.0
   :depends bioconductor-tkwidgets: >=1.62.0,<1.63.0
   :depends bioconductor-widgettools: >=1.62.0,<1.63.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-olingui

   and update with::

      conda update bioconductor-olingui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-olingui:<tag>

   (see `bioconductor-olingui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-olingui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-olingui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-olingui| image:: https://quay.io/repository/biocontainers/bioconductor-olingui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-olingui
.. _`bioconductor-olingui/tags`: https://quay.io/repository/biocontainers/bioconductor-olingui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-olingui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-olingui/README.html