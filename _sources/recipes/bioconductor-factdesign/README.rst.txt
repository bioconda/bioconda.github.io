:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-factdesign'
.. highlight: bash

bioconductor-factdesign
=======================

.. conda:recipe:: bioconductor-factdesign
   :replaces_section_title:

   This package provides a set of tools for analyzing data from a factorial designed microarray experiment\, or any microarray experiment for which a linear model is appropriate. The functions can be used to evaluate tests of contrast of biological interest and perform single outlier detection.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/factDesign.html
   :license: LGPL
   :recipe: /`bioconductor-factdesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factdesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factdesign/meta.yaml>`_

   


.. conda:package:: bioconductor-factdesign

   |downloads_bioconductor-factdesign| |docker_bioconductor-factdesign|

   :versions: 1.62.0-0, 1.60.0-1, 1.58.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-factdesign

   and update with::

      conda update bioconductor-factdesign

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-factdesign:<tag>

   (see `bioconductor-factdesign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-factdesign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-factdesign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-factdesign
   :alt:   (downloads)
.. |docker_bioconductor-factdesign| image:: https://quay.io/repository/biocontainers/bioconductor-factdesign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-factdesign
.. _`bioconductor-factdesign/tags`: https://quay.io/repository/biocontainers/bioconductor-factdesign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-factdesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-factdesign/README.html