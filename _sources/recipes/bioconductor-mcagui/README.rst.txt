:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcagui'
.. highlight: bash

bioconductor-mcagui
===================

.. conda:recipe:: bioconductor-mcagui
   :replaces_section_title:
   :noindex:

   Microbial Community Analysis GUI

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/mcaGUI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mcagui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcagui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcagui/meta.yaml>`_

   Microbial community analysis GUI for R using gWidgets.


.. conda:package:: bioconductor-mcagui

   |downloads_bioconductor-mcagui| |docker_bioconductor-mcagui|

   :versions:
      
      

      ``1.37.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``

      

   
   :depends bioconductor-otubase: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bpca: 
   :depends r-foreign: 
   :depends r-gwidgets: ``>=0.0-36``
   :depends r-gwidgetsrgtk2: ``>=0.0-53``
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-proto: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcagui

   and update with::

      conda update bioconductor-mcagui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcagui:<tag>

   (see `bioconductor-mcagui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcagui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcagui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcagui
   :alt:   (downloads)
.. |docker_bioconductor-mcagui| image:: https://quay.io/repository/biocontainers/bioconductor-mcagui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcagui
.. _`bioconductor-mcagui/tags`: https://quay.io/repository/biocontainers/bioconductor-mcagui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcagui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcagui/README.html