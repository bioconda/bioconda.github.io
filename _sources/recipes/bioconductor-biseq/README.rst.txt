:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biseq'
.. highlight: bash

bioconductor-biseq
==================

.. conda:recipe:: bioconductor-biseq
   :replaces_section_title:

   The BiSeq package provides useful classes and functions to handle and analyze targeted bisulfite sequencing \(BS\) data such as reduced\-representation bisulfite sequencing \(RRBS\) data. In particular\, it implements an algorithm to detect differentially methylated regions \(DMRs\). The package takes already aligned BS data from one or multiple samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiSeq.html
   :license: LGPL-3
   :recipe: /`bioconductor-biseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq/meta.yaml>`_
   :links: biotools: :biotools:`biseq`, doi: :doi:`10.1093/bib/bbv095`

   


.. conda:package:: bioconductor-biseq

   |downloads_bioconductor-biseq| |docker_bioconductor-biseq|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-globaltest: >=5.36.0,<5.37.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-betareg: 
   :depends r-formula: 
   :depends r-lokern: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biseq

   and update with::

      conda update bioconductor-biseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biseq:<tag>

   (see `bioconductor-biseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biseq
   :alt:   (downloads)
.. |docker_bioconductor-biseq| image:: https://quay.io/repository/biocontainers/bioconductor-biseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biseq
.. _`bioconductor-biseq/tags`: https://quay.io/repository/biocontainers/bioconductor-biseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biseq/README.html