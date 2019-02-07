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

   :versions: 3.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biobroom` >=1.14.0,<1.15.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-broom`  :conda:package:`r-data.table`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-futile.logger`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-mass`  :conda:package:`r-mefa`  :conda:package:`r-nls2`  :conda:package:`r-openxlsx` >=2.4.0 :conda:package:`r-plyr`  :conda:package:`r-purrr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcurl`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  :conda:package:`r-sme`  :conda:package:`r-stringr`  :conda:package:`r-tidyr`  :conda:package:`r-venndiagram`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-tpp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tpp

   and update with::

      conda update bioconductor-tpp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tpp


.. |required_by_bioconductor-tpp| conda:required_by:: bioconductor-tpp
.. |downloads_bioconductor-tpp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tpp| image:: https://quay.io/repository/biocontainers/bioconductor-tpp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp/README.html

