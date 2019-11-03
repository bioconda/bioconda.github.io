:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imman'
.. highlight: bash

bioconductor-imman
==================

.. conda:recipe:: bioconductor-imman
   :replaces_section_title:

   Reconstructing Interlog Protein Network \(IPN\) integrated from several Protein protein Interaction Networks \(PPINs\). Using this package\, overlaying different PPINs to mine conserved common networks between diverse species will be applicable.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/IMMAN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-imman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman/meta.yaml>`_

   


.. conda:package:: bioconductor-imman

   |downloads_bioconductor-imman| |docker_bioconductor-imman|

   :versions: 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-stringdb: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imman

   and update with::

      conda update bioconductor-imman

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imman:<tag>

   (see `bioconductor-imman/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imman| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imman.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imman
   :alt:   (downloads)
.. |docker_bioconductor-imman| image:: https://quay.io/repository/biocontainers/bioconductor-imman/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imman
.. _`bioconductor-imman/tags`: https://quay.io/repository/biocontainers/bioconductor-imman?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imman/README.html