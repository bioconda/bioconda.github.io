:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recount3'
.. highlight: bash

bioconductor-recount3
=====================

.. conda:recipe:: bioconductor-recount3
   :replaces_section_title:
   :noindex:

   Explore and download data from the recount3 project

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/recount3.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recount3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3/meta.yaml>`_

   Explore and download data from the recount project available at https\:\/\/jhubiostatistics.shinyapps.io\/recount3\/. Using the recount3 package you can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level\, the raw counts\, the phenotype metadata used\, the urls to the sample coverage bigWig files. The RangedSummarizedExperiment objects can be used by different packages for performing differential expression analysis. Using data from the recount3 project you can perform annotation\-agnostic differential expression analyses as described at http\:\/\/doi.org\/TODO.


.. conda:package:: bioconductor-recount3

   |downloads_bioconductor-recount3| |docker_bioconductor-recount3|

   :versions:
      
      

      ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-sessioninfo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recount3

   and update with::

      conda update bioconductor-recount3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recount3:<tag>

   (see `bioconductor-recount3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recount3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recount3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recount3
   :alt:   (downloads)
.. |docker_bioconductor-recount3| image:: https://quay.io/repository/biocontainers/bioconductor-recount3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recount3
.. _`bioconductor-recount3/tags`: https://quay.io/repository/biocontainers/bioconductor-recount3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recount3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recount3/README.html