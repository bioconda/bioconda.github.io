.. title:: Package Recipe 'bioconductor-metacyto'
.. highlight: bash


bioconductor-metacyto
=====================

.. conda:recipe:: bioconductor-metacyto
   :replaces_section_title:

   This package provides functions for preprocessing\, automated gating and meta\-analysis of cytometry data. It also provides functions that facilitate the collection of cytometry data from the ImmPort database.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MetaCyto.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metacyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto/meta.yaml>`_

   


.. conda:package:: bioconductor-metacyto

   |downloads_bioconductor-metacyto| |docker_bioconductor-metacyto|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowsom` >=1.14.0,<1.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-fastcluster`  :conda:package:`r-ggplot2`  :conda:package:`r-metafor`  :conda:package:`r-tidyr` >=0.7 

   :required~by: |required_by_bioconductor-metacyto|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metacyto

   and update with::

      conda update bioconductor-metacyto

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metacyto


.. |required_by_bioconductor-metacyto| conda:required_by:: bioconductor-metacyto
.. |downloads_bioconductor-metacyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metacyto.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metacyto| image:: https://quay.io/repository/biocontainers/bioconductor-metacyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metacyto







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metacyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metacyto/README.html

