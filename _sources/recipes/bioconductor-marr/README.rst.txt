:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-marr'
.. highlight: bash

bioconductor-marr
=================

.. conda:recipe:: bioconductor-marr
   :replaces_section_title:
   :noindex:

   Maximum rank reproducibility

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/marr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-marr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marr/meta.yaml>`_

   marr \(Maximum Rank Reproducibility\) is a nonparametric approach that detects reproducible signals using a maximal rank statistic for high\-dimensional biological data. In this R package\, we implement functions that measures the reproducibility of features per sample pair and sample pairs per feature in high\-dimensional biological replicate experiments. The user\-friendly plot functions in this package also plot histograms of the reproducibility of features per sample pair and sample pairs per feature. Furthermore\, our approach also allows the users to select optimal filtering threshold values for the identification of reproducible features and sample pairs based on output visualization checks \(histograms\). This package also provides the subset of data filtered by reproducible features and\/or sample pairs.


.. conda:package:: bioconductor-marr

   |downloads_bioconductor-marr| |docker_bioconductor-marr|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.02-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-marr

   and update with::

      conda update bioconductor-marr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-marr:<tag>

   (see `bioconductor-marr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-marr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-marr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-marr
   :alt:   (downloads)
.. |docker_bioconductor-marr| image:: https://quay.io/repository/biocontainers/bioconductor-marr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-marr
.. _`bioconductor-marr/tags`: https://quay.io/repository/biocontainers/bioconductor-marr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-marr";
        var versions = ["1.8.0","1.8.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-marr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-marr/README.html