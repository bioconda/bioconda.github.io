:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beta7'
.. highlight: bash

bioconductor-beta7
==================

.. conda:recipe:: bioconductor-beta7
   :replaces_section_title:

   Data from 6 gpr files aims to identify differential expressed genes between the beta 7\+ and beta 7\- memory T helper cells.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/beta7.html
   :license: LGPL
   :recipe: /`bioconductor-beta7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beta7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beta7/meta.yaml>`_

   


.. conda:package:: bioconductor-beta7

   |downloads_bioconductor-beta7| |docker_bioconductor-beta7|

   :versions: 1.22.0-0, 1.20.0-1, 1.20.0-0
   
   :depends bioconductor-marray: >=1.62.0,<1.63.0
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beta7

   and update with::

      conda update bioconductor-beta7

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beta7:<tag>

   (see `bioconductor-beta7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beta7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beta7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beta7
   :alt:   (downloads)
.. |docker_bioconductor-beta7| image:: https://quay.io/repository/biocontainers/bioconductor-beta7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beta7
.. _`bioconductor-beta7/tags`: https://quay.io/repository/biocontainers/bioconductor-beta7?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beta7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beta7/README.html