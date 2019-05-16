:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-depecher'
.. highlight: bash

bioconductor-depecher
=====================

.. conda:recipe:: bioconductor-depecher
   :replaces_section_title:

   The purpose of this package is to identify traits in a dataset that can separate groups. This is done on two levels. First\, clustering is performed\, using an implementation of sparse K\-means. Secondly\, the generated clusters are used to predict outcomes of groups of individuals based on their distribution of observations in the different clusters. As certain clusters with separating information will be identified\, and these clusters are defined by a sparse number of variables\, this method can reduce the complexity of data\, to only emphasize the data that actually matters.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DepecheR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-depecher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-depecher/meta.yaml>`_

   


.. conda:package:: bioconductor-depecher

   |downloads_bioconductor-depecher| |docker_bioconductor-depecher|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-depecher

   and update with::

      conda update bioconductor-depecher

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-depecher:<tag>

   (see `bioconductor-depecher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-depecher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-depecher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-depecher
   :alt:   (downloads)
.. |docker_bioconductor-depecher| image:: https://quay.io/repository/biocontainers/bioconductor-depecher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-depecher
.. _`bioconductor-depecher/tags`: https://quay.io/repository/biocontainers/bioconductor-depecher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-depecher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-depecher/README.html