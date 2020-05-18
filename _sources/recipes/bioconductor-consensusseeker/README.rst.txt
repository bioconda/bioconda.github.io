:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusseeker'
.. highlight: bash

bioconductor-consensusseeker
============================

.. conda:recipe:: bioconductor-consensusseeker
   :replaces_section_title:

   Detection of consensus regions inside a group of experiences using genomic positions and genomic ranges

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/consensusSeekeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-consensusseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker/meta.yaml>`_
   :links: biotools: :biotools:`consensusseeker`, doi: :doi:`10.1515/sagmb-2014-0098`

   This package compares genomic positions and genomic ranges from multiple experiments to extract common regions. The size of the analyzed region is adjustable as well as the number of experiences in which a feature must be present in a potential region to tag this region as a consensus region.


.. conda:package:: bioconductor-consensusseeker

   |downloads_bioconductor-consensusseeker| |docker_bioconductor-consensusseeker|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-consensusseeker

   and update with::

      conda update bioconductor-consensusseeker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusseeker:<tag>

   (see `bioconductor-consensusseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusseeker
   :alt:   (downloads)
.. |docker_bioconductor-consensusseeker| image:: https://quay.io/repository/biocontainers/bioconductor-consensusseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusseeker
.. _`bioconductor-consensusseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusseeker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html