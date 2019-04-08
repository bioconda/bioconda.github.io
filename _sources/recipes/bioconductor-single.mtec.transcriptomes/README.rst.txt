:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-single.mtec.transcriptomes'
.. highlight: bash

bioconductor-single.mtec.transcriptomes
=======================================

.. conda:recipe:: bioconductor-single.mtec.transcriptomes
   :replaces_section_title:

   This data package contains the code used to analyse the single\-cell RNA\-seq and the bulk ATAC\-seq data from the manuscript titled\: Single\-cell transcriptome analysis reveals coordinated ectopic\-gene expression patterns in medullary thymic epithelial cells. This paper was published in Nature Immunology 16\,933\-941\(2015\). The data objects provided in this package has been pre\-processed\: the raw data files can be downloaded from ArrayExpress under the accession identifiers E\-MTAB\-3346 and E\-MTAB\-3624. The vignette of this data package provides a documented and reproducible workflow that includes the code that was used to generate each statistic and figure from the manuscript.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/Single.mTEC.Transcriptomes.html
   :license: LGPL
   :recipe: /`bioconductor-single.mtec.transcriptomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes/meta.yaml>`_

   


.. conda:package:: bioconductor-single.mtec.transcriptomes

   |downloads_bioconductor-single.mtec.transcriptomes| |docker_bioconductor-single.mtec.transcriptomes|

   :versions: 1.10.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-single.mtec.transcriptomes

   and update with::

      conda update bioconductor-single.mtec.transcriptomes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-single.mtec.transcriptomes:<tag>

   (see `bioconductor-single.mtec.transcriptomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-single.mtec.transcriptomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-single.mtec.transcriptomes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-single.mtec.transcriptomes| image:: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes
.. _`bioconductor-single.mtec.transcriptomes/tags`: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html