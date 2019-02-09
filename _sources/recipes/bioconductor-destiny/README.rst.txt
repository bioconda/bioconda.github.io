.. title:: Package Recipe 'bioconductor-destiny'
.. highlight: bash


bioconductor-destiny
====================

.. conda:recipe:: bioconductor-destiny
   :replaces_section_title:

   Create and plot diffusion maps.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/destiny.html
   :license: GPL
   :recipe: /`bioconductor-destiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny/meta.yaml>`_

   


.. conda:package:: bioconductor-destiny

   |downloads_bioconductor-destiny| |docker_bioconductor-destiny|

   :versions: 2.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggthemes`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-proxy`  :conda:package:`r-rcpp` >=0.10.3 :conda:package:`r-rcppeigen`  :conda:package:`r-scales`  :conda:package:`r-scatterplot3d`  :conda:package:`r-smoother`  :conda:package:`r-vim`  

   :required~by: |required_by_bioconductor-destiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-destiny

   and update with::

      conda update bioconductor-destiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-destiny


.. |required_by_bioconductor-destiny| conda:required_by:: bioconductor-destiny
.. |downloads_bioconductor-destiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-destiny.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-destiny| image:: https://quay.io/repository/biocontainers/bioconductor-destiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-destiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-destiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-destiny/README.html

