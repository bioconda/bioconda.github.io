:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sccomp'
.. highlight: bash

bioconductor-sccomp
===================

.. conda:recipe:: bioconductor-sccomp
   :replaces_section_title:
   :noindex:

   Robust Outlier\-aware Estimation of Composition and Heterogeneity for Single\-cell Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/sccomp.html
   :license: GPL-3
   :recipe: /`bioconductor-sccomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccomp/meta.yaml>`_

   A robust and outlier\-aware method for testing differential tissue composition from single\-cell data. This model can infer changes in tissue composition and heterogeneity\, and can produce realistic data simulations based on any existing dataset. This model can also transfer knowledge from a large set of integrated datasets to increase accuracy further.


.. conda:package:: bioconductor-sccomp

   |downloads_bioconductor-sccomp| |docker_bioconductor-sccomp|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-boot: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.1.1``
   :depends r-scales: 
   :depends r-seuratobject: 
   :depends r-stanheaders: ``>=2.18.0``
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sccomp

   and update with::

      conda update bioconductor-sccomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sccomp:<tag>

   (see `bioconductor-sccomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sccomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sccomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sccomp
   :alt:   (downloads)
.. |docker_bioconductor-sccomp| image:: https://quay.io/repository/biocontainers/bioconductor-sccomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sccomp
.. _`bioconductor-sccomp/tags`: https://quay.io/repository/biocontainers/bioconductor-sccomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sccomp";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sccomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sccomp/README.html