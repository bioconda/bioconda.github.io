.. title:: Package Recipe 'bioconductor-pqsfinder'
.. highlight: bash


bioconductor-pqsfinder
======================

.. conda:recipe:: bioconductor-pqsfinder
   :replaces_section_title:

   The main functionality of this package is to detect DNA sequence patterns that are likely to fold into an intramolecular G\-quadruplex \(G4\). Unlike many other approaches\, this package is able to detect sequences responsible for G4s folded from imperfect G\-runs containing bulges or mismatches and as such is more sensitive than competing algorithms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pqsfinder.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-pqsfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder/meta.yaml>`_
   :links: biotools: :biotools:`pqsfinder`, doi: :doi:`10.1093/bioinformatics/btv272`

   


.. conda:package:: bioconductor-pqsfinder

   |downloads_bioconductor-pqsfinder| |docker_bioconductor-pqsfinder|

   :versions: 1.10.0, 1.8.0, 1.6.3

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh` >=1.66.0 :conda:package:`r-rcpp` >=0.12.3 

   :required~by: |required_by_bioconductor-pqsfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pqsfinder

   and update with::

      conda update bioconductor-pqsfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pqsfinder


.. |required_by_bioconductor-pqsfinder| conda:required_by:: bioconductor-pqsfinder
.. |downloads_bioconductor-pqsfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pqsfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pqsfinder| image:: https://quay.io/repository/biocontainers/bioconductor-pqsfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pqsfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html

