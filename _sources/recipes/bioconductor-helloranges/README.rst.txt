:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-helloranges'
.. highlight: bash

bioconductor-helloranges
========================

.. conda:recipe:: bioconductor-helloranges
   :replaces_section_title:

   Translates bedtools command\-line invocations to R code calling functions from the Bioconductor \*Ranges infrastructure. This is intended to educate novice Bioconductor users and to compare the syntax and semantics of the two frameworks.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HelloRanges.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-helloranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges/meta.yaml>`_
   :links: biotools: :biotools:`helloranges`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-helloranges

   |downloads_bioconductor-helloranges| |docker_bioconductor-helloranges|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-docopt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-helloranges

   and update with::

      conda update bioconductor-helloranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-helloranges:<tag>

   (see `bioconductor-helloranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-helloranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-helloranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-helloranges
   :alt:   (downloads)
.. |docker_bioconductor-helloranges| image:: https://quay.io/repository/biocontainers/bioconductor-helloranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-helloranges
.. _`bioconductor-helloranges/tags`: https://quay.io/repository/biocontainers/bioconductor-helloranges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-helloranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-helloranges/README.html