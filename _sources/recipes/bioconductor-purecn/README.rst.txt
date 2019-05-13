:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-purecn'
.. highlight: bash

bioconductor-purecn
===================

.. conda:recipe:: bioconductor-purecn
   :replaces_section_title:

   This package estimates tumor purity\, copy number\, and loss of heterozygosity \(LOH\)\, and classifies single nucleotide variants \(SNVs\) by somatic status and clonality. PureCN is designed for targeted short read sequencing data\, integrates well with standard somatic variant detection and copy number pipelines\, and has support for tumor samples without matching normal samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PureCN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-purecn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn/meta.yaml>`_
   :links: biotools: :biotools:`purecn`

   


.. conda:package:: bioconductor-purecn

   |downloads_bioconductor-purecn| |docker_bioconductor-purecn|

   :versions: 1.13.1-2, 1.12.1-0, 1.11.20-2, 1.11.20-1, 1.11.13-1, 1.11.13-0, 1.8.0-0, 1.6.3-0
   
   :depends bioconductor-biocgenerics: >=0.26.0,<0.28.0
   :depends bioconductor-biostrings: >=2.48.0,<2.50.0
   :depends bioconductor-copynumber: >=1.20.0,<1.22.0
   :depends bioconductor-dnacopy: >=1.54.0,<1.56.0
   :depends bioconductor-edger: >=3.22.0,<3.24.0
   :depends bioconductor-genomeinfodb: >=1.16.0,<1.18.0
   :depends bioconductor-genomicfeatures: >=1.32.2,<1.34.0
   :depends bioconductor-genomicranges: >=1.32.7,<1.34.0
   :depends bioconductor-iranges: >=2.14.12,<2.16.0
   :depends bioconductor-limma: >=3.36.0,<3.38.0
   :depends bioconductor-rhdf5: >=2.24.0,<2.26.0
   :depends bioconductor-rsamtools: >=1.32.3,<1.34.0
   :depends bioconductor-rtracklayer: >=1.40.6,<1.42.0
   :depends bioconductor-s4vectors: >=0.18.3,<0.20.0
   :depends bioconductor-summarizedexperiment: >=1.10.1,<1.12.0
   :depends bioconductor-variantannotation: >=1.26.1,<1.28.0
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-data.table: 
   :depends r-deconstructsigs: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-optparse: 
   :depends r-rcolorbrewer: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-purecn

   and update with::

      conda update bioconductor-purecn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-purecn:<tag>

   (see `bioconductor-purecn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-purecn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-purecn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-purecn
   :alt:   (downloads)
.. |docker_bioconductor-purecn| image:: https://quay.io/repository/biocontainers/bioconductor-purecn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-purecn
.. _`bioconductor-purecn/tags`: https://quay.io/repository/biocontainers/bioconductor-purecn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-purecn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-purecn/README.html