:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsponge'
.. highlight: bash

bioconductor-mirsponge
======================

.. conda:recipe:: bioconductor-mirsponge
   :replaces_section_title:

   The name of the miRsponge package has been changed into \"miRspongeR\". Future updates will be seen in the miRspongeR package \(http\:\/\/bioconductor.org\/packages\/miRspongeR\/\). This package provides several functions to study miRNA sponge \(also called ceRNA or miRNA decoy\)\, including popular methods for identifying miRNA sponge interactions\, and the integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of modules\, and conduct survival analysis of modules.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/miRsponge.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponge/meta.yaml>`_

   


.. conda:package:: bioconductor-mirsponge

   |downloads_bioconductor-mirsponge| |docker_bioconductor-mirsponge|

   :versions: 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-clusterprofiler: >=3.12.0,<3.13.0
   :depends bioconductor-dose: >=3.10.0,<3.11.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-reactomepa: >=1.28.0,<1.29.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-corpcor: 
   :depends r-igraph: 
   :depends r-linkcomm: 
   :depends r-mcl: 
   :depends r-rcpp: 
   :depends r-survival: 
   :depends r-varhandle: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsponge

   and update with::

      conda update bioconductor-mirsponge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsponge:<tag>

   (see `bioconductor-mirsponge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsponge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsponge
   :alt:   (downloads)
.. |docker_bioconductor-mirsponge| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponge
.. _`bioconductor-mirsponge/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsponge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponge/README.html