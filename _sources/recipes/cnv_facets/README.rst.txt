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

   :versions: 0.12.1, 0.12.0, v0.11.3, v0.11.2

   :depends: :conda:package:`bcftools`  :conda:package:`bioconductor-rsamtools`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-jsonlite`  :conda:package:`samtools`  :conda:package:`snp-pileup`  

   :required~by: |required_by_cnv_facets|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnv_facets

   and update with::

      conda update cnv_facets

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cnv_facets


.. |required_by_cnv_facets| conda:required_by:: cnv_facets
.. |downloads_cnv_facets| image:: https://img.shields.io/conda/dn/bioconda/cnv_facets.svg?style=flat
   :alt:   (downloads)
.. |docker_cnv_facets| image:: https://quay.io/repository/biocontainers/cnv_facets/status
   :target: https://quay.io/repository/biocontainers/cnv_facets







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnv_facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnv_facets/README.html

