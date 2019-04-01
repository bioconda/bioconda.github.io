:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapfabia'
.. highlight: bash

bioconductor-hapfabia
=====================

.. conda:recipe:: bioconductor-hapfabia
   :replaces_section_title:

   A package to identify very short IBD segments in large sequencing data by FABIA biclustering. Two haplotypes are identical by descent \(IBD\) if they share a segment that both inherited from a common ancestor. Current IBD methods reliably detect long IBD segments because many minor alleles in the segment are concordant between the two haplotypes. However\, many cohort studies contain unrelated individuals which share only short IBD segments. This package provides software to identify short IBD segments in sequencing data. Knowledge of short IBD segments are relevant for phasing of genotyping data\, association studies\, and for population genetics\, where they shed light on the evolutionary history of humans. The package supports VCF formats\, is based on sparse matrix operations\, and provides visualization of haplotype clusters in different formats.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hapFabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-hapfabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia/meta.yaml>`_
   :links: biotools: :biotools:`hapfabia`

   


.. conda:package:: bioconductor-hapfabia

   |downloads_bioconductor-hapfabia| |docker_bioconductor-hapfabia|

   :versions: 1.24.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-fabia: >=2.28.0,<2.29.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hapfabia

   and update with::

      conda update bioconductor-hapfabia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapfabia:<tag>

   (see `bioconductor-hapfabia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapfabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapfabia.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hapfabia| image:: https://quay.io/repository/biocontainers/bioconductor-hapfabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapfabia
.. _`bioconductor-hapfabia/tags`: https://quay.io/repository/biocontainers/bioconductor-hapfabia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html