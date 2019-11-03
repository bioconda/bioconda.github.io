:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panvizgenerator'
.. highlight: bash

bioconductor-panvizgenerator
============================

.. conda:recipe:: bioconductor-panvizgenerator
   :replaces_section_title:

   PanViz is a JavaScript based visualisation tool for functionaly annotated pangenomes. PanVizGenerator is a companion for PanViz that facilitates the necessary data preprocessing step necessary to create a working PanViz visualization. The output is fully self\-contained so the recipient of the visualization does not need R or PanVizGenerator installed.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PanVizGenerator.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-panvizgenerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panvizgenerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panvizgenerator/meta.yaml>`_

   


.. conda:package:: bioconductor-panvizgenerator

   |downloads_bioconductor-panvizgenerator| |docker_bioconductor-panvizgenerator|

   :versions: 1.14.0-0, 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-findmyfriends: >=1.16.0,<1.17.0
   :depends bioconductor-pcamethods: >=1.78.0,<1.79.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panvizgenerator

   and update with::

      conda update bioconductor-panvizgenerator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panvizgenerator:<tag>

   (see `bioconductor-panvizgenerator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panvizgenerator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panvizgenerator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panvizgenerator
   :alt:   (downloads)
.. |docker_bioconductor-panvizgenerator| image:: https://quay.io/repository/biocontainers/bioconductor-panvizgenerator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panvizgenerator
.. _`bioconductor-panvizgenerator/tags`: https://quay.io/repository/biocontainers/bioconductor-panvizgenerator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panvizgenerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panvizgenerator/README.html