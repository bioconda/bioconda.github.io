:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafh5.gnomad.r3.0.grch38'
.. highlight: bash

bioconductor-mafh5.gnomad.r3.0.grch38
=====================================

.. conda:recipe:: bioconductor-mafh5.gnomad.r3.0.grch38
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from gnomAD release 3.0 for GRCh38 stored using a HDF5 backend

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/MafH5.gnomAD.r3.0.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafh5.gnomad.r3.0.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafh5.gnomad.r3.0.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafh5.gnomad.r3.0.grch38/meta.yaml>`_

   Store minor allele frequency data from the Genome Aggregation Database \(gnomAD release 3.0\) for the human genome version GRCh38 using a HDF5 backend.


.. conda:package:: bioconductor-mafh5.gnomad.r3.0.grch38

   |downloads_bioconductor-mafh5.gnomad.r3.0.grch38| |docker_bioconductor-mafh5.gnomad.r3.0.grch38|

   :versions:
      
      

      ``3.13.0-0``,  ``3.11.0-2``,  ``3.11.0-1``,  ``3.11.0-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicscores: ``>=2.4.0,<2.5.0``
   :depends bioconductor-hdf5array: ``>=1.20.0,<1.21.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mafh5.gnomad.r3.0.grch38

   and update with::

      conda update bioconductor-mafh5.gnomad.r3.0.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafh5.gnomad.r3.0.grch38:<tag>

   (see `bioconductor-mafh5.gnomad.r3.0.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafh5.gnomad.r3.0.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafh5.gnomad.r3.0.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafh5.gnomad.r3.0.grch38
   :alt:   (downloads)
.. |docker_bioconductor-mafh5.gnomad.r3.0.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.r3.0.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.r3.0.grch38
.. _`bioconductor-mafh5.gnomad.r3.0.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafh5.gnomad.r3.0.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafh5.gnomad.r3.0.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafh5.gnomad.r3.0.grch38/README.html