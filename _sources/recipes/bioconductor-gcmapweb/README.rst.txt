:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcmapweb'
.. highlight: bash

bioconductor-gcmapweb
=====================

.. conda:recipe:: bioconductor-gcmapweb
   :replaces_section_title:

   The gCMAPWeb R package provides a graphical user interface for the gCMAP package. gCMAPWeb uses the Rook package and can be used either on a local machine\, leveraging R\'s internal web server\, or run on a dedicated rApache web server installation. gCMAPWeb allows users to search their own data sources and instructions to generate reference datasets from public repositories are included with the package. The package supports three common types of analyses\, specifically queries with 1. one or two sets of query gene identifiers\, whose members are expected to show changes in gene expression in a consistent direction. For example\, an up\-regulated gene set might contain genes activated by a transcription factor\, a down\-regulated geneset targets repressed by the same factor. 2. a single set of query gene identifiers\, whose members are expected to show divergent differential expression \(non\-directional query\). For example\, members of a particular signaling pathway\, some of which may be up\- some down\-regulated in response to a stimulus. 3. a query with the complete results of a differential expression profiling experiment. For example\, gene identifiers and z\-scores from a previous perturbation experiment. gCMAPWeb accepts three types of identifiers\: EntreIds\, gene Symbols and microarray probe ids and can be configured to work with any species supported by Bioconductor. For each query submission\, significantly similar reference datasets will be identified and reported in graphical and tabular form.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gCMAPWeb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gcmapweb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcmapweb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcmapweb/meta.yaml>`_

   


.. conda:package:: bioconductor-gcmapweb

   |downloads_bioconductor-gcmapweb| |docker_bioconductor-gcmapweb|

   :versions: 1.24.0-1, 1.22.0-0
   
   :depends bioconductor-annotate: >=1.62.0,<1.63.0
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-gcmap: >=1.28.0,<1.29.0
   :depends bioconductor-gseabase: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-brew: 
   :depends r-hwriter: 
   :depends r-rook: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcmapweb

   and update with::

      conda update bioconductor-gcmapweb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcmapweb:<tag>

   (see `bioconductor-gcmapweb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcmapweb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcmapweb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcmapweb
   :alt:   (downloads)
.. |docker_bioconductor-gcmapweb| image:: https://quay.io/repository/biocontainers/bioconductor-gcmapweb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcmapweb
.. _`bioconductor-gcmapweb/tags`: https://quay.io/repository/biocontainers/bioconductor-gcmapweb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcmapweb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcmapweb/README.html