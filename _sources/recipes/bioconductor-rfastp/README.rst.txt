:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfastp'
.. highlight: bash

bioconductor-rfastp
===================

.. conda:recipe:: bioconductor-rfastp
   :replaces_section_title:
   :noindex:

   An Ultra\-Fast and All\-in\-One Fastq Preprocessor \(Quality Control\, Adapter\, low quality and polyX trimming\) and UMI Sequence Parsing\).

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Rfastp.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-rfastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp/meta.yaml>`_

   Rfastp is an R wrapper of fastp developed in c\+\+. fastp performs quality control for fastq files. including low quality bases trimming\, polyX trimming\, adapter auto\-detection and trimming\, paired\-end reads merging\, UMI sequence\/id handling. Rfastp can concatenate multiple files into one file \(like shell command cat\) and accept multiple files as input.


.. conda:package:: bioconductor-rfastp

   |downloads_bioconductor-rfastp| |docker_bioconductor-rfastp|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-rhtslib: ``>=2.0.0,<2.1.0``
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rfastp

   and update with::

      conda update bioconductor-rfastp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rfastp:<tag>

   (see `bioconductor-rfastp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rfastp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfastp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfastp
   :alt:   (downloads)
.. |docker_bioconductor-rfastp| image:: https://quay.io/repository/biocontainers/bioconductor-rfastp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfastp
.. _`bioconductor-rfastp/tags`: https://quay.io/repository/biocontainers/bioconductor-rfastp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rfastp";
        var versions = ["1.8.0","1.4.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfastp/README.html