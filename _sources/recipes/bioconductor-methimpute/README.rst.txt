:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methimpute'
.. highlight: bash

bioconductor-methimpute
=======================

.. conda:recipe:: bioconductor-methimpute
   :replaces_section_title:
   :noindex:

   Imputation\-guided re\-construction of complete methylomes from WGBS data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/methimpute.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute/meta.yaml>`_

   This package implements functions for calling methylation for all cytosines in the genome.


.. conda:package:: bioconductor-methimpute

   |downloads_bioconductor-methimpute| |docker_bioconductor-methimpute|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-minpack.lm: 
   :depends r-rcpp: ``>=0.12.4.5``
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methimpute

   and update with::

      conda update bioconductor-methimpute

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methimpute:<tag>

   (see `bioconductor-methimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methimpute
   :alt:   (downloads)
.. |docker_bioconductor-methimpute| image:: https://quay.io/repository/biocontainers/bioconductor-methimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methimpute
.. _`bioconductor-methimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-methimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methimpute";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methimpute/README.html