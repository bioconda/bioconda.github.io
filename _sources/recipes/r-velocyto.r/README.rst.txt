:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-velocyto.r'
.. highlight: bash

r-velocyto.r
============

.. conda:recipe:: r-velocyto.r
   :replaces_section_title:

   RNA velocity estimation in R

   :homepage: https://github.com/velocyto-team/velocyto.R
   :license: GPL3 / GPL-3
   :recipe: /`r-velocyto.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r/meta.yaml>`_

   


.. conda:package:: r-velocyto.r

   |downloads_r-velocyto.r| |docker_r-velocyto.r|

   :versions: 0.6-0
   
   :depends bioconductor-pcamethods: 
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-abind: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-hdf5r: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-rcpp: >=0.12.13
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-velocyto.r

   and update with::

      conda update r-velocyto.r

   or use the docker container::

      docker pull quay.io/biocontainers/r-velocyto.r:<tag>

   (see `r-velocyto.r/tags`_ for valid values for ``<tag>``)


.. |downloads_r-velocyto.r| image:: https://img.shields.io/conda/dn/bioconda/r-velocyto.r.svg?style=flat
   :target: https://anaconda.org/bioconda/r-velocyto.r
   :alt:   (downloads)
.. |docker_r-velocyto.r| image:: https://quay.io/repository/biocontainers/r-velocyto.r/status
   :target: https://quay.io/repository/biocontainers/r-velocyto.r
.. _`r-velocyto.r/tags`: https://quay.io/repository/biocontainers/r-velocyto.r?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-velocyto.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-velocyto.r/README.html