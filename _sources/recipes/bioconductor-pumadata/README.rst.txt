:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pumadata'
.. highlight: bash

bioconductor-pumadata
=====================

.. conda:recipe:: bioconductor-pumadata
   :replaces_section_title:

   This is a simple data package including various data sets derived from the estrogen data for use with the puma \(Propagating Uncertainty in Microarray Analysis\) package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/pumadata.html
   :license: LGPL
   :recipe: /`bioconductor-pumadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata/meta.yaml>`_

   


.. conda:package:: bioconductor-pumadata

   |downloads_bioconductor-pumadata| |docker_bioconductor-pumadata|

   :versions: 2.18.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   :depends bioconductor-puma: >=3.24.0,<3.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pumadata

   and update with::

      conda update bioconductor-pumadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pumadata:<tag>

   (see `bioconductor-pumadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pumadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pumadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pumadata
   :alt:   (downloads)
.. |docker_bioconductor-pumadata| image:: https://quay.io/repository/biocontainers/bioconductor-pumadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pumadata
.. _`bioconductor-pumadata/tags`: https://quay.io/repository/biocontainers/bioconductor-pumadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pumadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pumadata/README.html