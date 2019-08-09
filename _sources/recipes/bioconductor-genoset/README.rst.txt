:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genoset'
.. highlight: bash

bioconductor-genoset
====================

.. conda:recipe:: bioconductor-genoset
   :replaces_section_title:

   GenoSet provides an extension of the RangedSummarizedExperiment class with additional API features. This class provides convenient and fast methods for working with segmented genomic data. Additionally\, GenoSet provides the class RleDataFrame which stores runs of data along the genome for multiple samples and provides very fast summaries of arbitrary row sets \(regions of the genome\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/genoset.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genoset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genoset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genoset/meta.yaml>`_
   :links: biotools: :biotools:`genoset`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genoset

   |downloads_bioconductor-genoset| |docker_bioconductor-genoset|

   :versions: 1.40.0-1, 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genoset

   and update with::

      conda update bioconductor-genoset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genoset:<tag>

   (see `bioconductor-genoset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genoset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genoset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genoset
   :alt:   (downloads)
.. |docker_bioconductor-genoset| image:: https://quay.io/repository/biocontainers/bioconductor-genoset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genoset
.. _`bioconductor-genoset/tags`: https://quay.io/repository/biocontainers/bioconductor-genoset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genoset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genoset/README.html