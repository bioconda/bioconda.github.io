:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recount'
.. highlight: bash

bioconductor-recount
====================

.. conda:recipe:: bioconductor-recount
   :replaces_section_title:

   Explore and download data from the recount project available at https\:\/\/jhubiostatistics.shinyapps.io\/recount\/. Using the recount package you can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level\, the raw counts\, the phenotype metadata used\, the urls to the sample coverage bigWig files or the mean coverage bigWig file for a particular study. The RangedSummarizedExperiment objects can be used by different packages for performing differential expression analysis. Using http\:\/\/bioconductor.org\/packages\/derfinder you can perform annotation\-agnostic differential expression analyses with the data from the recount project as described at http\:\/\/www.nature.com\/nbt\/journal\/v35\/n4\/full\/nbt.3838.html.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/recount.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount/meta.yaml>`_

   


.. conda:package:: bioconductor-recount

   |downloads_bioconductor-recount| |docker_bioconductor-recount|

   :versions: 1.8.1-0, 1.6.3-0, 1.4.5-0, 1.4.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-derfinder: >=1.16.0,<1.17.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-geoquery: >=2.50.0,<2.51.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-downloader: 
   
   :depends r-rcurl: 
   
   :depends r-rentrez: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recount

   and update with::

      conda update bioconductor-recount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-recount:<tag>

   (see `bioconductor-recount/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recount| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recount.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-recount| image:: https://quay.io/repository/biocontainers/bioconductor-recount/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recount
.. _`bioconductor-recount/tags`: https://quay.io/repository/biocontainers/bioconductor-recount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recount/README.html