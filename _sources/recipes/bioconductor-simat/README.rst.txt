:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simat'
.. highlight: bash

bioconductor-simat
==================

.. conda:recipe:: bioconductor-simat
   :replaces_section_title:
   :noindex:

   GC\-SIM\-MS data processing and alaysis tool

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SIMAT.html
   :license: GPL-2
   :recipe: /`bioconductor-simat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simat/meta.yaml>`_
   :links: biotools: :biotools:`simat`, doi: :doi:`10.1186/s12859-015-0681-2`

   This package provides a pipeline for analysis of GC\-MS data acquired in selected ion monitoring \(SIM\) mode. The tool also provides a guidance in choosing appropriate fragments for the targets of interest by using an optimization algorithm. This is done by considering overlapping peaks from a provided library by the user.


.. conda:package:: bioconductor-simat

   |downloads_bioconductor-simat| |docker_bioconductor-simat|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-mzr: ``>=2.28.0,<2.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.11.3``
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simat

   and update with::

      conda update bioconductor-simat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simat:<tag>

   (see `bioconductor-simat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simat
   :alt:   (downloads)
.. |docker_bioconductor-simat| image:: https://quay.io/repository/biocontainers/bioconductor-simat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simat
.. _`bioconductor-simat/tags`: https://quay.io/repository/biocontainers/bioconductor-simat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simat";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simat/README.html