:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.topmed.freeze5.hg38'
.. highlight: bash

bioconductor-mafdb.topmed.freeze5.hg38
======================================

.. conda:recipe:: bioconductor-mafdb.topmed.freeze5.hg38
   :replaces_section_title:

   Minor allele frequency data from TOPMed for hg38

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/MafDb.TOPMed.freeze5.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.topmed.freeze5.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.topmed.freeze5.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.topmed.freeze5.hg38/meta.yaml>`_

   Store minor allele frequency data from NHLBI TOPMed for the human genome version hg38.


.. conda:package:: bioconductor-mafdb.topmed.freeze5.hg38

   |downloads_bioconductor-mafdb.topmed.freeze5.hg38| |docker_bioconductor-mafdb.topmed.freeze5.hg38|

   :versions: 3.10.0-0, 3.9.0-1, 3.7.1-0
   
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-genomicscores: >=1.10.0,<1.11.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mafdb.topmed.freeze5.hg38

   and update with::

      conda update bioconductor-mafdb.topmed.freeze5.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.topmed.freeze5.hg38:<tag>

   (see `bioconductor-mafdb.topmed.freeze5.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.topmed.freeze5.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.topmed.freeze5.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.topmed.freeze5.hg38
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.topmed.freeze5.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg38
.. _`bioconductor-mafdb.topmed.freeze5.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.topmed.freeze5.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.topmed.freeze5.hg38/README.html