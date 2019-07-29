:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reb'
.. highlight: bash

bioconductor-reb
================

.. conda:recipe:: bioconductor-reb
   :replaces_section_title:

   A set of functions to dentify regional expression biases

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/reb.html
   :license: GPL-2
   :recipe: /`bioconductor-reb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reb/meta.yaml>`_

   


.. conda:package:: bioconductor-reb

   |downloads_bioconductor-reb| |docker_bioconductor-reb|

   :versions: 1.62.0-1, 1.60.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-idiogram: >=1.60.0,<1.61.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reb

   and update with::

      conda update bioconductor-reb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reb:<tag>

   (see `bioconductor-reb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reb
   :alt:   (downloads)
.. |docker_bioconductor-reb| image:: https://quay.io/repository/biocontainers/bioconductor-reb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reb
.. _`bioconductor-reb/tags`: https://quay.io/repository/biocontainers/bioconductor-reb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reb/README.html