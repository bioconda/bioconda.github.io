:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellnoptr'
.. highlight: bash

bioconductor-cellnoptr
======================

.. conda:recipe:: bioconductor-cellnoptr
   :replaces_section_title:

   This package does optimisation of boolean logic networks of signalling pathways based on a previous knowledge network and a set of data upon perturbation of the nodes in the network.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CellNOptR.html
   :license: GPL-3
   :recipe: /`bioconductor-cellnoptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr/meta.yaml>`_
   :links: biotools: :biotools:`cellnoptr`, doi: :doi:`10.1186/1752-0509-6-133`

   


.. conda:package:: bioconductor-cellnoptr

   |downloads_bioconductor-cellnoptr| |docker_bioconductor-cellnoptr|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.1-0, 1.23.0-0, 1.22.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-hash: 
   
   :depends r-rcurl: 
   
   :depends r-xml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellnoptr

   and update with::

      conda update bioconductor-cellnoptr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellnoptr:<tag>

   (see `bioconductor-cellnoptr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellnoptr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellnoptr.svg?style=flat
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