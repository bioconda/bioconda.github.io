:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pharmacogx'
.. highlight: bash

bioconductor-pharmacogx
=======================

.. conda:recipe:: bioconductor-pharmacogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Pharmacogenomic Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PharmacoGx.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pharmacogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx/meta.yaml>`_

   Contains a set of functions to perform large\-scale analysis of pharmaco\-genomic data. These include the PharmacoSet object for storing the results of pharmacogenomic experiments\, as well as a number of functions for computing common summaries of drug\-dose response and correlating them with the molecular features in a cancer cell\-line.


.. conda:package:: bioconductor-pharmacogx

   |downloads_bioconductor-pharmacogx| |docker_bioconductor-pharmacogx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.4-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-coregx: ``>=2.4.0,<2.5.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-catools: 
   :depends r-checkmate: 
   :depends r-coop: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-magicaxis: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pharmacogx

   and update with::

      conda update bioconductor-pharmacogx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pharmacogx:<tag>

   (see `bioconductor-pharmacogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pharmacogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pharmacogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pharmacogx
   :alt:   (downloads)
.. |docker_bioconductor-pharmacogx| image:: https://quay.io/repository/biocontainers/bioconductor-pharmacogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pharmacogx
.. _`bioconductor-pharmacogx/tags`: https://quay.io/repository/biocontainers/bioconductor-pharmacogx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pharmacogx";
        var versions = ["3.4.0","3.2.0","3.2.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html