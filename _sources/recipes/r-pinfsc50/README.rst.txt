:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pinfsc50'
.. highlight: bash

r-pinfsc50
==========

.. conda:recipe:: r-pinfsc50
   :replaces_section_title:

   Genomic data for the plant pathogen \"Phytophthora infestans.\" It includes a variant file \(\'VCF\'\)\, a sequence file \(\'FASTA\'\) and an annotation file \(\'GFF\'\). This package is intended to be used as example data for packages that work with genomic data.

   :homepage: https://CRAN.R-project.org/package=pinfsc50
   :license: GPL / GPL
   :recipe: /`r-pinfsc50 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pinfsc50>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pinfsc50/meta.yaml>`_

   


.. conda:package:: r-pinfsc50

   |downloads_r-pinfsc50| |docker_r-pinfsc50|

   :versions: 1.1.0-0
   
   :depends r-base: 3.4.1*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pinfsc50

   and update with::

      conda update r-pinfsc50

   or use the docker container::

      docker pull quay.io/biocontainers/r-pinfsc50:<tag>

   (see `r-pinfsc50/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pinfsc50| image:: https://img.shields.io/conda/dn/bioconda/r-pinfsc50.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pinfsc50| image:: https://quay.io/repository/biocontainers/r-pinfsc50/status
   :target: https://quay.io/repository/biocontainers/r-pinfsc50
.. _`r-pinfsc50/tags`: https://quay.io/repository/biocontainers/r-pinfsc50?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pinfsc50/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pinfsc50/README.html