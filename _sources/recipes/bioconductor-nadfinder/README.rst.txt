:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nadfinder'
.. highlight: bash

bioconductor-nadfinder
======================

.. conda:recipe:: bioconductor-nadfinder
   :replaces_section_title:

   Nucleolus is an important structure inside the nucleus in eukaryotic cells. It is the site for transcribing rDNA into rRNA and for assembling ribosomes\, aka ribosome biogenesis. In addition\, nucleoli are dynamic hubs through which numerous proteins shuttle and contact specific non\-rDNA genomic loci. Deep sequencing analyses of DNA associated with isolated nucleoli \(NAD\- seq\) have shown that specific loci\, termed nucleolus\- associated domains \(NADs\) form frequent three\- dimensional associations with nucleoli. NAD\-seq has been used to study the biological functions of NAD and the dynamics of NAD distribution during embryonic stem cell \(ESC\) differentiation. Here\, we developed a Bioconductor package NADfinder for bioinformatic analysis of the NAD\-seq data\, including normalization\, smoothing\, peak calling\, peak trimming and annotation.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/NADfinder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-nadfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder/meta.yaml>`_

   


.. conda:package:: bioconductor-nadfinder

   |downloads_bioconductor-nadfinder| |docker_bioconductor-nadfinder|

   :versions: 1.8.1-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-atacseqqc: >=1.8.0,<1.9.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-csaw: >=1.18.0,<1.19.0
   :depends bioconductor-empiricalbrownsmethod: >=1.12.0,<1.13.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-trackviewer: >=1.20.0,<1.21.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-baseline: 
   :depends r-corrplot: 
   :depends r-metap: 
   :depends r-signal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nadfinder

   and update with::

      conda update bioconductor-nadfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nadfinder:<tag>

   (see `bioconductor-nadfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nadfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nadfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nadfinder
   :alt:   (downloads)
.. |docker_bioconductor-nadfinder| image:: https://quay.io/repository/biocontainers/bioconductor-nadfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nadfinder
.. _`bioconductor-nadfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-nadfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html