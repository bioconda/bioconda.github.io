:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnorfeeder'
.. highlight: bash

bioconductor-cnorfeeder
=======================

.. conda:recipe:: bioconductor-cnorfeeder
   :replaces_section_title:
   :noindex:

   Integration of CellNOptR to add missing links

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CNORfeeder.html
   :license: GPL-3
   :recipe: /`bioconductor-cnorfeeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder/meta.yaml>`_

   This package integrates literature\-constrained and data\-driven methods to infer signalling networks from perturbation experiments. It permits to extends a given network with links derived from the data via various inference methods and uses information on physical interactions of proteins to guide and validate the integration of links.


.. conda:package:: bioconductor-cnorfeeder

   |downloads_bioconductor-cnorfeeder| |docker_bioconductor-cnorfeeder|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-cellnoptr: ``>=1.36.0,<1.37.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnorfeeder

   and update with::

      conda update bioconductor-cnorfeeder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnorfeeder:<tag>

   (see `bioconductor-cnorfeeder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnorfeeder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorfeeder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnorfeeder
   :alt:   (downloads)
.. |docker_bioconductor-cnorfeeder| image:: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder
.. _`bioconductor-cnorfeeder/tags`: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html