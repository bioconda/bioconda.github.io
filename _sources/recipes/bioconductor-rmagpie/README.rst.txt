:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmagpie'
.. highlight: bash

bioconductor-rmagpie
====================

.. conda:recipe:: bioconductor-rmagpie
   :replaces_section_title:

   Microarray Classification is designed for both biologists and statisticians. It offers the ability to train a classifier on a labelled microarray dataset and to then use that classifier to predict the class of new observations. A range of modern classifiers are available\, including support vector machines \(SVMs\)\, nearest shrunken centroids \(NSCs\)... Advanced methods are provided to estimate the predictive error rate and to report the subset of genes which appear essential in discriminating between classes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rmagpie.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rmagpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmagpie/meta.yaml>`_

   


.. conda:package:: bioconductor-rmagpie

   |downloads_bioconductor-rmagpie| |docker_bioconductor-rmagpie|

   :versions: 1.38.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :depends r-kernlab: 
   :depends r-pamr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmagpie

   and update with::

      conda update bioconductor-rmagpie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmagpie:<tag>

   (see `bioconductor-rmagpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmagpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmagpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmagpie
   :alt:   (downloads)
.. |docker_bioconductor-rmagpie| image:: https://quay.io/repository/biocontainers/bioconductor-rmagpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmagpie
.. _`bioconductor-rmagpie/tags`: https://quay.io/repository/biocontainers/bioconductor-rmagpie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmagpie/README.html