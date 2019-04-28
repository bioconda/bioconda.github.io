:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpp'
.. highlight: bash

bioconductor-tpp
================

.. conda:recipe:: bioconductor-tpp
   :replaces_section_title:

   Analyze thermal proteome profiling \(TPP\) experiments with varying temperatures \(TR\) or compound concentrations \(CCR\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TPP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp/meta.yaml>`_

   


.. conda:package:: bioconductor-tpp

   |downloads_bioconductor-tpp| |docker_bioconductor-tpp|

   :versions: 3.10.1-0, 3.10.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biobroom: >=1.14.0,<1.15.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-mefa: 
   :depends r-nls2: 
   :depends r-openxlsx: >=2.4.0
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-sme: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tpp

   and update with::

      conda update bioconductor-tpp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tpp:<tag>

   (see `bioconductor-tpp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tpp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tpp| image:: https://quay.io/repository/biocontainers/bioconductor-tpp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp
.. _`bioconductor-tpp/tags`: https://quay.io/repository/biocontainers/bioconductor-tpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp/README.html