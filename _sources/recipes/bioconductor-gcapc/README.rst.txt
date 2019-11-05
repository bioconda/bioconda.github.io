:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcapc'
.. highlight: bash

bioconductor-gcapc
==================

.. conda:recipe:: bioconductor-gcapc
   :replaces_section_title:

   Peak calling for ChIP\-seq data with consideration of potential GC bias in sequencing reads. GC bias is first estimated with generalized linear mixture models using effective GC strategy\, then applied into peak significance estimation.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gcapc.html
   :license: GPL-3
   :recipe: /`bioconductor-gcapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcapc/meta.yaml>`_

   


.. conda:package:: bioconductor-gcapc

   |downloads_bioconductor-gcapc| |docker_bioconductor-gcapc|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mass: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcapc

   and update with::

      conda update bioconductor-gcapc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcapc:<tag>

   (see `bioconductor-gcapc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcapc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcapc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcapc
   :alt:   (downloads)
.. |docker_bioconductor-gcapc| image:: https://quay.io/repository/biocontainers/bioconductor-gcapc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcapc
.. _`bioconductor-gcapc/tags`: https://quay.io/repository/biocontainers/bioconductor-gcapc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcapc/README.html