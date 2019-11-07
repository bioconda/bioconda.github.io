:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytolib'
.. highlight: bash

bioconductor-cytolib
====================

.. conda:recipe:: bioconductor-cytolib
   :replaces_section_title:

   C\+\+ infrastructure for representing and interacting with the gated cytometry

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/cytolib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib/meta.yaml>`_

   This package provides the core data structure and API to represent and interact with the gated cytometry data.


.. conda:package:: bioconductor-cytolib

   |downloads_bioconductor-cytolib| |docker_bioconductor-cytolib|

   :versions: 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.1-0, 1.4.0-0, 1.2.0-0, 1.0.1-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytolib

   and update with::

      conda update bioconductor-cytolib

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytolib:<tag>

   (see `bioconductor-cytolib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytolib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytolib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytolib
   :alt:   (downloads)
.. |docker_bioconductor-cytolib| image:: https://quay.io/repository/biocontainers/bioconductor-cytolib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytolib
.. _`bioconductor-cytolib/tags`: https://quay.io/repository/biocontainers/bioconductor-cytolib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytolib/README.html