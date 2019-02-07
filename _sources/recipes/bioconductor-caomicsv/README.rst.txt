.. title:: Package Recipe 'bioconductor-caomicsv'
.. highlight: bash


bioconductor-caomicsv
=====================

.. conda:recipe:: bioconductor-caomicsv
   :replaces_section_title:

   caOmicsV package provides methods to visualize multi\-dimentional cancer genomics data including of patient information\, gene expressions\, DNA methylations\, DNA copy number variations\, and SNP\/mutations in matrix layout or network layout.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/caOmicsV.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-caomicsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caomicsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caomicsv/meta.yaml>`_

   


.. conda:package:: bioconductor-caomicsv

   |downloads_bioconductor-caomicsv| |docker_bioconductor-caomicsv|

   :versions: 1.12.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bc3net` >=1.0.2 :conda:package:`r-igraph` >=0.7.1 

   :required~by: |required_by_bioconductor-caomicsv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-caomicsv

   and update with::

      conda update bioconductor-caomicsv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-caomicsv


.. |required_by_bioconductor-caomicsv| conda:required_by:: bioconductor-caomicsv
.. |downloads_bioconductor-caomicsv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-caomicsv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-caomicsv| image:: https://quay.io/repository/biocontainers/bioconductor-caomicsv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-caomicsv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-caomicsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-caomicsv/README.html

