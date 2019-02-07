.. title:: Package Recipe 'bioconductor-ctsge'
.. highlight: bash


bioconductor-ctsge
==================

.. conda:recipe:: bioconductor-ctsge
   :replaces_section_title:

   Methodology for supervised clustering of potentially many predictor variables\, such as genes etc.\, in time series datasets Provides functions that help the user assigning genes to predefined set of model profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ctsGE.html
   :license: GPL-2
   :recipe: /`bioconductor-ctsge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge/meta.yaml>`_
   :links: biotools: :biotools:`ctsge`, doi: :doi:`10.1093/bioinformatics/btx116`

   


.. conda:package:: bioconductor-ctsge

   |downloads_bioconductor-ctsge| |docker_bioconductor-ctsge|

   :versions: 1.8.0, 1.6.1, 1.4.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ccapp`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-ctsge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctsge

   and update with::

      conda update bioconductor-ctsge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ctsge


.. |required_by_bioconductor-ctsge| conda:required_by:: bioconductor-ctsge
.. |downloads_bioconductor-ctsge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ctsge| image:: https://quay.io/repository/biocontainers/bioconductor-ctsge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsge/README.html

