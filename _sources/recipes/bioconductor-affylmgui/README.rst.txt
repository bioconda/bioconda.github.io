.. title:: Package Recipe 'bioconductor-affylmgui'
.. highlight: bash


bioconductor-affylmgui
======================

.. conda:recipe:: bioconductor-affylmgui
   :replaces_section_title:

   A Graphical User Interface \(GUI\) for analysis of Affymetrix microarray gene expression data using the affy and limma packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affylmGUI.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affylmgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affylmgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affylmgui/meta.yaml>`_

   


.. conda:package:: bioconductor-affylmgui

   |downloads_bioconductor-affylmgui| |docker_bioconductor-affylmgui|

   :versions: 1.56.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-affyplm` >=1.58.0,<1.59.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-gcrma` >=2.54.0,<2.55.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-r2html`  :conda:package:`r-tkrplot`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-affylmgui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affylmgui

   and update with::

      conda update bioconductor-affylmgui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affylmgui


.. |required_by_bioconductor-affylmgui| conda:required_by:: bioconductor-affylmgui
.. |downloads_bioconductor-affylmgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affylmgui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affylmgui| image:: https://quay.io/repository/biocontainers/bioconductor-affylmgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affylmgui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affylmgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affylmgui/README.html

