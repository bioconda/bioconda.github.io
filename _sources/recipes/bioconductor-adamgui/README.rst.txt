:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adamgui'
.. highlight: bash

bioconductor-adamgui
====================

.. conda:recipe:: bioconductor-adamgui
   :replaces_section_title:

   ADAMgui is a Graphical User Interface for the ADAM package. The ADAMgui package provides 2 shiny\-based applications that allows the user to study the output of the ADAM package files through different plots. It\'s possible\, for example\, to choose a specific GFAG and observe the gene expression behavior with the plots created with the GFAGtargetUi function. Features such as differential expression and foldchange can be easily seen with aid of the plots made with GFAGpathUi function.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ADAMgui.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adamgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui/meta.yaml>`_

   


.. conda:package:: bioconductor-adamgui

   |downloads_bioconductor-adamgui| |docker_bioconductor-adamgui|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adamgui

   and update with::

      conda update bioconductor-adamgui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adamgui:<tag>

   (see `bioconductor-adamgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adamgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adamgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adamgui
   :alt:   (downloads)
.. |docker_bioconductor-adamgui| image:: https://quay.io/repository/biocontainers/bioconductor-adamgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adamgui
.. _`bioconductor-adamgui/tags`: https://quay.io/repository/biocontainers/bioconductor-adamgui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adamgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adamgui/README.html