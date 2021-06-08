:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cagefightr'
.. highlight: bash

bioconductor-cagefightr
=======================

.. conda:recipe:: bioconductor-cagefightr
   :replaces_section_title:
   :noindex:

   Analysis of Cap Analysis of Gene Expression \(CAGE\) data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CAGEfightR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cagefightr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr/meta.yaml>`_

   CAGE is a widely used high throughput assay for measuring transcription start site \(TSS\) activity. CAGEfightR is an R\/Bioconductor package for performing a wide range of common data analysis tasks for CAGE and 5\'\-end data in general. Core functionality includes\: import of CAGE TSSs \(CTSSs\)\, tag \(or unidirectional\) clustering for TSS identification\, bidirectional clustering for enhancer identification\, annotation with transcript and gene models\, correlation of TSS and enhancer expression\, calculation of TSS shapes\, quantification of CAGE expression as expression matrices and genome brower visualization.


.. conda:package:: bioconductor-cagefightr

   |downloads_bioconductor-cagefightr| |docker_bioconductor-cagefightr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicfiles: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicinteractions: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-gviz: ``>=1.36.0,<1.37.0``
   :depends bioconductor-interactionset: ``>=1.20.0,<1.21.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: ``>=1.2-12``
   :depends r-pryr: ``>=0.1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cagefightr

   and update with::

      conda update bioconductor-cagefightr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cagefightr:<tag>

   (see `bioconductor-cagefightr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cagefightr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cagefightr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cagefightr
   :alt:   (downloads)
.. |docker_bioconductor-cagefightr| image:: https://quay.io/repository/biocontainers/bioconductor-cagefightr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cagefightr
.. _`bioconductor-cagefightr/tags`: https://quay.io/repository/biocontainers/bioconductor-cagefightr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html