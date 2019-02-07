.. title:: Package Recipe 'bioconductor-gcapc'
.. highlight: bash


bioconductor-gcapc
==================

.. conda:recipe:: bioconductor-gcapc
   :replaces_section_title:

   Peak calling for ChIP\-seq data with consideration of potential GC bias in sequencing reads. GC bias is first estimated with generalized linear mixture models using effective GC strategy\, then applied into peak significance estimation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gcapc.html
   :license: GPL-3
   :recipe: /`bioconductor-gcapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcapc/meta.yaml>`_

   


.. conda:package:: bioconductor-gcapc

   |downloads_bioconductor-gcapc| |docker_bioconductor-gcapc|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-gcapc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcapc

   and update with::

      conda update bioconductor-gcapc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gcapc


.. |required_by_bioconductor-gcapc| conda:required_by:: bioconductor-gcapc
.. |downloads_bioconductor-gcapc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcapc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gcapc| image:: https://quay.io/repository/biocontainers/bioconductor-gcapc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcapc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcapc/README.html

