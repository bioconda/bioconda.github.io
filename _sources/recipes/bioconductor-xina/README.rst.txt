.. title:: Package Recipe 'bioconductor-xina'
.. highlight: bash


bioconductor-xina
=================

.. conda:recipe:: bioconductor-xina
   :replaces_section_title:

   An intuitive R package simplifies network analyses output from multiplexed high\-dimensional proteomics\/trascriptomics kinetics data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/XINA.html
   :license: GPL-3
   :recipe: /`bioconductor-xina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina/meta.yaml>`_

   


.. conda:package:: bioconductor-xina

   |downloads_bioconductor-xina| |docker_bioconductor-xina|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-stringdb` >=1.22.0,<1.23.0 :conda:package:`r-alluvial`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-mclust`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-xina|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xina

   and update with::

      conda update bioconductor-xina

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-xina


.. |required_by_bioconductor-xina| conda:required_by:: bioconductor-xina
.. |downloads_bioconductor-xina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xina.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-xina| image:: https://quay.io/repository/biocontainers/bioconductor-xina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xina







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xina/README.html

