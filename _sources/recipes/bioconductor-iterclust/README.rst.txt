:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterclust'
.. highlight: bash

bioconductor-iterclust
======================

.. conda:recipe:: bioconductor-iterclust
   :replaces_section_title:

   Iterative Clustering

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/iterClust.html
   :license: file LICENSE
   :recipe: /`bioconductor-iterclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust/meta.yaml>`_

   A framework for performing clustering analysis iteratively.


.. conda:package:: bioconductor-iterclust

   |downloads_bioconductor-iterclust| |docker_bioconductor-iterclust|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterclust

   and update with::

      conda update bioconductor-iterclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterclust:<tag>

   (see `bioconductor-iterclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterclust
   :alt:   (downloads)
.. |docker_bioconductor-iterclust| image:: https://quay.io/repository/biocontainers/bioconductor-iterclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterclust
.. _`bioconductor-iterclust/tags`: https://quay.io/repository/biocontainers/bioconductor-iterclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterclust/README.html