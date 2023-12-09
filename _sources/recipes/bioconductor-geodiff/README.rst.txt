:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geodiff'
.. highlight: bash

bioconductor-geodiff
====================

.. conda:recipe:: bioconductor-geodiff
   :replaces_section_title:
   :noindex:

   Count model based differential expression and normalization on GeoMx RNA data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GeoDiff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-geodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff/meta.yaml>`_

   A series of statistical models using count generating distributions for background modelling\, feature and sample QC\, normalization and differential expression analysis on GeoMx RNA data. The application of these methods are demonstrated by example data analysis vignette.


.. conda:package:: bioconductor-geodiff

   |downloads_bioconductor-geodiff| |docker_bioconductor-geodiff|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-geomxtools: ``>=3.5.0,<3.6.0``
   :depends bioconductor-geomxtools: ``>=3.5.0,<3.6.0a0``
   :depends bioconductor-nanostringnctools: ``>=1.10.0,<1.11.0``
   :depends bioconductor-nanostringnctools: ``>=1.10.0,<1.11.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-geodiff

   and update with::

      mamba update bioconductor-geodiff

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geodiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.0.0"];
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