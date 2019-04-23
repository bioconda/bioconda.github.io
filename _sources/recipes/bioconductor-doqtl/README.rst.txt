:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doqtl'
.. highlight: bash

bioconductor-doqtl
==================

.. conda:recipe:: bioconductor-doqtl
   :replaces_section_title:

   DOQTL is a quantitative trait locus \(QTL\) mapping pipeline designed for Diversity Outbred mice and other multi\-parent outbred populations. The package reads in data from genotyping arrays and perform haplotype reconstruction using a hidden Markov model \(HMM\). The haplotype probabilities from the HMM are then used to perform linkage mapping. When founder sequences are available\, DOQTL can use the haplotype reconstructions to impute the founder sequences onto DO genomes and perform association mapping.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DOQTL.html
   :license: GPL-3
   :recipe: /`bioconductor-doqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doqtl/meta.yaml>`_
   :links: biotools: :biotools:`doqtl`

   


.. conda:package:: bioconductor-doqtl

   |downloads_bioconductor-doqtl| |docker_bioconductor-doqtl|

   :versions: 1.18.0-0, 1.16.2-0, 1.14.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   :depends bioconductor-annotationtools: >=1.56.0,<1.57.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: >=1.4.0,<1.5.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rhdf5: >=2.26.0,<2.27.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-hwriter: 
   :depends r-iterators: 
   :depends r-mclust: 
   :depends r-qtlrel: 
   :depends r-regress: 
   :depends r-runit: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doqtl

   and update with::

      conda update bioconductor-doqtl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doqtl:<tag>

   (see `bioconductor-doqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doqtl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-doqtl| image:: https://quay.io/repository/biocontainers/bioconductor-doqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doqtl
.. _`bioconductor-doqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-doqtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doqtl/README.html