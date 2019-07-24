:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellnoptr'
.. highlight: bash

bioconductor-cellnoptr
======================

.. conda:recipe:: bioconductor-cellnoptr
   :replaces_section_title:

   This package does optimisation of boolean logic networks of signalling pathways based on a previous knowledge network and a set of data upon perturbation of the nodes in the network.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CellNOptR.html
   :license: GPL-3
   :recipe: /`bioconductor-cellnoptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr/meta.yaml>`_
   :links: biotools: :biotools:`cellnoptr`, doi: :doi:`10.1186/1752-0509-6-133`

   


.. conda:package:: bioconductor-cellnoptr

   |downloads_bioconductor-cellnoptr| |docker_bioconductor-cellnoptr|

   :versions: 1.30.0-1, 1.28.0-0, 1.26.0-0, 1.24.1-0, 1.23.0-0, 1.22.0-0
   
   :depends bioconductor-graph: >=1.62.0,<1.63.0
   :depends bioconductor-rbgl: >=1.60.0,<1.61.0
   :depends bioconductor-rgraphviz: >=2.28.0,<2.29.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-igraph: 
   :depends r-rcurl: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellnoptr

   and update with::

      conda update bioconductor-cellnoptr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellnoptr:<tag>

   (see `bioconductor-cellnoptr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellnoptr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellnoptr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellnoptr
   :alt:   (downloads)
.. |docker_bioconductor-cellnoptr| image:: https://quay.io/repository/biocontainers/bioconductor-cellnoptr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellnoptr
.. _`bioconductor-cellnoptr/tags`: https://quay.io/repository/biocontainers/bioconductor-cellnoptr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html