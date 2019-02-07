.. title:: Package Recipe 'bioconductor-dmelsgi'
.. highlight: bash


bioconductor-dmelsgi
====================

.. conda:recipe:: bioconductor-dmelsgi
   :replaces_section_title:

   The package contains the experimental data and documented source code of the manuscript \"Fischer et al.\, A Map of Directional Genetic Interactions in a Metazoan Cell\, eLife\, 2015\, in Press.\". The vignette code generates all figures in the paper.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/DmelSGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dmelsgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmelsgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmelsgi/meta.yaml>`_

   


.. conda:package:: bioconductor-dmelsgi

   |downloads_bioconductor-dmelsgi| |docker_bioconductor-dmelsgi|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-tsp`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-dmelsgi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmelsgi

   and update with::

      conda update bioconductor-dmelsgi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dmelsgi


.. |required_by_bioconductor-dmelsgi| conda:required_by:: bioconductor-dmelsgi
.. |downloads_bioconductor-dmelsgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmelsgi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmelsgi| image:: https://quay.io/repository/biocontainers/bioconductor-dmelsgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmelsgi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmelsgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmelsgi/README.html

