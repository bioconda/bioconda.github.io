:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-customprodb'
.. highlight: bash

bioconductor-customprodb
========================

.. conda:recipe:: bioconductor-customprodb
   :replaces_section_title:

   Generate customized protein database from NGS data\, with a focus on RNA\-Seq data\, for proteomics search

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/customProDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-customprodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customprodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customprodb/meta.yaml>`_

   Database search is the most widely used approach for peptide and protein identification in mass spectrometry\-based proteomics studies. Our previous study showed that sample\-specific protein databases derived from RNA\-Seq data can better approximate the real protein pools in the samples and thus improve protein identification. More importantly\, single nucleotide variations\, short insertion and deletions and novel junctions identified from RNA\-Seq data make protein database more complete and sample\-specific. Here\, we report an R package customProDB that enables the easy generation of customized databases from RNA\-Seq data for proteomics search. This work bridges genomics and proteomics studies and facilitates cross\-omics data integration.


.. conda:package:: bioconductor-customprodb

   |downloads_bioconductor-customprodb| |docker_bioconductor-customprodb|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicalignments: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-variantannotation: >=1.34.0,<1.35.0
   :depends r-ahocorasicktrie: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :depends r-plyr: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-customprodb

   and update with::

      conda update bioconductor-customprodb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-customprodb:<tag>

   (see `bioconductor-customprodb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-customprodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-customprodb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-customprodb
   :alt:   (downloads)
.. |docker_bioconductor-customprodb| image:: https://quay.io/repository/biocontainers/bioconductor-customprodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-customprodb
.. _`bioconductor-customprodb/tags`: https://quay.io/repository/biocontainers/bioconductor-customprodb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-customprodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-customprodb/README.html