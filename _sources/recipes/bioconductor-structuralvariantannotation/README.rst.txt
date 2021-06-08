:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structuralvariantannotation'
.. highlight: bash

bioconductor-structuralvariantannotation
========================================

.. conda:recipe:: bioconductor-structuralvariantannotation
   :replaces_section_title:
   :noindex:

   Variant annotations for structural variants

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/StructuralVariantAnnotation.html
   :license: GPL-3
   :recipe: /`bioconductor-structuralvariantannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structuralvariantannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structuralvariantannotation/meta.yaml>`_

   StructuralVariantAnnotation contains useful helper functions for dealing with structural variants in VCF format. The packages contains functions for parsing VCFs from a number of popular callers as well as functions for dealing with breakpoints involving two separate genomic loci encoded as GRanges objects.


.. conda:package:: bioconductor-structuralvariantannotation

   |downloads_bioconductor-structuralvariantannotation| |docker_bioconductor-structuralvariantannotation|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-structuralvariantannotation

   and update with::

      conda update bioconductor-structuralvariantannotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-structuralvariantannotation:<tag>

   (see `bioconductor-structuralvariantannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-structuralvariantannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structuralvariantannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structuralvariantannotation
   :alt:   (downloads)
.. |docker_bioconductor-structuralvariantannotation| image:: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation
.. _`bioconductor-structuralvariantannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-structuralvariantannotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structuralvariantannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structuralvariantannotation/README.html