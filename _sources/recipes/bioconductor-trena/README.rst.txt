:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trena'
.. highlight: bash

bioconductor-trena
==================

.. conda:recipe:: bioconductor-trena
   :replaces_section_title:

   Methods for reconstructing transcriptional regulatory networks\, especially in species for which genome\-wide TF binding site information is available.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/trena.html
   :license: GPL-3
   :recipe: /`bioconductor-trena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trena/meta.yaml>`_

   


.. conda:package:: bioconductor-trena

   |downloads_bioconductor-trena| |docker_bioconductor-trena|

   :versions: 1.6.1-0, 1.4.2-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: >=1.4.0,<1.5.0
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: >=1.4.0,<1.5.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-motifdb: >=1.26.0,<1.27.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-snplocs.hsapiens.dbsnp150.grch38: >=0.99.0,<0.100.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-flare: 
   :depends r-glmnet: >=2.0.3
   :depends r-lassopv: 
   :depends r-randomforest: 
   :depends r-rmysql: 
   :depends r-rpostgresql: 
   :depends r-rsqlite: 
   :depends r-vbsr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trena

   and update with::

      conda update bioconductor-trena

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trena:<tag>

   (see `bioconductor-trena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trena
   :alt:   (downloads)
.. |docker_bioconductor-trena| image:: https://quay.io/repository/biocontainers/bioconductor-trena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trena
.. _`bioconductor-trena/tags`: https://quay.io/repository/biocontainers/bioconductor-trena?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trena/README.html