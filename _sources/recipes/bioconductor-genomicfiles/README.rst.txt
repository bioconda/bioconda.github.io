.. title:: Package Recipe 'bioconductor-genomicfiles'
.. highlight: bash


bioconductor-genomicfiles
=========================

.. conda:recipe:: bioconductor-genomicfiles
   :replaces_section_title:

   This package provides infrastructure for parallel computations distributed \'by file\' or \'by range\'. User defined MAPPER and REDUCER functions provide added flexibility for data combination and manipulation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomicFiles.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicfiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfiles/meta.yaml>`_
   :links: biotools: :biotools:`genomicfiles`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genomicfiles

   |downloads_bioconductor-genomicfiles| |docker_bioconductor-genomicfiles|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-genomicfiles|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicfiles

   and update with::

      conda update bioconductor-genomicfiles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomicfiles


.. |required_by_bioconductor-genomicfiles| conda:required_by:: bioconductor-genomicfiles
.. |downloads_bioconductor-genomicfiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicfiles.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomicfiles| image:: https://quay.io/repository/biocontainers/bioconductor-genomicfiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicfiles







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicfiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicfiles/README.html

