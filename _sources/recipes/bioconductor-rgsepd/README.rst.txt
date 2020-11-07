:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgsepd'
.. highlight: bash

bioconductor-rgsepd
===================

.. conda:recipe:: bioconductor-rgsepd
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment \/ Projection Displays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rgsepd.html
   :license: GPL-3
   :recipe: /`bioconductor-rgsepd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsepd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsepd/meta.yaml>`_
   :links: biotools: :biotools:`rgsepd`, doi: :doi:`10.1038/nmeth.3252`

   R\/GSEPD is a bioinformatics package for R to help disambiguate transcriptome samples \(a matrix of RNA\-Seq counts at transcript IDs\) by automating differential expression \(with DESeq2\)\, then gene set enrichment \(with GOSeq\)\, and finally a N\-dimensional projection to quantify in which ways each sample is like either treatment group.


.. conda:package:: bioconductor-rgsepd

   |downloads_bioconductor-rgsepd| |docker_bioconductor-rgsepd|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends bioconductor-goseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gplots: 
   :depends r-hash: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgsepd

   and update with::

      conda update bioconductor-rgsepd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgsepd:<tag>

   (see `bioconductor-rgsepd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgsepd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgsepd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgsepd
   :alt:   (downloads)
.. |docker_bioconductor-rgsepd| image:: https://quay.io/repository/biocontainers/bioconductor-rgsepd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgsepd
.. _`bioconductor-rgsepd/tags`: https://quay.io/repository/biocontainers/bioconductor-rgsepd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html