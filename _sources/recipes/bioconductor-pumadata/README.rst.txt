:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pumadata'
.. highlight: bash

bioconductor-pumadata
=====================

.. conda:recipe:: bioconductor-pumadata
   :replaces_section_title:
   :noindex:

   Various data sets for use with the puma package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/pumadata.html
   :license: LGPL
   :recipe: /`bioconductor-pumadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata/meta.yaml>`_

   This is a simple data package including various data sets derived from the estrogen data for use with the puma \(Propagating Uncertainty in Microarray Analysis\) package.


.. conda:package:: bioconductor-pumadata

   |downloads_bioconductor-pumadata| |docker_bioconductor-pumadata|

   :versions:
      
      

      ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-oligo: ``>=1.56.0,<1.57.0``
   :depends bioconductor-puma: ``>=3.34.0,<3.35.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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