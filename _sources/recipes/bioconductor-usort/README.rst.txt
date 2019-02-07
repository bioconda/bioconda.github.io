.. title:: Package Recipe 'bioconductor-usort'
.. highlight: bash


bioconductor-usort
==================

.. conda:recipe:: bioconductor-usort
   :replaces_section_title:

   This package is designed to uncover the intrinsic cell progression path from single\-cell RNA\-seq data. It incorporates data pre\-processing\, preliminary PCA gene selection\, preliminary cell ordering\, feature selection\, refined cell ordering\, and post\-analysis interpretation and visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/uSORT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-usort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-usort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-usort/meta.yaml>`_

   


.. conda:package:: bioconductor-usort

   |downloads_bioconductor-usort| |docker_bioconductor-usort|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-monocle` >=2.10.0,<2.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-fpc`  :conda:package:`r-gplots`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-plyr`  :conda:package:`r-rann`  :conda:package:`r-rspectra`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-usort|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-usort

   and update with::

      conda update bioconductor-usort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-usort


.. |required_by_bioconductor-usort| conda:required_by:: bioconductor-usort
.. |downloads_bioconductor-usort| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-usort.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-usort| image:: https://quay.io/repository/biocontainers/bioconductor-usort/status
   :target: https://quay.io/repository/biocontainers/bioconductor-usort







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-usort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-usort/README.html

