.. title:: Package Recipe 'bioconductor-mirsynergy'
.. highlight: bash


bioconductor-mirsynergy
=======================

.. conda:recipe:: bioconductor-mirsynergy
   :replaces_section_title:

   Detect synergistic miRNA regulatory modules by overlapping neighbourhood expansion.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Mirsynergy.html
   :license: GPL-2
   :recipe: /`bioconductor-mirsynergy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsynergy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsynergy/meta.yaml>`_
   :links: biotools: :biotools:`mirsynergy`

   


.. conda:package:: bioconductor-mirsynergy

   |downloads_bioconductor-mirsynergy| |docker_bioconductor-mirsynergy|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-mirsynergy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsynergy

   and update with::

      conda update bioconductor-mirsynergy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirsynergy


.. |required_by_bioconductor-mirsynergy| conda:required_by:: bioconductor-mirsynergy
.. |downloads_bioconductor-mirsynergy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsynergy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirsynergy| image:: https://quay.io/repository/biocontainers/bioconductor-mirsynergy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsynergy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsynergy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsynergy/README.html

