:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-projectr'
.. highlight: bash

bioconductor-projectr
=====================

.. conda:recipe:: bioconductor-projectr
   :replaces_section_title:

   Functions for the projection of data into the spaces defined by PCA\, CoGAPS\, NMF\, correlation\, and clustering.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/projectR.html
   :license: GPL (==2)
   :recipe: /`bioconductor-projectr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-projectr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-projectr/meta.yaml>`_

   


.. conda:package:: bioconductor-projectr

   |downloads_bioconductor-projectr| |docker_bioconductor-projectr|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-cogaps: >=3.6.0,<3.7.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-nmf: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-projectr

   and update with::

      conda update bioconductor-projectr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-projectr:<tag>

   (see `bioconductor-projectr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-projectr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-projectr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-projectr
   :alt:   (downloads)
.. |docker_bioconductor-projectr| image:: https://quay.io/repository/biocontainers/bioconductor-projectr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-projectr
.. _`bioconductor-projectr/tags`: https://quay.io/repository/biocontainers/bioconductor-projectr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-projectr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-projectr/README.html