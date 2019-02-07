.. title:: Package Recipe 'bioconductor-cnvrd2'
.. highlight: bash


bioconductor-cnvrd2
===================

.. conda:recipe:: bioconductor-cnvrd2
   :replaces_section_title:

   CNVrd2 uses next\-generation sequencing data to measure human gene copy number for multiple samples\, indentify SNPs tagging copy number variants and detect copy number polymorphic genomic regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNVrd2.html
   :license: GPL-2
   :recipe: /`bioconductor-cnvrd2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvrd2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvrd2/meta.yaml>`_

   


.. conda:package:: bioconductor-cnvrd2

   |downloads_bioconductor-cnvrd2| |docker_bioconductor-cnvrd2|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`jags`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-rjags`  

   :required~by: |required_by_bioconductor-cnvrd2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvrd2

   and update with::

      conda update bioconductor-cnvrd2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnvrd2


.. |required_by_bioconductor-cnvrd2| conda:required_by:: bioconductor-cnvrd2
.. |downloads_bioconductor-cnvrd2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvrd2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnvrd2| image:: https://quay.io/repository/biocontainers/bioconductor-cnvrd2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvrd2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvrd2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvrd2/README.html

