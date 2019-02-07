.. title:: Package Recipe 'bioconductor-wrench'
.. highlight: bash


bioconductor-wrench
===================

.. conda:recipe:: bioconductor-wrench
   :replaces_section_title:

   Wrench is a package for normalization sparse genomic count data\, like that arising from 16s metagenomic surveys.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Wrench.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wrench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench/meta.yaml>`_

   


.. conda:package:: bioconductor-wrench

   |downloads_bioconductor-wrench| |docker_bioconductor-wrench|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-wrench|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wrench

   and update with::

      conda update bioconductor-wrench

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-wrench


.. |required_by_bioconductor-wrench| conda:required_by:: bioconductor-wrench
.. |downloads_bioconductor-wrench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wrench.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-wrench| image:: https://quay.io/repository/biocontainers/bioconductor-wrench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wrench







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wrench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wrench/README.html

