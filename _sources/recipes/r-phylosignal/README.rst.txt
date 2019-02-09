.. title:: Package Recipe 'r-phylosignal'
.. highlight: bash


r-phylosignal
=============

.. conda:recipe:: r-phylosignal
   :replaces_section_title:

   A collection of tools to explore the phylogenetic signal in univariate and multivariate data. The package provides functions to plot traits data against a phylogenetic tree\, different measures and tests for the phylogenetic signal\, methods to describe where the signal is located and a phylogenetic clustering method.

   :homepage: https://CRAN.R-project.org/package=phylosignal
   :license: GPL3 / GPL-3
   :recipe: /`r-phylosignal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylosignal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylosignal/meta.yaml>`_

   


.. conda:package:: r-phylosignal

   |downloads_r-phylosignal| |docker_r-phylosignal|

   :versions: 1.2

   :depends: :conda:package:`r-adephylo`  :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-boot`  :conda:package:`r-dbi`  :conda:package:`r-igraph`  :conda:package:`r-phylobase`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_r-phylosignal|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phylosignal

   and update with::

      conda update r-phylosignal

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-phylosignal


.. |required_by_r-phylosignal| conda:required_by:: r-phylosignal
.. |downloads_r-phylosignal| image:: https://img.shields.io/conda/dn/bioconda/r-phylosignal.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phylosignal| image:: https://quay.io/repository/biocontainers/r-phylosignal/status
   :target: https://quay.io/repository/biocontainers/r-phylosignal







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phylosignal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phylosignal/README.html

