:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geodiff'
.. highlight: bash

bioconductor-geodiff
====================

.. conda:recipe:: bioconductor-geodiff
   :replaces_section_title:
   :noindex:

   Count model based differential expression and normalization on GeoMx RNA data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GeoDiff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-geodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff/meta.yaml>`_

   A series of statistical models using count generating distributions for background modelling\, feature and sample QC\, normalization and differential expression analysis on GeoMx RNA data. The application of these methods are demonstrated by example data analysis vignette.


.. conda:package:: bioconductor-geodiff

   |downloads_bioconductor-geodiff| |docker_bioconductor-geodiff|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-geomxtools: ``>=2.0.0,<2.1.0``
   :depends bioconductor-nanostringnctools: ``>=1.2.0,<1.3.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-lme4: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.4.6``
   :depends r-rcpparmadillo: 
   :depends r-robust: 
   :depends r-roptim: 
   :depends r-testthat: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geodiff

   and update with::

      conda update bioconductor-geodiff

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geodiff:<tag>

   (see `bioconductor-geodiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geodiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geodiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geodiff
   :alt:   (downloads)
.. |docker_bioconductor-geodiff| image:: https://quay.io/repository/biocontainers/bioconductor-geodiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geodiff
.. _`bioconductor-geodiff/tags`: https://quay.io/repository/biocontainers/bioconductor-geodiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geodiff";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geodiff/README.html