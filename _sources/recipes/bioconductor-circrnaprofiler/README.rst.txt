:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-circrnaprofiler'
.. highlight: bash

bioconductor-circrnaprofiler
============================

.. conda:recipe:: bioconductor-circrnaprofiler
   :replaces_section_title:
   :noindex:

   circRNAprofiler\: An R\-Based Computational Framework for the Downstream Analysis of Circular RNAs

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/circRNAprofiler.html
   :license: GPL-3
   :recipe: /`bioconductor-circrnaprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circrnaprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circrnaprofiler/meta.yaml>`_

   R\-based computational framework for a comprehensive in silico analysis of circRNAs. This computational framework allows to combine and analyze circRNAs previously detected by multiple publicly available annotation\-based circRNA detection tools. It covers different aspects of circRNAs analysis from differential expression analysis\, evolutionary conservation\, biogenesis to functional analysis.


.. conda:package:: bioconductor-circrnaprofiler

   |downloads_bioconductor-circrnaprofiler| |docker_bioconductor-circrnaprofiler|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gwascat: ``>=2.32.0,<2.33.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-universalmotif: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-seqinr: 
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-circrnaprofiler

   and update with::

      conda update bioconductor-circrnaprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-circrnaprofiler:<tag>

   (see `bioconductor-circrnaprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-circrnaprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-circrnaprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-circrnaprofiler
   :alt:   (downloads)
.. |docker_bioconductor-circrnaprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-circrnaprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-circrnaprofiler
.. _`bioconductor-circrnaprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-circrnaprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-circrnaprofiler";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-circrnaprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-circrnaprofiler/README.html