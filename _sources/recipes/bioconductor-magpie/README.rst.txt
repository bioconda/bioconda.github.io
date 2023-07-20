:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magpie'
.. highlight: bash

bioconductor-magpie
===================

.. conda:recipe:: bioconductor-magpie
   :replaces_section_title:
   :noindex:

   MeRIP\-Seq data Analysis for Genomic Power Investigation and Evaluation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/magpie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-magpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie/meta.yaml>`_

   This package aims to perform power analysis for the MeRIP\-seq study. It calculates FDR\, FDC\, power\, and precision under various study design parameters\, including but not limited to sample size\, sequencing depth\, and testing method. It can also output results into .xlsx files or produce corresponding figures of choice.


.. conda:package:: bioconductor-magpie

   |downloads_bioconductor-magpie| |docker_bioconductor-magpie|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-tress: ``>=1.6.0,<1.7.0``
   :depends r-aod: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-magpie

   and update with::

      conda update bioconductor-magpie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-magpie:<tag>

   (see `bioconductor-magpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-magpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magpie
   :alt:   (downloads)
.. |docker_bioconductor-magpie| image:: https://quay.io/repository/biocontainers/bioconductor-magpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magpie
.. _`bioconductor-magpie/tags`: https://quay.io/repository/biocontainers/bioconductor-magpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magpie";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magpie/README.html