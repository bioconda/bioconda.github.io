:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.1kgenomes.phase3.hs37d5'
.. highlight: bash

bioconductor-mafdb.1kgenomes.phase3.hs37d5
==========================================

.. conda:recipe:: bioconductor-mafdb.1kgenomes.phase3.hs37d5
   :replaces_section_title:

   Minor allele frequency data from 1000 Genomes Phase 3 for hs37d5

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/MafDb.1Kgenomes.phase3.hs37d5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.1kgenomes.phase3.hs37d5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/meta.yaml>`_

   Store minor allele frequency data from the Phase 3 of the 1000 Genomes Project for the human genome version hs37d5.


.. conda:package:: bioconductor-mafdb.1kgenomes.phase3.hs37d5

   |downloads_bioconductor-mafdb.1kgenomes.phase3.hs37d5| |docker_bioconductor-mafdb.1kgenomes.phase3.hs37d5|

   :versions: 3.10.0-1, 3.10.0-0, 3.7.0-2, 3.7.0-0
   
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-genomicscores: >=2.0.0,<2.1.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mafdb.1kgenomes.phase3.hs37d5

   and update with::

      conda update bioconductor-mafdb.1kgenomes.phase3.hs37d5

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5:<tag>

   (see `bioconductor-mafdb.1kgenomes.phase3.hs37d5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.1kgenomes.phase3.hs37d5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.1kgenomes.phase3.hs37d5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.1kgenomes.phase3.hs37d5
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.1kgenomes.phase3.hs37d5| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5
.. _`bioconductor-mafdb.1kgenomes.phase3.hs37d5/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/README.html