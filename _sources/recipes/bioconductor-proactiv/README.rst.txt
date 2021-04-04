:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proactiv'
.. highlight: bash

bioconductor-proactiv
=====================

.. conda:recipe:: bioconductor-proactiv
   :replaces_section_title:
   :noindex:

   Estimate Promoter Activity from RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/proActiv.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-proactiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proactiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proactiv/meta.yaml>`_

   Most human genes have multiple promoters that control the expression of different isoforms. The use of these alternative promoters enables the regulation of isoform expression pre\-transcriptionally. Alternative promoters have been found to be important in a wide number of cell types and diseases. proActiv is an R package that enables the analysis of promoters from RNA\-seq data. proActiv uses aligned reads as input\, and generates counts and normalized promoter activity estimates for each annotated promoter. In particular\, proActiv accepts junction files from TopHat2 or STAR or BAM files as inputs. These estimates can then be used to identify which promoter is active\, which promoter is inactive\, and which promoters change their activity across conditions.


.. conda:package:: bioconductor-proactiv

   |downloads_bioconductor-proactiv| |docker_bioconductor-proactiv|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proactiv

   and update with::

      conda update bioconductor-proactiv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proactiv:<tag>

   (see `bioconductor-proactiv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proactiv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proactiv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proactiv
   :alt:   (downloads)
.. |docker_bioconductor-proactiv| image:: https://quay.io/repository/biocontainers/bioconductor-proactiv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proactiv
.. _`bioconductor-proactiv/tags`: https://quay.io/repository/biocontainers/bioconductor-proactiv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proactiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proactiv/README.html