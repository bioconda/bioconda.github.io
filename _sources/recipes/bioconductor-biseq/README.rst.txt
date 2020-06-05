:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biseq'
.. highlight: bash

bioconductor-biseq
==================

.. conda:recipe:: bioconductor-biseq
   :replaces_section_title:
   :noindex:

   Processing and analyzing bisulfite sequencing data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BiSeq.html
   :license: LGPL-3
   :recipe: /`bioconductor-biseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq/meta.yaml>`_
   :links: biotools: :biotools:`biseq`, doi: :doi:`10.1093/bib/bbv095`

   The BiSeq package provides useful classes and functions to handle and analyze targeted bisulfite sequencing \(BS\) data such as reduced\-representation bisulfite sequencing \(RRBS\) data. In particular\, it implements an algorithm to detect differentially methylated regions \(DMRs\). The package takes already aligned BS data from one or multiple samples.


.. conda:package:: bioconductor-biseq

   |downloads_bioconductor-biseq| |docker_bioconductor-biseq|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-globaltest: ``>=5.42.0,<5.43.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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