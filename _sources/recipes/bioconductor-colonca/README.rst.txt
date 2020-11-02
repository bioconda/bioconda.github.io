:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-colonca'
.. highlight: bash

bioconductor-colonca
====================

.. conda:recipe:: bioconductor-colonca
   :replaces_section_title:
   :noindex:

   exprSet for Alon et al. \(1999\) colon cancer data

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/colonCA.html
   :license: LGPL
   :recipe: /`bioconductor-colonca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-colonca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-colonca/meta.yaml>`_

   exprSet for Alon et al. \(1999\) colon cancer data


.. conda:package:: bioconductor-colonca

   |downloads_bioconductor-colonca| |docker_bioconductor-colonca|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-colonca

   and update with::

      conda update bioconductor-colonca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-colonca:<tag>

   (see `bioconductor-colonca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-colonca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-colonca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-colonca
   :alt:   (downloads)
.. |docker_bioconductor-colonca| image:: https://quay.io/repository/biocontainers/bioconductor-colonca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-colonca
.. _`bioconductor-colonca/tags`: https://quay.io/repository/biocontainers/bioconductor-colonca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-colonca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-colonca/README.html