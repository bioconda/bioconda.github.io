:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctggem'
.. highlight: bash

bioconductor-ctggem
===================

.. conda:recipe:: bioconductor-ctggem
   :replaces_section_title:
   :noindex:

   Generating Tree Hierarchy Visualizations from Gene Expression Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ctgGEM.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-ctggem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctggem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctggem/meta.yaml>`_

   Cell Tree Generator for Gene Expression Matrices \(ctgGEM\) streamlines the building of cell\-state hierarchies from single\-cell gene expression data across multiple existing tools for improved comparability and reproducibility. It supports pseudotemporal ordering algorithms and visualization tools from monocle\, cellTree\, TSCAN\, sincell\, and destiny\, and provides a unified output format for integration with downstream data analysis workflows and Cytoscape.


.. conda:package:: bioconductor-ctggem

   |downloads_bioconductor-ctggem| |docker_bioconductor-ctggem|

   :versions:
      
      

      ``0.99.3-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-monocle: ``>=2.16.0,<2.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctggem

   and update with::

      conda update bioconductor-ctggem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctggem:<tag>

   (see `bioconductor-ctggem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctggem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctggem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctggem
   :alt:   (downloads)
.. |docker_bioconductor-ctggem| image:: https://quay.io/repository/biocontainers/bioconductor-ctggem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctggem
.. _`bioconductor-ctggem/tags`: https://quay.io/repository/biocontainers/bioconductor-ctggem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctggem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctggem/README.html