:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transformgampoi'
.. highlight: bash

bioconductor-transformgampoi
============================

.. conda:recipe:: bioconductor-transformgampoi
   :replaces_section_title:
   :noindex:

   Variance Stabilizing Transformation for Gamma\-Poisson Models

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/transformGamPoi.html
   :license: GPL-3
   :recipe: /`bioconductor-transformgampoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transformgampoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transformgampoi/meta.yaml>`_

   Variance\-stabilizing transformations help with the analysis of heteroskedastic data \(i.e.\, data where the variance is not constant\, like count data\). This package provide two types of variance stabilizing transformations\: \(1\) methods based on the delta method \(e.g.\, \'acosh\'\, \'log\(x\+1\)\'\)\, \(2\) model residual based \(Pearson and randomized quantile residuals\).


.. conda:package:: bioconductor-transformgampoi

   |downloads_bioconductor-transformgampoi| |docker_bioconductor-transformgampoi|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-glmgampoi: ``>=1.10.0,<1.11.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-matrixgenerics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transformgampoi

   and update with::

      conda update bioconductor-transformgampoi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transformgampoi:<tag>

   (see `bioconductor-transformgampoi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transformgampoi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transformgampoi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transformgampoi
   :alt:   (downloads)
.. |docker_bioconductor-transformgampoi| image:: https://quay.io/repository/biocontainers/bioconductor-transformgampoi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transformgampoi
.. _`bioconductor-transformgampoi/tags`: https://quay.io/repository/biocontainers/bioconductor-transformgampoi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transformgampoi";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transformgampoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transformgampoi/README.html