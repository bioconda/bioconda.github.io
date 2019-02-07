.. title:: Package Recipe 'bioconductor-panvizgenerator'
.. highlight: bash


bioconductor-panvizgenerator
============================

.. conda:recipe:: bioconductor-panvizgenerator
   :replaces_section_title:

   PanViz is a JavaScript based visualisation tool for functionaly annotated pangenomes. PanVizGenerator is a companion for PanViz that facilitates the necessary data preprocessing step necessary to create a working PanViz visualization. The output is fully self\-contained so the recipient of the visualization does not need R or PanVizGenerator installed.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PanVizGenerator.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-panvizgenerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panvizgenerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panvizgenerator/meta.yaml>`_

   


.. conda:package:: bioconductor-panvizgenerator

   |downloads_bioconductor-panvizgenerator| |docker_bioconductor-panvizgenerator|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-findmyfriends` >=1.12.0,<1.13.0 :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  :conda:package:`r-jsonlite`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-panvizgenerator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panvizgenerator

   and update with::

      conda update bioconductor-panvizgenerator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-panvizgenerator


.. |required_by_bioconductor-panvizgenerator| conda:required_by:: bioconductor-panvizgenerator
.. |downloads_bioconductor-panvizgenerator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panvizgenerator.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-panvizgenerator| image:: https://quay.io/repository/biocontainers/bioconductor-panvizgenerator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panvizgenerator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panvizgenerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panvizgenerator/README.html

