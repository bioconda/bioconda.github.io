.. title:: Package Recipe 'bioconductor-probamr'
.. highlight: bash


bioconductor-probamr
====================

.. conda:recipe:: bioconductor-probamr
   :replaces_section_title:

   Mapping PSMs back to genome. The package builds SAM file from shotgun proteomics data The package also provides function to prepare annotation from GTF file.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/proBAMr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-probamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr/meta.yaml>`_
   :links: biotools: :biotools:`probamr`, doi: :doi:`10.1074/mcp.M115.052860`

   


.. conda:package:: bioconductor-probamr

   |downloads_bioconductor-probamr| |docker_bioconductor-probamr|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-probamr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-probamr

   and update with::

      conda update bioconductor-probamr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-probamr


.. |required_by_bioconductor-probamr| conda:required_by:: bioconductor-probamr
.. |downloads_bioconductor-probamr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-probamr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-probamr| image:: https://quay.io/repository/biocontainers/bioconductor-probamr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-probamr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-probamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-probamr/README.html

