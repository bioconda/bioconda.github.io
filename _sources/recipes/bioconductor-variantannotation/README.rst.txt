:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantannotation'
.. highlight: bash

bioconductor-variantannotation
==============================

.. conda:recipe:: bioconductor-variantannotation
   :replaces_section_title:

   Annotate variants\, compute amino acid coding changes\, predict coding outcomes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/VariantAnnotation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-variantannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantannotation/meta.yaml>`_
   :links: biotools: :biotools:`variantannotation`

   


.. conda:package:: bioconductor-variantannotation

   |downloads_bioconductor-variantannotation| |docker_bioconductor-variantannotation|

   :versions: 1.30.1-0, 1.28.3-0, 1.26.1-0, 1.24.1-0, 1.22.3-0, 1.20.3-0, 1.18.7-0, 1.16.4-0, 1.16.3-0, 1.16.1-0, 1.16.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rhtslib: >=1.16.0,<1.17.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-xvector: >=0.24.0,<0.25.0
   :depends bioconductor-zlibbioc: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variantannotation

   and update with::

      conda update bioconductor-variantannotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variantannotation:<tag>

   (see `bioconductor-variantannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variantannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantannotation
   :alt:   (downloads)
.. |docker_bioconductor-variantannotation| image:: https://quay.io/repository/biocontainers/bioconductor-variantannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantannotation
.. _`bioconductor-variantannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-variantannotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantannotation/README.html