:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggcoverage'
.. highlight: bash

r-ggcoverage
============

.. conda:recipe:: r-ggcoverage
   :replaces_section_title:
   :noindex:

   The goal of \'ggcoverage\' is to simplify the process of visualizing genome coverage. It contains functions to load data from BAM\, BigWig or BedGraph files\, create genome coverage plot\, add various annotations to the coverage plot\, including base and amino acid annotation\, GC annotation\, gene annotation\, transcript annotation\, ideogram annotation and peak annotation.

   :homepage: https://CRAN.R-project.org/package=ggcoverage
   :license: MIT / MIT
   :recipe: /`r-ggcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggcoverage/meta.yaml>`_

   


.. conda:package:: r-ggcoverage

   |downloads_r-ggcoverage| |docker_r-ggcoverage|

   :versions:
      
      

      ``0.7.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggbio: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggh4x: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ggcoverage

   and update with::

      conda update r-ggcoverage

   or use the docker container::

      docker pull quay.io/biocontainers/r-ggcoverage:<tag>

   (see `r-ggcoverage/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ggcoverage| image:: https://img.shields.io/conda/dn/bioconda/r-ggcoverage.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ggcoverage
   :alt:   (downloads)
.. |docker_r-ggcoverage| image:: https://quay.io/repository/biocontainers/r-ggcoverage/status
   :target: https://quay.io/repository/biocontainers/r-ggcoverage
.. _`r-ggcoverage/tags`: https://quay.io/repository/biocontainers/r-ggcoverage?tab=tags


.. raw:: html

    <script>
        var package = "r-ggcoverage";
        var versions = ["0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggcoverage/README.html