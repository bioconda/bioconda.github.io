:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matchbox'
.. highlight: bash

bioconductor-matchbox
=====================

.. conda:recipe:: bioconductor-matchbox
   :replaces_section_title:
   :noindex:

   Utilities to compute\, compare\, and plot the agreement between ordered vectors of features \(ie. distinct genomic experiments\). The package includes Correspondence\-At\-the\-TOP \(CAT\) analysis.

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/matchBox.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matchbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox/meta.yaml>`_

   The matchBox package enables comparing ranked vectors of features\, merging multiple datasets\, removing redundant features\, using CAT\-plots and Venn diagrams\, and computing statistical significance.


.. conda:package:: bioconductor-matchbox

   |downloads_bioconductor-matchbox| |docker_bioconductor-matchbox|

   :versions:
      
      

      ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-matchbox

   and update with::

      conda update bioconductor-matchbox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matchbox:<tag>

   (see `bioconductor-matchbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matchbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matchbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matchbox
   :alt:   (downloads)
.. |docker_bioconductor-matchbox| image:: https://quay.io/repository/biocontainers/bioconductor-matchbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matchbox
.. _`bioconductor-matchbox/tags`: https://quay.io/repository/biocontainers/bioconductor-matchbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matchbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matchbox/README.html