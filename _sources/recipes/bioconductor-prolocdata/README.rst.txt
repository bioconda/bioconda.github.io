:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prolocdata'
.. highlight: bash

bioconductor-prolocdata
=======================

.. conda:recipe:: bioconductor-prolocdata
   :replaces_section_title:
   :noindex:

   Data accompanying the pRoloc package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/pRolocdata.html
   :license: GPL-2
   :recipe: /`bioconductor-prolocdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata/meta.yaml>`_

   Mass\-spectrometry based spatial proteomics data sets and protein complex separation data. Also contains the time course expression experiment from Mulvey et al. 2015.


.. conda:package:: bioconductor-prolocdata

   |downloads_bioconductor-prolocdata| |docker_bioconductor-prolocdata|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-msnbase: ``>=2.16.0,<2.17.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prolocdata

   and update with::

      conda update bioconductor-prolocdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prolocdata:<tag>

   (see `bioconductor-prolocdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prolocdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prolocdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prolocdata
   :alt:   (downloads)
.. |docker_bioconductor-prolocdata| image:: https://quay.io/repository/biocontainers/bioconductor-prolocdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prolocdata
.. _`bioconductor-prolocdata/tags`: https://quay.io/repository/biocontainers/bioconductor-prolocdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html