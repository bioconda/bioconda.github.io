:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harbchip'
.. highlight: bash

bioconductor-harbchip
=====================

.. conda:recipe:: bioconductor-harbchip
   :replaces_section_title:
   :noindex:

   Experimental Data Package\: harbChIP

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/harbChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-harbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip/meta.yaml>`_

   data from a yeast ChIP\-chip experiment


.. conda:package:: bioconductor-harbchip

   |downloads_bioconductor-harbchip| |docker_bioconductor-harbchip|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harbchip

   and update with::

      conda update bioconductor-harbchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harbchip:<tag>

   (see `bioconductor-harbchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harbchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harbchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harbchip
   :alt:   (downloads)
.. |docker_bioconductor-harbchip| image:: https://quay.io/repository/biocontainers/bioconductor-harbchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harbchip
.. _`bioconductor-harbchip/tags`: https://quay.io/repository/biocontainers/bioconductor-harbchip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harbchip/README.html