:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqc'
.. highlight: bash

bioconductor-rqc
================

.. conda:recipe:: bioconductor-rqc
   :replaces_section_title:
   :noindex:

   Quality Control Tool for High\-Throughput Sequencing Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Rqc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc/meta.yaml>`_

   Rqc is an optimised tool designed for quality control and assessment of high\-throughput sequencing data. It performs parallel processing of entire files and produces a report which contains a set of high\-resolution graphics.


.. conda:package:: bioconductor-rqc

   |downloads_bioconductor-rqc| |docker_bioconductor-rqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocstyle: ``>=2.26.0,<2.27.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biovizbase: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfiles: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-knitr: ``>=1.7``
   :depends r-markdown: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.11.6``
   :depends r-reshape2: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqc

   and update with::

      conda update bioconductor-rqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rqc:<tag>

   (see `bioconductor-rqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqc
   :alt:   (downloads)
.. |docker_bioconductor-rqc| image:: https://quay.io/repository/biocontainers/bioconductor-rqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqc
.. _`bioconductor-rqc/tags`: https://quay.io/repository/biocontainers/bioconductor-rqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rqc";
        var versions = ["1.32.0","1.28.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqc/README.html