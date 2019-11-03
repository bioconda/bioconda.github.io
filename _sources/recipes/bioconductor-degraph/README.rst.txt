:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degraph'
.. highlight: bash

bioconductor-degraph
====================

.. conda:recipe:: bioconductor-degraph
   :replaces_section_title:

   DEGraph implements recent hypothesis testing methods which directly assess whether a particular gene network is differentially expressed between two conditions. This is to be contrasted with the more classical two\-step approaches which first test individual genes\, then test gene sets for enrichment in differentially expressed genes. These recent methods take into account the topology of the network to yield more powerful detection procedures. DEGraph provides methods to easily test all KEGG pathways for differential expression on any gene expression data set and tools to visualize the results.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DEGraph.html
   :license: GPL-3
   :recipe: /`bioconductor-degraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph/meta.yaml>`_
   :links: biotools: :biotools:`degraph`, doi: :doi:`10.1214/11-AOAS528`

   


.. conda:package:: bioconductor-degraph

   |downloads_bioconductor-degraph| |docker_bioconductor-degraph|

   :versions: 1.38.0-0, 1.36.0-1, 1.34.0-0, 1.32.0-0, 1.30.0-0
   
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-kegggraph: >=1.46.0,<1.47.0
   :depends bioconductor-ncigraph: >=1.34.0,<1.35.0
   :depends bioconductor-rbgl: >=1.62.0,<1.63.0
   :depends bioconductor-rgraphviz: >=2.30.0,<2.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :depends r-mvtnorm: 
   :depends r-r.methodss3: 
   :depends r-r.utils: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-degraph

   and update with::

      conda update bioconductor-degraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degraph:<tag>

   (see `bioconductor-degraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degraph
   :alt:   (downloads)
.. |docker_bioconductor-degraph| image:: https://quay.io/repository/biocontainers/bioconductor-degraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degraph
.. _`bioconductor-degraph/tags`: https://quay.io/repository/biocontainers/bioconductor-degraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degraph/README.html