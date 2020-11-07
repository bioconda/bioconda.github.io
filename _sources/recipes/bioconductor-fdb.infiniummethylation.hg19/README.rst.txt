:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.infiniummethylation.hg19'
.. highlight: bash

bioconductor-fdb.infiniummethylation.hg19
=========================================

.. conda:recipe:: bioconductor-fdb.infiniummethylation.hg19
   :replaces_section_title:
   :noindex:

   Annotation package for Illumina Infinium DNA methylation probes

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/FDb.InfiniumMethylation.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.infiniummethylation.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg19/meta.yaml>`_

   Compiled HumanMethylation27 and HumanMethylation450 annotations


.. conda:package:: bioconductor-fdb.infiniummethylation.hg19

   |downloads_bioconductor-fdb.infiniummethylation.hg19| |docker_bioconductor-fdb.infiniummethylation.hg19|

   :versions:
      
      

      ``2.2.0-9``,  ``2.2.0-8``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.infiniummethylation.hg19

   and update with::

      conda update bioconductor-fdb.infiniummethylation.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.infiniummethylation.hg19:<tag>

   (see `bioconductor-fdb.infiniummethylation.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.infiniummethylation.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.infiniummethylation.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.infiniummethylation.hg19
   :alt:   (downloads)
.. |docker_bioconductor-fdb.infiniummethylation.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg19
.. _`bioconductor-fdb.infiniummethylation.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg19/README.html