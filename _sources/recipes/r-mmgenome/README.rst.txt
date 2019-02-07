.. title:: Package Recipe 'r-mmgenome'
.. highlight: bash


r-mmgenome
==========

.. conda:recipe:: r-mmgenome
   :replaces_section_title:

   Tools for extracting individual genomes from metagenomes

   :homepage: https://github.com/MadsAlbertsen/mmgenome
   :license: AGPL-3
   :recipe: /`r-mmgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome/meta.yaml>`_

   


.. conda:package:: r-mmgenome

   |downloads_r-mmgenome| |docker_r-mmgenome|

   :versions: 0.7.1, 0.6.3

   :depends: :conda:package:`bioconductor-biostrings` >=2.32.0 :conda:package:`r-base` 3.4.1* :conda:package:`r-dplyr` >=0.4.0 :conda:package:`r-ggplot2` >=1.0.0 :conda:package:`r-gridextra` >=0.9.1 :conda:package:`r-igraph` >=1.0.0 :conda:package:`r-knitr` >=1.6 :conda:package:`r-reshape2` >=1.4 :conda:package:`r-sp` >=1.0.15 :conda:package:`r-vegan` >=2.0.10 

   :required~by: |required_by_r-mmgenome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mmgenome

   and update with::

      conda update r-mmgenome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-mmgenome


.. |required_by_r-mmgenome| conda:required_by:: r-mmgenome
.. |downloads_r-mmgenome| image:: https://img.shields.io/conda/dn/bioconda/r-mmgenome.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mmgenome| image:: https://quay.io/repository/biocontainers/r-mmgenome/status
   :target: https://quay.io/repository/biocontainers/r-mmgenome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmgenome/README.html

