:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcseadata'
.. highlight: bash

bioconductor-mcseadata
======================

.. conda:recipe:: bioconductor-mcseadata
   :replaces_section_title:

   Data package for mCSEA package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/mCSEAdata.html
   :license: GPL-2
   :recipe: /`bioconductor-mcseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcseadata/meta.yaml>`_

   Data objects necessary to some mCSEA package functions. There are also example data objects to illustrate mCSEA package functionality.


.. conda:package:: bioconductor-mcseadata

   |downloads_bioconductor-mcseadata| |docker_bioconductor-mcseadata|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcseadata

   and update with::

      conda update bioconductor-mcseadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcseadata:<tag>

   (see `bioconductor-mcseadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcseadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcseadata
   :alt:   (downloads)
.. |docker_bioconductor-mcseadata| image:: https://quay.io/repository/biocontainers/bioconductor-mcseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcseadata
.. _`bioconductor-mcseadata/tags`: https://quay.io/repository/biocontainers/bioconductor-mcseadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcseadata/README.html