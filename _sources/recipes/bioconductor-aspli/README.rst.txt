.. title:: Package Recipe 'bioconductor-aspli'
.. highlight: bash


bioconductor-aspli
==================

.. conda:recipe:: bioconductor-aspli
   :replaces_section_title:

   Integrative pipeline for the analysis of alternative splicing using RNAseq.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ASpli.html
   :license: GPL
   :recipe: /`bioconductor-aspli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli/meta.yaml>`_
   :links: biotools: :biotools:`aspli`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-aspli

   |downloads_bioconductor-aspli| |docker_bioconductor-aspli|

   :versions: 1.8.0, 1.6.0, 1.4.0, 1.2.3

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-aspli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aspli

   and update with::

      conda update bioconductor-aspli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-aspli


.. |required_by_bioconductor-aspli| conda:required_by:: bioconductor-aspli
.. |downloads_bioconductor-aspli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aspli.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-aspli| image:: https://quay.io/repository/biocontainers/bioconductor-aspli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aspli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aspli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aspli/README.html

