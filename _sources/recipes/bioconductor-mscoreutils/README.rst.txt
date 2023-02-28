:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mscoreutils'
.. highlight: bash

bioconductor-mscoreutils
========================

.. conda:recipe:: bioconductor-mscoreutils
   :replaces_section_title:
   :noindex:

   Core Utils for Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MsCoreUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mscoreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mscoreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mscoreutils/meta.yaml>`_

   MsCoreUtils defines low\-level functions for mass spectrometry data and is independent of any high\-level data structures. These functions include mass spectra processing functions \(noise estimation\, smoothing\, binning\)\, quantitative aggregation functions \(median polish\, robust summarisation\, ...\)\, missing data imputation\, data normalisation \(quantiles\, vsn\, ...\) as well as misc helper functions\, that are used across high\-level data structure within the R for Mass Spectrometry packages.


.. conda:package:: bioconductor-mscoreutils

   |downloads_bioconductor-mscoreutils| |docker_bioconductor-mscoreutils|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-clue: 
   :depends r-mass: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mscoreutils

   and update with::

      conda update bioconductor-mscoreutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mscoreutils:<tag>

   (see `bioconductor-mscoreutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mscoreutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mscoreutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mscoreutils
   :alt:   (downloads)
.. |docker_bioconductor-mscoreutils| image:: https://quay.io/repository/biocontainers/bioconductor-mscoreutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mscoreutils
.. _`bioconductor-mscoreutils/tags`: https://quay.io/repository/biocontainers/bioconductor-mscoreutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mscoreutils";
        var versions = ["1.10.0","1.6.2","1.6.1","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mscoreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mscoreutils/README.html