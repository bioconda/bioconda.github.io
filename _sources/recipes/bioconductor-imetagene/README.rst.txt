.. title:: Package Recipe 'bioconductor-imetagene'
.. highlight: bash


bioconductor-imetagene
======================

.. conda:recipe:: bioconductor-imetagene
   :replaces_section_title:

   This package provide a graphical user interface to the metagene package. This will allow people with minimal R experience to easily complete metagene analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Imetagene.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-imetagene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imetagene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imetagene/meta.yaml>`_

   


.. conda:package:: bioconductor-imetagene

   |downloads_bioconductor-imetagene| |docker_bioconductor-imetagene|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-metagene` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-d3heatmap`  :conda:package:`r-ggplot2`  :conda:package:`r-shiny`  :conda:package:`r-shinybs`  :conda:package:`r-shinyfiles`  :conda:package:`r-shinythemes`  

   :required~by: |required_by_bioconductor-imetagene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imetagene

   and update with::

      conda update bioconductor-imetagene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-imetagene


.. |required_by_bioconductor-imetagene| conda:required_by:: bioconductor-imetagene
.. |downloads_bioconductor-imetagene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imetagene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-imetagene| image:: https://quay.io/repository/biocontainers/bioconductor-imetagene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imetagene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imetagene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imetagene/README.html

