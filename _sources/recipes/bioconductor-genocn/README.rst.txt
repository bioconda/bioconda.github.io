:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genocn'
.. highlight: bash

bioconductor-genocn
===================

.. conda:recipe:: bioconductor-genocn
   :replaces_section_title:

   Simultaneous identification of copy number states and genotype calls for regions of either copy number variations or copy number aberrations

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/genoCN.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-genocn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn/meta.yaml>`_

   


.. conda:package:: bioconductor-genocn

   |downloads_bioconductor-genocn| |docker_bioconductor-genocn|

   :versions: 1.38.0-0, 1.36.0-1, 1.36.0-0, 1.34.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genocn

   and update with::

      conda update bioconductor-genocn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genocn:<tag>

   (see `bioconductor-genocn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genocn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genocn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genocn
   :alt:   (downloads)
.. |docker_bioconductor-genocn| image:: https://quay.io/repository/biocontainers/bioconductor-genocn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genocn
.. _`bioconductor-genocn/tags`: https://quay.io/repository/biocontainers/bioconductor-genocn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genocn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genocn/README.html