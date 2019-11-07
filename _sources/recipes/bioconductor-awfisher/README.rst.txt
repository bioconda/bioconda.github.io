:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-awfisher'
.. highlight: bash

bioconductor-awfisher
=====================

.. conda:recipe:: bioconductor-awfisher
   :replaces_section_title:

   An R package for fast computing for adaptively weighted fisher\'s method

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/AWFisher.html
   :license: GPL-3
   :recipe: /`bioconductor-awfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awfisher/meta.yaml>`_

   Implementation of the adaptively weighted fisher\'s method\, including fast p\-value computing\, variability index\, and meta\-pattern.


.. conda:package:: bioconductor-awfisher

   |downloads_bioconductor-awfisher| |docker_bioconductor-awfisher|

   :versions: 1.0.0-0
   
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-awfisher

   and update with::

      conda update bioconductor-awfisher

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-awfisher:<tag>

   (see `bioconductor-awfisher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-awfisher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-awfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-awfisher
   :alt:   (downloads)
.. |docker_bioconductor-awfisher| image:: https://quay.io/repository/biocontainers/bioconductor-awfisher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-awfisher
.. _`bioconductor-awfisher/tags`: https://quay.io/repository/biocontainers/bioconductor-awfisher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-awfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-awfisher/README.html