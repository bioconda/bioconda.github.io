:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-explorase'
.. highlight: bash

bioconductor-explorase
======================

.. conda:recipe:: bioconductor-explorase
   :replaces_section_title:

   GUI for exploratory data analysis of systems biology data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/explorase.html
   :license: GPL-2
   :recipe: /`bioconductor-explorase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-explorase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-explorase/meta.yaml>`_

   explore and analyze \*omics data with R and GGobi


.. conda:package:: bioconductor-explorase

   |downloads_bioconductor-explorase| |docker_bioconductor-explorase|

   :versions: 1.52.0-0, 1.50.0-0, 1.48.0-1, 1.48.0-0
   
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rggobi: 
   :depends r-rgtk2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-explorase

   and update with::

      conda update bioconductor-explorase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-explorase:<tag>

   (see `bioconductor-explorase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-explorase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-explorase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-explorase
   :alt:   (downloads)
.. |docker_bioconductor-explorase| image:: https://quay.io/repository/biocontainers/bioconductor-explorase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-explorase
.. _`bioconductor-explorase/tags`: https://quay.io/repository/biocontainers/bioconductor-explorase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-explorase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-explorase/README.html