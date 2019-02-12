.. title:: Package Recipe 'bioconductor-opossom'
.. highlight: bash


bioconductor-opossom
====================

.. conda:recipe:: bioconductor-opossom
   :replaces_section_title:

   This package translates microarray expression data into metadata of reduced dimension. It provides various sample\-centered and group\-centered visualizations\, sample similarity analyses and functional enrichment analyses. The underlying SOM algorithm combines feature clustering\, multidimensional scaling and dimension reduction\, along with strong visualization capabilities. It enables extraction and description of functional expression modules inherent in the data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/oposSOM.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-opossom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom/meta.yaml>`_

   


.. conda:package:: bioconductor-opossom

   |downloads_bioconductor-opossom| |docker_bioconductor-opossom|

   :versions: 2.0.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fastica`  :conda:package:`r-fdrtool`  :conda:package:`r-igraph` >=1.0.0 :conda:package:`r-pixmap`  :conda:package:`r-rcpp`  :conda:package:`r-rcppparallel`  :conda:package:`r-scatterplot3d`  :conda:package:`r-tsne`  

   :required~by: |required_by_bioconductor-opossom|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-opossom

   and update with::

      conda update bioconductor-opossom

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-opossom


.. |required_by_bioconductor-opossom| conda:required_by:: bioconductor-opossom
.. |downloads_bioconductor-opossom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opossom.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-opossom| image:: https://quay.io/repository/biocontainers/bioconductor-opossom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opossom







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opossom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opossom/README.html

