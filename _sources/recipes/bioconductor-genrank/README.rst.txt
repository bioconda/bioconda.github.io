.. title:: Package Recipe 'bioconductor-genrank'
.. highlight: bash


bioconductor-genrank
====================

.. conda:recipe:: bioconductor-genrank
   :replaces_section_title:

   Methods for ranking genes based on convergent evidence obtained from multiple independent evidence layers. This package adapts three methods that are popular for meta\-analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenRank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genrank/meta.yaml>`_
   :links: biotools: :biotools:`genrank`, doi: :doi:`10.12688/f1000research.11223.1`

   


.. conda:package:: bioconductor-genrank

   |downloads_bioconductor-genrank| |docker_bioconductor-genrank|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-survcomp` >=1.32.0,<1.33.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-genrank|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genrank

   and update with::

      conda update bioconductor-genrank

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genrank


.. |required_by_bioconductor-genrank| conda:required_by:: bioconductor-genrank
.. |downloads_bioconductor-genrank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genrank.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genrank| image:: https://quay.io/repository/biocontainers/bioconductor-genrank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genrank







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genrank/README.html

