:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse62944'
.. highlight: bash

bioconductor-gse62944
=====================

.. conda:recipe:: bioconductor-gse62944
   :replaces_section_title:
   :noindex:

   GEO accession data GSE62944 as a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/GSE62944.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gse62944 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse62944>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse62944/meta.yaml>`_

   TCGA processed RNA\-Seq data for 9264 tumor and 741 normal samples across 24 cancer types and made them available as GEO accession \[GSE62944\]\(http\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE62944\). GSE62944 data have been parsed into a SummarizedExperiment object available in ExperimentHub.


.. conda:package:: bioconductor-gse62944

   |downloads_bioconductor-gse62944| |docker_bioconductor-gse62944|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-geoquery: ``>=2.60.0,<2.61.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gse62944

   and update with::

      conda update bioconductor-gse62944

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse62944:<tag>

   (see `bioconductor-gse62944/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse62944| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse62944.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse62944
   :alt:   (downloads)
.. |docker_bioconductor-gse62944| image:: https://quay.io/repository/biocontainers/bioconductor-gse62944/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse62944
.. _`bioconductor-gse62944/tags`: https://quay.io/repository/biocontainers/bioconductor-gse62944?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse62944/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse62944/README.html