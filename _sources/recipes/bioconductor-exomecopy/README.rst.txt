:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomecopy'
.. highlight: bash

bioconductor-exomecopy
======================

.. conda:recipe:: bioconductor-exomecopy
   :replaces_section_title:

   Detection of copy number variants \(CNV\) from exome sequencing samples\, including unpaired samples.  The package implements a hidden Markov model which uses positional covariates\, such as background read depth and GC\-content\, to simultaneously normalize and segment the samples into regions of constant copy count.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/exomeCopy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-exomecopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomecopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomecopy/meta.yaml>`_
   :links: biotools: :biotools:`exomecopy`, doi: :doi:`10.2202/1544-6115.1732`

   


.. conda:package:: bioconductor-exomecopy

   |downloads_bioconductor-exomecopy| |docker_bioconductor-exomecopy|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-exomecopy

   and update with::

      conda update bioconductor-exomecopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-exomecopy:<tag>

   (see `bioconductor-exomecopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-exomecopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomecopy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-exomecopy| image:: https://quay.io/repository/biocontainers/bioconductor-exomecopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomecopy
.. _`bioconductor-exomecopy/tags`: https://quay.io/repository/biocontainers/bioconductor-exomecopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html