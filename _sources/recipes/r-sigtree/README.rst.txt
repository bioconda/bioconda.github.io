:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigtree'
.. highlight: bash

r-sigtree
=========

.. conda:recipe:: r-sigtree
   :replaces_section_title:

   Provides tools to identify and visualize branches in a phylogenetic tree that are significantly responsive to some intervention\, taking as primary inputs a phylogenetic tree \(of class phylo\) and a data frame \(or matrix\) of corresponding tip \(OTU\) labels and p\-values.

   :homepage: https://CRAN.R-project.org/package=SigTree
   :license: GPL3 / GPL-3
   :recipe: /`r-sigtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree/meta.yaml>`_

   


.. conda:package:: r-sigtree

   |downloads_r-sigtree| |docker_r-sigtree|

   :versions: 1.10.6-4, 1.10.6-3, 1.10.6-2, 1.10.6-1, 1.10.6-0
   
   :depends bioconductor-phyloseq: 
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mass: 
   
   :depends r-phyext2: 
   
   :depends r-phylobase: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-vegan: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sigtree

   and update with::

      conda update r-sigtree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sigtree:<tag>

   (see `r-sigtree/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sigtree| image:: https://img.shields.io/conda/dn/bioconda/r-sigtree.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sigtree| image:: https://quay.io/repository/biocontainers/r-sigtree/status
   :target: https://quay.io/repository/biocontainers/r-sigtree
.. _`r-sigtree/tags`: https://quay.io/repository/biocontainers/r-sigtree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigtree/README.html