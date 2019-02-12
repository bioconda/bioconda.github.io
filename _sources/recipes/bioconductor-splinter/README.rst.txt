:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinter'
.. highlight: bash

bioconductor-splinter
=====================

.. conda:recipe:: bioconductor-splinter
   :replaces_section_title:

   SPLINTER provides tools to analyze alternative splicing sites\, interpret outcomes based on sequence information\, select and design primers for site validiation and give visual representation of the event to guide downstream experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SPLINTER.html
   :license: GPL-2
   :recipe: /`bioconductor-splinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinter/meta.yaml>`_
   :links: biotools: :biotools:`splinter`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-splinter

   |downloads_bioconductor-splinter| |docker_bioconductor-splinter|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: >=1.4.0,<1.5.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-seqlogo: >=1.48.0,<1.49.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-googlevis: 
   
   :depends r-plyr: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splinter

   and update with::

      conda update bioconductor-splinter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-splinter:<tag>

   (see `bioconductor-splinter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splinter| image:: https://quay.io/repository/biocontainers/bioconductor-splinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinter
.. _`bioconductor-splinter/tags`: https://quay.io/repository/biocontainers/bioconductor-splinter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinter/README.html