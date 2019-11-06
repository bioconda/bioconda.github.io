:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-daglogo'
.. highlight: bash

bioconductor-daglogo
====================

.. conda:recipe:: bioconductor-daglogo
   :replaces_section_title:

   Visualize significant conserved amino acid sequence pattern in groups based on probability theory.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/dagLogo.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-daglogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo/meta.yaml>`_

   


.. conda:package:: bioconductor-daglogo

   |downloads_bioconductor-daglogo| |docker_bioconductor-daglogo|

   :versions: 1.24.0-0, 1.22.2-0, 1.20.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-motifstack: >=1.30.0,<1.31.0
   :depends bioconductor-uniprot.ws: >=2.26.0,<2.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-grimport2: 
   :depends r-pheatmap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-daglogo

   and update with::

      conda update bioconductor-daglogo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-daglogo:<tag>

   (see `bioconductor-daglogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-daglogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-daglogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-daglogo
   :alt:   (downloads)
.. |docker_bioconductor-daglogo| image:: https://quay.io/repository/biocontainers/bioconductor-daglogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-daglogo
.. _`bioconductor-daglogo/tags`: https://quay.io/repository/biocontainers/bioconductor-daglogo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-daglogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-daglogo/README.html