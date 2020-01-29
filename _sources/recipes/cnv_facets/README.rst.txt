:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnv_facets'
.. highlight: bash

cnv_facets
==========

.. conda:recipe:: cnv_facets
   :replaces_section_title:

   Detect somatic copy number variants \(CNV\) in tumour\-normal samples using next generation sequencing data

   :homepage: https://github.com/dariober/cnv_facets
   :license: MIT / MIT
   :recipe: /`cnv_facets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets/meta.yaml>`_

   


.. conda:package:: cnv_facets

   |downloads_cnv_facets| |docker_cnv_facets|

   :versions: 0.15.0-1, 0.15.0-0, 0.14.0-1, 0.13.0-1, 0.12.1-1, 0.12.1-0, 0.12.0-0, v0.11.3-2, v0.11.3-1, v0.11.2-1
   
   :depends bcftools: 
   :depends bioconductor-rsamtools: 
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
   :depends samtools: 
   :depends snp-pileup: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnv_facets

   and update with::

      conda update cnv_facets

   or use the docker container::

      docker pull quay.io/biocontainers/cnv_facets:<tag>

   (see `cnv_facets/tags`_ for valid values for ``<tag>``)


.. |downloads_cnv_facets| image:: https://img.shields.io/conda/dn/bioconda/cnv_facets.svg?style=flat
   :target: https://anaconda.org/bioconda/cnv_facets
   :alt:   (downloads)
.. |docker_cnv_facets| image:: https://quay.io/repository/biocontainers/cnv_facets/status
   :target: https://quay.io/repository/biocontainers/cnv_facets
.. _`cnv_facets/tags`: https://quay.io/repository/biocontainers/cnv_facets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnv_facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnv_facets/README.html