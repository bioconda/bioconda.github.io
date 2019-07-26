:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pqsfinder'
.. highlight: bash

bioconductor-pqsfinder
======================

.. conda:recipe:: bioconductor-pqsfinder
   :replaces_section_title:

   Pqsfinder detects DNA sequence patterns that are likely to fold into an intramolecular G\-quadruplex \(G4\). Unlike many other approaches\, pqsfinder is able to detect G4s folded from imperfect G\-runs containing bulges or mismatches or G4s having long loops. Pqsfinder also assigns an integer score to each hit that was fitted on G4 sequencing data and corresponds to expected stability of the folded G4.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/pqsfinder.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-pqsfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder/meta.yaml>`_
   :links: biotools: :biotools:`pqsfinder`, doi: :doi:`10.1093/bioinformatics/btv272`

   


.. conda:package:: bioconductor-pqsfinder

   |downloads_bioconductor-pqsfinder| |docker_bioconductor-pqsfinder|

   :versions: 2.0.1-0, 1.10.0-0, 1.8.0-0, 1.6.3-0
   
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: >=1.69.0
   :depends r-rcpp: >=0.12.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pqsfinder

   and update with::

      conda update bioconductor-pqsfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pqsfinder:<tag>

   (see `bioconductor-pqsfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pqsfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pqsfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pqsfinder
   :alt:   (downloads)
.. |docker_bioconductor-pqsfinder| image:: https://quay.io/repository/biocontainers/bioconductor-pqsfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pqsfinder
.. _`bioconductor-pqsfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-pqsfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html