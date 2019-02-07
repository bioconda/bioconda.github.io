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

   :versions: 1.10.6

   :depends: :conda:package:`bioconductor-phyloseq`  :conda:package:`r-ape`  :conda:package:`r-base` 3.4.1* :conda:package:`r-mass`  :conda:package:`r-phyext2`  :conda:package:`r-phylobase`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-sigtree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sigtree

   and update with::

      conda update r-sigtree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sigtree


.. |required_by_r-sigtree| conda:required_by:: r-sigtree
.. |downloads_r-sigtree| image:: https://img.shields.io/conda/dn/bioconda/r-sigtree.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sigtree| image:: https://quay.io/repository/biocontainers/r-sigtree/status
   :target: https://quay.io/repository/biocontainers/r-sigtree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigtree/README.html

